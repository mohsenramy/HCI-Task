import { useEffect, useState } from 'react'
import PageContainer from '../components/PageContainer'
import VisitDetails from '../components/VisitDetails'
import { visitAPI } from '../api/visitAPI'
import { Link, useParams } from 'react-router-dom'
import { Visit } from '../@types/visitTypes'

const VisitDetailsPage = () => {
  const { visitId } = useParams();

  const [visitDetails, setVisitDetails] = useState<Visit | null>(null)
  const [loading, setLoading] = useState(false)

  const retrieveVisitDetails = async () => {
    try {
      setLoading(true)
      const visitData = await visitAPI.getVisitDetails(visitId!)
      setVisitDetails(visitData)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (visitId) {
      retrieveVisitDetails();
    }
  }, [visitId])

  return (
    <PageContainer>
      <div className="flex flex-col m-4 h-[100%] bg-white border-gray-500 border-2 rounded-md p-4 font-semibold">
        <div className="flex justify-between border-b-2 px-1">
          <h2 className="font-bold text-lg">Visit Details</h2>
          <Link to="/">Home</Link>
        </div>
        {loading && <div className='flex justify-center items-center text-gray-500 h-16'>
          Retrieving Visit Data ...
        </div>}
        {visitDetails ? <VisitDetails visit={visitDetails!} /> :
          <div className='flex justify-center items-center text-red-400 h-16'>
            No Data Available!
          </div>}
      </div>
    </PageContainer>
  )
}

export default VisitDetailsPage
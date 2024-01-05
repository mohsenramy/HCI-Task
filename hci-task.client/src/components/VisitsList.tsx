import React from 'react'
import { VisitSearchResult } from '../@types/visitTypes'
import moment from 'moment'
import { useNavigate } from 'react-router-dom';

interface VisitsListProps {
  data: VisitSearchResult[],
  loading: boolean,
}
const VisitsList: React.FC<VisitsListProps> = ({ data, loading }) => {

  const navigate = useNavigate();

  const renderDataRow = (dataRow: VisitSearchResult) => {
    return (
      <div key={dataRow.id} className='flex items-center text-left p-1 m-1 border-b-2'>
        <div className='basis-2/5'>{moment(dataRow.createdAt).format('DD/MM/YYYY HH:mm A')}</div>
        <div className='basis-2/5'>{dataRow.description}</div>
        <div className='basis-1/5 flex justify-center'>
          <button
            className='bg-transparent hover:bg-blue-500 text-blue-700 text-xs font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded'
            onClick={() => {
              navigate(`/visits/${dataRow.id}`)
            }}
          >
            Details
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-col m-4 height-[100%] bg-white border-gray-500 rounded-md shadow-md text-sm font-semibold">
      <div className='flex bg-slate-500 text-white items-center text-left rounded-t-md p-2'>
        <div className='basis-2/5'>Date</div>
        <div className='basis-2/5'>Description</div>
        <div className='basis-1/5'></div>
      </div>
      {
        data.length === 0 ? (
          <div className='flex justify-center items-center text-gray-500 h-16'>
            {loading ? 'Retrieving Visits Data ...' : ' No Visits Found'}
          </div>

        ) : data.map((row) => renderDataRow(row))
      }
    </div>
  )
}

export default VisitsList
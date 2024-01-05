import React from 'react'
import { Visit } from '../@types/visitTypes'
import { formatDateOnly, formatTimeOnly } from '../utils/formatters'

const VisitDetails: React.FC<{ visit: Visit }> = ({ visit }) => {
  return (
    <>
      <div className="flex p-2 m-2 gap-2 font-semibold text-sm">
        <div className="flex flex-col w-[50%] bg-gray-50 rounded-md border p-2">
          <ul>
            <li className="p-1">Patient Name:<span className="ml-1 text-gray-600">{visit?.patient.name}</span> </li>
            <li className="p-1">Date Of Birth: <span className="ml-1 text-gray-600">{formatDateOnly(visit?.patient.dateOfBirth)}</span> </li>
            <li className="p-1">Gender: <span className="ml-1 text-gray-600">NOT IMPLEMENTED</span> </li>
            <li className="p-1">Address: <span className="ml-1 text-gray-600">NOT IMPLEMENTED</span> </li>
            <li className="p-1">Phone: <span className="ml-1 text-gray-600">NOT IMPLEMENTED</span> </li>
            <li className="p-1">Email: <span className="ml-1 text-gray-600">NOT IMPLEMENTED</span> </li>
          </ul>
        </div>
        <div className="flex flex-col w-[50%] bg-gray-50 rounded-md border p-2">
          <ul>
            <li className="p-1">Hospital Name:<span className="ml-1 text-gray-600">{visit?.hospital.name}</span> </li>
            <li className="p-1">City: <span className="ml-1 text-gray-600">{visit?.hospital.city}</span> </li>
            <li className="p-1">Department: <span className="ml-1 text-gray-600">NOT IMPLEMENTED</span> </li>
            <li className="p-1"> <span className="ml-1 text-gray-600"></span> </li>
            <li className="p-1">Visit Date: <span className="ml-1 text-gray-600">{formatDateOnly(visit.createdAt)}</span> </li>
            <li className="p-1">Visit Time: <span className="ml-1 text-gray-600">{formatTimeOnly(visit.createdAt)}</span> </li>
          </ul>

        </div>

      </div>
      <div className="flex flex-col p-2 m-2 gap-2 font-semibold text-sm">
        <h3 className="font-bold border-b-2 ">Description</h3>
        <p>{visit?.description}</p>
      </div>
      <div className="flex flex-col p-2 m-2 gap-2 font-semibold text-sm">
        <h3 className="font-bold border-b-2 ">Reports</h3>
        <div className="flex flex-col m-4 height-[100%] bg-white border-gray-500 rounded-md shadow-md">
          <div className='flex bg-slate-500 text-white items-center text-left rounded-t-md p-2'>
            <div className='basis-1/5'>Date</div>
            <div className='basis-1/5'>Department</div>
            <div className='basis-2/5'>Physician</div>
            <div className='basis-1/5'></div>
          </div>

          <div className=' flex items-center text-left p-1 m-1 border-b-2'>
            <div className='basis-1/5'>NOT-IMPLEMENTED</div>
            <div className='basis-1/5'>NOT-IMPLEMENTED</div>
            <div className='basis-2/5'>NOT-IMPLEMENTED</div>
            <div className='basis-1/5 flex justify-center'><button >View Report</button></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-2 m-2 gap-2 font-semibold text-sm">
        <h3 className="font-bold border-b-2 ">Medication</h3>
        <div className="flex flex-col m-4 height-[100%] bg-white border-gray-500 rounded-md shadow-md">
          <div className='flex bg-slate-500 text-white items-center text-left rounded-t-md p-2'>
            <div className='basis-1/5'>Date</div>
            <div className='basis-1/5'>Medicine</div>
            <div className='basis-2/5'>Dose</div>
            <div className='basis-1/5'>Notes</div>
          </div>

          <div className=' flex items-center text-left p-1 m-1 border-b-2'>
            <div className='basis-1/5'>NOT-IMPLEMENTED</div>
            <div className='basis-1/5'>NOT-IMPLEMENTED</div>
            <div className='basis-2/5'>NOT-IMPLEMENTED</div>
            <div className='basis-1/5 flex justify-center'>NOT-IMPLEMENTED</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VisitDetails
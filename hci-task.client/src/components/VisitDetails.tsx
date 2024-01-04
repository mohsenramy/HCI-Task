import React from 'react'

const VisitDetails = () => {
  return (
    <div className="flex flex-col m-4 height-[100%] bg-white border-gray-500 rounded-md shadow-md p-4">
      <h2 className="font-bold border-b-2 text-lg">Visit Details</h2>
      <div className="flex p-2 m-2 gap-2 font-semibold text-sm">
        <div className="flex flex-col w-[50%] bg-gray-50 rounded-md border p-2">
          <label>Patient Name: </label>
          <label>Date Of Birth: </label>
          <label>Gender: </label>
          <label>Address: </label>
          <label>Phone: </label>
          <label>Email: </label>
        </div>
        <div className="flex flex-col w-[50%] bg-gray-50 rounded-md border p-2">
          <label>Hospital: </label>
          <label>City: </label>
          <label>Gender: </label>
          <label>Address: </label>
          <label>Phone: </label>
          <label>Email: </label>
        </div>

      </div>
      <div className="flex flex-col p-2 m-2 gap-2 font-semibold text-sm">
        <h3 className="font-bold border-b-2 ">Description</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto architecto quis corporis dignissimos voluptates, sit commodi optio iure nam. Illum vel perspiciatis eaque molestiae? Voluptatem assumenda vero incidunt consectetur eligendi.
        </p>
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
            <div className='basis-1/5'>Date</div>
            <div className='basis-1/5'>Emergency!</div>
            <div className='basis-2/5'>Dr. John Smith</div>
            <div className='basis-1/5 flex justify-center'><button>View Report</button></div>
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
            <div className='basis-1/5'>2022-09-09</div>
            <div className='basis-1/5'>Some Medicine!</div>
            <div className='basis-2/5'>300mg</div>
            <div className='basis-1/5 flex justify-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisitDetails
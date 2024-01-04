import React from 'react'

const VisitsList = () => {
  return (
    <div className="flex flex-col m-4 height-[100%] bg-white border-gray-500 rounded-md shadow-md text-sm font-semibold">
      <div className='flex bg-slate-500 text-white items-center text-left rounded-t-md p-2'>
        <div className='basis-1/5'>Date</div>
        <div className='basis-2/5'>Description</div>
        <div className='basis-1/5'></div>
      </div>

      <div className=' flex items-center text-left p-1 m-1 border-b-2'>
        <div className='basis-1/5'>Date</div>
        <div className='basis-3/5'>Description</div>
        <div className='basis-1/5 flex justify-center'><button>Details</button></div>
      </div>
    </div>
  )
}

export default VisitsList
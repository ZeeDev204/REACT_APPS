import React from 'react'

const CompleteTask = ({datas}) => {
  // console.log(datas)
  return (
    <div className='h-full flex-shrink-0 w-[300px] p-5 bg-blue-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4 className='text-sm'>{datas.date}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{datas.title}</h2>
      <p className='text-sm mt-2'>
        {datas.description}
      </p>
      <div className='mt-6'>
        <button className='bg-blue-500 rounded font-medium py-2 px-2 text-xs w-full'>Accept Task</button>
      </div>
    </div>
  );
}

export default CompleteTask
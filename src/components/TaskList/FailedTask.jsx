import React from 'react'

const FailedTask = ({datas}) => {
    return (
        <div className='relative h-full flex-shrink-0 w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>{datas.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{datas.title}</h2>
            <p className='text-sm mt-2'>
                {datas.description}
            </p>
            <p className='text-sm mt-2'>
                {datas.failed}
            </p>
            <div className='flex justify-between mt-4 '>
            <button className='bg-green-500 rounded font-medium ml-28 py-2 absolute bottom-4 px-1 text-sm'>Mark as Component</button>
            <button className='bg-red-500 rounded font-medium py-2 absolute bottom-4 px-1 text-sm'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default FailedTask
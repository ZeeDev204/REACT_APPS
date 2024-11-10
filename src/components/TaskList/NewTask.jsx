import React from 'react'

const NewTask = ({datas}) => {
    return (
        <div className='h-full flex-shrink-0 w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>{datas.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{datas.title}</h2>
            <p className='text-sm mt-2'>
               {datas.description}
            </p>
        </div>
    )
}

export default NewTask
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = ({EmployeeData}) => {
    // console.log(EmployeeData)
    const [userData,setUserData] = useContext(AuthContext);
    // console.log(userData)
    return (
        <div className='bg-[#1C1C1C] p-5 mt-3 rounded h-40'>
            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='w-1/5 text-lg font-medium'>Employee</h2>
                <h3 className='w-1/5 text-lg font-medium'>Active Task</h3>
                <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
                <h5 className='w-1/5 text-lg font-medium'>Completed Task</h5>
                <h5 className='w-1/5 text-lg font-medium'>Failed Task</h5>
            </div>
            <div className='h-[80%]'>

                {userData.map((elem,idx) => {
                    return <div key={idx} className='border-emerald-400 border-2 mb-2 py-2 px-4 flex justify-between rounded'>
                        <h2 key='1' className='w-1/5 text-lg font-medium text-white-400'>{elem.name}</h2>
                        <h3 key='2' className='w-1/5 text-lg font-medium text-blue-600'>{elem.taskCount.active}</h3>
                        <h5 key='3' className='w-1/5 text-lg font-medium text-yellow-500'>{elem.taskCount.newTask}</h5>
                        <h5 key='4' className='w-1/5 text-lg font-medium text-green-600'>{elem.taskCount.completed}</h5>
                        <h5 key='5' className='w-1/5 text-lg font-medium text-red-600'>{elem.taskCount.failed}</h5>
                    </div>
                })}
            </div>

        </div>
    )
}

export default AllTask
import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = (props) => {
    // console.log(props)
    return (
        <div className='h-screen w-full p-7'>
            <Header changeUser={props.changeUser} data={props.data.admin}/>
            <CreateTask LocalStorageUpdate={props.settingLocalData}/>
            <AllTask />
        </div>
    )
}

export default AdminDashboard
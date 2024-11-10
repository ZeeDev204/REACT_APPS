import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  // console.log(props)
  // console.log(dataEmployee)
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header changeUser={props.changeUser} data={props.dataEmployee} />
        <TaskListNumber data={props.dataEmployee} />
        <TaskList data={props.dataEmployee} />
    </div>
  )
}

export default EmployeeDashboard
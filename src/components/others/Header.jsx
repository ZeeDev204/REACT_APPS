import React, { useEffect, useState } from 'react'

const Header = (props) => {
  // console.log(props)
  const [AdminName, setAdminName] = useState('')
  // useEffect(() => {
  //   setAdminName(props.data[0].name)
   
  // }, [AdminName])


  const handleLogOut =()=>{
    localStorage.setItem('loggedInUser','');
    props.changeUser('');
  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>ZEE👋</span></h1>
        <button onClick={handleLogOut} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log out</button>
    </div>
  )
}

export default Header
import { React, useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './Context/AuthProvider'


const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext);
// console.log(authData.admin)
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])
  

  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    } else if (userData) {
      const employee = userData.find((e)=>email == e.email && e.password == password)
      if(employee){
        setLoggedInUserData(employee)
        setUser('employee')
      }
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
    } else {
      alert('invalid credentials')
    }
  }

  // const handleLogin = (email, password) => {
  //   if (email == 'admin@me.com' && password == '123') {
  //     setUser('admin')
  //   } else if (email == 'user@me.com' && password == '123') {
  //     setUser('employee')
  //   } else {
  //     alert('invalid credentials')
  //   }
  // }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard settingLocalData={setUserData} changeUser={setUser} data={userData}/> : user == 'employee' ? <EmployeeDashboard changeUser={setUser} dataEmployee={loggedInUserData} /> : ''}
      
    </>
  )
}

export default App
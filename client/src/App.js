import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Signup from './Components/User/Signup/Signup'
import Login from './Components/User/Login/Login'
import Homepage from './Components/User/Homepage/Homepage'
import UserProfile from './Components/User/User Profile/UserProfile'
import AdminLogin from './Components/Admin/AdminLogin'
import Dashboard from './Components/Admin/Dashboard/Dashboard'
import UserManage from './Components/Admin/Manage-User/UserManage'
import Books from './Components/Admin/Manage-Books/View-Books/Books'
import AddBook from './Components/Admin/Manage-Books/Add-Book/AddBook'
import EditBook from './Components/Admin/Manage-Books/Edit-Book/Edit-Book'

const App = () => {
  const userData = useSelector((state) => state.userLogin.userLoginDetails)
  console.log(userData, 'userDataaaaaaaa');
  const adminData = useSelector((state) => state.adminLogin.adminLoginDetails)
  console.log(adminData, 'admindataaaaaa');
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Homepage />} />
          <Route path='/signup' element={userData ? <Navigate to='/' /> : <Signup />} />
          <Route path='/login' element={userData ? <Navigate to='/' /> : <Login />} />
          <Route path='/profile' exact element={userData ? <UserProfile /> : <Login />} />

          <Route path='/admin' exact element={adminData ? <Dashboard /> : <AdminLogin />} />
          <Route path='/admin/users' exact element={adminData ? <UserManage /> : <AdminLogin />} />
          <Route path='/admin/books' exact element={adminData ? <Books/> : <AdminLogin />} />
          <Route path='/admin/add-book' exact element={adminData ? <AddBook/> : <AdminLogin />} />
          <Route path='/admin/edit-book' exact element={adminData ? <EditBook/> : <AdminLogin />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App


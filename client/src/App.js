import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Signup from './Pages/User/Signup/Signup'
import Login from './Pages/User/Login/Login'
import Homepage from './Pages/User/Homepage/Homepage'
import UserProfile from './Pages/User/UserProfile/UserProfile'
import BooksView from './Pages/User/BooksView/BooksView'

import AdminLogin from './Pages/Admin/AdminLogin'
import Dashboard from './Pages/Admin/Dashboard/Dashboard'
import UserManage from './Pages/Admin/Manage-User/UserManage'
import Books from './Pages/Admin/Manage-Books/View-Books/Books'
import AddBook from './Pages/Admin/Manage-Books/Add-Book/AddBook'
import EditBook from './Pages/Admin/Manage-Books/Edit-Book/Edit-Book'
import SingleBookView from './Pages/User/SingleBookView/SingleBookView'
import Category from './Pages/Admin/Manage-Category/Category'
import { Booking } from './Pages/User/Booking/Booking'
import OrderedBooks from './Pages/User/Booking/OrderedBooks'
import OtpLogin from './Pages/User/OTP-Login/OtpLogin'

const App = () => {
  const userData = useSelector((state) => state.userLogin.userLoginDetails)
  const adminData = useSelector((state) => state.adminLogin.adminLoginDetails)
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Homepage />} />
          <Route path='/signup' element={userData ? <Navigate to='/' /> : <Signup />} />
          <Route path='/login' element={userData ? <Navigate to='/' /> : <Login />} />
          <Route path='/otp-login' element={userData ? <Navigate to='/' /> : <OtpLogin />} />
          <Route path='/profile' exact element={userData ? <UserProfile /> : <Login />} />
          <Route path='/books' exact element={<BooksView />} />
          <Route path='/single-book-view' exact element={<SingleBookView />} />
          <Route path='/booking' exact element={userData ? <Booking /> : <Login />} />
          <Route path='/ordered-book' exact element={userData ? <OrderedBooks /> : <Login />} />


          <Route path='/admin' exact element={adminData ? <Dashboard /> : <AdminLogin />} />
          <Route path='/admin/users' exact element={adminData ? <UserManage /> : <AdminLogin />} />
          <Route path='/admin/books' exact element={adminData ? <Books /> : <AdminLogin />} />
          <Route path='/admin/add-book' exact element={adminData ? <AddBook /> : <AdminLogin />} />
          <Route path='/admin/edit-book' exact element={adminData ? <EditBook /> : <AdminLogin />} />
          <Route path='/admin/genre' exact element={adminData ? <Category /> : <AdminLogin />} />
          <Route path='/admin/genre' exact element={adminData ? <Category /> : <AdminLogin />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App


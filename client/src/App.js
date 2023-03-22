import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './Components/User/Signup/Signup'
import Login from './Components/User/Login/Login'
import Homepage from './Components/User/Homepage/Homepage'
import UserProfile from './Components/User/User Profile/UserProfile'
import AdminLogin from './Components/Admin/AdminLogin'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact Component={Homepage} />
          <Route path='/signup' Component={Signup} />
          <Route path='/login' Component={Login} />
          <Route path='/profile' exact Component={UserProfile} />
          <Route path='/admin' exact Component={AdminLogin} />
        </Routes>
      </Router>
    </div>
  )
}

export default App


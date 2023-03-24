import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Navigate} from 'react-router-dom'
import Signup from './Components/User/Signup/Signup'
import Login from './Components/User/Login/Login'
import Homepage from './Components/User/Homepage/Homepage'
import UserProfile from './Components/User/User Profile/UserProfile'
import AdminLogin from './Components/Admin/AdminLogin'


const App = () => {
const userData = useSelector((state) => state.userLogin.userLoginDetails)
console.log(userData);
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Homepage/>} />
          <Route path='/signup' element={userData ? <Navigate to='/' /> : <Signup />} />
          <Route path='/login' element={userData ? <Navigate to='/' /> : <Login />} />
          <Route path='/profile' exact element={userData ? <UserProfile /> : <Login />} />

          <Route path='/admin' exact element={AdminLogin} />
        </Routes>
      </Router>
    </div>
  )
}

export default App


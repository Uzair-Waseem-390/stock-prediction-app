import React from 'react'
import Botton from './Botton'
import {Link, useNavigate} from 'react-router-dom'
import { useState, useContext } from 'react'
import {AuthContext} from '../AuthProvider'


const Header = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const logouthandler = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    setIsLoggedIn(false)
    console.log("User logged out successfully")
    navigate('/login')
  }
  return (
    <nav className="navbar container pt-3 pb-3 align-items-start">
      <Link className='navbar-brand text-light' to="/">Stock Prediction App</Link>

      <div>
        {isLoggedIn ? (
          <button className='btn btn-danger' onClick={logouthandler}>Logout</button>
        ) : (
          <>
            <Botton text="Login" url="/login" class="btn-outline-light"/>
            &nbsp;
            <Botton text="Register" url="/register" class="btn-info"/>
          </>
        )}
      </div>
    </nav>
  )
}

export default Header
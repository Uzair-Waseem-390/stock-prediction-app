import React, {useState} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import {AuthContext} from '../AuthProvider'
import {useContext} from 'react'

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})
  const {setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()

  const handlelogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    console.log(formData)
    const userData = {
        username: formData.username,
        password: formData.password
    }
    // send userData to backend
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
        console.log("Response data:", response.data)
        localStorage.setItem('access_token', response.data.access)
        localStorage.setItem('refresh_token', response.data.refresh)
        console.log("User logged in successfully")
        setIsLoggedIn(true)
        setSuccess(true)
        setError({})
        navigate('/')
    } catch (error) {
        console.log("error:", error)
        setError(error.response.data)
    } finally {
        setLoading(false)
    }
  }

  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 text-light'>
                <h1 className='text-center'>Login</h1>
                {success && <div className='alert alert-success text-center'>User logged in successfully!</div>}
                <form onSubmit={handlelogin}>
                    <div className='mb-3'>
                        <label htmlFor='username' className='form-label'>Username</label>
                        <input type='text' className='form-control' id='username' placeholder='Enter username' value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})}/>
                        <small className='text-danger'>{error.username}</small>
                    </div>
                    <div className='mb-3'>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label'>Password</label>
                        <input type='password' className='form-control' id='password' placeholder='Enter password' value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                        <small className='text-danger'>{error.password}</small>
                    </div>
                    
                    {loading ? <button className='btn btn-primary w-100' disabled ><FontAwesomeIcon icon={faSpinner} spin /> Logging in...</button> : <button type='submit' className='btn btn-primary w-100'>Login</button>}
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
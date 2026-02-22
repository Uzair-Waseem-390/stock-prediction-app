import React, {useState} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })
    const [error, setError] = useState({})
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleRegistation = async (e) => {
        e.preventDefault()
        setLoading(true)
        console.log(formData)
        const userData = {
            username: formData.username,
            email: formData.email,
            password: formData.password
        }
        // send userData to backend
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
            console.log("Response data:", response.data)
            console.log("User registered successfully")
            setError({})
            setSuccess(true)
            navigate('/login')
        } catch (error) {
            setError(error.response.data)
            console.log("error:", error)
        }finally {
            setLoading(false)
        }
    }

  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 text-light'>
                <h1 className='text-center'>Register</h1>
                {success && <div className='alert alert-success text-center'>User registered successfully!</div>}
                <form onSubmit={handleRegistation}>
                    <div className='mb-3'>
                        <label htmlFor='username' className='form-label'>Username</label>
                        <input type='text' className='form-control' id='username' placeholder='Enter username' value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})}/>
                        <small className='text-danger'>{error.username}</small>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input type='email' className='form-control' id='email' placeholder='Enter email' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                        <small className='text-danger'>{error.email}</small>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label'>Password</label>
                        <input type='password' className='form-control' id='password' placeholder='Enter password' value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                        <small className='text-danger'>{error.password}</small>
                    </div>
                    
                    {loading ? <button className='btn btn-primary w-100' disabled ><FontAwesomeIcon icon={faSpinner} spin /> Registering...</button> : <button type='submit' className='btn btn-primary w-100'>Register</button>}
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register
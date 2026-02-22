import React from 'react'

const Register = () => {
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 text-light'>
                <h1 className='text-center'>Register</h1>
                <form>
                    <div className='mb-3'>
                        <label htmlFor='username' className='form-label'>Username</label>
                        <input type='text' className='form-control' id='username' placeholder='Enter username'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input type='email' className='form-control' id='email' placeholder='Enter email'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label'>Password</label>
                        <input type='password' className='form-control' id='password' placeholder='Enter password'/>
                    </div>
                    <button type='submit' className='btn btn-info w-100'>Register</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register
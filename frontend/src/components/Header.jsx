import React from 'react'
import Botton from './Botton'

const Header = () => {
  return (
    <nav className="navbar container pt-3 pb-3 align-items-start">
      <a className='navbar-brand text-light' href="">Stock Prediction App</a>

      <div>
        <Botton text="Login" href="#"/>
        &nbsp;
        <Botton text="Register" href="#" class="btn-info"/>
      </div>
    </nav>
  )
}

export default Header
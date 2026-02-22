import React from 'react'
import Botton from './Botton'

const Main = () => {
  return (
    <>
    <div className="container">
      <div className="p-5 text-center bg-light-dark rounded-3">
        <h1 className='text-light'>Welcome to Stock Prediction App</h1>
        <p className='text-light lead'>Predict stock prices with our advanced AI models</p>
        <Botton text="Get Started" href="#"/>
      </div>
    </div>
    </>
  )
}

export default Main
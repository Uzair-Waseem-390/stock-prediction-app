import { useState } from 'react'
import './assets/css/style.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Register from './components/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import AuthProvider from './AuthProvider'
import Profile from './Profile'
import PublicRoutes from './PublicRoutes'
import PrivateRoute from './PrivateRoute'

function App() {

  return (
    <>
    <AuthProvider>
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<PublicRoutes><Register /></PublicRoutes>} />
        <Route path='/login' element={<PublicRoutes><Login /></PublicRoutes>} />
        
        {/* <Route path='/profile' element={<Profile />} /> */}
        <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
          <Footer />
    </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App

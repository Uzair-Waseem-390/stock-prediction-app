// import {useContext} from 'react'
// import {AuthContext} from './AuthProvider'
// import {Navigate} from 'react-router-dom'


// const PrivateRoute = ({children}) => {
//     const {isLoggedIn} = useContext(AuthContext)

//     if (!isLoggedIn) {
//         return <Navigate to="/login" />
//     }
//   return children
// }

// export default PrivateRoute


import { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const { isLoggedIn } = useContext(AuthContext)

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />
}

export default PrivateRoute
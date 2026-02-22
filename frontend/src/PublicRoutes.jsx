import {useContext} from 'react'
import {AuthContext} from './AuthProvider'
import {Navigate} from 'react-router-dom'

const PublicRoutes = ({children}) => {
  const {isLoggedIn} = useContext(AuthContext)

  if (isLoggedIn) {
    return <Navigate to="/profile" />
  }
  return children
}

export default PublicRoutes
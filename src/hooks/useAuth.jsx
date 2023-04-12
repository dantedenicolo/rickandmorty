import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { email, password } from '../utils/creds.js'

const useAuth = () => {
  const [access, setAccess] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      setAccess(true)
      navigate('/home')
    } else {
      window.alert('¡Usuario o contraseña incorrectos!')
    }
  }

  const logout = () => {
    setAccess(false)
    navigate('/')
  }

  useEffect(() => {
    if (access === true && location.pathname === '/') {
      navigate('/home')
    } else if (access === false && location.pathname !== '/404') {
      navigate('/')
    }
  }, [access, navigate, location.pathname])

  return { access, login, logout }
}

export default useAuth

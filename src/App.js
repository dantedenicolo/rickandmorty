import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate
} from 'react-router-dom'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Error from './components/Error/Error.jsx'
import Form from './components/Form/Form.jsx'

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = 'b98387170bd7.2745e29cd81cecc025c1'

function App () {
  const [characters, setCharacters] = useState([])

  const [access, setAccess] = useState(false)
  const navigate = useNavigate()
  const email = 'denicolodante@gmail.com'
  const password = 'Dante123'
  const location = useLocation()

  function login (userData) {
    if (userData.email === email && userData.password === password) {
      setAccess(true)
      navigate('/home')
    } else {
      window.alert('¡Usuario o contraseña incorrectos!')
    }
  }

  function logout () {
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

  function onSearch (id) {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(({ data }) => {
        if (data.name) {
          if (characters.find((c) => c.id === data.id)) {
            window.alert('¡El personaje ya está en la lista!')
            return
          }
          setCharacters((oldChars) => [...oldChars, data])
        } else {
          window.alert('¡No hay personajes con este ID!')
        }
      })
      .catch(() => {
        window.alert('¡No hay personajes con este ID!')
      })
  }

  function onClose (id) {
    setCharacters((oldChars) => oldChars.filter((c) => c.id !== id))
  }

  const showNav = location.pathname !== '/' && location.pathname !== '/404'

  return (
    <div className='App'>
      {showNav && (
        <Nav onSearch={onSearch} characters={characters} logout={logout} />
      )}
      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route
          path='/home'
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<Navigate to='/404' replace />} />
        <Route path='/404' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App

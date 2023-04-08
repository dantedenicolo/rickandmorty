import SearchBar from '../SearchBar/SearchBar'
import style from './Nav.module.css'
import { Link, useNavigate } from 'react-router-dom'

const Nav = (props) => {
  const navigate = useNavigate()

  const handleRandom = () => {
    const id = Math.floor(Math.random() * 826) + 1
    if (props.characters.find((character) => character.id === id)) {
      window.alert('Ya existe ese personaje')
    } else {
      props.onSearch(id)
    }
  }

  const handleLogout = () => {
    props.logout()
  }

  const handle404 = () => {
    navigate('/404')
  }

  return (
    <div>
      <ul className={style.nav}>
        <li className={style.slamleft}>
          <Link to='/' className={style.link}>
            Rick and Morty
          </Link>
        </li>
        <li>
          <Link to='/home' className={style.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' className={style.link}>
            About
          </Link>
        </li>
        <li>
          <SearchBar onSearch={props.onSearch} />
        </li>
        <li>
          <button onClick={handleRandom}>Agregar Random</button>
        </li>
        <li>
          <button onClick={handle404}>Test 404</button>
        </li>
        <li>
          <button onClick={handleLogout} className={style.logout}>
            Logouts
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Nav

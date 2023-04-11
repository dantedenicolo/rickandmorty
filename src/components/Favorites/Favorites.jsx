import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import style from './Favorites.module.css'
import { Link } from 'react-router-dom'

const Favorites = () => {
  const myFavs = useSelector(state => state.myFavorites)
  if (myFavs.length === 0) {
    return (
      <div className={style.welcome}>
        <h2>No hay personajes marcados como favoritos</h2>
        <p>Para agregar uno, dirígete a <Link to='/home'><a>Home</a></Link> y presiona 🤍 en el personaje que quieras marcar como favorito. Luego podrás encontrar tus personajes favoritos aquí.</p>
      </div>
    )
  }

  return (
    <div className={style.cards}>
      {
        myFavs.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            img={character.img}
            species={character.species}
            gender={character.gender}
            status={character.status}
          />
        ))
      }
    </div>
  )
}

export default Favorites

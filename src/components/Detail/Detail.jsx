import style from './Detail.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = 'b98387170bd7.2745e29cd81cecc025c1'

const Detail = () => {
  const [character, setCharacter] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data)
        } else {
          window.alert('No hay personajes con ese ID')
        }
      })
      .catch(() => {
        window.alert('No hay personajes con ese ID')
      })
    return setCharacter({})
  }, [id])
  if (!character.name) {
    return (
      <h1>
        Cargando información del personaje
        <div className={style.loader} />
      </h1>
    )
  }
  return (
    <div>
      <h1>{character?.name}</h1>
      <center>
        <img
          className={style.imgdetail}
          src={character?.image}
          alt={character?.name || ''}
        />
      </center>
      <h2>STATUS | {character?.status}</h2>
      <h2>SPECIES | {character?.species}</h2>
      <h2>GENDER | {character?.gender}</h2>
      <h2>ORIGIN | {character?.origin?.name}</h2>
    </div>
  )
}

export default Detail

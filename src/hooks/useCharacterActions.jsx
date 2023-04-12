import { useState } from 'react'
import axios from 'axios'
import { API_KEY, URL_BASE } from '../utils/api.js'

const useCharacterActions = () => {
  const [characters, setCharacters] = useState([])

  const onSearch = (id) => {
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

  const onClose = (id) => {
    setCharacters((oldChars) => oldChars.filter((c) => c.id !== id))
  }

  return { characters, onSearch, onClose }
}

export default useCharacterActions

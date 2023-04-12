import { ADD_FAV, REMOVE_FAV, CHARACTER_DETAIL, FILTER, ORDER, RESET, CLEAN_FILTER } from './action-types'
import axios from 'axios'

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = 'b98387170bd7.2745e29cd81cecc025c1'

export const addFav = (character) => ({
  type: ADD_FAV,
  payload: character
})

export const removeFav = (id) => ({
  type: REMOVE_FAV,
  payload: id
})

export const characterDetail = (id) => {
  return function (dispatch) {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(response => {
        dispatch({
          type: CHARACTER_DETAIL,
          payload: response.data
        })
      }
      )
  }
}

export const cleanDetail = () => ({
  type: 'CLEAN_DETAIL'
})

export const filter = (gender) => ({
  type: FILTER,
  payload: gender
})

export const order = (order) => ({
  type: ORDER,
  payload: order
})

export const reset = () => ({
  type: RESET
})

export const cleanFilter = () => ({
  type: CLEAN_FILTER
})

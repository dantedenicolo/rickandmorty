import { ADD_FAV, REMOVE_FAV, CLOSE_CHARACTER } from './action-types'

export const addFav = (character) => ({
  type: ADD_FAV,
  payload: character
})

export const removeFav = (id) => ({
  type: REMOVE_FAV,
  payload: id
})

export const closeCharacter = (id) => ({
  type: CLOSE_CHARACTER,
  payload: id
})

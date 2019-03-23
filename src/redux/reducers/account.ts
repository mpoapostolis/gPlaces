import { AnyAction, combineReducers } from "redux"
import { SET_ACCOUNT_INFO } from "../names"

export type Coords = {
  longitude: number
  latitude: number
}

export interface IAccount {
  name: string
  surname: string
  age: number
  imgUrl: string
  coords: Coords
  authorities: Array<string>
  access_token?: string
}

const initAccount = {}

const i18n = (state = initAccount, action: AnyAction) => {
  const { type, payload } = action
  switch (type) {
    case SET_ACCOUNT_INFO:
      return { ...state, coords: payload }
    default:
      return state
  }
}

export default i18n

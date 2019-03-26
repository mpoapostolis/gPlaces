import i18n, { II18n } from "./i18n"
import account, { IAccount } from "./account"
import places, { IPlaces } from "./places"
import { combineReducers, AnyAction } from "redux"

export interface ReduxState {
  account: IAccount
  i18n: II18n
  places: IPlaces
}

const appReducer = combineReducers({
  account,
  i18n,
  places
})

const rootReducer = (state: ReduxState, action: AnyAction) => {
  return appReducer(state, action)
}

export default rootReducer

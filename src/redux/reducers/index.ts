import i18n, { II18n } from "./i18n"
import account, { IAccount } from "./account"
import { combineReducers, AnyAction } from "redux"

export interface ReduxState {
  account: IAccount
  i18n: II18n
}

const appReducer = combineReducers({
  account,
  i18n
})

const rootReducer = (state: ReduxState, action: AnyAction) => {
  return appReducer(state, action)
}

export default rootReducer

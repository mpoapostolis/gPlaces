import { createAction } from "redux-actions"
import { SET_ACCOUNT_INFO } from "../names"

const setAccountInfo = createAction(SET_ACCOUNT_INFO)

export default { setAccountInfo }

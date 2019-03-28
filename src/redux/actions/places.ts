import { createAction } from "redux-actions"
import { GET_PLACES } from "../names"

const getPlaces = createAction(GET_PLACES)

export default { getPlaces }

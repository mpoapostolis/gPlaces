import { AnyAction } from "redux"
import { takeLatest } from "redux-saga/effects"
import { GET_PLACES } from "../names"

function* getPlaces(action: AnyAction) {
  yield console.log(action)
}

function* customerWatcher() {
  yield takeLatest(GET_PLACES, getPlaces)
}

export default customerWatcher

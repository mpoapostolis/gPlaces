import { all } from "redux-saga/effects"

const watchers: Array<any> = []

const WATCHERS = watchers.map(watcher => watcher())

export default function* rootSaga() {
  yield all(WATCHERS)
}

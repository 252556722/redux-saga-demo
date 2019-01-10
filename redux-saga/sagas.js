import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects'

export function* helloSaga() {
  console.log("hello saga!");
}

export function* incrementAsync() {
  // yield delay(1000) 
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' })
}


export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}
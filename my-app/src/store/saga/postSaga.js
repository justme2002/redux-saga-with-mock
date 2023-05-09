import { take, put, call, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { deletePostByIdSuccess, getPostByIdSuccess, getPostsSuccess } from '../actions/post';

const getPostAsync = () => {
  return axios.get('http://localhost:8080/Users');
}

const getPostByIdAsync = (id) => {
  return axios.get(`http://localhost:8080/Users/${id}`)
}

const deletePostById = (id) => {
  axios.delete(`http://localhost:8080/Users/${id}`)
}

export function* getListPostSaga(action) {
  try {
    const data = yield call(getPostAsync)
    yield put(getPostsSuccess(data))
  } catch (error) {
    console.log(error)
  }
  finally {
   
  }
}

export function* getPostByIdSaga(action) {
  const data = yield call(getPostByIdAsync, action.payload.id)
  yield put(getPostByIdSuccess(data))
}

export function* deletePostByIdSaga(action) {
  yield call(deletePostById, action.payload.id)
  yield put(deletePostByIdSuccess())
}

const sagas = [
  takeLatest("GET_POSTS", getListPostSaga),
  takeLatest("GET_POST_BY_ID", getPostByIdSaga),
  takeLatest("DELETE_POST_BY_ID", deletePostByIdSaga)
]

export default sagas

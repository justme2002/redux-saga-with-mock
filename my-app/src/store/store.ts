import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { postReducer } from './reducers/postReducer'
import { rootSagas } from './rootSaga'

const rootReducer = combineReducers({
  posts: postReducer
})

const sagaMiddleware = createSagaMiddleware()
export const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSagas)

export type rootState = ReturnType<typeof store.getState>
export const postSelector = (state: rootState) => state.posts
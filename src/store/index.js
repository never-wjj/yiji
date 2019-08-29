import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import goin from './reducers/goin'
const rootState = combineReducers({ goin })
const store = createStore(rootState, applyMiddleware(thunk))
export default store

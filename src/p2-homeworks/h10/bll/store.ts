import {combineReducers, createStore} from 'redux'
import {loadingReducer} from './loadingReducer'

const reducers = combineReducers({
    loading: loadingReducer,
})

export const store = createStore(reducers)

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev

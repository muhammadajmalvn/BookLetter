import { combineReducers, createStore, applyMiddleware } from "redux";
import { userSignupReducer } from './Reducers/userReducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({ userSignup: userSignupReducer })


let userData = JSON.parse(localStorage.getItem('userInfo'))

const initialState = {
    userLogin: { userinfo: userData }
}

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer, composedEnhancer)

export default store

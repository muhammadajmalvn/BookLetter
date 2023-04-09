import { combineReducers, createStore, applyMiddleware } from "redux";
import { userSignupReducer } from './Reducers/userReducers/userSignupReducer'
import { userLoginReducer } from './Reducers/userReducers/userLoginReducer'
import { userProfileReducer, userImageReducer } from './Reducers/userReducers/userProfileReducer'
import { adminLoginReducer } from '../Redux/Reducers/adminReducers/adminLoginReducer'
import { adminControlReducer,getBookReducer,getLocationReducer } from "./Reducers/adminReducers/adminControlReducers"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
  userSignup: userSignupReducer,
  userLogin: userLoginReducer,
  userProfile: userProfileReducer,
  userImageUpload: userImageReducer,

  adminLogin: adminLoginReducer,
  adminControl: adminControlReducer,
  adminGetAllBooks:getBookReducer,
  adminGetLocation:getLocationReducer
});


let userData = JSON.parse(localStorage.getItem('userInfo'))

const initialState = {
  userLogin: { userinfo: userData }
}

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer, initialState, composedEnhancer)

export default store

import { combineReducers, createStore, applyMiddleware } from "redux";
import { userSignupReducer } from './Reducers/userReducers/userSignupReducer'
import { userLoginReducer } from './Reducers/userReducers/userLoginReducer'
import { userProfileReducer, userImageReducer } from './Reducers/userReducers/userProfileReducer'
import { adminLoginReducer } from '../Redux/Reducers/adminReducers/adminLoginReducer'
import { adminControlReducer, getBookReducer, getLocationReducer, adminSearchReducer, adminGenreAddReducer, adminGenreReducer } from "./Reducers/adminReducers/adminControlReducers"
import { userGenreReducer, userGetBookReducer } from './Reducers/userReducers/userBookReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { userGetOrderedBooksReducer } from "./Reducers/userReducers/userOrderReducer";
import { adminGetOrdersReducer } from "./Reducers/adminReducers/adminOrderReducer";


const rootReducer = combineReducers({
  userSignup: userSignupReducer,
  userLogin: userLoginReducer,
  userProfile: userProfileReducer,
  userImageUpload: userImageReducer,
  userGetBooks: userGetBookReducer,
  userGenreReducer: userGenreReducer,
  getorderedBooks: userGetOrderedBooksReducer,

  adminLogin: adminLoginReducer,
  adminControl: adminControlReducer,
  adminGetAllBooks: getBookReducer,
  adminGetLocation: getLocationReducer,
  adminSearch: adminSearchReducer,
  adminGenreAdd: adminGenreAddReducer,
  adminGenreReducer: adminGenreReducer,
  adminOrderReducer: adminGetOrdersReducer,
});


let userData = JSON.parse(localStorage.getItem('user-login'))
let adminInfo = JSON.parse(localStorage.getItem("adminInfo"))


const initialState = {
  userLogin: { userLoginDetails: userData },
  adminLogin: { adminLoginDetails: adminInfo }
};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer, initialState, composedEnhancer)

export default store

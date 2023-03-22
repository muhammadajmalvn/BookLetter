import {
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILURE,

} from '../../Constants/userConstants'

const initialState = {};

export const userSignupReducer = (state = initialState, action) => {
    console.log(action, 'output from server inside reducer');
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return { loading: true }
        case USER_SIGNUP_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_SIGNUP_FAILURE:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

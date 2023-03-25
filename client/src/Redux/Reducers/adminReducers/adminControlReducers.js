import {
    ADMIN_USERS_FETCH_REQUEST,
    ADMIN_USERS_FETCH_SUCCESS,
    ADMIN_USERS_FETCH_FAILURE
} from '../../Constants/adminConstants'



export const adminControlReducer = (state = {}, action) => {
    console.log(action, 'output from server inside reducer');
    switch (action.type) {
        case ADMIN_USERS_FETCH_REQUEST:
            return { loading: true }
        case ADMIN_USERS_FETCH_SUCCESS:
            return { loading: false, adminUserData: action.payload }
        case ADMIN_USERS_FETCH_FAILURE:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
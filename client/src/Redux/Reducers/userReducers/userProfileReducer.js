import {
   GET_USER_PROFILE_REQUEST,
   GET_USER_PROFILE_SUCCESS,
   GET_USER_PROFILE_FAILURE
} from '../../Constants/userConstants'


export const userProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USER_PROFILE_REQUEST:
            return { loading: true }
        case GET_USER_PROFILE_SUCCESS:
            return { loading: false, profileData: action.payload }
        case GET_USER_PROFILE_FAILURE:
            return { loading: false, error: action.payload }
    
        default:
            return state
    }
}
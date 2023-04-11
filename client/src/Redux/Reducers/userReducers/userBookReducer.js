import {
    USER_GET_BOOKS_REQUEST,
    USER_GET_BOOKS_SUCCESS,
    USER_GET_BOOKS_FAILURE,
} from '../../Constants/userConstants'



export const userGetBookReducer = (state = {}, action) => {
    console.log(action, 'output from server inside reducer');
    switch (action.type) {
        case USER_GET_BOOKS_REQUEST:
            return { booksDataLoading: true }
        case USER_GET_BOOKS_SUCCESS:
            return { loading: false, booksData: action.payload }
        case USER_GET_BOOKS_FAILURE:
            return { loading: false, booksDataError: action.payload }
        default:
            return state
    }
}
import {
    USER_GET_ORDERED_BOOKS_REQUEST,
    USER_GET_ORDERED_BOOKS_SUCCESS,
    USER_GET_ORDERED_BOOKS_FAILURE
} from '../../Constants/userConstants'


export const userGetOrderedBooksReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_GET_ORDERED_BOOKS_REQUEST:
            return { loading: true }
        case USER_GET_ORDERED_BOOKS_SUCCESS:
            return { loading: false, orderedBooks: action.payload }
        case USER_GET_ORDERED_BOOKS_FAILURE:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
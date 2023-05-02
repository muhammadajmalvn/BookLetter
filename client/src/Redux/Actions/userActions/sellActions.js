import { userGetSellRequestsAPI } from '../../../APIs/userAPI'
import { USER_GET_SELL_BOOKS_FAILURE, USER_GET_SELL_BOOKS_REQUEST, USER_GET_SELL_BOOKS_SUCCESS } from '../../Constants/userConstants'
import { USER_BOOK_SELL_REQUEST_SUCCESS } from '../../Constants/userConstants'


export const sellBook = (data) => async (dispatch) => {

    dispatch({
        type: USER_BOOK_SELL_REQUEST_SUCCESS, payload: data
    })

}

export const getsellRequestedBooksAction = (userId) => async (dispatch) => {
    try {
        dispatch({
            type: USER_GET_SELL_BOOKS_REQUEST
        })
        userGetSellRequestsAPI(userId).then((data) => {
            dispatch({
                type: USER_GET_SELL_BOOKS_SUCCESS,
                payload: data.data
            })
        })
    } catch (error) {
        dispatch({
            type: USER_GET_SELL_BOOKS_FAILURE,
            payload: error.response.message
        })
    }
}
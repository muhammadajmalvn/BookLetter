import {USER_BOOK_SELL_REQUEST_SUCCESS} from '../../Constants/userConstants'


export const sellBook = (data) => async (dispatch) => {

    dispatch({
        type: USER_BOOK_SELL_REQUEST_SUCCESS, payload: data
    })

}
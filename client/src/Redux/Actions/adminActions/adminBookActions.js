import { ADMIN_BOOK_ADD_SUCCESS, ADMIN_BOOK_FETCH_REQUEST, ADMIN_BOOK_FETCH_SUCCESS, ADMIN_BOOK_FETCH_FAILURE } from '../../Constants/adminConstants'
import { adminGetBooksAPI } from '../../../APIs/adminAPI'

import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:5000/admin" })


export const addBook = (data) => async (dispatch) => {
    console.log(data, 'ethitooooooo');

    dispatch({
        type: ADMIN_BOOK_ADD_SUCCESS, payload: data
    })

}

export const adminGetAllBikeAction = () => async (dispatch) => {
    dispatch({ type: ADMIN_BOOK_FETCH_REQUEST })
    try {
        const { data } = adminGetBooksAPI()
            console.log(data);
        dispatch({
            type: ADMIN_BOOK_FETCH_SUCCESS, payload: data
        })
    }
    catch {
        dispatch({
            type: ADMIN_BOOK_FETCH_FAILURE, payload: error.response.data
        })
    }

}

import {
    USER_GET_BOOKS_REQUEST,
    USER_GET_BOOKS_SUCCESS,
    USER_GET_BOOKS_FAILURE,
    USER_GET_GENRE_BOOKS_REQUEST,
    USER_GET_GENRE_BOOKS_FAILURE,
    USER_GET_GENRE_BOOKS_SUCCESS
} from '../../Constants/userConstants'

import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:5000" })


export const userGetBooksAction = () => async (dispatch) => {
    try {
        dispatch({
            type: USER_GET_BOOKS_REQUEST
        })
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }
        const { data } = await API.get('/books', config)
        dispatch({
            type: USER_GET_BOOKS_SUCCESS,
            payload: data
        })
            .catch((error) => {
                dispatch({
                    type: USER_GET_BOOKS_FAILURE,
                    payload: error.response.message
                })
            })
    } catch (error) {

    }
}


export const userGetGenreBooksAction = (genre) => async (dispatch) => {
    try {
        dispatch({
            type: USER_GET_GENRE_BOOKS_REQUEST
        })
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }
        const { data } = await API.post('/genrebooks',{genre}, config)
        dispatch({
            type: USER_GET_GENRE_BOOKS_SUCCESS,
            payload: data
        })
            .catch((error) => {
                dispatch({
                    type: USER_GET_GENRE_BOOKS_FAILURE,
                    payload: error.response.message
                })
            })
    } catch (error) {

    }
}
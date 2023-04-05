import {ADMIN_BOOK_ADD_SUCCESS,ADMIN_BOOK_ADD_REQUEST,ADMIN_BOOK_ADD_FAILURE} from '../../Constants/adminConstants'


import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:5000/admin" })


export const addBook = (data) => async (dispatch) => {
    console.log(data,'ethitooooooo');
    
        dispatch({
            type: ADMIN_BOOK_ADD_SUCCESS, payload: data
        })
   
}

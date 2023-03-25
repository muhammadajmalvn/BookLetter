
import {
   ADMIN_USERS_FETCH_REQUEST,
   ADMIN_USERS_FETCH_SUCCESS,
   ADMIN_USERS_FETCH_FAILURE
} from '../../Constants/adminConstants'

import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:5000/admin" })


export const userDetailsFetch = () => async (dispatch) => {
    console.log('inside actionssssssss');
    try {
        dispatch({ type: ADMIN_USERS_FETCH_REQUEST })
        const admin = JSON.parse(localStorage.getItem('adminInfo'))
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + admin?.token
            }
        }
        const { data } = await API.get("/users", config);
        console.log(data, '555555555555555555544444444444444444');
        dispatch({
            type: ADMIN_USERS_FETCH_SUCCESS, payload: data
        })
    } catch (error) {
        dispatch({
            type: ADMIN_USERS_FETCH_FAILURE,
            payload: error.response.data
        })
    }
}


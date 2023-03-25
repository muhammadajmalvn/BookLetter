
import {
   ADMIN_USERS_FETCH_REQUEST,
   ADMIN_USERS_FETCH_SUCCESS,
   ADMIN_USERS_FETCH_FAILURE,
   ADMIN_USER_BLOCK_REQUEST,
   ADMIN_USER_BLOCK_SUCCESS,
   ADMIN_USER_BLOCK_FAILURE
} from '../../Constants/adminConstants'

import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:5000/admin" })


export const userDetailsFetch = () => async (dispatch) => {
    // console.log('inside actionssssssss');
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


export const userBlock = (id) => async (dispatch) => {
    console.log(id,'ethiiiiiiiiiiiiiiiiiiiiiiii');
    try {
        dispatch({ type: ADMIN_USER_BLOCK_REQUEST })
        const admin = JSON.parse(localStorage.getItem('adminInfo'))
        console.log(admin,'adminnnnnnnn');
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + admin?.token
            }
        }
        const { data } = await API.get("/manage-users?id="+id, config);
        
        console.log(data, '555555555555555555544444444444444444');
        dispatch({
            type: ADMIN_USER_BLOCK_SUCCESS, payload: data
        })
    } catch (error) {
        dispatch({
            type: ADMIN_USER_BLOCK_FAILURE,
            payload: error.response.message
        })
    }
}




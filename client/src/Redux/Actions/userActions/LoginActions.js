import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGOUT
} from '../../Constants/userConstants'

import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:5000" })


export const userLogin = (email, password) => async (dispatch) => {
    console.log(email, password, 'inside actionsssss');
    try {
        dispatch({ type: USER_LOGIN_REQUEST });
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }
     
        const { data } = await API.post("/user-login", { email, password }, config);
        console.log(data, '555555555555555555544444444444444444');
        dispatch({
            type: USER_LOGIN_SUCCESS, payload: data
        })
        localStorage.setItem("user-login", JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAILURE,
            payload:  error.response && error.response.message ? error.response.message : error.response.data
        })
        console.log(error.response.data);
    }
}


export const userLogout = () => async (dispatch) => {
    try {
        localStorage.removeItem("userInfo")
        dispatch({ type: USER_LOGOUT });
    } catch (error) {
        console.log(error);
    }
}



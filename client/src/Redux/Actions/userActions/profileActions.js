import {
    GET_USER_PROFILE_REQUEST,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAILURE
} from '../../Constants/userConstants'

import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:5000" })


export const getUserProfile = () => async (dispatch) => {
    try {
        dispatch({ type: GET_USER_PROFILE_REQUEST });
        const user = JSON.parse(localStorage.getItem('userInfo'))
        console.log(user, 'userdetails from localstorage inside actionssssssssssssss');
        await API.get('/profile/' + user._id).then((data) => {
            dispatch({
                type: GET_USER_PROFILE_SUCCESS, payload: data
            })
        })
            .catch((error) => {
                dispatch({
                    type: GET_USER_PROFILE_FAILURE,
                    payload: error.response && error.response.message ? error.response.message : error.response.data
                })
                console.log(error.response.data);
            })
    }
    catch (error) {
        console.log(error);
    }
}
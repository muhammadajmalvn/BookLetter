import {
    ADMIN_USERS_FETCH_REQUEST,
    ADMIN_USERS_FETCH_SUCCESS,
    ADMIN_USERS_FETCH_FAILURE,
    ADMIN_USER_BLOCK_REQUEST,
    ADMIN_USER_BLOCK_SUCCESS,
    ADMIN_USER_BLOCK_FAILURE,
    ADMIN_USER_DELETE_REQUEST,
    ADMIN_USER_DELETE_SUCCESS,
    ADMIN_USER_DELETE_FAILURE
} from '../../Constants/adminConstants'
import { adminGetUsersAPI, adminUserBlockUnblockAPI, adminDeleteUserAPI } from '../../../APIs/adminAPI';

export const userDetailsFetch = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_USERS_FETCH_REQUEST })
        adminGetUsersAPI().then((data) => {
            console.log(data, '555555555555555555544444444444444444');
            dispatch({
                type: ADMIN_USERS_FETCH_SUCCESS, payload: data
            })
        })
    } catch (error) {
        dispatch({
            type: ADMIN_USERS_FETCH_FAILURE,
            payload: error.response.data
        })
    }
}


export const userBlock = (id) => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_USER_BLOCK_REQUEST })

        adminUserBlockUnblockAPI(id).then((data) => {
            dispatch({
                type: ADMIN_USER_BLOCK_SUCCESS, payload: data
            })
        })
    } catch (error) {
        dispatch({
            type: ADMIN_USER_BLOCK_FAILURE,
            payload: error.response.message
        })
    }
}


export const deleteUser = (id) => async (dispatch) => {
    console.log(id, 'ethiiiiiiiiiiiiiiiiiiiiiiii');
    try {
        dispatch({ type: ADMIN_USER_DELETE_REQUEST })

        adminDeleteUserAPI(id).then((data) => {
            dispatch({
                type: ADMIN_USER_DELETE_SUCCESS, payload: data
            })
        })
    } catch (error) {
        dispatch({
            type: ADMIN_USER_DELETE_FAILURE,
            payload: error.response.message
        })
    }
}




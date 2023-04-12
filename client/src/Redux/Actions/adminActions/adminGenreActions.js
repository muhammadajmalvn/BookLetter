import { adminAddGenreAPI } from '../../../APIs/adminAPI'
import {ADMIN_ADD_GENRE_REQUEST,ADMIN_ADD_GENRE_SUCCESS,ADMIN_ADD_GENRE_FAILURE} from '../../Constants/adminConstants'


export const adminAddGenreAction = (genre) => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_ADD_GENRE_REQUEST })
        adminAddGenreAPI(genre).then((data) => {
            dispatch({
                type: ADMIN_ADD_GENRE_SUCCESS, payload: data
            })
        })
    } catch (error) {
        dispatch({
            type: ADMIN_ADD_GENRE_FAILURE,
            payload: error.response.data
        })
    }
}

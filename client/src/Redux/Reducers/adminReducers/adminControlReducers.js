import {
    ADMIN_USERS_FETCH_REQUEST,
    ADMIN_USERS_FETCH_SUCCESS,
    ADMIN_USERS_FETCH_FAILURE,

    ADMIN_USER_BLOCK_REQUEST,
    ADMIN_USER_BLOCK_SUCCESS,
    ADMIN_USER_BLOCK_FAILURE,

    ADMIN_USER_DELETE_REQUEST,
    ADMIN_USER_DELETE_SUCCESS,
    ADMIN_USER_DELETE_FAILURE,

    ADMIN_BOOK_ADD_REQUEST,
    ADMIN_BOOK_ADD_SUCCESS,
    ADMIN_BOOK_ADD_FAILURE
} from '../../Constants/adminConstants'



export const adminControlReducer = (state = {}, action) => {
    console.log(action, 'output from server inside reducer');
    switch (action.type) {
        case ADMIN_USERS_FETCH_REQUEST:
            return { loading: true }
        case ADMIN_USERS_FETCH_SUCCESS:
            return { loading: false, adminUserData: action.payload }
        case ADMIN_USERS_FETCH_FAILURE:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const blockUserReducer = (state = {}, action) => {
    console.log(action, 'output from server inside reducer');
    switch (action.type) {
        case ADMIN_USER_BLOCK_REQUEST:
            return { loading: true }
        case ADMIN_USER_BLOCK_SUCCESS:
            return { loading: false, adminUserData: action.payload }
        case ADMIN_USER_BLOCK_FAILURE:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const deleteUserReducer = (state = {}, action) => {
    // console.log(action, 'output from server inside reducer');
    switch (action.type) {
        case ADMIN_USER_DELETE_REQUEST:
            return { loading: true }
        case ADMIN_USER_DELETE_SUCCESS:
            return { loading: false, adminUserData: action.payload }
        case ADMIN_USER_DELETE_FAILURE:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


// export const addBookReducer = (state = {}, action) => {
//     console.log(action, 'output from server inside reducer');
//     switch (action.type) {
//         case ADMIN_BOOK_ADD_REQUEST:
//             return { loading: true }
//         case ADMIN_BOOK_ADD_SUCCESS:
//             return { loading: false, adminUserData: action.payload }
//         case ADMIN_BOOK_ADD_FAILURE:
//             return { loading: false, error: action.payload }

//         default:
//             return state
//     }
// }

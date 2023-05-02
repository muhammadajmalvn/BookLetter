import axios from 'axios'
const API = axios.create({ baseURL: "http://localhost:5000" })
const user = JSON.parse(localStorage.getItem('user-login'))

const config = {
    headers: {
        "Content-Type": "application/json",
    }
}

const configToken = {
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user?.token
    }
}
const configFormData = {
    headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + user?.token
    }
}

export const userGetBooksAPI = () => API.get('/books', config)
export const userGetGenresAPI = () => API.get('/genres', config)
export const userGetGenreBooksAPI = (genre) => API.post('/genrebooks', { genre }, config)
export const userBookSearchAPI = (searchTerm) => API.post('/search-book', { searchTerm }, config)
export const userAddAddressAPI = (address) => API.post('/add-address?id=' + user.id, { address }, configToken)
export const userGetAddressesAPI = () => API.get('/get-address?id=' + user.id, configToken)

export const userSellBookAPI = (formdata) => API.post('/sell-book', formdata, configFormData)
export const userGetSellRequestsAPI =(userId)=> API.get('/sell-requests?id=' + userId, configToken)
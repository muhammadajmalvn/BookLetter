import axios from 'axios'
const API = axios.create({ baseURL: "http://localhost:5000" })
const user = JSON.parse(localStorage.getItem('user-login'))
const ID = user?.id
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
export const userAddAddressAPI = (address) => API.post('/add-address?id=' + ID, { address }, configToken)
export const userGetAddressesAPI = () => API.get('/get-address?id=' + user.id, configToken)

export const userSellBookAPI = (formdata) => API.post('/sell-book?id=' + ID, formdata, configFormData)
export const userGetSellRequestsAPI = () => API.get('/sell-requests?id=' + ID, configToken)
export const userSendSellBookAPI = (orderId, trackingId) => API.post('/sell-requests?id=' + orderId, { trackingId }, configToken)

export const userGetWalletAPI = () => API.get('/get-wallet?id=' + ID, configToken)

export const userOrderAPI=(bookingData)=> API.post('/booking-book',{bookingData}, configToken)
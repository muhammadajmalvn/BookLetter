import axios from 'axios'
const API = axios.create({ baseURL: "http://localhost:5000/api/admin" })

const admin = JSON.parse(localStorage.getItem('adminInfo'))
console.log(admin, 'adminnnnnnnn');


const config = {
    headers: {
        "Content-Type": "application/json",
    }
}
const configToken = {
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + admin?.token
    }
}
const configFormData = {
    headers: {
        "Content-Type": "multipart/form-data",
        authorization: "Bearer " + admin?.token
    }
}




export const adminAddBookAPI = (formdata) => API.post("/add-books", formdata, configFormData)
export const adminGetBooksAPI = () =>  API.get('/books',configToken)
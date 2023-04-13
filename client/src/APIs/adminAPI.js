import axios from 'axios'
const API = axios.create({ baseURL: "http://localhost:5000/admin" })

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
        Authorization: "Bearer " + admin.token
    }
}
const configFormData = {
    headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + admin?.token
    }
}


export const adminGetUsersAPI = () => API.get('/users', configToken)
export const adminUserBlockUnblockAPI = (id) => API.get('/manage-users?id=' + id, configToken)
export const adminDeleteUserAPI = (id) => API.get("/delete-user?id=" + id, configToken)
export const adminSearchAPI = (searchkeyword) => API.post("/search",{searchkeyword}, configToken)


export const adminAddBookAPI = (formdata) => API.post("/add-books", formdata, configFormData)
export const adminGetBooksAPI = () => API.get('/books', configToken)
export const adminDeleteBookAPI = (id) => API.get("/delete-book?id=" + id, configToken)
export const adminEditBookAPI = (id, formdata) => API.post('/edit-book?id=' + id, formdata, configFormData)
export const adminAddGenreAPI = (genre) => API.post('/add-genre', {genre},configToken);
export const adminGetGenresAPI = () => API.get('/genres',configToken);
export const adminDeleteGenresAPI = (id) => API.get("/delete-genre?id=" + id, configToken)

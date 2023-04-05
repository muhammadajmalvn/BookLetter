     import axios from 'axios'
     const API = axios.create({baseURL : "http://localhost:5000/admin"})
     
     const admin = JSON.parse(localStorage.getItem('adminInfo'))
        console.log(admin, 'adminnnnnnnn');
        const configFormData = {
            headers: {
                "Content-Type": "multipart/form-data",
                authorization: "Bearer " + admin?.token
            }
        }
     
        export const adminAddBookAPI = (formdata) => API.post("/add-books",formdata,configFormData)
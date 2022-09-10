import axios from 'axios';
import { AuthHeader } from './AuthHeader';

const API_URL = "http://localhost:8000/api"
// const API_URL = "/api"

export const userSignUp = (first_name,last_name,email, password)=>{
    console.log(first_name,email,last_name,password)
    return axios.post(`${API_URL}/users/register`,{
        first_name,last_name,email,password
    },
    {headers: {
        'Content-type':'application/json'
    }}
    )
    .then((response) =>{
        if(response.data.token){
            localStorage.setItem("user", JSON.stringify(response.data))
        }
        return response.data
    })
}

export const userLogin = (email,password)=>{
    try {
    return axios.post(`${API_URL}/users/login`,{
        email, password
    })
    .then((response) =>{
        if(response.data.token){
            localStorage.setItem("user", JSON.stringify(response.data))
        }
    })
} catch(error){
    return error.response.data.detail
}
}

export const userLogout = ()=>{
    localStorage.removeItem("user")
}

export const getCurrentUser = ()=>{
    return JSON.parse(localStorage.getItem("user"))
}

export const getAllUsers = async()=>{
    console.log('inside getallusers')
    const user = JSON.parse(localStorage.getItem("user"));
    // return await axios.get(`${API_URL}/users`,{headers:AuthHeader()})
    return await axios.get(`${API_URL}/users`,
    {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${user.token}`
        }
    }
    )
}

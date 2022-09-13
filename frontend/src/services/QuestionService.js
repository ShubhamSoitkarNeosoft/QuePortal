import axios from "axios";

const API_URL = "http://localhost:8000"

export const getClientQuestion = async()=>{
    try{
    const user = JSON.parse(localStorage.getItem("user"));
    // return await axios.get(`${API_URL}/users`,{headers:AuthHeader()})
    return await axios.get(`${API_URL}/getclients`,
    {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${user.token}`
        }
    })
}catch(error){
    return (error.response.data.error)
}
}

export const sendClientDetails = (clientValue,categoryValue)=>{
    let data = {"clientValue":clientValue,"categoryValue":categoryValue}
    
    return axios.post(`${API_URL}/questions/`,data)
}

export const getClients = async()=>{
    return await axios.get(`${API_URL}/getclients`)
}

export const getCategories = async()=>{
    return await axios.get(`${API_URL}/getcategories`)
}


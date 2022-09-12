import React from 'react'
import { Link } from 'react-router-dom'
import { getAllUsers } from '../services/AuthService'

const AdminScreen = () => {

    const getUserData = async()=>{
        let response = await getAllUsers()
        console.log(response.data)
    }
  return (
    <div>
        AdminScreen<br></br><br></br>
        <Link to="/admin/allusers">Get All Users</Link>
        {/* <button onClick={getUserData}>Get All Users</button> */}
    </div>
  )
}

export default AdminScreen
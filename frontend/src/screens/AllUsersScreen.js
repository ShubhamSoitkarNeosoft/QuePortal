import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../services/AuthService'

const AllUsersScreen = () => {
    const [users, setUsers] = useState([])

    const getUserData = async()=>{
        let response = await getAllUsers()
        console.log(response.data)
        setUsers(response.data)
    }

    useEffect(()=>{
        getUserData()
    },[])

  return (
    <>
    <table className='table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Is Staff</th>
                <th>Is Active</th>
                <th>Is Superuser</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((data)=>(
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.email}</td>
                        <td>{data.first_name}</td>
                        <td>{data.last_name}</td>
                        <td>{data.is_staff.toString()}</td>
                        <td>{data.is_active.toString()}</td>
                        <td>{data.is_superuser.toString()}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    </>
  )
  
}

export default AllUsersScreen
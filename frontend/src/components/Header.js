import React from 'react'
import {Link} from 'react-router-dom'
import { userLogout } from '../services/AuthService'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCurrentUser } from '../services/AuthService'

const Header = () => {

  const navi = useNavigate()
  const logoutHandler = (e)=>{
    // e.preventDefault()
    userLogout()
    navi('/login')

  }
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(()=>{
    getUserInfo()
  },[currentUser])

  const getUserInfo = async()=>{
    let user = await getCurrentUser()
    console.log(user)
    if (user){
      console.log(typeof(user.email))
      setCurrentUser(user.email)
    }
    else{
      setCurrentUser(null)
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Questionare Portal</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/contactus">Contact Us</Link>
      </li>
    </ul>
    
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="#">Add Questions</Link>
      </li>

      <li className="nav-item active">
        <Link className="nav-link" to="/admin">Admin</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
    

      <li className='nav-item active'>
      <button onClick={logoutHandler}>Logout</button>
      </li>
    </ul>
   
  </div>
</nav>
  )
}

export default Header
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { userSignUp } from '../services/AuthService'
import { useNavigate } from 'react-router-dom'

const RegisterScreen = () => {
    const [first_name,setFirstName] = useState('')
    const [last_name,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const navi = useNavigate()

    const submitHandler = async(e)=>{
        e.preventDefault()
        await userSignUp(
            first_name,
            last_name,
            email,
            password  
            )
        navi('/login')
        window.location.reload()
    }

  return (
    <>
    <div className='container'>
        <div className='jumbotron'>
            <center>
                <h2>Registration</h2>
            </center>

            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label for="first_name">First Name</label>
                    <input type="text" 
                    className="form-control" 
                    onChange = {(e)=>setFirstName(e.target.value)}
                    placeholder="Enter First Name" 
                    />
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" 
                    className="form-control" 
                    onChange = {(e)=>setLastName(e.target.value)}
                    placeholder="Enter Last Name" 
                    />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" 
                    className="form-control" 
                    onChange = {(e)=>setEmail(e.target.value)}
                    placeholder="Enter Email" 
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" 
                    className="form-control" 
                    onChange = {(e)=>setPassword(e.target.value)}
                    placeholder="Enter Password" 
                    />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" id="confirmpassword" placeholder=" Confirm Password" />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            Already Registered? 
            <Link to="/login">Login Here</Link>
        </div>
    </div>
    </>
  )
}

export default RegisterScreen
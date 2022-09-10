import React, { useState } from 'react'
import { userLogin } from '../services/AuthService'
import { useNavigate } from 'react-router-dom'

const LoginScreen = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const navi = useNavigate()

    const submitHandler = async(e)=>{
        e.preventDefault()
        await userLogin(email,password)
        navi('/')
    }

  return (
    <>
    <div className='container'>
        <div className='jumbotron'>
            <center>
                <h2>Login</h2>
            </center>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Email address</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter email" 
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Enter Password" 
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default LoginScreen
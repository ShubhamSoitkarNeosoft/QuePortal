import React from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
  return (
    <>
    <div className='container'>
        <div className='jumbotron'>
            <center>
                <h2>Registration</h2>
            </center>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Confirm Password</label>
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
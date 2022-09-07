import React from 'react'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <section id="section-jumbotron" class=" d-flex justify-content-center align-items-center" style={{ paddingTop:"200px" }}>
        <div className='container text-center'>
        <h2 className="display-3 text-info">Questionare Portal</h2>
        <p class="display-4 d-none d-sm-block"></p>
        <Link to="/register" className="btn btn-lg btn-info" style={{ paddingRight: "35px", borderRadius: "0%" }}><i className="fa fa-graduation-cap" aria-hidden="true"></i> Sign Up</Link>
        <br></br><br></br>
        <Link to="/login" className="btn btn-lg btn-info" style={{ paddingRight: "35px", borderRadius: "0%" }}><i className="fa fa-graduation-cap" aria-hidden="true"></i> Sign In</Link>

        </div>
    </section>
  )
}

export default HomeScreen
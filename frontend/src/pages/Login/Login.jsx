import React from 'react'
import "./Login.css"
const Login = () => {
  return (
    <div className='login_page'>
         <div className="bg_overlay">
        <div className="content">
          <h1 className='text-5xl font-bold tracking-wider' >Login </h1>
        </div>
      </div>
      <div className="login_container">
        <form  className='shadow-2xl'>
        <h1>Login</h1>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button  className="btn">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
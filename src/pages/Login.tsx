import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"

export default function Login() {

    let navigate = useNavigate()

  return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={(e) => {
                e.preventDefault()

                const userToLogin = {
                    email: e.target.email.value,
                    password: e.target.password.value
                }

                fetch("http://localhost:4000/login", {
            }}>
                <input type="text" name="email" placeholder="email or username..." required/>
                <input type="password" name="password" placeholder="password..." required/>
                <button>Log In</button>
            </form>
            <div className="login-signup">
                    <span>Don't have an account?</span>
                    <button onClick={() => {
                        navigate('/signup')
                    }}>Sign Up</button>
            </div>
        </div>
  )
}

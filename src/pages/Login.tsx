import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
import { Props } from './SignUp'

export default function Login({ signIn }: Props) {

    let navigate = useNavigate()

  return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={(e) => {
                e.preventDefault()

                const userToLogin = {
                    login: e.target.login.value,
                    password: e.target.password.value
                }

                fetch("http://localhost:4000/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }, 
                    body: JSON.stringify(userToLogin)
                }).then(r => r.json())
                .then(data => {
                    if (data.error) {
                        alert(data.error)
                    } else {
                        signIn(data)
                    }
                })
            }}>
                <input type="text" name="login" placeholder="email or username..." required/>
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

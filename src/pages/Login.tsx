import React from 'react'

export default function Login() {
  return (
    <>
        <h1>Login</h1>
        <form>
            <input type="text" name="email" placeholder="email or username..." required/>
            <input type="password" name="password" placeholder="password..." required/>
        </form>
    </>
  )
}

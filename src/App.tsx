import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

export type Transaction = {
  id: number
  reason: string
  amount: number
  userId: number
}

export type User = {
  id: number
  username: string
  email: string
  password: string
  transactions: Transaction[]
}

function App() {
  const [user, setUser] = useState<User | null>(null)


  return (
    <div className="App">
      <header>
        <h1>Welcome</h1>
      </header>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  )
}

export default App

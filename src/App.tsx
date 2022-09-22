import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import {SignUp}  from "./pages/SignUp";
import Transactions from "./pages/Transactions";

export type Transaction = {
  id: number;
  reason: string;
  amount: number;
  userId: number;
};

export type User = {
  id: number;
  username: string;
  email: string;
  password: string;
  transactions: Transaction[];
};

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  function signIn(data: any) {
    setCurrentUser(data.user)
    localStorage.token = data.token
  }

  function signOut() {
    setCurrentUser(null)
    localStorage.removeItem("token")
  }

  useEffect(() => {
    if (localStorage.token){
      fetch(`http://localhost:4000/validate`,{
        headers: {
          Authorization: localStorage.token
        }
      }).then(r => r.json())
      .then(data => {
        if (data.error){
          alert(data.error)
        } else {
          signIn(data)
        }
      })
    }
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route
          index
          element={
            currentUser !== null ? (
              <Transactions currentUser={currentUser} signOut={signOut}/>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<Login signIn={signIn} />} />
        <Route path="/signup" element={<SignUp signIn={signIn}/>} />
      </Routes>
    </div>
  );
}

export default App;

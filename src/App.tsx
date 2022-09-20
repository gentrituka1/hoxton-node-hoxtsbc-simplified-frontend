import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { SignUp } from "./pages/Signup";

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

  function signIn(user: User) {
    setCurrentUser(user);
  }

  function signOut() {
    setCurrentUser(null);
  }

  return (
    <div className="App">
      <Routes>
        <Route
          index
          element={
            currentUser !== null ? (
              <div>
                <h1>Welcome, {currentUser.username}</h1>
                <button onClick={signOut}>Sign Out</button>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp signIn={signIn}/>} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react'
import { Transaction, User } from '../App'

type Props = {
    currentUser: User
    signOut: () => void
}

export default function Transactions({currentUser, signOut}: Props) {
  return (
    <>
              <div>
                <h1>Welcome, {currentUser.username}</h1>
                <button onClick={signOut}>Sign Out</button>
              </div>
              <ul>
                {currentUser.transactions.map((transaction: Transaction) => (
                  <li key={transaction.id}>
                    <h2>Transaction made by: {transaction.userId} who sent/recieved: ${transaction.amount}, because {transaction.reason}.</h2>
                  </li>
                ))}
              </ul>
    </>
  )
}

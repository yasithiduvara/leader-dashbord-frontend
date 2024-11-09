import { useState } from 'react'
import Navgation from "./components/Navgation"
import Leaderboard from "./components/Leaderboard"
import UserPage from "./components/UserPage"
import Login from "./components/Login"
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className="bg-gray-500 min-h-[100vh]">
<Navgation />
<Routes>
<Route path="/" element={<Leaderboard />} />
<Route path="/user/:userId" element={<UserPage />} />  
<Route path="/login" element={<Login />} />  
</Routes>
</div>
</BrowserRouter>
  )
}

export default App

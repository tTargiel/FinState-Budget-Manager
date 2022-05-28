import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Wallet from './pages/Wallet'
import Bank from './pages/Bank'
import Crypto from './pages/Crypto'
import Stocks from './pages/Stocks'
import { useSelector } from 'react-redux'
import LeftPane from './components/LeftPane'
import Header from './components/Header'

function App() {
  const { user } = useSelector((state) => state.auth)

  return (
    <>
      <Router>
        { user ? <LeftPane /> : <Header /> }
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/wallet' element={<Wallet />} />
            <Route path='/bank' element={<Bank />} />
            <Route path='/crypto' element={<Crypto />} />
            <Route path='/stocks' element={<Stocks />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App

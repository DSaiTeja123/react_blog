import BackgroundCanvas from "./components/BackgroundCanvas";

import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-col justify-between bg-gray-50'>
      <BackgroundCanvas />
      <div className='w-full'>
        <Header />
        <main className='flex-grow'>
          <div className="max-w-8xl mx-auto">
            <Outlet />
          </div>
        </main>
        <Footer className='bg-gray-800 text-white py-4' />
      </div>
    </div>
  ) : null
}

export default App
import React from 'react'
import { Login as LoginComponent } from '../components'

function Login() {
  return (
    <div className="py-2 flex items-start justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Please log in to continue.
        </p>
        <LoginComponent />
      </div>
    </div>
  )
}

export default Login

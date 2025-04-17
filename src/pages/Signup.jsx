import React from 'react';
import { Signup as SignupComponent } from '../components';

function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-2 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-10 transform transition-all duration-300 hover:scale-[1.01]">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          Create an Account
        </h2>
        <SignupComponent />
      </div>
    </div>
  );
}

export default Signup;

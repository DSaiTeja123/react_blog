import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index.js';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError('');
    try {
      const account = await authService.createAccount(data);
      if (account) {
        const user = await authService.getCurrentUser();
        if (user) {
          dispatch(login(user));
          navigate('/');
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="mx-auto w-full max-w-lg bg-white rounded-xl p-8 shadow-lg">
        <div className="mb-6 flex justify-center">
          <span className="inline-block w-full max-w-[80px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold text-gray-800">Sign up to create an account</h2>
        <p className="mt-2 text-center text-gray-600">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-blue-600 hover:text-blue-500 transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit(create)} className="mt-8 space-y-6">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            {...register('name', { required: true })}
          />
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            {...register('email', {
              required: true,
              validate: {
                matchPattern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  'Email address must be a valid address',
              },
            })}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register('password', { required: true })}
          />
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white hover:bg-blue-500 transition-all duration-200"
          >
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;

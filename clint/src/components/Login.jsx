import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Login = () => {
  const { setShowLogin } = useContext(AppContext)
  const [state, setState] = useState('Login')

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div onClick={() => setShowLogin(false)} className='fixed inset-0 z-10 flex items-center justify-center bg-slate-100/90 backdrop-blur-sm'>
      <form onClick={(e) => e.stopPropagation()} className='relative w-full max-w-md rounded-4xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/70'>
        <img onClick={() => setShowLogin(false)} src={assets.cross_icon} className='absolute right-5 top-5 h-6 w-6 cursor-pointer opacity-80 transition hover:opacity-100' alt='' />
        <h1 className='text-center text-2xl font-semibold text-slate-950'>{state}</h1>
        <p className='mt-2 text-center text-sm text-slate-500'>Welcome back! Please sign in to continue.</p>
        {state !== 'Login' && (
          <div className='mt-6 flex items-center gap-3 rounded-full border border-slate-200 bg-slate-100 px-5 py-3'>
            <img width={20} src={assets.profile_icon} alt='' />
            <input type='text' className='w-full bg-transparent text-sm outline-none' placeholder='Full Name' required />
          </div>
        )}
        <div className='mt-4 flex items-center gap-3 rounded-full border border-slate-200 bg-slate-100 px-5 py-3'>
          <img src={assets.email_icon} alt='' className='h-5 w-5' />
          <input type='email' className='w-full bg-transparent text-sm outline-none' placeholder='Email id' required />
        </div>
        <div className='mt-4 flex items-center gap-3 rounded-full border border-slate-200 bg-slate-100 px-5 py-3'>
          <img src={assets.lock_icon} alt='' className='h-5 w-5' />
          <input type='password' className='w-full bg-transparent text-sm outline-none' placeholder='Password' required />
        </div>
        <p className='mt-4 text-right text-sm text-cyan-600'>Forgot password?</p>
        <button className='mt-6 w-full rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5' style={{ backgroundImage: 'linear-gradient(90deg, #06b6d4, #3b82f6)' }}>
          {state === 'Login' ? 'Login' : 'Create Account'}
        </button>
        <p className='mt-5 text-center text-sm text-slate-600'>
          {state === 'Login' ? (
            <>Don't have an account? <span className='cursor-pointer text-cyan-500' onClick={() => setState('Sign Up')}>Sign up</span></>
          ) : (
            <>Already have an account? <span className='cursor-pointer text-cyan-500' onClick={() => setState('Login')}>Login</span></>
          )}
        </p>
      </form>
    </div>
  )
}

export default Login

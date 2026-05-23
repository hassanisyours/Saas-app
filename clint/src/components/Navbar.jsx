import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const { user, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <div className='relative z-10 mb-6 flex items-center justify-between rounded-3xl border border-white/10 bg-white/10 px-4 py-4 shadow-2xl shadow-slate-950/10 backdrop-blur-xl transition-all duration-500 sm:px-6'>
      <Link to='/' className='flex items-center gap-3'>
        <img src={assets.logo} alt='Logo' className='w-28 sm:w-32 lg:w-36' />
      </Link>

    
      <div className='flex items-center gap-3'>
        {user ? (
          <>
            <button
              onClick={() => navigate('/buy')}
              className='flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-950 transition hover:scale-105 hover:bg-slate-100'
            >
              <img src={assets.credit_star} className='w-5' alt='' />
              <span>Credits: 50</span>
            </button>
            <div className='relative group'>
              <img src={assets.profile_icon} className='h-11 w-11 rounded-full border border-white/20 shadow-lg shadow-slate-950/20' alt='' />
              <div className='absolute right-0 top-full mt-3 hidden rounded-2xl border border-white/20 bg-white/95 p-3 text-sm shadow-2xl shadow-slate-950/15 group-hover:block'>
                <button className='block rounded-xl px-4 py-2 text-left text-slate-700 transition hover:bg-slate-100'>Logout</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <button onClick={() => navigate('/buy')} className='rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-cyan-500'>Pricing</button>
            <button onClick={() => setShowLogin(true)} className='rounded-full px-5 py-2 text-sm font-semibold text-white shadow-xl shadow-cyan-500/20 transition hover:-translate-y-0.5' style={{ backgroundImage: 'linear-gradient(90deg, #06b6d4, #3b82f6)' }}>Login</button>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar

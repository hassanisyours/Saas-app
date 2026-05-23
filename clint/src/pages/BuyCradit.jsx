import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const BuyCradit = () => {
  const { user, setShowLogin } = useContext(AppContext)

  return (
    <section className='relative min-h-[80vh] overflow-hidden rounded-4xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/60 backdrop-blur-xl text-slate-950'>
      <div className='absolute -left-20 top-10 h-52 w-52 rounded-full bg-cyan-200/40 blur-3xl'></div>
      <div className='absolute right-0 top-24 h-56 w-56 rounded-full bg-amber-200/40 blur-3xl'></div>
      <div className='relative mx-auto max-w-4xl text-center'>
        <span className='inline-flex rounded-full bg-slate-100 px-5 py-2 text-sm font-medium text-slate-900'>Our best plans</span>
        <h1 className='mt-6 text-4xl font-semibold sm:text-5xl'>Choose the perfect plan</h1>
        <p className='mt-3 max-w-2xl mx-auto text-slate-600'>Get credits for your next AI image creation sessions with premium pricing and instant access.</p>
      </div>

      <div className='mt-12 grid gap-6 md:grid-cols-3'>
        {plans.map((item, index) => (
          <div key={index} className='fade-in-up rounded-4xl border border-slate-200 bg-white p-8 text-slate-950 shadow-2xl shadow-slate-200/50 transition duration-500 hover:-translate-y-2'>
            <img width={40} src={assets.logo_icon} alt='' />
            <p className='mt-6 text-2xl font-semibold'>{item.id}</p>
            <p className='mt-2 text-slate-500'>{item.desc}</p>
            <p className='mt-8 text-5xl font-bold'>${item.price}</p>
            <p className='mt-1 text-slate-500'>{item.credits} credits</p>
            <button
              onClick={() => { if (!user) setShowLogin(true) }}
              className='mt-10 w-full rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5'
              style={{ backgroundImage: 'linear-gradient(90deg, #06b6d4, #3b82f6)' }}
            >
              {user ? 'Purchase' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BuyCradit

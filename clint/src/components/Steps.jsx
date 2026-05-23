import React from 'react'
import { stepsData } from '../assets/assets'

const Steps = () => {
  return (
    <div className='my-32'>
      <div className='text-center'>
        <h1 className='text-3xl font-semibold text-slate-950 sm:text-4xl'>How it works</h1>
        <p className='mt-3 text-lg text-slate-600'>Transform Words Into Stunning Images</p>
      </div>

      <div className='mt-12 grid gap-6 md:grid-cols-3'>
        {stepsData.map((item, index) => (
          <div key={index} className='fade-in-up rounded-3xl border border-white/20 bg-white/20 p-6 shadow-2xl shadow-slate-950/10 transition duration-500 hover:-translate-y-1 hover:bg-white/30'>
            <div className='flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-500/10'>
              <img src={item.icon} alt='' className='h-10 w-10' />
            </div>
            <h2 className='mt-6 text-xl font-semibold text-slate-950'>{item.title}</h2>
            <p className='mt-3 text-slate-600'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Steps

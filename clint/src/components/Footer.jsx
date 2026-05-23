import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='mt-16 rounded-3xl border border-white/10 bg-white/10 px-6 py-6 text-slate-600 shadow-2xl shadow-slate-950/10 backdrop-blur-xl sm:px-10'>
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <img src={assets.logo} alt='Logo' width={150} />
        <p className='text-sm text-slate-500'>Copyright (c) 2026 | All rights reserved.</p>
        <div className='flex gap-3'>
          <img src={assets.facebook_icon} width={35} alt='Facebook' />
          <img src={assets.twitter_icon} width={35} alt='Twitter' />
          <img src={assets.instagram_icon} width={35} alt='Instagram' />
        </div>
      </div>
    </footer>
  )
}

export default Footer

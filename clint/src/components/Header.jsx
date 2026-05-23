import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import {useNavigate} from 'react-router-dom'
import { AppContext } from '../context/AppContext'
const Header = () => {

  const { user, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()

    const onClickHandle = ()=>{
      if (user) {
          navigate('/result')
      }else{
        setShowLogin(true)
      }
    }


  return (
    <div className='relative overflow-hidden rounded-4xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl my-20'>
      <div className='pointer-events-none absolute -left-20 top-8 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl'></div>
      <div className='pointer-events-none absolute -right-20 top-24 h-60 w-60 rounded-full bg-fuchsia-500/20 blur-3xl'></div>
      <div className='relative flex flex-col items-center justify-center text-center gap-6 py-10 px-4 sm:px-10'>
        <div className='fade-in-up inline-flex items-center gap-2 rounded-full bg-slate-100 px-6 py-2 text-sm font-medium text-slate-700 shadow-sm shadow-slate-200/80'>
          <p>Best text to image generator</p>
          <img src={assets.star_icon} alt='' className='h-5 w-5' />
        </div>

        <h1 className='fade-in-up text-4xl font-semibold leading-tight text-slate-950 sm:text-6xl max-w-4xl'>
          Turn text into <span className='text-cyan-500'>stunning images</span> instantly.
        </h1>
        <p className='fade-in-up max-w-2xl text-base text-slate-600 sm:text-lg'>
          Unleash your creativity with AI-powered imagery. Type your vision and watch it transform into high-quality visuals in seconds.
        </p>

        <button onClick={onClickHandle} className='fade-in-up group inline-flex items-center gap-3 rounded-full px-10 py-3 text-base font-semibold text-white shadow-xl shadow-cyan-500/20 transition-transform duration-500 hover:-translate-y-1 hover:shadow-cyan-500/40' style={{ backgroundImage: 'linear-gradient(90deg, #06b6d4, #3b82f6)' }}>
          Generate Images
          <img className='h-6 w-6 rounded-full bg-white/15 p-1 transition-transform duration-500 group-hover:scale-110' src={assets.star_group} alt='' />
        </button>

        <div className='fade-in-up flex flex-wrap justify-center gap-3 mt-12'>
          {Array(6).fill('').map((item, index) => (
            <img
              key={index}
              src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
              alt='sample'
              width={70}
              className='hero-float rounded-3xl border border-white/40 shadow-xl shadow-slate-950/10 transition-transform duration-500 hover:-translate-y-2'
            />
          ))}
        </div>
        <p className='fade-in-up mt-4 text-sm text-slate-500'>Generated images from Imagify</p>
      </div>
    </div>
  )
}

export default Header

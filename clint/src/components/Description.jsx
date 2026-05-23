import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <section className='relative my-24 overflow-hidden rounded-4xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/60 backdrop-blur-xl md:p-10'>
      <div className='absolute -right-24 top-16 h-40 w-40 rounded-full bg-cyan-200/40 blur-3xl'></div>
      <div className='absolute -left-24 bottom-10 h-56 w-56 rounded-full bg-amber-200/40 blur-3xl'></div>
      <div className='flex flex-col items-center gap-8 text-center md:text-left md:flex-row md:items-start'>
       <div className='justify-center '><img src={assets.sample_img_1} className='w-full max-w-md rounded-3xl object-contain bg-slate-100' alt="" /></div>

        <div className='max-w-2xl space-y-6'>
          <div>
            <h1 className='text-3xl font-semibold text-slate-950 sm:text-4xl'>Create AI Images with premium speed.</h1>
            <p className='mt-2 text-slate-500'>Turn your imagination into visuals with the most advanced text-to-image creator. Fast, accurate, and built for next-level ideas.</p>
          </div>
          <p className='text-slate-600 leading-7'>Easily bring your ideas to life with our intelligent AI tool. Describe any scene, concept, or design, and get a polished image instantly — perfect for marketing, content, or creative exploration.</p>
          <div className='grid gap-4 sm:grid-cols-2'>
            <div className='rounded-3xl bg-slate-100 p-5 text-slate-950 shadow-lg shadow-slate-200/50'>
              <p className='text-lg font-semibold'>High quality output</p>
              <p className='mt-2 text-sm text-slate-600'>Professional-grade imagery with crisp details and vivid colors.</p>
            </div>
            <div className='rounded-3xl bg-cyan-500/10 p-5 text-slate-950 shadow-lg shadow-cyan-500/10'>
              <p className='text-lg font-semibold'>Instant results</p>
              <p className='mt-2 text-sm text-slate-700'>Create visuals in seconds with a seamless workflow.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Description

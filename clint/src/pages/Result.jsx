import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')

  const onSubmitHandleer = async (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setIsImageLoaded(true)
    }, 1200)
  }

  return (
    <form onSubmit={onSubmitHandleer} className='flex min-h-[90vh] flex-col items-center justify-center gap-10 py-16 text-slate-950'>
      <div className='relative w-full max-w-xl overflow-hidden rounded-4xl border border-white/20 bg-white/10 p-4 shadow-2xl shadow-slate-950/10'>
        <img src={image} className='w-full rounded-3xl object-cover' alt='' />
        <span className={`absolute bottom-0 left-0 h-1 bg-cyan-500 transition-all duration-700 ${loading ? 'w-full' : 'w-0'}`} />
        <div className='pointer-events-none absolute -left-10 top-8 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl'></div>
      </div>

      {loading && <p className='text-sm text-cyan-500'>Creating your image... this will only take a moment.</p>}

      {!isImageLoaded && (
        <div className='flex w-full max-w-xl flex-col gap-4 rounded-full bg-slate-100 p-2 text-slate-950 shadow-2xl shadow-slate-200/50 sm:flex-row'>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type='text'
            placeholder='Describe what you want to generate'
            className='flex-1 rounded-full border border-slate-200 bg-white px-6 py-4 text-sm text-slate-950 outline-none placeholder:text-slate-400'
          />
          <button type='submit' className='rounded-full px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5' style={{ backgroundImage: 'linear-gradient(90deg, #06b6d4, #3b82f6)' }}>
            Generate
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className='flex flex-wrap justify-center gap-3 text-sm'>
          <button onClick={() => setIsImageLoaded(false)} className='rounded-full border border-slate-300 bg-white/90 px-8 py-3 text-slate-950 transition hover:-translate-y-0.5'>
            Generate Another
          </button>
          <a className='rounded-full bg-slate-900 px-8 py-3 text-white transition hover:-translate-y-0.5' download href={image}>
            Download
          </a>
        </div>
      )}
    </form>
  )
}

export default Result

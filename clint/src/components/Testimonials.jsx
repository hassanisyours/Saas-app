import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='my-20 py-12'>
      <div className='text-center'>
        <h1 className='text-3xl font-semibold text-slate-950 sm:text-4xl'>Customer testimonials</h1>
        <p className='mt-3 text-lg text-slate-600'>What Our Users Are Saying</p>
      </div>

      <div className='mt-12 grid gap-6 md:grid-cols-3'>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='fade-in-up rounded-4xl border border-white/20 bg-white/10 p-10 text-slate-900 shadow-2xl shadow-slate-950/10 transition duration-500 hover:-translate-y-1'>
            <div className='flex flex-col items-center gap-4 text-center'>
              <img src={testimonial.image} alt='' className='h-16 w-16 rounded-full border border-white/20 shadow-lg shadow-slate-950/10' />
              <div>
                <h2 className='text-xl font-semibold'>{testimonial.name}</h2>
                <p className='text-sm text-slate-500'>{testimonial.role}</p>
              </div>
              <div className='flex gap-1'>
                {Array(testimonial.stars).fill().map((_, idx) => (
                  <img key={idx} src={assets.rating_star} alt='star' className='h-5 w-5' />
                ))}
              </div>
              <p className='text-sm leading-7 text-slate-600'>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials

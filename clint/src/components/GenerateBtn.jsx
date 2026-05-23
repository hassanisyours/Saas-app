import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import {useNavigate} from 'react-router-dom'
import {AppContext} from '../context/AppContext'
const GenerateBtn = () => {

  const {user ,setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()

  const onclickHandle = ()=>{
    if (user) {
        navigate('/result')
    }else{
      setShowLogin(true)
    }
  }
  return (
    <div className='pb-16 text-center'>
      <h1 className='text-2xl font-semibold text-slate-950 md:text-3xl lg:text-4xl mt-4 py-6 md:py-16'>See the magic. Try now</h1>
      <button onClick={onclickHandle} className='inline-flex items-center gap-3 rounded-full px-12 py-3 text-white shadow-xl shadow-cyan-500/20 transition duration-500 hover:-translate-y-1 hover:shadow-cyan-500/40' style={{ backgroundImage: 'linear-gradient(90deg, #06b6d4, #3b82f6)' }}>
        Generate Images
        <img src={assets.star_group} className='h-6' alt='' />
      </button>
    </div>
  )
}

export default GenerateBtn

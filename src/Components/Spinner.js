import React from 'react'
import loading from './loading.gif'
const Spinner = () => {
  return (
    <div className='flex justify-center items-center'>
    <img src={loading} alt="loading" className='w-[10%] text-center justify-center'/>
  </div>
  )
}

export default Spinner

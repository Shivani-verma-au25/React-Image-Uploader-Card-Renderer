import React from 'react'
import { useForm } from 'react-hook-form'

function Form({formDatasubmit}) {
    const {register,handleSubmit,reset} = useForm()
    
    const uploadData = (data) =>{
        formDatasubmit(data)
        reset()
    }
    
  return (
    <div className='w-full flex gap-4 bg-zinc-200 flex-wrap flex-col sm:w-full sm:flex-row sm:justify-center sm:items-end lg:flex-col lg:items-center lg:justify-center mb-10 pt-4 '>
      <h1 className='font-bold text-2xl uppercase ' >Picture UpLoader APP</h1>
      <form action="" onSubmit={handleSubmit(uploadData)}>
            <input {...register('heading')} className='w-full rounded-md mt-2 px-2 py-2' type="text" placeholder='Title' />
            <input {...register('pic')} className='w-full rounded-md mt-2 px-2 py-2' type="text" placeholder='URL' />
       <button className='grow px-8 py-2 rounded-md bg-green-700 mt-5 text-white tracking-tighter font-semibold sm:h-[4vw] lg:sm:h-[3vw] lg:w-[30vw]' type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Form
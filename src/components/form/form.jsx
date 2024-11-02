import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/task-slice'

export const Form = () => {
  const { handleSubmit, register, reset } = useForm()
  const dispatch = useDispatch()
  const submit = (data) => {
    dispatch(addTask({ ...data, id: nanoid() }))
    reset()
  }

  return (
    <div className="pt-[50px]">
      <div className="w-[500px] mr-auto ml-auto border-[2px] border-black p-[20px] text-center rounded-[25px]">
        <form className='flex gap-[20px] items-center justify-center' onSubmit={handleSubmit(submit)}>
          <input className="p-[10px] text-black border-[1px] border-black rounded-[10px]" type="text" {...register('title')} />
          <button className='sb_btn type1'>
            <span className="btn-txt">Submit</span>
          </button>
        </form>
      </div>
    </div>
  )
}

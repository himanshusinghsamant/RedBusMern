import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/CounterSlice'

function Contact() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return ( 
    <div>
      <div className='mt-[200px]'>
        <button
        className='text-xl mx-5 cursor-pointer border-[1px] border-green-500 my-5 px-4 py-1 rounded-md hover:text-white hover:bg-green-500 transition-all duration-200 ease-in-out'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
        className='text-xl mx-5 cursor-pointer border-[1px] border-orange-500 my-5 px-4 py-1 rounded-md hover:text-white hover:bg-orange-500 transition-all duration-200 ease-in-out'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Contact;
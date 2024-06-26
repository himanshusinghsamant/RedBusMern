import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  bookingId: null,
  paymentResult: null,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    setId: (state, action) => {
      console.log(action)
      state.bookingId = action.payload;
    },
    setPaymentResult: (state, action) => {
      console.log(action)
      state.paymentResult = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setId, setPaymentResult } = counterSlice.actions

export default counterSlice.reducer
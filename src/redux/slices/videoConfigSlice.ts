import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface VideoConfigState {
  value: number
}

const initialState: VideoConfigState = {
  value: 0,
}

export const videoConfigSlice = createSlice({
  name: 'videoConfig',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = videoConfigSlice.actions

export default videoConfigSlice.reducer
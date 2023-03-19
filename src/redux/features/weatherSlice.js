import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const weatherValue = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setWeather } = weatherValue.actions

export default weatherValue.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const degreeValue = createSlice({
  name: 'degree',
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { set } = degreeValue.actions

export default degreeValue.reducer
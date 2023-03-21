import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "list",
}

export const contentChange = createSlice({
  name: 'contentChange',
  initialState,
  reducers: {
    setContentChange: (state, action) => {
      state.value=action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setContentChange } = contentChange.actions

export default contentChange.reducer
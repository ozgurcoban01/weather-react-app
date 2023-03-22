import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const videoTypeValue = createSlice({
  name: 'videoType',
  initialState,
  reducers: {
    setVideoType: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setVideoType } = videoTypeValue.actions

export default videoTypeValue.reducer

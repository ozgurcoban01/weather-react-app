import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const searchValue = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchSet: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { searchSet } = searchValue.actions

export default searchValue.reducer
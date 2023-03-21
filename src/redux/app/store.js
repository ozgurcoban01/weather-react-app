import { configureStore } from '@reduxjs/toolkit'
import degreeValue from '../features/counterSlice.js'
import weatherValue from '../features/weatherSlice'
import searchValue from '../features/searchSlice'
import contentChange from '../features/contentChangeSlice'

export const store = configureStore({
  reducer: {
    degree: degreeValue,
    weather: weatherValue,
    search: searchValue,
    contentChange: contentChange,
  },
})
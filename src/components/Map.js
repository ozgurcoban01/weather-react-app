import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { set } from '../redux/features/counterSlice.js'
const Map = () => {

    const weather=useSelector((state)=>state.weather.value)
  return (
    <div className='mapContainer'>
    
    </div>
  )
}

export default Map
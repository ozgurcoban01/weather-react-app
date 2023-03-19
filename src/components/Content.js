import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setWeather } from '../redux/features/weatherSlice'
import axios from 'axios'

const Content = () => {
    const dispatch=useDispatch();
    const userr=useSelector((state)=>state.weather.value)
    const [user,setUser]=useState([])

    const fetchApi=async ()=>{
        const response=await axios.get('https://randomuser.me/api/?results=5')
        setUser(response.data.results)
    }

    useEffect(()=>{
        fetchApi()
    },[])

    console.log(user.name)

  return (
    <div className='contentContainer' >

    </div>
  )
}

export default Content
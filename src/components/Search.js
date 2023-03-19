import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { set } from '../redux/features/counterSlice.js'
import { weatherSet } from '../redux/features/weatherSlice'
import { searchSet } from '../redux/features/searchSlice'
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";


const Search = () => {

    const dispatch=useDispatch();

    const [search,setSearch]=useState();  

    useEffect(()=>{
        dispatch(searchSet(search))
        console.log(search)
    },[search])

  return (
    <div className='searchContainer'>
       <input className='searchBar'  type="text" onChange={(e)=>{setSearch(e.target.value)}}>
       
       </input>
    </div>
  )
}

export default Search
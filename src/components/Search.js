import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../redux/features/counterSlice.js";
import { weatherSet } from "../redux/features/weatherSlice";
import { searchSet } from "../redux/features/searchSlice";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

const Search = () => {
  const dispatch = useDispatch();
 
  const weather = useSelector((state) => state.weather.value);
  return (
    <div className="searchContainer">
{weather != null ? weather.list[3].main.temp : null}
      <input
        className="searchBar"
        type="text"
        onChange={(e) => {
          dispatch(searchSet(e.target.value));
        }}
      ></input>
    </div>
  );
};

export default Search;

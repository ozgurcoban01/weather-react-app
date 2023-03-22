import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../redux/features/counterSlice.js";
import { weatherSet } from "../redux/features/weatherSlice";
import { searchSet } from "../redux/features/searchSlice";
import { setContentChange } from "../redux/features/contentChangeSlice";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { setVideoType } from "../redux/features/videoTypeSlice";

const Search = () => {
  const dispatch = useDispatch();

  const contentChange = useSelector((state) => state.contentChange.value);
  const weather = useSelector((state) => state.weather.value);

  const changeContentChange = () => {
    if (contentChange == "back") {
      dispatch(setContentChange("list"));
    } else {
      dispatch(setContentChange("back"));
    }
    dispatch(setVideoType("main"))
  };

  return (
    <>
      <div
        onClick={changeContentChange}
        className={` backList ${
          contentChange == "list" ? "displayNone" : ""
        }`}
      >
        Liste
      </div>
      <div
        className={`searchContainer ${
          contentChange == "back" ? "displayNone" : ""
        }`}
      >
        <input
          className="searchBar"
          type="text"
          onChange={(e) => {
            dispatch(searchSet(e.target.value));
          }}
        ></input>
      </div>
    </>
  );
};

export default Search;

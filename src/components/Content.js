import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWeather } from "../redux/features/weatherSlice";
import axios from "axios";

const Content = () => {
  const dispatch = useDispatch();
  const weatherr = useSelector((state) => state.weather.value);

  const fetchApi = async () => {
    await axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=istanbul&units=metric&appid=c2a2d1a959b551a9b3601e32bbdeb808"
      )
      .then((res) => dispatch(setWeather(res.data)));
  };

  useEffect(() => {
    fetchApi();
  }, []);
console.log(weatherr)
  return <div className="contentContainer">
    {weatherr.name}<br></br>
    {weatherr.main.temp}<br></br>
    {weatherr.id}<br></br>
    {weatherr.weather[0].description}<br></br>
  </div>;
};

export default Content;

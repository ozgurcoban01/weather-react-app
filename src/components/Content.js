import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWeather } from "../redux/features/weatherSlice";
import axios from "axios";

const Content = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.value);
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

  
  if(weather==null){
    return(
      <div>Yükleniyor</div>
    )
  }
 
  return <div className="contentContainer">
    {weather.id}<br></br>
    {weather.name}<br></br>
    {weather.weather[0].description}<br></br>
    {weather.main.temp}<br></br>
    </div>;
};

export default Content;

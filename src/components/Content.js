import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWeather } from "../redux/features/weatherSlice";
import axios, { all } from "axios";
import cityNamesTurkey from "./cityNamesTurkey.json";

const Content = () => {
  const dispatch = useDispatch();

  const weather = useSelector((state) => state.weather.value);
  const country = useSelector((state) => state.search.value);

  const [ct, setCt] = useState("İstanbul");
  const [allcities, setAllCities] = useState([]);

  const fetchApi = async () => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=istanbul&units=metric&lang=tr&appid=c2a2d1a959b551a9b3601e32bbdeb808`
      )
      .then((res) => console.log(console.log(res.data)));
  };

  useEffect(() => {
 
  }, []); 

  useEffect(() => {
    fetchApi()
  }, [country]);

  if (weather == null) {
    return <div>Yükleniyor</div>;
  }

  return <div className="contentContainer"></div>;
};

export default Content;

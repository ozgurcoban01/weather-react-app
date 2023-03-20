import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWeather } from "../redux/features/weatherSlice";
import axios, { all } from "axios";
import cityNamesTurkey from "./cityNamesTurkey.json";

const Content = () => {
  const dispatch = useDispatch();

  const weather = useSelector((state) => state.weather.value);
  const search = useSelector((state) => state.search.value);

  const [ctName, setCtName] = useState();
  const [allcities, setAllCities] = useState([]);

  const fetchApi = async (lat, lon) => {
    await axios
      .get(
        `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=tr&appid=c2a2d1a959b551a9b3601e32bbdeb808`
      )
      .then((res) => dispatch(setWeather(res.data)));
  };

  useEffect(() => {
    const word = search.toLowerCase();
    setCtName(word);
  }, [search]);

  const cityCheck = (city) => {
    const word = city.name;
    const wordd = word.toLowerCase();
    console.log(ctName+" "+wordd+" "+wordd.includes(ctName))
    return wordd.includes(ctName);
  };

  return (
    <div className="contentContainer">
      <div className="cityContainer">
        {cityNamesTurkey.map((city) =>
          cityCheck(city) ? (
            <div className="city">
              {city.id} {city.name}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Content;

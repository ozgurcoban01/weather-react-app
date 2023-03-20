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
  const [fetch, setFetch] = useState();
  const [allcities, setAllCities] = useState([]);

  const fetchApi = async (city) => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=tr&appid=c2a2d1a959b551a9b3601e32bbdeb808`
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

    return wordd.includes(ctName);
  };

  const getData = (city) => {
    fetchApi(city);
  };

  return (
    <div className="contentContainer">
      <div className="cityContainer">
        {cityNamesTurkey.map((city) =>
          cityCheck(city) ? (
            <div className="city" onClick={() => getData(city.name)}>
              {city.id} {city.name}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Content;

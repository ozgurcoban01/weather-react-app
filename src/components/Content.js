import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWeather } from "../redux/features/weatherSlice";
import axios, { all } from "axios";
import cityNamesTurkey from "./cityNamesTurkey.json";
import { setContentChange } from "../redux/features/contentChangeSlice";

const Content = () => {
  const dispatch = useDispatch();
  const contentChange = useSelector((state) => state.contentChange.value);
  const weather = useSelector((state) => state.weather.value);
  const search = useSelector((state) => state.search.value);

  const [loading, setLoading] = useState(false);
  const [fload, setfload] = useState(false);

  const [ctName, setCtName] = useState();
  const [fetch, setFetch] = useState();
  const [allcities, setAllCities] = useState([]);

  const changeContentChange = () => {
    if (contentChange == "black") {
      dispatch(setContentChange("list"));
      console.log("list")
    } else {
      dispatch(setContentChange("back"));
    }
  };

  const fetchApi = async (city) => {
    setfload(false);
    setLoading(true);
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=tr&appid=c2a2d1a959b551a9b3601e32bbdeb808`
      )
      .then((res) => dispatch(setWeather(res.data)));
    setLoading(false);
    setfload(true);
  };

  useEffect(() => {
    if(contentChange=="list"){
      setLoading(false);
      setfload(false);
    }
  }, [contentChange]);

  useEffect(() => {
    const word = search.toLowerCase();
    setCtName(word);
  }, [search]);

  const cityCheck = (city) => {
    const word = city.name;
    const wordd = word.toLowerCase();

    return wordd.includes(ctName);
  };

  const cityClick = (city) => {
    changeContentChange();
    fetchApi(city);
  };

  if (loading) {
    return (
      <div className="contentContainer">
        <div className="weatherContainer ">
          <div className="weatherContent ">
            <div className="weatherLayer1">
              <div className="weatherBigContentLayer1 loadAnimation">
                <div className="weatherIcon loadAnimation"></div>
                <div className="weatherDegree loadAnimation"></div>
              </div>
              <div className="weatherBigContentLayer2">
                <div className="weatherDetail loadAnimation"></div>
                <div className="weatherGraph loadAnimation"></div>
              </div>
            </div>
            <div className="weatherLayer2">
              <div className="nextDay loadAnimation"></div>
              <div className="nextDay loadAnimation"></div>
              <div className="nextDay loadAnimation"></div>
              <div className="nextDay loadAnimation"></div>
              <div className="nextDay loadAnimation"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (fload) {
    return (
      <div className="contentContainer">
        <div
          className={`weatherContainer  ${
            contentChange == "list" ? "displayNone" : ""
          }`}
        >
          <div className="weatherContent ">
            <div className="weatherLayer1">
              <div className="weatherBigContentLayer1">
                <div className="weatherIcon">
                  {weather.city.name}
                </div>
                <div className="weatherDegree"></div>
              </div>
              <div className="weatherBigContentLayer2">
                <div className="weatherDetail"></div>
                <div className="weatherGraph"></div>
              </div>
            </div>
            <div className="weatherLayer2">
              <div className="nextDay"></div>
              <div className="nextDay"></div>
              <div className="nextDay"></div>
              <div className="nextDay"></div>
              <div className="nextDay"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="contentContainer">
        <div
          className={`cityContainer ${
            contentChange == "back" ? "displayNone" : ""
          }`}
        >
          {cityNamesTurkey.map((city, key) =>
            cityCheck(city) ? (
              <div
                className="city"
                key={key}
                onClick={() => cityClick(city.name)}
              >
                {city.id} {city.name}
              </div>
            ) : null
          )}
        </div>
      </div>
    );
  }
};

export default Content;

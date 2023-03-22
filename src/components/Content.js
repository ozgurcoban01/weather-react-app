import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWeather } from "../redux/features/weatherSlice";
import axios, { all } from "axios";
import cityNamesTurkey from "./cityNamesTurkey.json";
import { setContentChange } from "../redux/features/contentChangeSlice";
import { setVideoType } from "../redux/features/videoTypeSlice";
import ReactAnimatedWeather from "react-animated-weather";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const Content = () => {
  const weather = useSelector((state) => state.weather.value);

  const [data,setData]=useState([
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]);
  
  const dispatch = useDispatch();
  const contentChange = useSelector((state) => state.contentChange.value);
  const search = useSelector((state) => state.search.value);

  const [loading, setLoading] = useState(false);
  const [fload, setfload] = useState(false);

  const [iconType, setIconType] = useState();
  const [iconColor, setIconColor] = useState();
  const [iconType1, setIconType1] = useState();
  const [iconColor1, setIconColor1] = useState();
  const [iconType2, setIconType2] = useState();
  const [iconColor2, setIconColor2] = useState();
  const [iconType3, setIconType3] = useState();
  const [iconColor3, setIconColor3] = useState();
  const [iconType4, setIconType4] = useState();
  const [iconColor4, setIconColor4] = useState();

  const [ctName, setCtName] = useState();

  const changeContentChange = () => {
    if (contentChange == "black") {
      dispatch(setContentChange("list"));
      console.log("list");
    } else {
      dispatch(setContentChange("back"));
    }
  };
  const defaults = {
    icon: "CLEAR_DAY",
    color: "goldenrod",
    size: 200,
    animate: true,
  };
  const defaults2 = {
    icon: "CLEAR_DAY",
    color: "goldenrod",
    size: 120,
    animate: true,
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
    dispatch(setVideoType(iconType));
  }, [iconType]);

  useEffect(() => {
    if (contentChange == "list") {
      setLoading(false);
      setfload(false);
    }
  }, [contentChange]);

  useEffect(() => {
    const word = search.toLowerCase();
    setCtName(word);
  }, [search]);

  useEffect(() => {

    if(fload){
      setData([{
        name: weather.list[0].dt_txt.slice(10,16),
        uv: weather.list[0].main.temp,
        pv:  weather.list[0].main.temp,
        amt: 2400,
      },
      {
        name: weather.list[1].dt_txt.slice(10,16),
        uv: weather.list[1].main.temp,
        pv: weather.list[1].main.temp,
        amt: 2400,
      },
      {
        name: weather.list[2].dt_txt.slice(10,16),
        uv: weather.list[2].main.temp,
        pv: weather.list[2].main.temp,
        amt: 2400,
      },
      {
        name: weather.list[3].dt_txt.slice(10,16),
        uv: weather.list[3].main.temp,
        pv: weather.list[3].main.temp,
        amt: 2400,
      },
      {
        name: weather.list[4].dt_txt.slice(10,16),
        uv: weather.list[4].main.temp,
        pv: weather.list[4].main.temp,
        amt: 2400,
      },
      {
        name:weather.list[5].dt_txt.slice(10,16),
        uv: weather.list[5].main.temp,
        pv: weather.list[5].main.temp,
        amt: 2400,
      },
      {
        name: weather.list[6].dt_txt.slice(10),
        uv: weather.list[6].main.temp,
        pv: weather.list[6].main.temp,
        amt: 2400,
      },
      {
        name:weather.list[7].dt_txt.slice(10,16),
        uv: weather.list[7].main.temp,
        pv: weather.list[7].main.temp,
        amt: 2400,
      }])
    }
    
    if (fload) {
      if (weather.list[0].weather[0].main == "Thunderstorm") {
        setIconType("RAIN");
        setIconColor("rgb(0, 225, 255)");
      } else if (weather.list[0].weather[0].main == "Drizzle") {
        setIconColor("rgba(255, 255, 255, 1)");
        setIconType("FOG");
      } else if (weather.list[0].weather[0].main == "Rain") {
        if (weather.list[0].weather[0].description == "light rain") {
          setIconColor("rgb(0, 225, 255)");
          setIconType("RAIN");
        } else {
          setIconColor("rgb(0, 125, 209)");
          setIconType("SLEET");
        }
      } else if (weather.list[0].weather[0].main == "Snow") {
        setIconColor("rgb(180, 246, 255)");
        setIconType("SNOW");
      } else if (weather.list[0].weather[0].main == "Mist") {
        setIconColor("rgba(114, 114, 114, 0.555)");
        setIconType("FOG");
      } else if (weather.list[0].weather[0].main == "Smoke") {
        setIconColor("rgba(114, 114, 114, 0.555)");
        setIconType("FOG");
      } else if (weather.list[0].weather[0].main == "Haze") {
        setIconColor("rgba(114, 114, 114, 0.555)");
        setIconType("FOG");
      } else if (weather.list[0].weather[0].main == "Dust") {
        setIconColor("rgba(114, 114, 114, 0.555)");
        setIconType("FOG");
      } else if (weather.list[0].weather[0].main == "Fog") {
        setIconColor("rgba(114, 114, 114, 0.555)");
        setIconType("FOG");
      } else if (weather.list[0].weather[0].main == "Sand") {
        setIconColor("rgba(114, 114, 114, 0.555)");
        setIconType("FOG");
      } else if (weather.list[0].weather[0].main == "Dust") {
        setIconColor("rgba(114, 114, 114, 0.555)");
        setIconType("FOG");
      } else if (weather.list[0].weather[0].main == "Ash") {
        setIconColor("rgba(114, 114, 114, 0.555)");
        setIconType("FOG");
      } else if (weather.list[0].weather[0].main == "Squall") {
        setIconColor("rgba(114, 114, 114, 0.555)");
        setIconType("FOG");
      } else if (weather.list[0].weather[0].main == "Tornado") {
        setIconColor("rgba(211, 211, 211, 0.555)");
        setIconType("WIND");
      } else if (weather.list[0].weather[0].main == "Clear") {
        setIconColor("rgb(255, 196, 0)");
        setIconType("CLEAR_DAY");
      } else if (weather.list[0].weather[0].main == "Clouds") {
        if (weather.list[0].weather[0].description == "overcast clouds") {
          setIconColor("rgb(114, 114, 114)");
          setIconType("CLOUDY");
        } else {
          setIconColor("rgb(177, 177, 177)");
          setIconType("PARTLY_CLOUDY_DAY");
        }
      }
    }

    if (fload) {
      if (weather.list[7].weather[0].main == "Thunderstorm") {
        setIconType1("RAIN");
        setIconColor1("rgb(0, 225, 255)");
      } else if (weather.list[7].weather[0].main == "Drizzle") {
        setIconColor1("rgba(255, 255, 255, 1)");
        setIconType1("FOG");
      } else if (weather.list[7].weather[0].main == "Rain") {
        if (weather.list[7].weather[0].description == "light rain") {
          setIconColor1("rgb(0, 225, 255)");
          setIconType1("RAIN");
        } else {
          setIconColor1("rgb(0, 125, 209)");
          setIconType1("SLEET");
        }
      } else if (weather.list[7].weather[0].main == "Snow") {
        setIconColor1("rgb(180, 246, 255)");
        setIconType1("SNOW");
      } else if (weather.list[7].weather[0].main == "Mist") {
        setIconColor1("rgba(114, 114, 114, 0.555)");
        setIconType1("FOG");
      } else if (weather.list[7].weather[0].main == "Smoke") {
        setIconColor1("rgba(114, 114, 114, 0.555)");
        setIconType1("FOG");
      } else if (weather.list[7].weather[0].main == "Haze") {
        setIconColor1("rgba(114, 114, 114, 0.555)");
        setIconType1("FOG");
      } else if (weather.list[7].weather[0].main == "Dust") {
        setIconColor1("rgba(114, 114, 114, 0.555)");
        setIconType1("FOG");
      } else if (weather.list[7].weather[0].main == "Fog") {
        setIconColor1("rgba(114, 114, 114, 0.555)");
        setIconType1("FOG");
      } else if (weather.list[7].weather[0].main == "Sand") {
        setIconColor1("rgba(114, 114, 114, 0.555)");
        setIconType1("FOG");
      } else if (weather.list[7].weather[0].main == "Dust") {
        setIconColor1("rgba(114, 114, 114, 0.555)");
        setIconType1("FOG");
      } else if (weather.list[7].weather[0].main == "Ash") {
        setIconColor1("rgba(114, 114, 114, 0.555)");
        setIconType1("FOG");
      } else if (weather.list[7].weather[0].main == "Squall") {
        setIconColor1("rgba(114, 114, 114, 0.555)");
        setIconType1("FOG");
      } else if (weather.list[7].weather[0].main == "Tornado") {
        setIconColor1("rgba(211, 211, 211, 0.555)");
        setIconType1("WIND");
      } else if (weather.list[7].weather[0].main == "Clear") {
        setIconColor1("rgb(255, 196, 0)");
        setIconType1("CLEAR_DAY");
      } else if (weather.list[7].weather[0].main == "Clouds") {
        if (weather.list[7].weather[0].description == "overcast clouds") {
          setIconColor1("rgb(114, 114, 114)");
          setIconType1("CLOUDY");
        } else {
          setIconColor1("rgb(177, 177, 177)");
          setIconType1("PARTLY_CLOUDY_DAY");
        }
      }
    }

    if (fload) {
      if (weather.list[15].weather[0].main == "Thunderstorm") {
        setIconType2("RAIN");
        setIconColor2("rgb(0, 225, 255)");
      } else if (weather.list[15].weather[0].main == "Drizzle") {
        setIconColor2("rgba(255, 255, 255, 1)");
        setIconType2("FOG");
      } else if (weather.list[15].weather[0].main == "Rain") {
        if (weather.list[15].weather[0].description == "light rain") {
          setIconColor2("rgb(0, 225, 255)");
          setIconType2("RAIN");
        } else {
          setIconColor2("rgb(0, 125, 209)");
          setIconType2("SLEET");
        }
      } else if (weather.list[15].weather[0].main == "Snow") {
        setIconColor2("rgb(180, 246, 255)");
        setIconType2("SNOW");
      } else if (weather.list[15].weather[0].main == "Mist") {
        setIconColor2("rgba(114, 114, 114, 0.555)");
        setIconType2("FOG");
      } else if (weather.list[15].weather[0].main == "Smoke") {
        setIconColor2("rgba(114, 114, 114, 0.555)");
        setIconType2("FOG");
      } else if (weather.list[15].weather[0].main == "Haze") {
        setIconColor2("rgba(114, 114, 114, 0.555)");
        setIconType2("FOG");
      } else if (weather.list[15].weather[0].main == "Dust") {
        setIconColor2("rgba(114, 114, 114, 0.555)");
        setIconType2("FOG");
      } else if (weather.list[15].weather[0].main == "Fog") {
        setIconColor2("rgba(114, 114, 114, 0.555)");
        setIconType2("FOG");
      } else if (weather.list[15].weather[0].main == "Sand") {
        setIconColor2("rgba(114, 114, 114, 0.555)");
        setIconType2("FOG");
      } else if (weather.list[15].weather[0].main == "Dust") {
        setIconColor2("rgba(114, 114, 114, 0.555)");
        setIconType2("FOG");
      } else if (weather.list[15].weather[0].main == "Ash") {
        setIconColor2("rgba(114, 114, 114, 0.555)");
        setIconType2("FOG");
      } else if (weather.list[15].weather[0].main == "Squall") {
        setIconColor2("rgba(114, 114, 114, 0.555)");
        setIconType2("FOG");
      } else if (weather.list[15].weather[0].main == "Tornado") {
        setIconColor2("rgba(211, 211, 211, 0.555)");
        setIconType2("WIND");
      } else if (weather.list[15].weather[0].main == "Clear") {
        setIconColor2("rgb(255, 196, 0)");
        setIconType2("CLEAR_DAY");
      } else if (weather.list[15].weather[0].main == "Clouds") {
        if (weather.list[15].weather[0].description == "overcast clouds") {
          setIconColor2("rgb(114, 114, 114)");
          setIconType2("CLOUDY");
        } else {
          setIconColor2("rgb(177, 177, 177)");
          setIconType2("PARTLY_CLOUDY_DAY");
        }
      }
    }

    if (fload) {
      if (weather.list[23].weather[0].main == "Thunderstorm") {
        setIconType3("RAIN");
        setIconColor3("rgb(0, 225, 255)");
      } else if (weather.list[23].weather[0].main == "Drizzle") {
        setIconColor3("rgba(255, 255, 255, 1)");
        setIconType3("FOG");
      } else if (weather.list[23].weather[0].main == "Rain") {
        if (weather.list[23].weather[0].description == "light rain") {
          setIconColor3("rgb(0, 225, 255)");
          setIconType3("RAIN");
        } else {
          setIconColor3("rgb(0, 125, 209)");
          setIconType3("SLEET");
        }
      } else if (weather.list[23].weather[0].main == "Snow") {
        setIconColor3("rgb(180, 246, 255)");
        setIconType3("SNOW");
      } else if (weather.list[23].weather[0].main == "Mist") {
        setIconColor3("rgba(114, 114, 114, 0.555)");
        setIconType3("FOG");
      } else if (weather.list[23].weather[0].main == "Smoke") {
        setIconColor3("rgba(114, 114, 114, 0.555)");
        setIconType3("FOG");
      } else if (weather.list[23].weather[0].main == "Haze") {
        setIconColor3("rgba(114, 114, 114, 0.555)");
        setIconType3("FOG");
      } else if (weather.list[23].weather[0].main == "Dust") {
        setIconColor3("rgba(114, 114, 114, 0.555)");
        setIconType3("FOG");
      } else if (weather.list[23].weather[0].main == "Fog") {
        setIconColor3("rgba(114, 114, 114, 0.555)");
        setIconType3("FOG");
      } else if (weather.list[23].weather[0].main == "Sand") {
        setIconColor3("rgba(114, 114, 114, 0.555)");
        setIconType3("FOG");
      } else if (weather.list[23].weather[0].main == "Dust") {
        setIconColor3("rgba(114, 114, 114, 0.555)");
        setIconType3("FOG");
      } else if (weather.list[23].weather[0].main == "Ash") {
        setIconColor3("rgba(114, 114, 114, 0.555)");
        setIconType3("FOG");
      } else if (weather.list[23].weather[0].main == "Squall") {
        setIconColor3("rgba(114, 114, 114, 0.555)");
        setIconType3("FOG");
      } else if (weather.list[23].weather[0].main == "Tornado") {
        setIconColor3("rgba(211, 211, 211, 0.555)");
        setIconType3("WIND");
      } else if (weather.list[23].weather[0].main == "Clear") {
        setIconColor3("rgb(255, 196, 0)");
        setIconType3("CLEAR_DAY");
      } else if (weather.list[23].weather[0].main == "Clouds") {
        if (weather.list[23].weather[0].description == "overcast clouds") {
          setIconColor3("rgb(114, 114, 114)");
          setIconType3("CLOUDY");
        } else {
          setIconColor3("rgb(177, 177, 177)");
          setIconType3("PARTLY_CLOUDY_DAY");
        }
      }
    }

    if (fload) {
      if (weather.list[31].weather[0].main == "Thunderstorm") {
        setIconType4("RAIN");
        setIconColor4("rgb(0, 225, 255)");
      } else if (weather.list[31].weather[0].main == "Drizzle") {
        setIconColor4("rgba(255, 255, 255, 1)");
        setIconType4("FOG");
      } else if (weather.list[31].weather[0].main == "Rain") {
        if (weather.list[31].weather[0].description == "light rain") {
          setIconColor4("rgb(0, 225, 255)");
          setIconType4("RAIN");
        } else {
          setIconColor4("rgb(0, 125, 209)");
          setIconType4("SLEET");
        }
      } else if (weather.list[31].weather[0].main == "Snow") {
        setIconColor4("rgb(180, 246, 255)");
        setIconType4("SNOW");
      } else if (weather.list[31].weather[0].main == "Mist") {
        setIconColor4("rgba(114, 114, 114, 0.555)");
        setIconType4("FOG");
      } else if (weather.list[31].weather[0].main == "Smoke") {
        setIconColor4("rgba(114, 114, 114, 0.555)");
        setIconType4("FOG");
      } else if (weather.list[31].weather[0].main == "Haze") {
        setIconColor4("rgba(114, 114, 114, 0.555)");
        setIconType4("FOG");
      } else if (weather.list[31].weather[0].main == "Dust") {
        setIconColor4("rgba(114, 114, 114, 0.555)");
        setIconType4("FOG");
      } else if (weather.list[31].weather[0].main == "Fog") {
        setIconColor4("rgba(114, 114, 114, 0.555)");
        setIconType4("FOG");
      } else if (weather.list[31].weather[0].main == "Sand") {
        setIconColor4("rgba(114, 114, 114, 0.555)");
        setIconType4("FOG");
      } else if (weather.list[31].weather[0].main == "Dust") {
        setIconColor4("rgba(114, 114, 114, 0.555)");
        setIconType4("FOG");
      } else if (weather.list[31].weather[0].main == "Ash") {
        setIconColor4("rgba(114, 114, 114, 0.555)");
        setIconType4("FOG");
      } else if (weather.list[31].weather[0].main == "Squall") {
        setIconColor4("rgba(114, 114, 114, 0.555)");
        setIconType4("FOG");
      } else if (weather.list[31].weather[0].main == "Tornado") {
        setIconColor4("rgba(211, 211, 211, 0.555)");
        setIconType4("WIND");
      } else if (weather.list[31].weather[0].main == "Clear") {
        setIconColor4("rgb(255, 196, 0)");
        setIconType4("CLEAR_DAY");
      } else if (weather.list[31].weather[0].main == "Clouds") {
        if (weather.list[31].weather[0].description == "overcast clouds") {
          setIconColor4("rgb(114, 114, 114)");
          setIconType4("CLOUDY");
        } else {
          setIconColor4("rgb(177, 177, 177)");
          setIconType4("PARTLY_CLOUDY_DAY");
        }
      }
    }

    
  }, [fload]);

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
              <div className="nextDay nextdayonload loadAnimation"></div>
              <div className="nextDay nextdayonload loadAnimation"></div>
              <div className="nextDay nextdayonload loadAnimation"></div>
              <div className="nextDay nextdayonload loadAnimation"></div>
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
              <div className="weatherBigContentLayer1 ">
                <div className="weatherIcon ">
                  <div className="weatherCityName">{weather.city.name}</div>
                  <div className="weatherCityIcon">
                    <ReactAnimatedWeather
                      className="bluryIcon"
                      icon={iconType}
                      color={iconColor}
                      size={defaults.size}
                      animate={defaults.animate}
                    />
                  </div>
                </div>
                <div className="weatherDegree ">
                  <div className="weatherDegreeDegree">
                    {weather.list[0].main.temp} C°
                  </div>
                  <div className="weatherDegreeDescription">
                    {weather.list[0].weather[0].description}
                  </div>
                </div>
              </div>
              <div className="weatherBigContentLayer2">
                <div className="weatherDetail">
                  <div className="detailIcon">
                    <ReactAnimatedWeather
                      className="bluryIcon"
                      icon="WIND"
                      color="white"
                      size="50"
                      animate={defaults.animate}
                    />
                  </div>
                  <div className="detailText">
                    Hissedilen: {weather.list[0].main.feels_like} C° Rüzgar
                    Hızı: {weather.list[0].wind.speed} Nem:{" "}
                    {weather.list[0].main.humidity}
                  </div>
                </div>
                <div className="weatherGraph">
                  <ResponsiveContainer width="100%" height="90%">
                    <AreaChart
                      width={500}
                      height={200}
                      data={data}
                      syncId="anyId"
                      margin={{
                        top: 30,
                        right: 50,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="pv"
                        stroke={iconColor}
                        fill={iconColor}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            <div className="weatherLayer2">
              <div className="nextDay">
                <div className="nextDayIcon nx">
                  <ReactAnimatedWeather
                    className="bluryIcon"
                    icon={iconType1}
                    color={iconColor1}
                    size={defaults2.size}
                    animate={defaults.animate}
                  />
                </div>
                <div className="nextDayDetail nx">
                  <div className="nextDayName nx">
                    {weather.list[7].dt_txt.slice(0, 10)}
                  </div>
                  <div className="nextDayDegree nx">
                    {weather.list[7].main.temp} C°
                  </div>
                </div>
              </div>
              <div className="nextDay">
                <div className="nextDayIcon nx">
                  <ReactAnimatedWeather
                    className="bluryIcon"
                    icon={iconType2}
                    color={iconColor2}
                    size={defaults2.size}
                    animate={defaults.animate}
                  />
                </div>
                <div className="nextDayDetail nx">
                  <div className="nextDayName nx">
                    {weather.list[15].dt_txt.slice(0, 10)}
                  </div>
                  <div className="nextDayDegree nx">
                    {weather.list[15].main.temp} C°
                  </div>
                </div>
              </div>
              <div className="nextDay">
                <div className="nextDayIcon nx">
                  <ReactAnimatedWeather
                    className="bluryIcon"
                    icon={iconType3}
                    color={iconColor3}
                    size={defaults2.size}
                    animate={defaults.animate}
                  />
                </div>
                <div className="nextDayDetail nx">
                  <div className="nextDayName nx">
                    {weather.list[23].dt_txt.slice(0, 10)}
                  </div>
                  <div className="nextDayDegree nx">
                    {weather.list[23].main.temp} C°
                  </div>
                </div>
              </div>
              <div className="nextDay">
                <div className="nextDayIcon nx">
                  <ReactAnimatedWeather
                    className="bluryIcon"
                    icon={iconType4}
                    color={iconColor4}
                    size={defaults2.size}
                    animate={defaults.animate}
                  />
                </div>
                <div className="nextDayDetail nx">
                  <div className="nextDayName nx">
                    {weather.list[31].dt_txt.slice(0, 10)}
                  </div>
                  <div className="nextDayDegree nx">
                    {weather.list[31].main.temp} C°
                  </div>
                </div>
              </div>
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

import './App.css';
import Search from './components/Search';
import Content from './components/Content';
import Map from './components/Map';
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";

import main from "./assets/main.mp4";
import clear from "./assets/clear.mp4";
import cloud from "./assets/cloud.mp4";
import fog from "./assets/fog.mp4";
import partycloud from "./assets/partycloud.mp4";
import rain from "./assets/rain.mp4";
import sleet from "./assets/sleet.mp4";
import snow from "./assets/snow.mp4";
import wind from "./assets/wind.mp4";

function App() {
  const videoType = useSelector((state) => state.videoType.value);
  const [videoWay, setVideoWay] = useState(main);

  useEffect(() => {
    if (videoType == "main") {
      setVideoWay(main);
    } else if (videoType == "CLEAR_DAY") {
      setVideoWay(clear);
    } 
    else if (videoType == "PARTLY_CLOUDY_DAY") {
      setVideoWay(partycloud);
    } 
    else if (videoType == "CLOUDY") {
      setVideoWay(cloud);
    } 
    else if (videoType == "RAIN") {
      setVideoWay(rain);
    } 
    else if (videoType == "SLEET") {
      setVideoWay(sleet);
    } 
    else if (videoType == "SNOW") {
      setVideoWay(snow);
    } 
    else if (videoType == "WIND") {
      setVideoWay(wind);
    }
    else if (videoType == "FOG") {
      setVideoWay(fog);
    } 
    
   }, [videoType]);

  return (
    <div className="App">
      <div className='videos'>
        <div className='video video1 activeVideo'>
          <div className='videoblur'></div>
          <video src={videoWay} className="fullVideo" muted autoPlay loop></video>
        </div>
      </div>
      <Search/>
      <Content/>
      <Map/>

    </div>
  );
}

export default App;

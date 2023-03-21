import './App.css';
import Search from './components/Search';
import Content from './components/Content';
import Map from './components/Map';
import { useSelector, useDispatch } from "react-redux";
import video1 from "./assets/videoplayback.mp4";

function App() {
  const weather = useSelector((state) => state.weather.value);
  
  return (
    <div className="App">
      <div className='videos'>
        <div className='video video1 activeVideo'>
          <div className='videoblur'></div>
          <video src={video1} muted autoPlay loop></video>
        </div>
      </div>
      <Search/>
      <Content/>
      <Map/>

    </div>
  );
}

export default App;

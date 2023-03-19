import './App.css';
import Search from './components/Search';
import Content from './components/Content';
import Map from './components/Map';
import { useSelector, useDispatch } from "react-redux";

function App() {
  const weather = useSelector((state) => state.weather.value);
  
  return (
    <div className="App">
      <Search/>
      <Content/>
      <Map/>

    </div>
  );
}

export default App;

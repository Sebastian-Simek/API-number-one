import '../App.css';
import { useEffect, useState } from 'react';
import { getWeather, getWeatherCoords } from '../services/fetch-utils';


export default function WeatherList() {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [{ lat, lon }, setWeatherCords] = useState({ name: 'Seattle', lat: 47.6038321, lon: -122.330062, });
  const [weather, setWeather] = useState();
  const cityState = `${city},${state}`;

  console.log(lat, lon);

  useEffect(() => {
    doLoad();
  }, []);
  
  async function handleSubmit(e){
    e.preventDefault();
    await doLoad();
  }   

  async function doLoad() {
    const data = await getWeatherCoords(cityState);
    setWeatherCords(data);
  }


  return (
    <div>
      <label> 
        <form onSubmit={handleSubmit}>
          <input onChange={({ target: { value } }) => setCity(value)} value={city}/>
          <input onChange={({ target: { value } }) => setState(value)} value={state} maxLength="2"/>
          <button>Submit</button>
        </form>
      </label>
    </div>
  );
}

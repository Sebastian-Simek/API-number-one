
import '../App.css';
import { useEffect, useState } from 'react';
import { getYelp } from '../services/fetch-utils';

export default function YelpList() {
  const [yelp, setYelp] = useState([]);
  const [yelpCity, setYelpCity] = useState('portland');
  console.log(yelp); //eslint-disable-line

  
  useEffect(() => {
    doLoad();
  }, []); //eslint-disable-line
  
  async function handleSubmit(e) {
    e.preventDefault();
    await doLoad();
    setYelpCity('');
  }
  
  async function doLoad() {
    const data = await getYelp(yelpCity);
    setYelp(data.businesses);
  }

  
  
  return (
    <div className='yelp'>
      <label onSubmit={handleSubmit}> Search City
        <form>
          <input onChange={({ target: { value } }) => setYelpCity(value)} value={yelpCity}/>
          <button>Submit</button>
        </form>
      </label>
      {
        yelp.map((yelpy, i) => <div 
          key={yelpy.id + i}> 
          <p>{yelpy.name}</p>
          <img src={yelpy.image_url}/>
        </div>)
      }
    </div>
  );
}

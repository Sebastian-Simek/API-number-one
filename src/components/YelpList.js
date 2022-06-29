
import '../App.css';
import { useEffect, useState } from 'react';
import { getYelp } from '../services/fetch-utils';

export default function YelpList() {
  const [yelp, setYelp] = useState([]);
  const [yelpCity, setYelpCity] = useState('Portland');
  const [{ code }, setError] = useState('');
  
  useEffect(() => {
    doLoad();
  }, []); //eslint-disable-line
  
  async function handleSubmit(e) {
    e.preventDefault();
    await doLoad();
    setYelpCity('');
  }
  
  async function doLoad() {
    const { error, businesses } = await getYelp(yelpCity);
    if (error) {
      setError(error);
      setYelp([]);
    } else {
      setYelp(businesses);
      setError('');
    }
    
    
  }

  
  
  return (
    <div className='yelp'>
      <label onSubmit={handleSubmit}> Search City
        <p>{code}</p>
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

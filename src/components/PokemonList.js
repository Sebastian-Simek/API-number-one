
import '../App.css';
import { useEffect, useState } from 'react';
import { getPokemon } from '../services/fetch-utils';

export default function PokemonList() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function doLoad() {
      const data = await getPokemon();
      setPokemon(data.results);
    }
    doLoad();
  }, []);
  
  return (
    <div className='pokemon'>
      {
        pokemon.map((poke, i) => <div 
          key={poke.pokemon + i}> 
          <p>{poke.pokemon}</p>
          <img src={poke.url_image}/>
        </div>)
      }
    </div>
  );
}

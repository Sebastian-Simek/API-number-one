
import '../App.css';
import { useEffect, useState } from 'react';
import { getPokemon } from '../services/fetch-utils';

export default function PokemonList() {

  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState('');
  
  useEffect(() => {
    doLoad();
    
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await doLoad();
    setFilteredPokemon('');
  }

  async function doLoad() {
    const data = await getPokemon(filteredPokemon);
    setPokemon(data.results);
  }

  
  
  return (
    <div className='pokemon'>
      <label onSubmit={handleSubmit}> Search Pokemon
        <form>
          <input onChange={({ target: { value } }) => setFilteredPokemon(value)} value={filteredPokemon}/>
          <button>Submit</button>
        </form>
      </label>
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

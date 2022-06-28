import { useEffect, useState } from 'react';
import './App.css';
import { getPokemon } from './services/fetch-utils';

function App() {
  const [pokemon, setPokemon] = useState([]);


  useEffect(() => {
    async function doLoad() {
      const data = await getPokemon();
      setPokemon(data);
    }
    doLoad();
  }, []);

  return (
    <div className="App">
      hello from me
    </div>
  );
}

export default App;

import './App.css';
import PokemonList from './components/PokemonList';
import WeatherList from './components/WeatherList';
import YelpList from './components/YelpList';

function App() {
  

  return (
    <div className="App">
      <PokemonList />
      <WeatherList />
      <YelpList />
    </div>
  );
}

export default App;

export async function getPokemon(filter) {
  const rawData = await fetch (`/.netlify/functions/pokemon?pokeQuery=${filter}`);
  const data = await rawData.json();
  return data;
}

export async function getYelp(filter) {
  const rawData = await fetch (`/.netlify/functions/yelp?yelpQuery=${filter}`);
  const data = await rawData.json();
  return data;
}

export async function getWeatherCoords(filter) {
  const rawData = await fetch (`/.netlify/functions/weatherCoords?cityQuery=${filter}`);
  const data = await rawData.json();
  return data[0].lon, data[0].lat;
}

export async function getWeather() {
  const rawData = await fetch (`/.netlify/functions/weather?`);
  const data = await rawData.json();
  return data;
}

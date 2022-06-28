export async function getPokemon() {
  const rawData = await fetch ('http://localhost:8888/.netlify/functions/pokemon');
  const data = await rawData.json();
  return data;
}
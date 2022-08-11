const apiKey = "7b0b324343680bad56f586df69036d1c";

//Converting city to coordinates
export async function nameToCoord(cityName) {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch data.");
  }
  const convertCity = {
    name: data[0].name,
    lat: data[0].lat,
    lon: data[0].lon,
  };
  return convertCity;
}

//Fetching data of one city
export async function dataOneCity(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch data.");
  }

  //Noch aussortieren eventuell
  const fetchedCity = {
    ...data,
  };
  return fetchedCity;
}

//Fragen:
// - More numbers of the locations in the API response

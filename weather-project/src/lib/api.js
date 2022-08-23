//Kürzen!!!

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

//Fetching 5 days forecast data every 3h
export async function forecast5(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch data.");
  }
  //Hier schon Daten kürzen?!
  return data;
}

export async function mapTempNew(x,y,z) {
  const response = await fetch(
    `https://tile.openweathermap.org/map/{temp_new}/${z}/${x}/${y}.png?appid=${apiKey}`
  );
  const data = await response.json();
  return data;
}

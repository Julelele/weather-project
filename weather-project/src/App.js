import "./App.css";
import Layout from "./components/Layout/Layout";

import { nameToCoord } from "./lib/api";
import { dataOneCity } from "./lib/api";
import CityForm from "./components/CityForm/CityForm";

function App() {

  async function submitCityHandler(cityName) {
    const convertCity = await nameToCoord(cityName);
    const lat = convertCity.lat;
    const lon = convertCity.lon;

    const fetchedCity = await dataOneCity(lat, lon);
    console.log(fetchedCity);
    console.log(fetchedCity.name);
    console.log(fetchedCity.main.temp);
    console.log(fetchedCity.coord.lat, fetchedCity.coord.lon);
  }

  return (
    <Layout>
      <div className="App">
        <CityForm onConfirm={submitCityHandler}/>
      </div>
    </Layout>
  );
}

export default App;

//Ideen:
//const fetchedCity, lat, lon mit redux speichern
//Wie und wann abrufen? Wo gemacht?
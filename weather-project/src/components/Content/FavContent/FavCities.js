import classes from "./FavCities.module.css";

import { nameToCoord } from "../../../lib/api";
import { dataOneCity } from "../../../lib/api";
import { forecast5 } from "../../../lib/api";
import { useDispatch } from "react-redux";
import { currentActions } from "../../../store/current-slice";
import { forecastActions } from "../../../store/forecast-slice";

const FavCities = (props) => {
  const { city } = props;
  const dispatch = useDispatch();

  async function onCityButtonHandler(city) {
    const convertCity = await nameToCoord(city);
    const lat = convertCity.lat;
    const lon = convertCity.lon;
    const fetchedCity = await dataOneCity(lat, lon);
    const forecastData = await forecast5(lat, lon);

    dispatch(
      currentActions.changeCity({
        cityName: fetchedCity.name,
        temp: fetchedCity.main.temp,
        maxTemp: fetchedCity.main.temp_max,
        minTemp: fetchedCity.main.temp_min,
      })
    );
    dispatch(
      forecastActions.forecastWeather({
        cityName: forecastData.city.name,
        cityCountry: forecastData.city.country,
        forecastDays: forecastData.cnt,
        list: forecastData.list || [],
        timezone: forecastData.city.timezone,
      })
    );
  }

  return (
    <button
      className={classes.cityButton}
      onClick={() => onCityButtonHandler(city)}
    >
      {city}
    </button>
  );
};

export default FavCities;

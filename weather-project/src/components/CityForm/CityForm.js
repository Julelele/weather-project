import classes from "./CityForm.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";

import search from "../Images/search.png";
import { nameToCoord } from "../../lib/api";
import { dataOneCity } from "../../lib/api";
import { forecast5 } from "../../lib/api";
import { currentActions } from "../../store/current-slice";
import { contentActions } from "../../store/content-slice";
import { forecastActions } from "../../store/forecast-slice";

const CityForm = () => {
  const dispatch = useDispatch();
  const [enteredCity, setEnteredCity] = useState("");
  // const [enteredCityIsValid, setEnteredCityIsValid] = useState(false);

  const cityInputChangeHandler = (event) => {
    setEnteredCity(event.target.value);
  };

  // useEffect(() => {
  //   if (enteredCityIsValid) {
  //   }
  // }, [enteredCityIsValid]);

  async function submitHandler(event) {
    event.preventDefault();

    // if (enteredCity.trim() === "") {
    //   setEnteredCityIsValid(false);
    //   return;
    // }
    // setEnteredCityIsValid(true);

    const convertCity = await nameToCoord(enteredCity);
    const lat = convertCity.lat;
    const lon = convertCity.lon;
    const fetchedCity = await dataOneCity(lat, lon);
    const forecastData = await forecast5(lat, lon);
    setEnteredCity("");
    // setEnteredCityIsValid(false);

    dispatch(
      currentActions.changeCity({
        cityName: fetchedCity.name,
        temp: fetchedCity.main.temp,
        maxTemp: fetchedCity.main.temp_max,
        minTemp: fetchedCity.main.temp_min,
      })
    );
    dispatch(contentActions.visible({ cartIsVisible: true }));
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
    <div onSubmit={submitHandler} className={classes.form}>
      <form className={classes.form}>
        <input
          type="text"
          className={classes.searchField}
          placeholder="Deine Stadt"
          onChange={cityInputChangeHandler}
          value={enteredCity}
        />

        <button type="button" className={classes.searchButton}>
          <img src={search} alt="search" />
        </button>
      </form>
    </div>
  );
};

export default CityForm;

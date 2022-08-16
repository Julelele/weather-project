import classes from "./CityForm.module.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";

import search from "../Images/search.png";
import { nameToCoord } from "../../lib/api";
import { dataOneCity } from "../../lib/api";
import { currentActions } from "../../store/current-slice";
import { contentActions } from "../../store/content-slice";

const CityForm = () => {
  const dispatch = useDispatch();
  const cityInputRef = useRef();

  //Methode noch kürzen!
  async function submitHandler(event) {
    event.preventDefault();
    const enteredCity = cityInputRef.current.value;
    const convertCity = await nameToCoord(enteredCity);
    const lat = convertCity.lat;
    const lon = convertCity.lon;

    const fetchedCity = await dataOneCity(lat, lon);

    dispatch(
      currentActions.changeCity({
        cityName: fetchedCity.name,
        temp: fetchedCity.main.temp,
        maxTemp: fetchedCity.main.temp_max,
        minTemp: fetchedCity.main.temp_min,
      })
    );
    dispatch(contentActions.visible({ cartIsVisible: true }));
  }

  return (
    <div onSubmit={submitHandler} className={classes.form}>
      <form className={classes.form}>
        <input
          type="text"
          ref={cityInputRef}
          className={classes.searchField}
          placeholder="Deine Stadt"
        />

        <button type="button" className={classes.searchButton}>
          <img src={search} alt="search" />
        </button>
      </form>
    </div>
  );
};

export default CityForm;

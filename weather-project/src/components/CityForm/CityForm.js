import classes from "./CityForm.module.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";

import search from "../Images/search.png";
import { nameToCoord } from "../../lib/api";
import { dataOneCity } from "../../lib/api";
import { currentActions } from "../../store/current-slice";

const CityForm = () => {
  const dispatch = useDispatch();
  const cityInputRef = useRef();

  // async function submitCityHandler(cityName) {
  //   const convertCity = await nameToCoord(cityName);
  //   const lat = convertCity.lat;
  //   const lon = convertCity.lon;
  //   const fetchedCity = await dataOneCity(lat, lon);

  // console.log(fetchedCity);
  // console.log(fetchedCity.name);
  // console.log(fetchedCity.main.temp);
  // console.log(fetchedCity.coord.lat, fetchedCity.coord.lon);
  // }

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
      })
    );
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

//Fragen und Erledigen
//Elemente zentrieren
//Search vergrößern
//form statt div

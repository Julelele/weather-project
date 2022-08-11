import classes from "./CityForm.module.css";
import { useRef } from "react";
import search from './search.png';

const CityForm = (props) => {
  const cityInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredCity = cityInputRef.current.value;
    props.onConfirm(enteredCity);
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.form}>
          <label htmlFor="city">Stadt</label>
          <input
            type="city"
            id="city"
            ref={cityInputRef}
            className={classes.searchField}
          />
          <button type="submit" className={classes.searchButton}>
            <img src={search} alt="search"/>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CityForm;

//Fragen und Erledigen
//Elemente zentrieren
//Search vergrößern


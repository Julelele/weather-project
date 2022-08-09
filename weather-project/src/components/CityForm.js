import classes from "./CityForm.module.css";
import { useRef } from "react";

const CityForm = (props) => {
  const cityInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredCity = cityInputRef.current.value;
    props.onConfirm(enteredCity);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className={classes.form}>
          <label htmlFor="city">Stadt</label>
          <input type="city" id="city" ref={cityInputRef} />
          <button>OK</button>
        </div>
      </form>
    </div>
  );
};

export default CityForm;

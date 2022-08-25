import classes from "./ForecastToday.module.css";
import CardWhite from "../../UI/CardWhite";

const ForecastToday = (props) => {
  const { amount, dateArray, time, temp, weather } = props;
  
  return (
    <li className={classes.element}>
      <CardWhite>
        <p>{amount === 0 ? "Jetzt" : time.hours + ".00 Uhr"}</p>
        <p>
          {dateArray.day}. {dateArray.monthDate}
        </p>
        <p>{temp} °C</p>
        <img
          src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt="weatherIcon"
        />
      </CardWhite>
    </li>
  );
};

export default ForecastToday;

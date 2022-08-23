import classes from "./ForecastGroup.module.css";
import Card from "../../UI/Card";
import {
  findMaxTemp,
  findMinTemp,
  averageTemp,
} from "../../../utility/Utility";

const ForecastGroup = (props) => {
  const {day} = props;

    const dayTempMax = findMaxTemp(day);
    const dayTempMin = findMinTemp(day);
    const dayTempAverage = averageTemp(day);
    const dayEqualDate = day[0].equalDate;

  return (
    <li className={classes.element}>
      <Card>
        {dayEqualDate ? (
          <h1>Heute</h1>
        ) : (
          <h1>{day[0].dateArray.dayDate}</h1>
        )}
        <p>{day[0].dateArray.day}. {day[0].dateArray.monthDate}</p>
        <p>Höchste Temperatur: {dayTempMax} °C</p>
        <p>Niedrigste Temperatur: {dayTempMin} °C</p>
        <p>Durschschnitt Temperatur: {dayTempAverage} °C</p>
      </Card>
    </li>
  );
};

export default ForecastGroup;

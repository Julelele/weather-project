import classes from "./ForecastDay.module.css";
import Card from "../../UI/Card";
import {
  findMaxTemp,
  findMinTemp,
  averageTemp,
} from "../../../utility/Utility";

const ForecastGroup = (props) => {
  const {today} = props;
  console.log(today)
  console.log(props.today)


    const todayTempMax = findMaxTemp(today);
    const todayTempMin = findMinTemp(today);
    const todayTempAverage = averageTemp(today);
    const todayEqualDate = today[0].equalDate;

  return (
    <li className={classes.element}>
      <Card>
        {todayEqualDate ? (
          <h1>Heute</h1>
        ) : (
          <h1>{today[0].dateArray.dayDate}</h1>
        )}
        <p>{today[0].dateArray.day}. {today[0].dateArray.monthDate}</p>
        <p>Höchste Temperatur: {todayTempMax}</p>
        <p>Niedrigste Temperatur: {todayTempMin}</p>
        <p>Durschshnitt Temperatur: {todayTempAverage}</p>
      </Card>
    </li>
  );
};

export default ForecastGroup;

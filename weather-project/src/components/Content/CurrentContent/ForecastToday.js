import classes from "./ForecastToday.module.css";
import Card from "../../UI/Card";

const ForecastToday = (props) => {
  const {dateArray, equalDate, temp } = props;

  //time and key is missing
  return (
    <li className={classes.element}>
      <Card>
        <p>{dateArray.time}</p>
        <p>
          {dateArray.day}. {dateArray.monthDate}
        </p>
        <p>{equalDate}</p>
        <p>{temp} °C</p>
      </Card>
    </li>
  );
};

export default ForecastToday;

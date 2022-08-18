import classes from "./ForecastDay.module.css";
import Card from "../../UI/Card";


const ForecastDay = (props) => {

  const { dateNumber, dateString, temp } = props;

  return (
    <li className={classes.element}>
      <Card>
        <p>{dateNumber}</p>
        <p>{dateString}</p>
        <p>{temp}</p>
      </Card>
    </li>
  );
};

export default ForecastDay;

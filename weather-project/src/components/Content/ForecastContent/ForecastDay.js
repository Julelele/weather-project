import classes from "./ForecastDay.module.css";
import Card from "../../UI/Card";
import useDateConverter from "../../../hooks/use-dateConverter";
import useTimestampConverter from "../../../hooks/use-timestampConverter";

const ForecastDay = (props) => {
  const { timestamp, dateString, temp } = props;

  const today = useDateConverter(new Date()); //array

  const dateTS = useTimestampConverter(timestamp);
  const dateArray = useDateConverter(dateTS); //array

  const equalDate = JSON.stringify(today) === JSON.stringify(dateArray);

  const { day, dayDate, monthDate } = dateArray;
  
  return (
    <li className={classes.element}>
      <Card>
        {equalDate ? <h1>Heute</h1> : <h1>{dayDate}</h1>}
        <p>
          {day}. {monthDate}
        </p>
        <p>{dateString}</p>
        <p>{temp}</p>
      </Card>
    </li>
  );
};

export default ForecastDay;

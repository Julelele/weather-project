import classes from "./ForecastDay.module.css";
// import { useState } from "react";
import Card from "../../UI/Card";
import useDateConverter from "../../../hooks/use-dateConverter";
import useTimestampConverter from "../../../hooks/use-timestampConverter";

const ForecastDay = (props) => {
  // const [equalDate, setEqualDate] = useState(false);
  const { timestamp, dateString, temp } = props;

  const x = useTimestampConverter(timestamp);

  const today = useDateConverter(new Date());
  const dateArray = useDateConverter(x);
  const { day, dayDate, monthDate } = dateArray;

  // if (
  //   today.day === day &&
  //   today.dayDate === dayDate &&
  //   today.monthDate === monthDate
  // ) {
  //   setEqualDate(true);
  // }

  return (
    <li className={classes.element}>
      <Card>
        {today.day === day &&
        today.dayDate === dayDate &&
        today.monthDate === monthDate ? (
          <h1>Heute</h1>
        ) : (
          <h1>{dayDate}</h1>
        )}
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

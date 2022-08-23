import classes from "./ForecastContent.module.css";
import Card from "../../UI/Card";
import { useSelector } from "react-redux";
import {
  tempConverter,
  dateConverter,
  timestampConverter,
  groupArray,
} from "../../../utility/Utility";
import ForecastGroup from "./ForecastGroup";

const ForecastContent = () => {
  const cityName = useSelector((state) => state.forecast.cityName);
  const cityCountry = useSelector((state) => state.forecast.cityCountry);
  const list = useSelector((state) => state.forecast.list);
  const today = dateConverter(new Date()); //array
  const selectedList = [];
  let counter = 0;

  //cleaner?
  for (let i = 0; i < list.length; i++) {
    const key = i;
    const timestamp = list[i].dt;
    const temp = tempConverter(list[i].main.temp);
    const tempMin = tempConverter(list[i].main.temp_min);
    const tempMax = tempConverter(list[i].main.temp_max);
    const dateTS = timestampConverter(timestamp);
    const dateArray = dateConverter(dateTS); //array
    const equalDate = JSON.stringify(today) === JSON.stringify(dateArray);
    if (equalDate) {
      counter = counter + 1;
    }
    selectedList.push({ key, equalDate, dateArray, temp, tempMin, tempMax });
  }

  const groupDays = groupArray(selectedList, counter);

  //key prop
  const weather = (
    <ul className={classes.list}>
      {groupDays.map((day) => (
        <ForecastGroup day={day} />
      ))}
    </ul>
  );

  return (
    <Card>
      <h1>5 Tage Vorhersage</h1>
      <div>
        {cityName}, {cityCountry}
      </div>
      <div>{weather}</div>
    </Card>
  );
};

export default ForecastContent;

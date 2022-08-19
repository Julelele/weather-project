import classes from "./ForecastContent.module.css";
import Card from "../../UI/Card";
import { useSelector } from "react-redux";
import {
  tempConverter,
  dateConverter,
  timestampConverter,
  groupArray,
  findMaxTemp,
  findMinTemp,
  averageTemp,
} from "../../../utility/Utility";
import ForecastGroup from "./ForecastGroup";

const ForecastContent = () => {
  const cityName = useSelector((state) => state.forecast.cityName);
  const cityCountry = useSelector((state) => state.forecast.cityCountry);
  const list = useSelector((state) => state.forecast.list);

  const today = dateConverter(new Date()); //array
  let counter = 0;
  const selectedList = [];

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
    // const { day, dayDate, monthDate } = dateArray;
  }

  const groupDays = groupArray(selectedList, counter);
  console.log(groupDays);
  console.log(groupDays.second);

  async function calculate() {
    const todayTempMax = await findMaxTemp(groupDays.today);
    const todayTempMin = await findMinTemp(groupDays.today);
    const todayTempAverage = averageTemp(groupDays.today);
    console.log(todayTempAverage);
    console.log(todayTempMin, todayTempMax);
  }
  calculate();

  const weather = (
    <ul className={classes.list}>
      <ForecastGroup today={groupDays.today} />
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

import classes from "./Content.module.css";
import CurrentContent from "./CurrentContent/CurrentContent";
import ForecastContent from "./ForecastContent/ForecastContent";
import video from "../Videos/SonneWolke.m4v";
import FavContent from "./FavContent/FavContent";
import { useSelector } from "react-redux";
import {
  tempConverter,
  dateConverter,
  timestampConverter
} from "../../utility/Utility";

const Content = () => {

  const list = useSelector((state) => state.forecast.list);
  const today = dateConverter(new Date());

  const selectedList = [];
  let counter = 0;
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

  return (
    <div className={classes.container}>
      <video className={classes.video} src={video} autoPlay loop muted />
      <div className={classes.wrapper}>
        <FavContent/>
        <CurrentContent selectedList={selectedList}/>
        <ForecastContent selectedList={selectedList} counter={counter} />
      </div>
    </div>
  );
};

export default Content;

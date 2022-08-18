import classes from "./ForecastContent.module.css";
import Card from "../../UI/Card";
import { useSelector } from "react-redux";
// import useTempConverter from "../../../hooks/use-tempConverter";
// import useDateConverter from "../../../hooks/use-dateConverter";
import ForecastDay from "./ForecastDay";

const ForecastContent = () => {
  const cityName = useSelector((state) => state.forecast.cityName);
  const cityCountry = useSelector((state) => state.forecast.cityCountry);
  const list = useSelector((state) => state.forecast.list);

  // let weather = [];
  // for (let i = 0; i < list.length; i++) {
  //   const key = i;
  //   const dateNumber = list[i].dt;
  //   const dateString = list[i].dt_txt;
  //   const temp = list[i].main.temp;
  //   const tempMin = list[i].main.temp_min;
  //   const tempMax = list[i].main.temp_max;
  //   weather.push({ key, dateNumber, dateString, temp, tempMin, tempMax });
  // }

  const weather = (
    <ul className={classes.list}>
      {list.map((day) => (
        <ForecastDay
          key={day.dt}
          timestamp={day.dt}
          dateString={day.dt_txt}
          temp={day.main.temp}
        />
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

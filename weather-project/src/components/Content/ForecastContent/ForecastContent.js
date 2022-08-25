import classes from "./ForecastContent.module.css";
import Card from "../../UI/Card";
import { useSelector } from "react-redux";
import {
  groupArray,
} from "../../../utility/Utility";
import ForecastGroup from "./ForecastGroup";

const ForecastContent = (props) => {
  const cityName = useSelector((state) => state.forecast.cityName);
  const cityCountry = useSelector((state) => state.forecast.cityCountry);
  
  const {selectedList, counter } = props;
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

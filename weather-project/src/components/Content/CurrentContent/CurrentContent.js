import classes from "./CurrentContent.module.css";
import Card from "../../UI/Card";
import { useSelector } from "react-redux";
import {tempConverter} from "../../../utility/Utility";

const CurrentContent = () => {
  const cityName = useSelector((state) => state.current.cityName);
  const temp = useSelector((state) => state.current.temp);

  return (
    <Card>
      <h1>Heute</h1>
      <p>{cityName} </p>
      <p>Aktuelle Temperatur: {tempConverter(temp, "Kelvin")} °C </p>
      <button className={classes.button}>Zu Favouriten</button>
    </Card>
  );
};

export default CurrentContent;

import classes from "./CurrentContent.module.css";
import Card from "../../UI/Card";
import { useSelector } from "react-redux";
import useTempConverter from "../../../hooks/use-tempConverter";

const CurrentContent = () => {
  const cityName = useSelector((state) => state.current.cityName);
  const temp = useSelector((state) => state.current.temp);
  const maxTemp = useSelector((state) => state.current.maxTemp);
  const minTemp = useSelector((state) => state.current.minTemp);

  return (
    <Card>
      <h1>Heute</h1>
      <div>{cityName} </div>
      <div>Aktuelle Temperatur: {useTempConverter(temp, "Kelvin")} °C </div>
      <div>Maximale Temperatur: {useTempConverter(maxTemp, "Kelvin")} °C</div>
      <div>Minimale Temperatur: {useTempConverter(minTemp, "Kelvin")} °C</div>
      <button className={classes.button}>Zu Favouriten</button>
    </Card>
  );
};

export default CurrentContent;

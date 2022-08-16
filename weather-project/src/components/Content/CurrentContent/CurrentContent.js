import classes from "./CurrentContent.module.css";
import Card from "../../UI/Card";
import { useSelector } from "react-redux";

const CurrentContent = () => {
  const cityName = useSelector((state) => state.current.cityName);
  const temp = useSelector((state) => state.current.temp);
  const maxTemp = useSelector((state) => state.current.maxtemp);
  const minTemp = useSelector((state) => state.current.mintemp);

  return (
    <Card className={classes.content}>
      <div>Das heutige Wetter</div>
      <div>Stadt: {cityName} </div>
      <div>Aktuelle Temperatur: {temp} Kelvin Maximale Temperatur: {maxTemp} Kelvin </div>
      <div>Minimale Temperatur: {minTemp} Kelvin </div>
    </Card>
  );
};

export default CurrentContent;

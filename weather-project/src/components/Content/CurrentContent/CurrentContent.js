import classes from "./CurrentContent.module.css";
import Card from "../../UI/Card";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tempConverter } from "../../../utility/Utility";
import { favActions } from "../../../store/fav-slice";
import ForecastToday from "./ForecastToday";

const CurrentContent = (props) => {
  const dispatch = useDispatch();
  const [isFavourite, setFavourite] = useState(false);
  const cityName = useSelector((state) => state.current.cityName);
  const temp = useSelector((state) => state.current.temp);
  const favList = useSelector((state) => state.favourite.favList);

  useEffect(() => {
    if (favList.find((city) => city === cityName)) {
      setFavourite(true);
    } else {
      setFavourite(false);
    }
  }, [favList, cityName]);

  function filterList() {
    const indexCity = favList.indexOf(cityName);
    const newFavList = favList.filter(function (f) {
      return f !== favList[indexCity];
    });
    return newFavList;
  }

  function addCityHandler() {
    isFavourite
      ? dispatch(favActions.removeFav({ newFavList: filterList() })) &&
        setFavourite(false)
      : dispatch(favActions.addFav({ favCity: cityName })) &&
        setFavourite(true);
  }

  const next24hEvery3h = (
    <ul className={classes.list}>
      {props.selectedList.slice(0, 8).map((timestamp) => (
        <ForecastToday
          amount={timestamp.key}
          time={timestamp.time}
          dateArray={timestamp.dateArray}
          equalDate={timestamp.equalDate}
          temp={timestamp.temp}
          weather={timestamp.weather}
        />
      ))}
    </ul>
  );

  return (
    <Card>
      <h1>Heute</h1>
      <p>{cityName} </p>
      <p>Aktuelle Temperatur: {tempConverter(temp, "Kelvin")} °C </p>
      <button className={classes.button1} onClick={addCityHandler}>
        Lieblingsstadt {isFavourite ? "entfernen" : "hinzufügen"}
      </button>
      <div>{next24hEvery3h}</div>
    </Card>
  );
};

export default CurrentContent;

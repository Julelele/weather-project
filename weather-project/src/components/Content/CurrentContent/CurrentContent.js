import classes from "./CurrentContent.module.css";
import Card from "../../UI/Card";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tempConverter } from "../../../utility/Utility";
import { favActions } from "../../../store/fav-slice";

const CurrentContent = () => {
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

  function addCityHandler() {
    isFavourite
      ? dispatch(favActions.removeFav({ favCity: cityName })) &&
        setFavourite(false)
      : dispatch(favActions.addFav({ favCity: cityName })) &&
        setFavourite(true);
  }

  return (
    <Card>
      <h1>Heute</h1>
      <p>{cityName} </p>
      <p>Aktuelle Temperatur: {tempConverter(temp, "Kelvin")} °C </p>
      <button className={classes.button1} onClick={addCityHandler}>
        Lieblingststadt {isFavourite ? "entfernen" : "hinzugügen"}
      </button>
    </Card>
  );
};

export default CurrentContent;

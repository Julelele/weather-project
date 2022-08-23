import React, { useState } from "react";
import classes from "./FavContent.module.css";
import Card from "../../UI/Card";
import { useSelector} from "react-redux";
import FavCities from "./FavCities";


const FavContent = () => {
  const favList = useSelector((state) => state.favourite.favList);
  const [isActive, setIsActive] = useState(false);
  const accordionData = {
    title: "Lieblingsstädte",
  };

  const { title } = accordionData;

  const cities = (
    <ul>
      {favList.map((city) => (
        <FavCities city={city}/>
      ))}
    </ul>
  );

  return (
    <Card>
      <div className={classes.accordion}>
        <div className={classes.accordionItem}>
          <div
            className={classes.accordionTitle}
            onClick={() => setIsActive(!isActive)}
          >
            <div className={classes.textLeft}>{title}</div>
            <div className={classes.textRight}>{isActive ? "-" : "+"}</div>
          </div>
          {isActive && <div className={classes.accordionContent}>{cities}</div>}
        </div>
      </div>
    </Card>
  );
};

export default FavContent;

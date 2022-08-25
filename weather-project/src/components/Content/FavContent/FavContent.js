import React, { useState } from "react";
import classes from "./FavContent.module.css";
import Card from "../../UI/Card";
import { useSelector } from "react-redux";
import FavCities from "./FavCities";

const FavContent = () => {
  const favList = useSelector((state) => state.favourite.favList);
  const [isActive, setIsActive] = useState(false);

  function sortList() {
    const clonedList = [...favList];
    const sortedList = clonedList.sort();
    return sortedList;
  }

  const cities = (
    <ul>
      {sortList(favList).map((city) => (
        <FavCities city={city} />
      ))}
    </ul>
  );

  return (
    <Card>
      <div className={classes.accordion}>
        <div onClick={() => setIsActive(!isActive)}>
          <div className={classes.textLeft}>Lieblingsstädte</div>
          <div className={classes.textRight}>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className={classes.accordionContent}>{cities}</div>}
      </div>
    </Card>
  );
};

export default FavContent;
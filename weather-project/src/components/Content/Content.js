import classes from "./Content.module.css";
import CurrentContent from "./CurrentContent/CurrentContent";
import ForecastContent from "./ForecastContent/ForecastContent";
import video from "../Videos/SonneWolke.m4v";
import FavContent from "./FavContent/FavContent";


const Content = () => {
  return (
    <div className={classes.container}>
      <video className={classes.video} src={video} autoPlay loop muted />
      <div className={classes.wrapper}>
        <FavContent/>
        <CurrentContent />
        <ForecastContent />
      </div>
    </div>
  );
};

export default Content;

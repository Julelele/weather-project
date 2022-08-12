import classes from "./Header.module.css";
import CityForm from "../CityForm/CityForm";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.title}>Wetter ist immer.</div>
      <div>
        <CityForm />
      </div>
    </header>
  );
};

export default Header;

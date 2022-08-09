import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.title}>Wetter ist immer.</div>
    </header>
  );
};

export default Header;

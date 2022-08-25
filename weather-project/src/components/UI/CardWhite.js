import classes from "./CardWhite.module.css";

const CardWhite = (props) => {
  return (
    <div>
      <div className={classes.card}>{props.children}</div>
    </div>
  );
};

export default CardWhite;

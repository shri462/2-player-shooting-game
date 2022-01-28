import classes from "../App.module.css";

const Player2 = (props) => {
  return (
    <div className={classes.player2}>
      <div>
        <i
          style={{ color: "red", fontSize: 40, padding: "5px" }}
          class="fas fa-briefcase-medical"
        ></i>
        {props.power2}
      </div>
      <div>Player 2</div>
      <button onClick={props.reducePower1}>
        <i class="fas fa-long-arrow-alt-left"></i> Shoot
      </button>
    </div>
  );
};

export default Player2;

import classes from "../App.module.css";

const Player1 = (props) => {
  return (
    <div className={classes.player1}>
      <div>
        <i
          style={{ color: "red", fontSize: 40, padding: "5px" }}
          class="fas fa-briefcase-medical"
        ></i>
        {props.power1}
      </div>
      <div>Player 1</div>
      <button onClick={props.reducePower2}>
        Shoot <i class="fas fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};

export default Player1;

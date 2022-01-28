import classes from "./App.module.css";
import Player1 from "./components/Player1";
import Player2 from "./components/Player2";
import { useEffect, useState } from "react";
// import GameResult from "./components/GameResult";

function App() {
  const [power1, setPower1] = useState(100);
  const [power2, setPower2] = useState(100);
  const [start, setStart] = useState(false);
  const [result, setResult] = useState("");
  const [rounds, setRounds] = useState(1);
  const [player1wins, setPlayer1wins] = useState(0);
  const [player2wins, setPlayer2wins] = useState(0);

  useEffect(() => {
    if (power1 === 0) {
      setResult("player 2");
      setPlayer2wins(player2wins + 1);
      console.log("player2" + player2wins);
    }
    if (power2 === 0) {
      setResult("player 1");
      setPlayer1wins(player1wins + 1);
      console.log("player1" + player1wins);
    }
    if (power1 === 0 || power2 === 0) {
      setResult("");
      setPower1(100);
      setPower2(100);
      setRounds(rounds + 1);
      // console.log(rounds);
    }
    if (rounds > 5) {
      if (player1wins !== player2wins) {
        if (player1wins > player2wins) {
          setResult("player 1 won");
        } else {
          setResult("player 2 won");
        }
      } else {
        setResult("its a tie");
      }
    } else {
      if (player1wins > 2) {
        setResult("player 1 won");
      }
      if (player2wins > 2) {
        setResult("player 2 won");
      }
    }
  }, [power1, power2, rounds, player1wins, player2wins]);

  const startButtonHandler = () => {
    setStart(!start);
  };

  const setPower1Handler = () => {
    const shoot = Math.floor(Math.random() * 20 + 1);
    let power = power1 - shoot;
    if (power <= 0) {
      setPower1(0);
    } else {
      setPower1(power);
    }
  };

  const setPower2Handler = () => {
    const shoot = Math.floor(Math.random() * 20 + 1);
    let power = power2 - shoot;
    if (power <= 0) {
      setPower2(0);
    } else {
      setPower2(power);
    }
  };

  return (
    <div className={classes.app}>
      {start && <Player1 power1={power1} reducePower2={setPower2Handler} />}

      {start && <Player2 power2={power2} reducePower1={setPower1Handler} />}

      {/* <div>{result}</div> */}
      {start && (
        <button className={classes.roundsbutton}> Round {rounds}</button>
      )}

      <button
        className={(start && classes.startbuttonhide) || classes.startbutton}
        onClick={startButtonHandler}
      >
        Start
      </button>

      <div>
        <h3>Results: </h3>

        <p>player 1 won : {player1wins}</p>
        <p>player 2 won : {player2wins}</p>

        <h2>Winner is : {result}</h2>
      </div>

      <div className={classes.rules}>
        <h3>Game Rules ( How to Play ):</h3>
        <ul style={{ listStyleType: "decimal" }}>
          <li>Click on Start button</li>
          <li>
            Each player have to click on <strong>Shoot</strong> button once on
            their turn. (<em>no cheating</em>😜🙏)
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;

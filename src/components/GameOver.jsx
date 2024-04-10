import React from "react";
import classes from "../css/GameOver.module.css";

export default function GameOver({ winner, onRestart }) {
  return (
    <div className={classes.gameOverWrapper}>
      <div className={classes.gameOverBorder}>
        <h2>Game Over!</h2>
        {winner && <p>{winner} won!</p>}
        {!winner && <p>It&apos;s draw!</p>}
        <p>
          <button onClick={onRestart}>Rematch!</button>
        </p>
      </div>
    </div>
  );
}

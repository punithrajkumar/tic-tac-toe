import classes from "./css/Log.module.css";

export default function Log({ turns }) {
  return (
    <ol className={classes.log}>
      {turns.map((turn) => {
        return (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.row}, {turn.square.col}
          </li>
        );
      })}
    </ol>
  );
}

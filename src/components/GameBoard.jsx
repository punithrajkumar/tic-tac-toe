import classes from "../css/GameBoard.module.css";
export default function GameBoard({ onSelectSquare, board }) {
  return (
    <div className={classes.gameWrapper}>
      <ol className={classes.gameBorder}>
        {board.map((row, rowIndex) => {
          return (
            <li key={rowIndex}>
              <ol>
                {row.map((playerSymbol, colIndex) => {
                  return (
                    <li key={colIndex}>
                      <button
                        className={classes.gameButtons}
                        onClick={() => {
                          onSelectSquare(rowIndex, colIndex);
                        }}
                        disabled={playerSymbol !== null}
                      >
                        {playerSymbol}
                      </button>
                    </li>
                  );
                })}
              </ol>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

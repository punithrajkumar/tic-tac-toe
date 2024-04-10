import React, { useState } from "react";
import classes from "../css/Players.module.css";

function Player({ initialName, symbol, onChangeName, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((edit) => !edit);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function inputHandler(e) {
    setPlayerName(e.target.value);
  }

  let editablePlayerName = <span>{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        value={playerName}
        type="text"
        onChange={(e) => {
          inputHandler(e);
        }}
        required
      />
    );
  }

  return (
    <div className={classes.playerWrapper}>
      <li className={isActive ? classes.active : undefined}>
        <span>
          {editablePlayerName}
          <span>{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </div>
  );
}

export default Player;

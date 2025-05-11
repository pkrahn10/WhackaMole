import React from "react";
import { useGameContext } from "../hooks/useGame";
import Hole from "./Hole";

const GameBoard = () => {
  const { score, molePosition, whackMole, restartGame } = useGameContext();
  const holes = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div>
      <h2>Score: {score}</h2>
      <button onClick={restartGame}>Restart</button>
      <div style={{ display: "flex", flexWrap: "wrap", width: 300 }}>
        {holes.map((index) => (
          <Hole
            key={index}
            index={index}
            hasMole={index === molePosition}
            onWhack={whackMole}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;

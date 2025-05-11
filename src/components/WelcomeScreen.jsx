import React from "react";
import { useGameContext } from "../hooks/useGame";

const WelcomeScreen = () => {
  const { startGame } = useGameContext();

  return (
    <div>
      <h1>Welcome to Whack-a-Mole!</h1>
      <p>Click the mole when it appears to score points.</p>
      <button onClick={startGame}>Play</button>
    </div>
  );
};

export default WelcomeScreen;

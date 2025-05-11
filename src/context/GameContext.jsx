import React, { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [molePosition, setMolePosition] = useState(
    Math.floor(Math.random() * 9)
  );

  const startGame = () => {
    setScore(0);
    setMolePosition(Math.floor(Math.random() * 9));
    setIsPlaying(true);
  };

  const whackMole = () => {
    setScore((prev) => prev + 1);
    setMolePosition(Math.floor(Math.random() * 9));
  };

  const restartGame = () => {
    setIsPlaying(false);
  };

  return (
    <GameContext.Provider
      value={{
        isPlaying,
        score,
        molePosition,
        startGame,
        whackMole,
        restartGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);

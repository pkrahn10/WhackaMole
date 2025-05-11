import React from "react";
import { GameProvider } from "./context/GameContext";
import GameBoard from "./components/GameBoard";
import WelcomeScreen from "./components/WelcomeScreen";
import { useGameContext } from "./hooks/useGame";

const AppContent = () => {
  const { isPlaying } = useGameContext();
  return isPlaying ? <GameBoard /> : <WelcomeScreen />;
};

const App = () => (
  <GameProvider>
    <AppContent />
  </GameProvider>
);

export default App;

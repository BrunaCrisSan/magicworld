// src/App.js
import './App.css';
import { useState } from 'react';
import Home from './pages/Home';
import GamePage from './pages/GamePage'; // Você vai criar essa página

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  if (!gameStarted) {
    // Aqui passamos a função que muda o estado
    return <Home onClick={() => setGameStarted(true)} />;
  }

  return <GamePage />;
}

export default App;
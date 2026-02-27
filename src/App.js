// src/App.js
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import GamePage from './pages/GamePage';
import ChallengePage from './pages/ChallengePage';

// Componente wrapper para lidar com a navegação da Home
function HomeWrapper() {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/game');
  };

  return <Home onClick={handleStartGame} />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeWrapper />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/desafio/:levelId" element={<ChallengePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
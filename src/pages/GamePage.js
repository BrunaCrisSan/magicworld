// src/pages/GamePage.js
import React from 'react';
import Header from '../components/Header';
import WorldMap from '../components/game/WorldMap';

const GamePage = () => {
  return (
    <div className="h-screen w-full overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Header fixo no topo */}
      <Header />

      {/* Área do mapa */}
      <div className="h-[calc(100vh-80px)] w-full">
        <WorldMap />
      </div>
    </div>
  );
};

export default GamePage;
// src/components/Header.js
import React from 'react';

const Header = ({ stars }) => {  // 👈 SÓ ADICIONA ISSO
  return (
    <header className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Avatar da criança */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-yellow-400 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
            <span className="text-2xl">😊</span>
          </div>
          <div className="text-white">
            <p className="font-bold text-lg">Aventureiro</p>
            <p className="text-sm opacity-90">Nível 1</p>
          </div>
        </div>

        {/* Estrelas/Pontos - AGORA DINÂMICO */}
        <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
          <span className="text-yellow-300 text-2xl">⭐</span>
          <span className="text-white font-bold text-xl">{stars}</span> {/* SÓ MUDA AQUI */}
          <span className="text-white/80 text-sm ml-1">pontos</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
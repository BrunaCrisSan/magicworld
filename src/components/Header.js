// src/components/Header.js
import React from 'react';

const Header = ({ stars, level = 1 }) => { // 👈 ADICIONA level como prop
  return (
    <header className="w-full py-2 sm:py-4 px-3 sm:px-6 bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Avatar da criança - RESPONSIVO */}
        <div className="flex items-center gap-1 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full border-2 sm:border-4 border-white shadow-lg flex items-center justify-center">
            <span className="text-base sm:text-xl md:text-2xl">😊</span>
          </div>
          <div className="text-white">
            <p className="font-bold text-xs sm:text-sm md:text-lg">Aventureiro</p>
            {/* 👇 USA A PROP level */}
            <p className="text-[10px] sm:text-xs md:text-sm opacity-90">Nível {level}</p>
          </div>
        </div>

        {/* Estrelas/Pontos - RESPONSIVO */}
        <div className="flex items-center gap-1 sm:gap-2 bg-white/20 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full backdrop-blur-sm">
          <span className="text-base sm:text-xl md:text-2xl text-yellow-300">⭐</span>
          <span className="text-white font-bold text-sm sm:text-base md:text-xl">{stars}</span>
          <span className="text-white/80 text-[10px] sm:text-xs md:text-sm ml-0.5 sm:ml-1">pts</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
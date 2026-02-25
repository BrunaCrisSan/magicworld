import React, { useState } from 'react';
import numioImage from '../assets/images/numio5.png';

function Home({ onClick = () => { }, children, className = '' }) {


  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center px-4 relative overflow-hidden">

      {/* Efeitos de fundo animados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="text-center space-y-6 sm:space-y-8 p-4 sm:p-8 max-w-4xl mx-auto w-full relative z-10">

        {/* Título */}
        <h1
          className="
            text-fluidTitle
            font-bold text-white animate-pulse
            whitespace-nowrap text-center leading-none
          "
        >
          🎮 JOGO DIVERTIDO 🎮
        </h1>

        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-center items-center my-6 sm:my-8">
            <div className="relative group">
              {/* Efeito de glow */}
              <div className="absolute inset-0 bg-purple-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

              {/* Container do personagem com imagem */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full border-4 border-white shadow-2xl overflow-hidden">
                <img
                  src={numioImage}
                  alt="Personagem do jogo"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/200?text=Numio';
                  }}
                />
              </div>

              {/* Nome do personagem */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold text-purple-900 shadow-lg whitespace-nowrap">
                Numio
              </div>
            </div>
          </div>
        </div>

        {/* Cards de informações */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
          {[
            { icon: '🚀', text: 'Aventura' },
            { icon: '⭐', text: 'Desafios' },
            { icon: '🏆', text: 'Recompensas' }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-white font-semibold">{item.text}</div>
            </div>
          ))}
        </div>

        <div className="space-y-2 sm:space-y-4 px-2">
          <h2 className="text-xl sm:text-3xl text-yellow-300 font-semibold drop-shadow-lg">
            Bem-vindo ao jogo!
          </h2>
          <p className="text-base sm:text-lg text-white opacity-90 drop-shadow">
            Prepare-se para uma aventura incrível 🚀
          </p>
        </div>

        <div className="pt-5 sm:pt-8">
          <button
            onClick={onClick}
            className="
              group relative
              inline-flex items-center justify-center
              px-8 py-4
              bg-gradient-to-r from-purple-600 to-pink-600
              text-xl sm:text-2xl text-white font-bold
              rounded-full shadow-2xl
              hover:from-purple-700 hover:to-pink-700
              hover:scale-110
              transform transition-all duration-300
              focus:outline-none focus:ring-4 focus:ring-purple-300
              leading-none
              max-w-full
              overflow-hidden
            "
          >
            {/* Efeito de brilho no hover */}
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>

            {/* Texto do botão */}
            <span className="relative flex items-center gap-2">
              COMEÇAR JOGO
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>

        {/* Footer com ícones animados */}
        <div className="flex items-center justify-center gap-2 pt-3 sm:pt-6">
          <span className="text-xs sm:text-sm text-white opacity-50">
            ⚡ Divirta-se!
          </span>
          <span className="animate-bounce inline-block">🎮</span>
          <span className="animate-pulse inline-block">✨</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
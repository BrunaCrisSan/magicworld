import React, { useState } from 'react';

const Home = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 flex flex-col items-center justify-center p-4">

      {/* Logo / Título com efeito */}
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 drop-shadow-2xl mb-2">
          RPG Quest
        </h1>
        <div className="w-40 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-auto"></div>
      </div>

      {/* Área do Personagem */}
      <div className="relative mb-12 group">
        {/* Efeito de glow */}
        <div className="absolute inset-0 bg-purple-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>

        {/* Container do personagem */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-2xl border-4 border-yellow-300/30 overflow-hidden hover:border-yellow-300/60 transition-all duration-300">

          {/* Placeholder do personagem */}
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-indigo-500/20 to-purple-600/20">

            {/* Ícone do personagem */}
            <svg
              className="w-32 h-32 md:w-40 md:h-40 text-yellow-300/80 mb-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>

            <span className="text-yellow-300/60 text-sm">Aventureiro</span>
          </div>
        </div>
      </div>

      {/* Botão Começar */}
      <button
        className={`
          relative px-12 py-5 text-2xl font-bold rounded-full
          bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400
          text-white shadow-2xl transform transition-all duration-300
          hover:scale-110 hover:from-yellow-300 hover:via-orange-300 hover:to-red-300
          active:scale-95 focus:outline-none focus:ring-4 focus:ring-yellow-300/50
          ${hover ? 'animate-pulse' : ''}
        `}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => console.log('Começar jogo!')}
      >
        {/* Efeito de brilho */}
        <span className="absolute inset-0 bg-white rounded-full blur-sm opacity-0 hover:opacity-30 transition-opacity"></span>

        {/* Texto do botão */}
        <span className="relative flex items-center justify-center gap-3">
          COMEÇAR
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </button>

      {/* Decorações de fundo */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-300/10 rounded-full blur-xl"></div>
    </div>
  );
};

// Animações customizadas
const style = document.createElement('style');
style.textContent = `
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in {
    animation: fade-in 1s ease-out;
  }
`;
document.head.appendChild(style);

export default Home;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import numioImage from '../assets/images/numio5.png';

function Home({ className = '' }) {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/game');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center px-4 relative overflow-hidden">

      {/* Efeitos de fundo animados - MAIS CORES! */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Estrelinhas piscando */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
      </div>

      <div className="text-center space-y-6 sm:space-y-8 p-4 sm:p-8 max-w-4xl mx-auto w-full relative z-10">

        {/* Título com emojis dançantes */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <span className="text-4xl sm:text-5xl animate-bounce">🐶</span>
          <h1
            className="
              text-fluidTitle
              font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-green-300
              whitespace-nowrap text-center leading-none drop-shadow-2xl
            "
          >
            NUMIO AVENTURA
          </h1>
          <span className="text-4xl sm:text-5xl animate-bounce delay-150">🐯</span>
        </div>

        <div className="text-2xl sm:text-3xl text-white animate-pulse">
          🦁 Aprenda somando com os animais! 🦁
        </div>

        {/* Personagem com efeitos especiais */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-center items-center my-4 sm:my-6">
            <div className="relative group cursor-pointer">
              {/* Glow colorido */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity animate-spin-slow"></div>

              {/* Coroa decorativa */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">
                👑
              </div>

              {/* Personagem */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full border-4 border-yellow-300 shadow-2xl overflow-hidden">
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

              {/* Balão de fala */}
              <div className="absolute -right-4 sm:-right-8 top-0 bg-white rounded-2xl p-3 shadow-xl max-w-[150px] animate-float">
                <p className="text-purple-600 font-bold text-sm">
                  Vamos somar? 🎲
                </p>
                <div className="absolute left-0 bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-white"></div>
              </div>

              {/* Nome com estilo */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-300 to-orange-400 px-6 py-2 rounded-full text-lg font-bold text-purple-900 shadow-lg whitespace-nowrap border-2 border-white">
                ⭐ Numio ⭐
              </div>
            </div>
          </div>
        </div>

        {/* Cards de recursos - MAIS INTERATIVOS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
          {[
            { icon: '🚀', text: 'Aventura', color: 'from-blue-400 to-blue-600', emoji: '✨' },
            { icon: '🧮', text: 'Somar', color: 'from-green-400 to-green-600', emoji: '➕' },
            { icon: '🏆', text: 'Conquistas', color: 'from-yellow-400 to-yellow-600', emoji: '🎯' }
          ].map((item, index) => (
            <div
              key={index}
              className={`
                bg-gradient-to-br ${item.color}
                rounded-xl p-5 border-2 border-white/30 
                hover:scale-110 transition-all duration-300 
                shadow-xl hover:shadow-2xl
                transform hover:-rotate-1
                cursor-pointer
              `}
            >
              <div className="text-4xl mb-2 animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                {item.icon}
              </div>
              <div className="text-white font-bold text-lg">{item.text}</div>
              <div className="text-white text-sm opacity-90">{item.emoji} divertido</div>
            </div>
          ))}
        </div>

        {/* Mensagem de boas-vindas animada */}
        <div className="space-y-2 sm:space-y-4 px-2 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
          <h2 className="text-2xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 font-bold drop-shadow-lg">
            🎉 Bem-vindo à diversão! 🎉
          </h2>
          <p className="text-lg sm:text-xl text-white drop-shadow flex items-center justify-center gap-2">
            <span className="animate-bounce">🐶</span>
            Aprenda a somar com animais
            <span className="animate-bounce delay-100">🐯</span>
          </p>
          <p className="text-white/80 text-base">
            Cachorrinhos + Tigrinhos + Leõezinhos = 🦁✨
          </p>
        </div>

        {/* Botão SUPER chamativo */}
        <div className="pt-5 sm:pt-8">
          <button
            onClick={handleStartGame}
            className="
              group relative
              inline-flex items-center justify-center
              px-10 py-5
              bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500
              text-2xl sm:text-3xl text-white font-bold
              rounded-full shadow-2xl
              hover:from-yellow-500 hover:via-orange-600 hover:to-pink-600
              hover:scale-125
              transform transition-all duration-300
              focus:outline-none focus:ring-4 focus:ring-yellow-300
              leading-none
              max-w-full
              overflow-hidden
              border-4 border-white/30
              animate-pulse
            "
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>

            <span className="relative flex items-center gap-3">
              <span className="text-3xl">🎮</span>
              COMEÇAR JOGO
              <span className="text-3xl">🎲</span>
              <svg
                className="w-6 h-6 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Footer animado */}
        <div className="flex items-center justify-center gap-4 pt-3 sm:pt-6">


          <div className="flex gap-1">
            <span className="animate-bounce inline-block text-2xl">🐶</span>
            <span className="animate-bounce delay-100 inline-block text-2xl">🐯</span>
            <span className="animate-bounce delay-200 inline-block text-2xl">🦁</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
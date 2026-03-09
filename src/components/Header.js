// src/components/Header.js
import React, { useState, useEffect } from 'react';

const Header = ({ stars, level = 1 }) => {
  const [greeting, setGreeting] = useState('');

  // Saudação baseada no horário
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('🌅 Bom dia');
    else if (hour < 18) setGreeting('☀️ Boa tarde');
    else setGreeting('🌙 Boa noite');
  }, []);

  // Mensagens motivacionais aleatórias
  const motivationalMessages = [
    'Você é incrível! ⭐',
    'Continue assim! 🚀',
    'Aprendendo muito! 📚',
    'Super herói! 🦸',
    'Matemágico! 🎩',
    'Gênio! 🧠',
    'Campeão! 🏆',
    'Estrela! ⭐',
  ];

  const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];

  return (
    <header className="w-full relative overflow-hidden">
      {/* FUNDO PREMIUM COM EFEITO DE VIDRO */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
        {/* Partículas brilhantes */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-float-particle"
              style={{
                width: Math.random() * 6 + 2 + 'px',
                height: Math.random() * 6 + 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                opacity: Math.random() * 0.5 + 0.3
              }}
            />
          ))}
        </div>

        {/* Ondas decorativas */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white/10 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white/10 to-transparent"></div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5">
        <div className="flex justify-between items-center">

          {/* ÁREA DO AVATAR - LADO ESQUERDO */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 group">
            {/* Avatar com efeito 3D e brilho */}
            <div className="relative">
              {/* Anel de brilho */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>

              {/* Avatar */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 
                            bg-gradient-to-br from-yellow-300 to-amber-500 
                            rounded-full border-3 sm:border-4 border-white 
                            shadow-2xl flex items-center justify-center
                            transform group-hover:scale-110 group-hover:rotate-6
                            transition-all duration-500">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                               transform group-hover:scale-110 transition-transform duration-500
                               drop-shadow-2xl">
                  😊
                </span>

                {/* Coroa decorativa para níveis altos */}
                {level >= 5 && (
                  <span className="absolute -top-3 -right-2 text-lg sm:text-xl md:text-2xl animate-bounce">
                    👑
                  </span>
                )}
              </div>
            </div>

            {/* Informações do aventureiro */}
            <div className="text-white">
              {/* Saudação animada */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-light opacity-90 animate-pulse-slow">
                {greeting},
              </p>

              {/* Nome do aventureiro */}
              <p className="font-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
                          bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent
                          drop-shadow-2xl leading-tight">
                Aventureiro
              </p>

              {/* Nível com design especial */}
              <div className="flex items-center gap-1 mt-0.5 sm:mt-1">
                <div className="flex items-center gap-0.5 px-1.5 py-0.5 
                              bg-gradient-to-r from-purple-500/30 to-pink-500/30 
                              rounded-full backdrop-blur-sm border border-white/20">
                  <span className="text-yellow-300 text-[10px] sm:text-xs md:text-sm">⚡</span>
                  <span className="text-white font-bold text-[8px] sm:text-[10px] md:text-xs">
                    NÍVEL {level}
                  </span>
                </div>

                {/* Mensagem motivacional (visível apenas em desktop) */}
                <span className="hidden lg:inline-block text-white/60 text-[10px] italic ml-1">
                  {randomMessage}
                </span>
              </div>
            </div>
          </div>

          {/* ÁREA DAS ESTRELAS - LADO DIREITO */}
          {/* ÁREA DAS ESTRELAS - LADO DIREITO - VERSÃO SUPER COMPACTA */}
          <div className="flex items-center gap-1 sm:gap-3 group">

            {/* Card de estrelas - MINI */}
            <div className="relative">
              {/* Efeito de brilho reduzido */}
              <div className="absolute -inset-1 bg-yellow-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Card compacto */}
              <div className="relative bg-gradient-to-r from-yellow-400/20 to-amber-400/20 
                  backdrop-blur-md px-2 py-1 sm:px-4 sm:py-2 
                  rounded-xl sm:rounded-2xl border border-white/30
                  shadow-lg sm:shadow-2xl
                  flex items-center gap-1 sm:gap-3
                  transform group-hover:scale-105 transition-all duration-500
                  overflow-hidden">

                {/* Efeito de brilho interno */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                {/* Estrela - MENOR */}
                <div className="relative">
                  <span className="text-base sm:text-xl md:text-2xl lg:text-3xl 
                       animate-sparkle block drop-shadow-2xl">
                    ⭐
                  </span>
                  {/* Partículas - MENORES */}
                  <span className="absolute -top-1 -right-1 text-[4px] sm:text-[8px] animate-ping">✨</span>
                  <span className="absolute -bottom-1 -left-1 text-[4px] sm:text-[8px] animate-ping delay-150">✨</span>
                </div>

                {/* Valor das estrelas - COMPACTO */}
                <div className="flex items-baseline gap-0.5 sm:gap-1">
                  <span className="text-white font-black text-sm sm:text-base md:text-lg lg:text-xl 
                       drop-shadow-2xl tabular-nums">
                    {stars}
                  </span>
                  <span className="text-white/60 text-[6px] sm:text-[8px] md:text-[10px] font-medium">
                    pts
                  </span>
                </div>

                {/* Barra de progresso - OPCIONAL (escondida no mobile) */}
                <div className="hidden sm:block w-12 md:w-16 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full"
                    style={{ width: `${Math.min((stars % 10) * 10, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Menu rápido - MINI */}
            <button className="relative group/menu">
              <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 
                  bg-white/10 backdrop-blur-md rounded-full 
                  border border-white/30
                  flex items-center justify-center
                  hover:bg-white/20 transition-all duration-300
                  hover:scale-110">
                <span className="text-white text-xs sm:text-sm md:text-base">☰</span>
              </div>

              {/* Tooltip - MENOR */}
              <span className="absolute -bottom-6 right-0 whitespace-nowrap
                   bg-black/80 text-white text-[6px] sm:text-[8px] 
                   px-1.5 py-0.5 rounded opacity-0 group-hover/menu:opacity-100 
                   transition-opacity duration-300">
                Menu
              </span>
            </button>
          </div>
        </div>

        {/* BARRA DE STATUS INFERIOR */}
        <div className="mt-2 sm:mt-3 flex justify-between items-center text-white/40 text-[6px] sm:text-[8px] md:text-[10px]">
          <span>🔥 Sequência: 3 dias</span>
          <span>🏆 Conquistas: 12</span>
          <span>📊 {new Date().toLocaleDateString('pt-BR')}</span>
        </div>
      </div>

      {/* CSS PARA ANIMAÇÕES */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes sparkle {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        .animate-float-particle {
          animation: float-particle 5s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;
// src/components/game/WorldMap.js - VERSÃO PREMIUM
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Level from './Level';

const WorldMap = () => {
  const navigate = useNavigate();
  const [hoveredLevel, setHoveredLevel] = useState(null);

  // 👇 ESTADO LOCAL DOS NÍVEIS
  const [levels, setLevels] = useState([
    { id: 1, status: 'concluido' },
    { id: 2, status: 'concluido' },
    { id: 3, status: 'ativo' },
    { id: 4, status: 'bloqueado' },
    { id: 5, status: 'bloqueado' },
  ]);

  // 👇 CARREGA DO LOCALSTORAGE
  useEffect(() => {
    const savedLevels = localStorage.getItem('gameLevels');
    if (savedLevels) {
      setLevels(JSON.parse(savedLevels));
    }
  }, []);

  // 👇 SALVA NO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem('gameLevels', JSON.stringify(levels));
  }, [levels]);

  // 👇 FUNÇÃO PARA COMPLETAR NÍVEL
  const completeLevel = (levelId) => {
    setLevels(prevLevels => {
      const newLevels = prevLevels.map(level => {
        if (level.id === levelId) {
          return { ...level, status: 'concluido' };
        }
        if (level.id === levelId + 1 && level.status === 'bloqueado') {
          return { ...level, status: 'ativo' };
        }
        return level;
      });
      return newLevels;
    });
  };

  const handleLevelClick = (level) => {
    if (level.status !== 'bloqueado') {
      navigate(`/desafio/${level.id}`);
    }
  };

  // Cores mais elegantes para os badges
  const levelColors = {
    1: 'bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 border-emerald-400/50 text-emerald-300',
    2: 'bg-gradient-to-r from-yellow-500/20 to-amber-400/20 border-yellow-400/50 text-yellow-300',
    3: 'bg-gradient-to-r from-orange-500/20 to-red-400/20 border-orange-400/50 text-orange-300',
    4: 'bg-gradient-to-r from-red-500/20 to-pink-400/20 border-red-400/50 text-red-300',
    5: 'bg-gradient-to-r from-purple-500/20 to-fuchsia-400/20 border-purple-400/50 text-purple-300'
  };

  // Função para calcular a faixa de cada nível
  const getLevelRange = (levelId) => {
    const start = (levelId - 1) * 50 + 1;
    const end = levelId * 50;
    return { start, end };
  };

  return (
    <div className="relative w-full h-full min-h-[600px] bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-900 overflow-hidden">
      {/* BACKGROUND COM ESTRELAS */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
      </div>

      {/* ÁREA SUPERIOR PREMIUM */}
      <div className="relative z-30 pt-4 xs:pt-5 sm:pt-6 pb-2 px-3">
        {/* TÍTULO COM EFEITO DE VIDRO */}
        <div className="max-w-7xl mx-auto">
          <div className="relative inline-block">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300 drop-shadow-2xl">
              🌟 JORNADA ÉPICA 🌟
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </div>
          
          {/* SUBTÍTULO */}
          <p className="text-white/60 text-xs xs:text-sm sm:text-base mt-2 font-light tracking-wider">
            Escolha seu desafio e avance na aventura!
          </p>
        </div>

        {/* LEGENDA DOS NÍVEIS - DESIGN PREMIUM */}
        <div className="max-w-7xl mx-auto mt-4 xs:mt-5 sm:mt-6">
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {levels.map((level) => {
              const isAtivo = level.id === 3;
              const isHovered = level.id === hoveredLevel;
              const range = getLevelRange(level.id);

              return (
                <div
                  key={level.id}
                  className={`
                    relative group
                    px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 
                    rounded-full 
                    backdrop-blur-md
                    border transition-all duration-300
                    ${levelColors[level.id]}
                    ${isAtivo ? 'ring-2 ring-yellow-400 shadow-lg shadow-yellow-400/30 scale-105' : ''}
                    ${isHovered ? 'scale-110 shadow-xl' : ''}
                    cursor-default
                  `}
                  onMouseEnter={() => setHoveredLevel(level.id)}
                  onMouseLeave={() => setHoveredLevel(null)}
                >
                  {/* ÍCONE DO NÍVEL */}
                  <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
                    <span className="text-base xs:text-lg sm:text-xl font-bold">
                      {level.id}
                    </span>
                    
                    <span className="hidden xs:inline text-[10px] xs:text-xs sm:text-sm font-medium opacity-90">
                      {range.start}-{range.end}
                    </span>

                    {/* BADGE DE STATUS */}
                    <div className={`
                      flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[8px] xs:text-[10px] sm:text-xs font-bold
                      ${level.status === 'concluido' ? 'bg-green-500/30 text-green-300 border border-green-400/30' : ''}
                      ${level.status === 'ativo' ? 'bg-yellow-500/30 text-yellow-300 border border-yellow-400/30 animate-pulse' : ''}
                      ${level.status === 'bloqueado' ? 'bg-gray-500/30 text-gray-400 border border-gray-500/30' : ''}
                    `}>
                      {level.status === 'concluido' && '⭐'}
                      {level.status === 'ativo' && '⚔️'}
                      {level.status === 'bloqueado' && '🔒'}
                    </div>
                  </div>

                  {/* EFEITO DE BRILHO NO HOVER */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CONTAINER DOS NÍVEIS */}
      <div className="relative h-[calc(100%-180px)] xs:h-[calc(100%-200px)] sm:h-[calc(100%-220px)] flex items-center justify-center px-4">
        {/* TRILHA LUMINOSA */}
        <div className="absolute w-[85%] xs:w-[80%] sm:w-[75%] md:w-[70%] lg:w-[65%] xl:w-[60%] 
                      h-2 xs:h-3 sm:h-4 
                      bg-gradient-to-r from-amber-400/30 via-yellow-400/30 to-orange-400/30 
                      rounded-full blur-md">
        </div>
        
        <div className="absolute w-[85%] xs:w-[80%] sm:w-[75%] md:w-[70%] lg:w-[65%] xl:w-[60%] 
                      h-0.5 xs:h-1 sm:h-1.5 
                      bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 
                      rounded-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div>
        </div>

        {/* NÍVEIS EM LINHA */}
        <div className="relative flex gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 z-20">
          {levels.map((level, index) => (
            <div
              key={level.id}
              className="relative"
              onMouseEnter={() => setHoveredLevel(level.id)}
              onMouseLeave={() => setHoveredLevel(null)}
            >
              {/* CONECTOR ENTRE NÍVEIS */}
              {index < levels.length - 1 && (
                <>
                  {/* Linha base */}
                  <div className={`
                    absolute top-1/2 
                    -right-2 xs:-right-3 sm:-right-4 md:-right-5 lg:-right-6
                    w-2 xs:w-3 sm:w-4 md:w-5 lg:w-6 
                    h-0.5 
                    bg-gradient-to-r from-yellow-400/50 to-orange-400/50 
                    transform -translate-y-1/2
                  `} />
                  
                  {/* Brilho pulsante */}
                  <div className={`
                    absolute top-1/2 
                    -right-2 xs:-right-3 sm:-right-4 md:-right-5 lg:-right-6
                    w-2 xs:w-3 sm:w-4 md:w-5 lg:w-6 
                    h-1
                    bg-gradient-to-r from-yellow-400/30 to-orange-400/30 
                    transform -translate-y-1/2 blur-sm
                    animate-pulse
                  `} />
                </>
              )}

              {/* NÍVEL */}
              <div
                onClick={() => handleLevelClick(level)}
                className={`
                  cursor-pointer transition-all duration-500
                  ${level.status === 'bloqueado' 
                    ? 'opacity-50 cursor-not-allowed filter grayscale' 
                    : 'hover:scale-125 hover:-translate-y-2 hover:rotate-3'
                  }
                  relative group
                `}
              >
                <Level number={level.id} status={level.status} />

                {/* EFEITO DE DESTAQUE NO ATIVO */}
                {level.status === 'ativo' && (
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 blur-xl animate-pulse"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTÃO HOME - PREMIUM */}
      <div className="fixed bottom-4 left-4 right-4 flex justify-between z-50">
        <button
          onClick={() => navigate('/')}
          className="group relative
            bg-gradient-to-r from-indigo-500 to-purple-600 
            hover:from-indigo-600 hover:to-purple-700 
            text-white font-bold 
            py-2 px-3 sm:py-2.5 sm:px-5
            rounded-full shadow-2xl 
            flex items-center gap-1.5 sm:gap-3
            text-xs sm:text-sm
            border border-white/30
            transition-all duration-300
            hover:scale-110 active:scale-95
            overflow-hidden
          "
        >
          {/* Efeito de brilho */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>
          
          <span className="relative z-10 text-base sm:text-xl">🏠</span>
          <span className="relative z-10 hidden sm:inline">Home</span>
        </button>

        {/* BOTÃO DE INFORMAÇÕES (OPCIONAL) */}
        <button
          className="group relative
            bg-gradient-to-r from-amber-500 to-orange-600 
            hover:from-amber-600 hover:to-orange-700 
            text-white font-bold 
            py-2 px-3 sm:py-2.5 sm:px-5
            rounded-full shadow-2xl 
            flex items-center gap-1.5 sm:gap-3
            text-xs sm:text-sm
            border border-white/30
            transition-all duration-300
            hover:scale-110 active:scale-95
            overflow-hidden
          "
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>
          <span className="relative z-10 text-base sm:text-xl">❓</span>
          <span className="relative z-10 hidden sm:inline">Ajuda</span>
        </button>
      </div>

      {/* DECORAÇÕES FLUTUANTES */}
      <div className="absolute bottom-4 left-4 text-4xl xs:text-5xl sm:text-6xl text-white/10 animate-float-slow">⛰️</div>
      <div className="absolute top-24 right-4 text-4xl xs:text-5xl sm:text-6xl text-white/10 animate-float-slower">👑</div>
      <div className="absolute top-40 left-8 text-3xl xs:text-4xl sm:text-5xl text-white/5 animate-float">✨</div>

      {/* INSTRUÇÃO FLUTUANTE */}
      <div className="absolute bottom-16 xs:bottom-20 left-1/2 transform -translate-x-1/2 
                    bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full
                    border border-white/20 shadow-xl">
        <p className="text-white/80 text-[10px] xs:text-xs sm:text-sm font-medium flex items-center gap-2">
          <span className="animate-bounce">👆</span>
          <span>Clique nos níveis disponíveis para começar!</span>
          <span className="animate-bounce delay-150">👉</span>
        </p>
      </div>

      {/* CSS PARA ANIMAÇÕES */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 5s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default WorldMap;
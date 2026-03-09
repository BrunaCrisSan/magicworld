// src/components/game/Level.js
import React from 'react';

const Level = ({ number, status = 'bloqueado' }) => {
  // Configurações com cores vibrantes
  const levelConfig = {
    ativo: {
      container: 'bg-gradient-to-br from-amber-400 via-orange-400 to-red-400 ring-2 sm:ring-4 ring-yellow-300 shadow-lg sm:shadow-2xl shadow-orange-500/50',
      icon: '⚔️',
      textColor: 'text-yellow-200',
      label: 'ATIVO',
      glow: 'animate-pulse',
      badge: 'bg-gradient-to-r from-yellow-500 to-orange-500',
      size: 'w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20',
    },
    concluido: {
      container: 'bg-gradient-to-br from-purple-400 via-fuchsia-500 to-pink-500 ring-2 sm:ring-4 ring-purple-300 shadow-lg sm:shadow-2xl shadow-purple-500/50',
      icon: '🏆',
      textColor: 'text-yellow-200',
      label: 'CONCLUÍDO',
      glow: '',
      badge: 'bg-gradient-to-r from-purple-500 to-pink-500',
      size: 'w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20',
    },
    bloqueado: {
      container: 'bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 ring-2 ring-gray-500 opacity-80 shadow-lg',
      icon: '🔒',
      textColor: 'text-gray-300',
      label: 'BLOQUEADO',
      glow: '',
      badge: 'bg-gradient-to-r from-gray-600 to-gray-700',
      size: 'w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16',
    },
  };

  const currentConfig = levelConfig[status] || levelConfig.bloqueado;

  // Cores para cada número
  const numberColors = {
    1: 'from-yellow-300 to-amber-500 text-amber-900 border-yellow-200',
    2: 'from-orange-300 to-red-500 text-red-900 border-orange-200',
    3: 'from-red-300 to-pink-500 text-pink-900 border-red-200',
    4: 'from-pink-300 to-purple-500 text-purple-900 border-pink-200',
    5: 'from-purple-300 to-indigo-500 text-indigo-900 border-purple-200',
    6: 'from-indigo-300 to-blue-500 text-blue-900 border-indigo-200',
    7: 'from-blue-300 to-cyan-500 text-cyan-900 border-blue-200',
    8: 'from-cyan-300 to-teal-500 text-teal-900 border-cyan-200',
    9: 'from-teal-300 to-emerald-500 text-emerald-900 border-teal-200',
    10: 'from-emerald-300 to-green-500 text-green-900 border-emerald-200',
  };

  const numberColor = numberColors[number] || numberColors[10];

  return (
    <div className="flex flex-col items-center group relative">
      {/* Círculo do nível com efeitos especiais */}
      <div
        className={`
          relative 
          ${currentConfig.size}
          rounded-full
          flex items-center justify-center
          transition-all duration-300 ease-out
          transform hover:scale-110 hover:-translate-y-1
          ${currentConfig.container}
          cursor-pointer
          shadow-xl
          border-2 sm:border-4 border-white/40
          ${status === 'bloqueado' ? 'cursor-not-allowed hover:scale-100 hover:translate-y-0' : ''}
          before:absolute before:inset-0 before:rounded-full before:bg-white/20 before:scale-0 before:opacity-0 before:transition-all before:duration-300
          hover:before:scale-100 hover:before:opacity-100
        `}
        role="button"
        aria-label={`Nível ${number} - ${currentConfig.label}`}
        tabIndex={status === 'bloqueado' ? -1 : 0}
      >
        {/* Efeito de brilho para ativo */}
        {status === 'ativo' && (
          <>
            <div className="absolute -inset-1 sm:-inset-2 rounded-full bg-yellow-400/40 animate-ping" />
            <div className="absolute -inset-2 sm:-inset-4 rounded-full bg-orange-400/30 animate-ping" style={{ animationDelay: '0.5s' }} />
          </>
        )}

        {/* Efeito de brilho para concluído */}
        {status === 'concluido' && (
          <div className="absolute -inset-1 rounded-full bg-purple-400/30 animate-pulse" />
        )}

        {/* Ícone */}
        <span className={`
          relative z-10
          text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl
          transition-all duration-300
          group-hover:scale-125 group-hover:rotate-12
          drop-shadow-2xl
          ${status === 'bloqueado' ? 'opacity-50 grayscale' : ''}
        `}>
          {currentConfig.icon}
        </span>

        {/* Número com efeito 3D */}
        <div className={`
          absolute -bottom-1 -right-1
          w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8
          rounded-full
          bg-gradient-to-br ${numberColor.split(' ')[0]} ${numberColor.split(' ')[1]}
          flex items-center justify-center
          shadow-xl
          border-2 sm:border-4 ${numberColor.split(' ')[3]}
          font-black
          text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-sm
          ${numberColor.split(' ')[2]}
          z-20
          transform group-hover:scale-110 group-hover:rotate-6
          transition-all duration-300
        `}>
          {number}
        </div>

        {/* Estrelinha decorativa para concluído */}
        {status === 'concluido' && (
          <div className="absolute -top-1 -left-1 text-[8px] xs:text-[10px] sm:text-xs animate-bounce">
            ⭐
          </div>
        )}
      </div>

      {/* Badge de status elegante */}
      <div className="mt-1 sm:mt-2 text-center w-full">
        <div className={`
          inline-flex items-center gap-0.5 sm:gap-1
          px-1.5 sm:px-2 py-0.5 rounded-full
          ${currentConfig.badge}
          shadow-lg
          border border-white/20
          backdrop-blur-sm
        `}>
          {/* Ícone do status */}
          <span className="text-[8px] xs:text-[10px] sm:text-xs">
            {status === 'ativo' && '⚡'}
            {status === 'concluido' && '🏆'}
            {status === 'bloqueado' && '🔒'}
          </span>

          {/* Texto do status */}
          <span className={`
            font-bold
            text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs
            ${currentConfig.textColor}
          `}>
            {status === 'ativo' && 'ATIVO'}
            {status === 'concluido' && 'VITÓRIA'}
            {status === 'bloqueado' && 'BLOQ'}
          </span>
        </div>
      </div>

      {/* Nível com design especial */}
      <div className="mt-0.5 text-center">
        <span className={`
          inline-block
          font-black
          text-[8px] xs:text-[10px] sm:text-xs md:text-sm
          text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60
          drop-shadow-lg
        `}>
          NÍVEL {number}
        </span>
      </div>

      {/* Efeito de brilho no hover para não bloqueados */}
      {status !== 'bloqueado' && (
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none" />
      )}
    </div>
  );
};

export default Level;
// src/components/Level.js
import React from 'react';

const Level = ({ level, status = 'bloqueado' }) => {
  // Define os estilos baseado no status
  const getStatusStyles = () => {
    switch (status) {
      case 'ativo':
        return {
          container: 'bg-green-500 scale-110 shadow-2xl shadow-green-500/50 ring-4 ring-yellow-400',
          text: 'text-white font-bold',
          icon: '⚔️'
        };
      case 'concluido':
        return {
          container: 'bg-gradient-to-br from-green-400 to-blue-500',
          text: 'text-white',
          icon: '✅'
        };
      default: // bloqueado
        return {
          container: 'bg-gray-600 opacity-60 grayscale',
          text: 'text-gray-300',
          icon: '🔒'
        };
    }
  };

  const styles = getStatusStyles();

  return (
    <div className="flex flex-col items-center group">
      {/* Círculo do nível */}
      <div className={`
        w-24 h-24 rounded-full 
        flex items-center justify-center
        transition-all duration-300
        cursor-pointer hover:scale-105
        ${styles.container}
      `}>
        {status === 'concluido' ? (
          <span className="text-4xl">✅</span>
        ) : (
          <span className="text-4xl">{styles.icon}</span>
        )}
      </div>

      {/* Número do nível */}
      <div className="mt-2 text-center">
        <span className={`
          font-bold text-lg px-3 py-1 rounded-full
          ${status === 'bloqueado' ? 'bg-gray-700 text-gray-400' : 'bg-white text-gray-800'}
        `}>
          Nível {level}
        </span>
      </div>

      {/* Efeito de brilho no hover (só para níveis ativos) */}
      {status === 'ativo' && (
        <div className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-20 -z-10"></div>
      )}
    </div>
  );
};

export default Level;
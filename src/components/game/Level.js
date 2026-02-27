// src/components/game/Level.js
import React from 'react';

const Level = ({ number, status = 'bloqueado' }) => {
  // Status possíveis: 'ativo', 'concluido', 'bloqueado'

  const getStatusStyles = () => {
    switch (status) {
      case 'ativo':
        return {
          container: 'bg-green-500 scale-110 shadow-2xl shadow-green-500/50 ring-4 ring-yellow-400',
          icon: '⚔️',
          textColor: 'text-white'
        };
      case 'concluido':
        return {
          container: 'bg-gradient-to-br from-green-400 to-blue-500',
          icon: '✅',
          textColor: 'text-white'
        };
      default: // bloqueado
        return {
          container: 'bg-gray-600 opacity-50 grayscale',
          icon: '🔒',
          textColor: 'text-gray-300'
        };
    }
  };

  const styles = getStatusStyles();

  return (
    <div className="flex flex-col items-center">
      {/* Círculo do nível */}
      <div className={`
        w-24 h-24 rounded-full 
        flex items-center justify-center
        transition-all duration-300
        ${styles.container}
      `}>
        <span className="text-4xl">{styles.icon}</span>
      </div>

      {/* Número do nível */}
      <span className={`mt-2 font-bold ${styles.textColor}`}>
        Nível {number}
      </span>
    </div>
  );
};

export default Level;
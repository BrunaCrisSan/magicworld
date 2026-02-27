import React from 'react';

const DifficultyIndicator = ({ difficulty, correctCount }) => {
  const difficultyNames = {
    1: 'Fácil',
    2: 'Médio',
    3: 'Desafio'
  };

  const difficultyColors = {
    1: 'from-green-400 to-green-500',
    2: 'from-yellow-400 to-orange-400',
    3: 'from-orange-400 to-red-400'
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3 
                    bg-white/80 backdrop-blur-sm p-2 sm:px-4 sm:py-2 
                    rounded-lg sm:rounded-full shadow-lg border border-purple-200
                    max-w-[180px] sm:max-w-none text-xs sm:text-sm">

      {/* Linha 1: Estrelas + Dificuldade (sempre junto no mobile) */}
      <div className="flex items-center justify-between w-full sm:w-auto gap-1">
        {/* Estrelas */}
        <div className="flex items-center gap-0.5">
          <span className="text-purple-600 font-medium mr-0.5">⭐</span>
          <div className="flex gap-0">
            {[1, 2, 3].map((star) => (
              <span
                key={star}
                className={`text-sm ${star <= difficulty ? 'text-yellow-400' : 'text-gray-300'}`}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Nome da dificuldade simplificado */}
        <div className={`bg-gradient-to-r ${difficultyColors[difficulty]} 
                        text-white px-2 py-0.5 rounded-full text-[10px] font-bold`}>
          {difficultyNames[difficulty]}
        </div>
      </div>

      {/* Linha 2: Acertos (sempre visível) */}
      <div className="flex items-center gap-1 w-full sm:w-auto">
        <span className="text-purple-600">✅</span>
        <span className="text-purple-800 font-bold">{correctCount}</span>
        <span className="text-purple-500 text-[10px]">acertos</span>
      </div>
    </div>
  );
};

export default DifficultyIndicator;
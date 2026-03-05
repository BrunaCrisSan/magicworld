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
    <div className="flex flex-col xs:flex-row items-start xs:items-center gap-1 xs:gap-2 
                bg-white/80 backdrop-blur-sm mt-2 px-2 xs:px-3 py-1.5 
                rounded-lg xs:rounded-full shadow-lg border border-purple-200 
                text-[10px] xs:text-xs w-full xs:w-auto">

      {/* Estrelas e dificuldade */}
      <div className="flex items-center justify-between w-full xs:w-auto gap-1">
        <div className="flex items-center gap-0.5">
          <span className="text-purple-600 mr-0.5">⭐</span>
          <div className="flex">
            {[1, 2, 3].map((star) => (
              <span key={star} className={`text-xs xs:text-sm ${star <= difficulty ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
            ))}
          </div>
        </div>
        <span className={`bg-gradient-to-r ${difficultyColors[difficulty]} text-white px-1.5 py-0.5 rounded-full text-[8px] xs:text-[9px] font-bold`}>
          {difficultyNames[difficulty]}
        </span>
      </div>

      {/* Acertos */}
      <div className="flex items-center justify-between xs:justify-start w-full xs:w-auto gap-1 xs:border-l xs:border-purple-200 xs:pl-2">
        <span className="text-purple-600">✅</span>
        <span className="text-purple-800 font-bold">{correctCount}</span>
        <span className="text-purple-500 text-[8px] xs:text-[9px]">acertos</span>
      </div>
    </div>
  );
};

export default DifficultyIndicator;
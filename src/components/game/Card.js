import React, { useState, useEffect } from 'react';

const Card = ({ challenge, selectedAnswer, onSelectAnswer, result }) => {
  // Estado para controlar o número sendo digitado
  const [typingNumber, setTypingNumber] = useState('');

  // EFEITO PARA LIMPAR QUANDO MUDA O DESAFIO
  useEffect(() => {
    setTypingNumber('');
    onSelectAnswer(null);
  }, [challenge]);

  // EFEITO PARA LIMPAR QUANDO ACERTA
  useEffect(() => {
    if (result === 'success') {
      setTypingNumber('');
    }
  }, [result]);

  // Função para lidar com clique nos números
  const handleNumberClick = (num) => {
    if (result === 'success') return;

    const newValue = typingNumber + num.toString();
    if (newValue.length <= 2) {
      setTypingNumber(newValue);
      onSelectAnswer(parseInt(newValue, 10));
    }
  };

  const handleClear = () => {
    setTypingNumber('');
    onSelectAnswer(null);
  };

  const handleBackspace = () => {
    const newValue = typingNumber.slice(0, -1);
    setTypingNumber(newValue);
    onSelectAnswer(newValue ? parseInt(newValue, 10) : null);
  };

  // Calcula quantas maçãs por linha para melhor distribuição
  const maxApplesPerRow = 8;
  const applesFirstRow = Math.min(challenge.a, maxApplesPerRow);
  const applesSecondRow = Math.min(challenge.b, maxApplesPerRow);

  const hasMoreFirstRow = challenge.a > maxApplesPerRow;
  const hasMoreSecondRow = challenge.b > maxApplesPerRow;

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 w-full max-w-3xl mx-auto">

      {/* Pergunta visual */}
      <h2 className="text-2xl text-center text-gray-700 mb-4">
        Quanto é {challenge.a} + {challenge.b}?
      </h2>

      {/* Área das maçãs */}
      <div className="space-y-4 my-4">

        {/* Primeira linha de maçãs */}
        <div className="flex justify-center gap-1 sm:gap-2 flex-wrap">
          {[...Array(applesFirstRow)].map((_, i) => (
            <span key={`apple-a-${i}`} className="text-3xl sm:text-4xl md:text-5xl 
                                                 transform hover:scale-110 transition-transform">
              🍎
            </span>
          ))}
          {hasMoreFirstRow && (
            <span className="text-3xl sm:text-4xl md:text-5xl text-orange-500 font-bold">
              +{challenge.a - maxApplesPerRow}
            </span>
          )}
        </div>

        {/* Sinal de mais */}
        <div className="flex justify-center">
          <span className="text-4xl text-orange-500 font-bold">➕</span>
        </div>

        {/* Segunda linha de maçãs */}
        <div className="flex justify-center gap-1 sm:gap-2 flex-wrap">
          {[...Array(applesSecondRow)].map((_, i) => (
            <span key={`apple-b-${i}`} className="text-3xl sm:text-4xl md:text-5xl
                                                 transform hover:scale-110 transition-transform">
              🍎
            </span>
          ))}
          {hasMoreSecondRow && (
            <span className="text-3xl sm:text-4xl md:text-5xl text-orange-500 font-bold">
              +{challenge.b - maxApplesPerRow}
            </span>
          )}
        </div>
      </div>

      {/* Número grande */}
      <div className="text-center my-4">
        <span className={`font-bold text-orange-500 
          ${typingNumber.length > 1 ? 'text-6xl sm:text-7xl' : 'text-7xl sm:text-8xl'}`}>
          {typingNumber || '?'}
        </span>
      </div>

      {/* TECLADO NUMÉRICO */}
      {result !== 'success' && (
        <div className="space-y-2 mt-2">
          <div className="grid grid-cols-5 gap-1 sm:gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                onClick={() => handleNumberClick(num)}
                className="p-2 sm:p-3 text-lg sm:text-xl font-bold rounded-xl 
                         bg-orange-100 text-orange-700 hover:bg-orange-200
                         hover:scale-105 active:scale-95 transition-all"
              >
                {num}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-5 gap-1 sm:gap-2">
            {[6, 7, 8, 9, 0].map((num) => (
              <button
                key={num}
                onClick={() => handleNumberClick(num)}
                className="p-2 sm:p-3 text-lg sm:text-xl font-bold rounded-xl 
                         bg-orange-100 text-orange-700 hover:bg-orange-200
                         hover:scale-105 active:scale-95 transition-all"
              >
                {num}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-1 sm:gap-2">
            <button
              onClick={handleClear}
              className="p-2 sm:p-3 text-base sm:text-lg font-bold rounded-xl
                       bg-gray-200 text-gray-700 hover:bg-gray-300
                       hover:scale-105 active:scale-95 transition-all"
            >
              🗑️ Limpar
            </button>
            <button
              onClick={handleBackspace}
              className="p-2 sm:p-3 text-base sm:text-lg font-bold rounded-xl
                       bg-gray-200 text-gray-700 hover:bg-gray-300
                       hover:scale-105 active:scale-95 transition-all"
            >
              ⌫ Apagar
            </button>
          </div>
        </div>
      )}

      {/* Texto complementar */}
      <p className="text-center text-gray-400 mt-4 text-xs sm:text-sm">
        {result === 'success'
          ? '🎉 Parabéns! Clique em "Próximo desafio"'
          : result === 'try-again'
            ? '😊 Tente novamente!'
            : typingNumber
              ? `👆 Você digitou: ${typingNumber}`
              : '👆 clique nos números para responder'}
      </p>
    </div>
  );
};

export default Card;
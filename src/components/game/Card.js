import React, { useState, useEffect } from "react";

const MAX_PER_ROW = 10;

const AnimalRow = ({ count, emoji, bg, border }) => {
  const visible = Math.min(count, MAX_PER_ROW);
  const remaining = count > MAX_PER_ROW ? count - MAX_PER_ROW : 0;

  return (
    <div className={`${bg} p-6 rounded-2xl shadow-md border-2 ${border}`}>
      <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
        {[...Array(visible)].map((_, i) => (
          <span
            key={i}
            className="text-3xl sm:text-4xl md:text-5xl transform hover:scale-125 transition-all drop-shadow-lg animate-bounce"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {emoji}
          </span>
        ))}

        {remaining > 0 && (
          <span className="bg-amber-200 px-5 py-2 rounded-full text-amber-700 font-bold text-2xl shadow-md border-2 border-amber-400 flex items-center gap-1">
            <span className="text-xl">➕</span> {remaining}
          </span>
        )}
      </div>
    </div>
  );
};

const Card = ({ challenge, selectedAnswer, onSelectAnswer, result }) => {
  const [typingNumber, setTypingNumber] = useState("");

  // reset quando muda desafio
  useEffect(() => {
    setTypingNumber("");
  }, [challenge]);

  // reset quando acerta
  useEffect(() => {
    if (result === "success") {
      setTypingNumber("");
    }
  }, [result]);

  // função principal do teclado
  const handleNumberClick = (num) => {

    const newValue = typingNumber + num;

    setTypingNumber(newValue);

    if (onSelectAnswer) {
      onSelectAnswer(parseInt(newValue, 10));
    }

  };

  const handleClear = () => {
    setTypingNumber("");
    onSelectAnswer?.(null);
  };

  const handleBackspace = () => {

    const newValue = typingNumber.slice(0, -1);

    setTypingNumber(newValue);

    if (onSelectAnswer) {
      onSelectAnswer(newValue ? parseInt(newValue, 10) : null);
    }

  };

  const keypadRows = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 0],
  ];

  const getFontSize = () => {
    if (typingNumber.length > 2) return "text-5xl sm:text-6xl";
    if (typingNumber.length > 1) return "text-6xl sm:text-7xl";
    return "text-7xl sm:text-8xl";
  };

  return (
    <div className="bg-gradient-to-br from-white to-orange-50 rounded-3xl shadow-2xl p-6 sm:p-14 w-full max-w-3xl mx-auto border-2 border-orange-200">

      {/* Header */}
      <div className="flex justify-center gap-2 mb-2">
        <span className="text-2xl animate-bounce">🐶</span>
        <span className="text-2xl animate-bounce delay-100">🐯</span>
        <span className="text-2xl animate-bounce delay-200">🦁</span>
      </div>

      {/* Pergunta */}
      <div className="bg-gradient-to-r from-orange-400 to-pink-400 p-4 rounded-2xl shadow-lg mb-8">
        <h2 className="text-3xl text-center text-white font-bold drop-shadow-lg">
          Quanto é {challenge.a} + {challenge.b} + {challenge.c}?
        </h2>
      </div>

      {/* Animais */}
      <div className="space-y-6 my-6">

        <AnimalRow count={challenge.a} emoji="🐶" bg="bg-amber-50" border="border-amber-200" />

        <div className="flex justify-center">
          <div className="bg-orange-200 p-4 rounded-full shadow-lg border-2 border-orange-400">
            <span className="text-5xl text-orange-600 font-bold animate-bounce">➕</span>
          </div>
        </div>

        <AnimalRow count={challenge.b} emoji="🐯" bg="bg-orange-50" border="border-orange-200" />

        <div className="flex justify-center">
          <div className="bg-orange-200 p-4 rounded-full shadow-lg border-2 border-orange-400">
            <span className="text-5xl text-orange-600 font-bold animate-bounce">➕</span>
          </div>
        </div>

        <AnimalRow count={challenge.c} emoji="🦁" bg="bg-yellow-50" border="border-yellow-200" />

      </div>

      {/* Resposta */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-inner border-2 border-gray-200">

        <div className="text-center my-2">
          <span className={`font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent ${getFontSize()}`}>
            {typingNumber || "?"}
          </span>
        </div>

        {result !== "success" && (
          <div className="space-y-2 mt-4">

            {keypadRows.map((row, index) => (
              <div key={index} className="grid grid-cols-5 gap-1 sm:gap-2">
                {row.map((num) => (
                  <button
                    key={num}
                    onClick={() => handleNumberClick(num)}
                    className="p-3 sm:p-4 text-xl sm:text-2xl font-bold rounded-xl bg-gradient-to-b from-orange-400 to-orange-500 text-white shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all border-b-4 border-orange-600"
                  >
                    {num}
                  </button>
                ))}
              </div>
            ))}

            <div className="grid grid-cols-2 gap-1 sm:gap-2">
              <button
                onClick={handleClear}
                className="p-3 sm:p-4 text-base sm:text-lg font-bold rounded-xl bg-gradient-to-b from-gray-400 to-gray-500 text-white shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all border-b-4 border-gray-600"
              >
                🗑️ Limpar
              </button>

              <button
                onClick={handleBackspace}
                className="p-3 sm:p-4 text-base sm:text-lg font-bold rounded-xl bg-gradient-to-b from-gray-400 to-gray-500 text-white shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all border-b-4 border-gray-600"
              >
                ⌫ Apagar
              </button>
            </div>

          </div>
        )}

        <p className="text-center mt-6 text-gray-500 text-sm sm:text-base font-medium">
          {result === "success" ? (
            <span className="text-green-600 animate-pulse">
              🎉 Parabéns! Você acertou! 🎉
            </span>
          ) : result === "try-again" ? (
            <span className="text-orange-600">
              😊 Tente novamente! Você consegue! 💪
            </span>
          ) : typingNumber ? (
            <span>
              👆 Você digitou:{" "}
              <span className="font-bold text-orange-500">{typingNumber}</span>
            </span>
          ) : (
            <span>👆 Clique nos números para responder</span>
          )}
        </p>

      </div>
    </div>
  );
};

export default Card;
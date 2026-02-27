import React from 'react';

const AnswerArea = ({
  selectedAnswer,
  onSelectAnswer,
  result,
  onContinue,
  onNextChallenge,
  challenge
}) => {
  // Lista de mensagens de feedback (genérico)
  const feedbackMessages = [
    "Boa tentativa! 😊",
    "Interessante! 🤔",
    "Vamos ver... ✨",
    "Legal! 🎯",
    "Hummm... 🌟"
  ];

  // Mensagens específicas para cada resultado
  const resultMessages = {
    success: "Muito bem! 🎉",
    'try-again': "Quase! Tente outra vez 😄"
  };

  // Escolhe a mensagem baseada no result ou no selectedAnswer
  const getFeedbackMessage = () => {
    if (result) {
      return resultMessages[result];
    }
    if (!selectedAnswer) return "";
    const index = selectedAnswer % feedbackMessages.length;
    return feedbackMessages[index];
  };

  // Define as cores baseadas no result
  const getFeedbackColors = () => {
    if (result === 'success') {
      return 'from-green-200 to-emerald-200 border-green-300 text-green-800';
    }
    if (result === 'try-again') {
      return 'from-orange-200 to-amber-200 border-orange-300 text-orange-800';
    }
    // Feedback genérico (roxo/azul)
    return 'from-blue-200 to-purple-200 border-purple-300 text-purple-800';
  };

  // 👇 VERIFICAÇÃO DE SEGURANÇA
  if (!challenge || !challenge.options) {
    return (
      <div className="max-w-md mx-auto p-4 bg-yellow-100 rounded">
        <p>Carregando desafio...</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      {/* FEEDBACK VISUAL */}
      {(selectedAnswer !== null || result !== null) && (
        <div className="mb-4 animate-fade-in">
          <div className={`bg-gradient-to-r ${getFeedbackColors()} 
                        p-4 rounded-2xl border-2 shadow-md text-center`}>
            <p className="text-xl font-medium">
              {getFeedbackMessage()}
            </p>
            {selectedAnswer !== null && !result && (
              <p className="text-sm mt-1 opacity-75">
                Você escolheu: {selectedAnswer}
              </p>
            )}
          </div>
        </div>
      )}

      {/* BOTÕES DE RESPOSTA - AGORA DINÂMICOS com challenge.options - NÃO ADICIONAR ESSES BOTÕES */}


      {/* BOTÕES DE AÇÃO - mudam conforme o estado */}

      {/* Quando NÃO TEM resultado (estado inicial ou depois de errar sem reset) */}
      {!result && (
        <button
          onClick={onContinue}
          className={`w-full mt-4 text-3xl font-bold py-4 rounded-2xl
                     shadow-lg transition-all duration-200
                     ${selectedAnswer !== null
              ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-b-4 border-purple-700 cursor-pointer'
              : 'bg-gray-300 text-gray-500 border-b-4 border-gray-400 cursor-not-allowed'
            }`}
          disabled={selectedAnswer === null}
        >
          Continuar →
        </button>
      )}

      {/* Quando ACERTOU (success) - mostra botão "Próximo desafio" */}
      {result === 'success' && (
        <button
          onClick={onNextChallenge}
          className="w-full mt-4 text-3xl font-bold py-4 rounded-2xl
                     shadow-lg transition-all duration-200
                     bg-gradient-to-r from-green-500 to-emerald-500 
                     hover:from-green-600 hover:to-emerald-600 
                     text-white border-b-4 border-green-700
                     animate-pulse-slow"
        >
          Próximo desafio →
        </button>
      )}

      {/* Quando ERROU (try-again) - mostra botão "Continuar" novamente (pra tentar de novo) */}
      {result === 'try-again' && (
        <button
          onClick={onContinue}
          className="w-full mt-4 text-3xl font-bold py-4 rounded-2xl
                     shadow-lg transition-all duration-200
                     bg-gradient-to-r from-orange-500 to-amber-500 
                     hover:from-orange-600 hover:to-amber-600 
                     text-white border-b-4 border-orange-700"
        >
          Tentar de novo →
        </button>
      )}
    </div>
  );
};

export default AnswerArea;
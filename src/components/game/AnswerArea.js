import React from "react";

const feedbackMessages = [
  "Boa tentativa! 😊",
  "Interessante! 🤔",
  "Vamos ver... ✨",
  "Legal! 🎯",
  "Hummm... 🌟"
];

const resultMessages = {
  success: "Muito bem! 🎉",
  "try-again": "Quase! Tente outra vez 😄"
};

const getFeedbackMessage = (selectedAnswer, result) => {
  if (result) return resultMessages[result];

  if (selectedAnswer === null || selectedAnswer === undefined) return "";

  const index = selectedAnswer % feedbackMessages.length;
  return feedbackMessages[index];
};

const getFeedbackColors = (result) => {
  switch (result) {
    case "success":
      return "from-green-200 to-emerald-200 border-green-300 text-green-800";

    case "try-again":
      return "from-orange-200 to-amber-200 border-orange-300 text-orange-800";

    default:
      return "from-blue-200 to-purple-200 border-purple-300 text-purple-800";
  }
};

const getButtonConfig = ({
  result,
  selectedAnswer,
  onContinue,
  onNextChallenge
}) => {
  if (result === "success") {
    return {
      text: "Próximo desafio →",
      action: onNextChallenge,
      style:
        "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 border-green-700 animate-pulse-slow"
    };
  }

  if (result === "try-again") {
    return {
      text: "Tentar de novo →",
      action: onContinue,
      style:
        "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 border-orange-700"
    };
  }

  return {
    text: "Continuar →",
    action: onContinue,
    disabled: selectedAnswer === null || selectedAnswer === undefined,
    style:
      selectedAnswer !== null
        ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 border-purple-700"
        : "bg-gray-300 text-gray-500 border-gray-400 cursor-not-allowed"
  };
};

const AnswerArea = ({
  selectedAnswer,
  result,
  onContinue,
  onNextChallenge,
  challenge
}) => {

  if (!challenge) {
    return (
      <div className="max-w-md mx-auto p-4 bg-yellow-100 rounded">
        <p>Carregando desafio...</p>
      </div>
    );
  }

  const message = getFeedbackMessage(selectedAnswer, result);
  const colors = getFeedbackColors(result);
  const button = getButtonConfig({
    result,
    selectedAnswer,
    onContinue,
    onNextChallenge
  });

  const showFeedback =
    selectedAnswer !== null || result !== null;

  return (
    <div className="max-w-md mx-auto">

      {/* FEEDBACK */}
      {showFeedback && (
        <div className="mb-4 animate-fade-in">
          <div
            className={`bg-gradient-to-r ${colors} 
            p-4 rounded-2xl border-2 shadow-md text-center`}
          >
            <p className="text-xl font-medium">
              {message}
            </p>

            {selectedAnswer !== null && !result && (
              <p className="text-sm mt-1 opacity-75">
                Você escolheu: {selectedAnswer}
              </p>
            )}
          </div>
        </div>
      )}

      {/* BOTÃO PRINCIPAL */}
      <button
        onClick={() => button.action && button.action()}
        disabled={button.disabled}
        className={`w-full mt-4 text-3xl font-bold py-4 rounded-2xl
        shadow-lg transition-all duration-200
        border-b-4 text-white ${button.style}`}
      >
        {button.text}
      </button>

    </div>
  );
};

export default AnswerArea;
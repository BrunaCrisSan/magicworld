import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Card from '../components/game/Card';
import AnswerArea from '../components/game/AnswerArea';
import DifficultyIndicator from '../components/game/DifficultyIndicator';

// Versão simplificada do generateChallenge para teste
function generateChallenge(difficulty) {
  const max = difficulty === 1 ? 5 : difficulty === 2 ? 10 : 20;
  const a = Math.floor(Math.random() * max) + 1;
  const b = Math.floor(Math.random() * max) + 1;
  const correct = a + b;

  return {
    a,
    b,
    correctAnswer: correct,
    options: [correct - 1, correct, correct + 1, correct + 2].filter(n => n > 0),
  };
}

const ChallengePage = () => {
  const { levelId } = useParams();

  const [difficulty, setDifficulty] = useState(1);
  const [correctCount, setCorrectCount] = useState(0);
  const [challenge, setChallenge] = useState(() => generateChallenge(difficulty));
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [result, setResult] = useState(null);
  const [stars, setStars] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [showStarAnimation, setShowStarAnimation] = useState(false);

  const handleContinue = () => {
    if (selectedAnswer === null) return;

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (selectedAnswer === challenge.correctAnswer) {
      let starsEarned = 0;
      if (newAttempts === 1) {
        starsEarned = 2;
      } else {
        starsEarned = 1;
      }

      setStars(prev => prev + starsEarned);
      setShowStarAnimation(true);
      setTimeout(() => setShowStarAnimation(false), 1000);

      const newCorrectCount = correctCount + 1;
      setCorrectCount(newCorrectCount);

      if (newCorrectCount % 2 === 0 && difficulty < 3) {
        setDifficulty(difficulty + 1);
      }

      setResult('success');
    } else {
      setResult('try-again');
    }
  };

  const handleNextChallenge = () => {
    setChallenge(generateChallenge(difficulty));
    setSelectedAnswer(null);
    setResult(null);
    setAttempts(0);
  };

  return (
    <div className="h-screen bg-gradient-to-b from-sky-100 to-purple-100 flex flex-col">
      {/* ANIMAÇÃO DE GANHO DE ESTRELAS */}
      {showStarAnimation && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-float-star">
          <div className="bg-yellow-400 text-yellow-800 px-6 py-3 rounded-full text-2xl font-bold shadow-lg">
            +⭐
          </div>
        </div>
      )}

      <Header stars={stars} />

      {/* INDICADORES SUPERIORES - VERSÃO RESPONSIVA */}
      <div className="absolute top-20 left-2 right-2 flex justify-between items-start px-2 z-10">
        {/* Lado esquerdo - Dificuldade */}
        <div className="w-1/2 sm:w-auto">
          <DifficultyIndicator difficulty={difficulty} correctCount={correctCount} />
        </div>

        {/* Lado direito - Tentativas e Acertos */}
        <div className="bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg border border-purple-200 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-purple-600">🔄</span>
              <span className="text-purple-800 font-medium">{attempts}</span>
              <span className="text-purple-500 text-[10px] sm:text-xs hidden xs:inline">tentativas</span>
            </div>
            <div className="w-px h-4 bg-purple-200"></div>
            <div className="flex items-center gap-1">
              <span className="text-purple-600">✅</span>
              <span className="text-purple-800 font-medium">{correctCount}</span>
              <span className="text-purple-500 text-[10px] sm:text-xs hidden xs:inline">acertos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center p-4 pt-24 sm:pt-20">
        <Card
          challenge={challenge}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={setSelectedAnswer}
          result={result}
        />
      </div>

      {/* AnswerArea */}
      <div className="py-6 px-4">
        <AnswerArea
          selectedAnswer={selectedAnswer}
          onSelectAnswer={setSelectedAnswer}
          result={result}
          onContinue={handleContinue}
          onNextChallenge={handleNextChallenge}
          challenge={challenge}
        />
      </div>

      {/* CSS para animação */}
      <style>{`
        @keyframes float-star {
          0% {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -20px) scale(1.2);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -40px) scale(0.8);
          }
        }
        
        .animate-float-star {
          animation: float-star 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ChallengePage;
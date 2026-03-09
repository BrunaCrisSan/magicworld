import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Card from '../components/game/Card';
import AnswerArea from '../components/game/AnswerArea';
import DifficultyIndicator from '../components/game/DifficultyIndicator';


function generateChallenge(level, difficulty) {

  const min = (level - 1) * 50 + 1;
  const max = level * 50;

  let range;

  switch (difficulty) {
    case 1:
      range = { min, max: min + 20 };
      break;

    case 2:
      range = { min: min + 15, max: max - 15 };
      break;

    case 3:
      range = { min: max - 20, max };
      break;

    default:
      range = { min, max };
  }

  const safeMin = Math.max(range.min, min);
  const safeMax = Math.min(range.max, max);

  const a = Math.floor(Math.random() * (safeMax - safeMin + 1)) + safeMin;
  const b = Math.floor(Math.random() * (safeMax - safeMin + 1)) + safeMin;
  const c = Math.floor(Math.random() * (safeMax - safeMin + 1)) + safeMin;

  const correct = a + b + c;

  const options = [
    correct,
    correct + Math.floor(Math.random() * 5) + 1,
    Math.max(1, correct - (Math.floor(Math.random() * 5) + 1)),
    correct + Math.floor(Math.random() * 10) + 2
  ].sort(() => Math.random() - 0.5);

  return {
    a,
    b,
    c,
    correctAnswer: correct,
    options: options.slice(0, 4),
    faixa: { min, max }
  };
}

const ChallengePage = () => {

  const navigate = useNavigate();
  const { levelId } = useParams();

  const level = parseInt(levelId) || 1;

  const [difficulty, setDifficulty] = useState(1);
  const [correctCount, setCorrectCount] = useState(0);

  const [challenge, setChallenge] = useState(() =>
    generateChallenge(level, difficulty)
  );

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [result, setResult] = useState(null);

  const [stars, setStars] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const [showStarAnimation, setShowStarAnimation] = useState(false);
  const [lastStarsEarned, setLastStarsEarned] = useState(0);


  useEffect(() => {
    setChallenge(generateChallenge(level, difficulty));
    setSelectedAnswer(null);
    setResult(null);
    setAttempts(0);
  }, [level, difficulty]);


  const handleContinue = () => {

    if (selectedAnswer == null || !challenge) return;

    const answer = Number(selectedAnswer);

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (answer === challenge.correctAnswer) {

      const starsEarned = newAttempts === 1 ? 2 : 1;

      setStars(prev => prev + starsEarned);
      setLastStarsEarned(starsEarned);

      setShowStarAnimation(true);

      setTimeout(() => {
        setShowStarAnimation(false);
      }, 1000);

      setCorrectCount(prev => prev + 1);

      setResult("success");

    } else {

      setResult("try-again");

    }

  };

  const handleNextChallenge = () => {

    setChallenge(generateChallenge(level, difficulty));
    setSelectedAnswer(null);
    setResult(null);
    setAttempts(0);

  };


  const changeDifficulty = (newDifficulty) => {

    setDifficulty(newDifficulty);

  };


  return (

    <div className="min-h-screen bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-100 flex flex-col relative">

      <Header stars={stars} level={level} />

      {/* Indicadores - AGORA POSICIONADOS CORRETAMENTE */}
      {/* Indicadores - VERSÃO SÓ ÍCONES NO MOBILE */}
      <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 mt-1 sm:mt-4 mb-2 sm:mb-4 flex justify-between items-center z-10">

        {/* Lado esquerdo - Dificuldade */}
        <div
          className="cursor-pointer hover:scale-105 transition-transform scale-75 sm:scale-100 origin-left"
          onClick={() => {
            const next = difficulty === 3 ? 1 : difficulty + 1;
            changeDifficulty(next);
          }}
        >
          <DifficultyIndicator
            difficulty={difficulty}
            correctCount={correctCount}
          />
        </div>

        {/* Lado direito - Informações SÓ ÍCONES no mobile */}
        <div className="bg-white/90 backdrop-blur-md px-1.5 py-1 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl shadow-md sm:shadow-xl border border-purple-200 sm:border-2 flex items-center gap-0.5 sm:gap-3">

          {/* Nível */}
          <span className="flex items-center justify-center text-purple-600 bg-purple-100 p-1.5 rounded-full sm:rounded-lg text-xs sm:text-sm font-bold w-7 h-7 sm:w-auto sm:h-auto">
            <span className="text-sm sm:text-base">📊</span>
            <span className="hidden sm:inline ml-1">{level}</span>
          </span>

          {/* Faixa */}
          <span className="flex items-center justify-center text-blue-600 bg-blue-100 p-1.5 rounded-full sm:rounded-lg text-xs sm:text-sm font-bold w-7 h-7 sm:w-auto sm:h-auto">
            <span className="text-sm sm:text-base">🔢</span>
            <span className="hidden sm:inline ml-1">{challenge.faixa.min}</span>
          </span>

          {/* Tentativas */}
          <span className="flex items-center justify-center text-green-600 bg-green-100 p-1.5 rounded-full sm:rounded-lg text-xs sm:text-sm font-bold w-7 h-7 sm:w-auto sm:h-auto">
            <span className="text-sm sm:text-base">🔄</span>
            <span className="hidden sm:inline ml-1">{attempts}</span>
          </span>

        </div>

      </div>


      {showStarAnimation && (

        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-float-star">

          <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-yellow-800 px-8 py-4 rounded-full text-3xl font-bold shadow-2xl border-4 border-white">

            ⭐ +{lastStarsEarned}

          </div>

        </div>

      )}


      <div className="flex-1 flex items-center justify-center p-4 pt-28 sm:pt-24">

        <Card
          challenge={challenge}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={setSelectedAnswer}
          result={result}
        />

      </div>


      <div className="py-6 px-4">

        <div className="py-6 px-4">
          <AnswerArea
            selectedAnswer={selectedAnswer}
            onSelectAnswer={setSelectedAnswer}  // 👈 ADICIONE ESTA LINHA!
            result={result}
            onContinue={handleContinue}
            onNextChallenge={handleNextChallenge}
            challenge={challenge}
          />
        </div>

      </div>


      <div className="fixed bottom-4 left-4 right-4 flex justify-between z-20">
        <button
          onClick={() => navigate('/')}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 
             text-white font-bold 
             py-1 px-2 sm:py-1.5 sm:px-3  // 👈 BEM MENOR
             rounded-full shadow-lg  // 👈 Sombra reduzida
             flex items-center gap-0.5 sm:gap-1  // 👈 Gap mínimo
             text-xs sm:text-sm  // 👈 Fonte pequena
             border border-white/40"  // 👈 Borda mais fina
        >
          <span className="text-sm sm:text-base">🏠</span>
          <span className="hidden sm:inline">Home</span>
        </button>

        <button
          onClick={() => navigate('/game')}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600
             text-white font-bold 
             py-1 px-2 sm:py-1.5 sm:px-3  // 👈 BEM MENOR
             rounded-full shadow-lg  // 👈 Sombra reduzida
             flex items-center gap-0.5 sm:gap-1  // 👈 Gap mínimo
             text-xs sm:text-sm  // 👈 Fonte pequena
             border border-white/40"  // 👈 Borda mais fina
        >
          <span className="text-sm sm:text-base">🗺️</span>
          <span className="hidden sm:inline">Mapa</span>
        </button>
      </div>


    </div>
  );
};

export default ChallengePage;
// src/components/game/WorldMap.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // <-- E AQUI
import Level from './Level';

const WorldMap = () => {
  const navigate = useNavigate(); // <-- HOOK DE NAVEGAÇÃO

  // Dados fake dos níveis
  const levels = [
    { id: 1, status: 'concluido' },
    { id: 2, status: 'concluido' },
    { id: 3, status: 'ativo' },
    { id: 4, status: 'bloqueado' },
    { id: 5, status: 'bloqueado' },
  ];

  // <-- FUNÇÃO PARA ABRIR DESAFIO
  const handleLevelClick = (level) => {
    // Só permite clicar se não estiver bloqueado
    if (level.status !== 'bloqueado') {
      console.log('Nível clicado:', level.id);

      // Navega para o desafio passando o ID do nível
      navigate(`/desafio/${level.id}`);

      // Se preferir passar como state:
      // navigate('/desafio', { state: { levelId: level.id } });
    }
  };

  return (
    <div className="relative w-full h-full min-h-[600px] bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900 p-8">
      {/* Linha conectora (caminho) */}
      <div className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 transform -translate-y-1/2"
        style={{ width: '90%', left: '5%' }}>
        {/* Efeito de movimento na linha */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
      </div>

      {/* Container dos níveis */}
      <div className="relative h-full flex items-center justify-around max-w-6xl mx-auto">
        {levels.map((level, index) => (
          <div key={level.id} className="relative">
            {/* Conector entre níveis */}
            {index < levels.length - 1 && (
              <div className="absolute top-1/2 left-16 w-full h-1 bg-yellow-400/50"
                style={{ width: 'calc(100% - 4rem)' }}>
              </div>
            )}

            {/* Nó do nível - AGORA CLICÁVEL */}
            <div
              onClick={() => handleLevelClick(level)}
              className={`
                cursor-pointer 
                transition-transform hover:scale-110
                ${level.status === 'bloqueado' ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''}
              `}
            >
              <Level
                number={level.id}
                status={level.status}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Decorações do mapa */}
      <div className="absolute bottom-10 left-10 text-white/20 text-8xl">
        ⛰️
      </div>
      <div className="absolute top-10 right-10 text-white/20 text-8xl">
        👑
      </div>

      {/* Instrução sutil */}
      <div className="absolute bottom-4 right-4 text-white/40 text-sm">
        Clique nos níveis para começar!
      </div>
    </div>
  );
};

export default WorldMap;
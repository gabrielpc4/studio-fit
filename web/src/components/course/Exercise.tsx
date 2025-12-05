'use client';

import { useState } from 'react';
import { Code2, Eye, EyeOff, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

interface ExerciseProps {
  id: string;
  title: string;
  description: string;
  expectedAnswer?: string;
  hint?: string;
  onComplete?: (answer: string) => void;
}

export function Exercise({ id, title, description, expectedAnswer, hint, onComplete }: ExerciseProps) {
  const [answer, setAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(true);
    onComplete?.(answer);
  };

  return (
    <div className={clsx(
      'my-6 p-5 rounded-xl border shadow-sm',
      isCompleted
        ? 'bg-green-50 border-green-200'
        : 'bg-slate-50 border-slate-200'
    )}>
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className={clsx(
          'w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0',
          isCompleted ? 'bg-green-500' : 'bg-blue-500'
        )}>
          {isCompleted ? (
            <CheckCircle className="w-5 h-5 text-white" />
          ) : (
            <Code2 className="w-5 h-5 text-white" />
          )}
        </div>
        <div>
          <h4 className="font-semibold text-slate-800">{title}</h4>
          <p className="text-sm text-slate-600 mt-1">{description}</p>
        </div>
      </div>

      {/* Answer area */}
      <div className="ml-11">
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Digite sua resposta aqui..."
          className="w-full p-3 rounded-lg border border-slate-300 text-sm font-mono bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          rows={4}
          disabled={isCompleted}
        />

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3 mt-3">
          {!isCompleted && (
            <button
              onClick={handleComplete}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Marcar como Concluído
            </button>
          )}

          {hint && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-1.5 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 transition-colors"
            >
              {showHint ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showHint ? 'Esconder Dica' : 'Ver Dica'}
            </button>
          )}

          {expectedAnswer && (
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="flex items-center gap-1.5 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 transition-colors"
            >
              {showAnswer ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showAnswer ? 'Esconder Resposta' : 'Ver Resposta'}
            </button>
          )}
        </div>

        {/* Hint */}
        {showHint && hint && (
          <div className="mt-3 p-3 bg-purple-50 border border-purple-200 rounded-lg">
            <p className="text-sm text-purple-800">
              <span className="font-medium">Dica:</span> {hint}
            </p>
          </div>
        )}

        {/* Expected answer */}
        {showAnswer && expectedAnswer && (
          <div className="mt-3 p-3 bg-slate-100 border border-slate-200 rounded-lg">
            <p className="text-xs text-slate-500 mb-2 font-medium">Resposta sugerida:</p>
            <pre className="text-sm font-mono text-slate-800 whitespace-pre-wrap">{expectedAnswer}</pre>
          </div>
        )}

        {/* Completed message */}
        {isCompleted && (
          <div className="mt-3 p-3 bg-green-100 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800 font-medium flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Exercício concluído!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

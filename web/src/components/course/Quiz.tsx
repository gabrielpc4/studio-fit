'use client';

import { useState } from 'react';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import clsx from 'clsx';

interface QuizOption {
  id: string;
  text: string;
}

interface QuizProps {
  question: string;
  options: QuizOption[];
  correctId: string;
  explanation?: string;
}

export function Quiz({ question, options, correctId, explanation }: QuizProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (optionId: string) => {
    if (showResult) return;
    setSelectedId(optionId);
  };

  const handleCheck = () => {
    if (!selectedId) return;
    setShowResult(true);
  };

  const handleReset = () => {
    setSelectedId(null);
    setShowResult(false);
  };

  const isCorrect = selectedId === correctId;

  return (
    <div className="my-6 p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
      {/* Question */}
      <div className="flex items-start gap-3 mb-4">
        <HelpCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
        <p className="font-medium text-slate-800">{question}</p>
      </div>

      {/* Options */}
      <div className="space-y-2 ml-8">
        {options.map((option) => {
          const isSelected = selectedId === option.id;
          const isOptionCorrect = option.id === correctId;

          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              disabled={showResult}
              className={clsx(
                'w-full text-left p-3 rounded-lg border-2 transition-all',
                !showResult && isSelected && 'border-blue-500 bg-blue-50',
                !showResult && !isSelected && 'border-slate-200 hover:border-slate-300',
                showResult && isOptionCorrect && 'border-green-500 bg-green-50',
                showResult && isSelected && !isOptionCorrect && 'border-red-500 bg-red-50',
                showResult && !isSelected && !isOptionCorrect && 'border-slate-200 opacity-60',
                showResult ? 'cursor-default' : 'cursor-pointer'
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={clsx(
                    'w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0',
                    !showResult && isSelected && 'border-blue-500 bg-blue-500',
                    !showResult && !isSelected && 'border-slate-300',
                    showResult && isOptionCorrect && 'border-green-500 bg-green-500',
                    showResult && isSelected && !isOptionCorrect && 'border-red-500 bg-red-500',
                    showResult && !isSelected && !isOptionCorrect && 'border-slate-300'
                  )}
                >
                  {showResult && isOptionCorrect && (
                    <CheckCircle className="w-4 h-4 text-white" />
                  )}
                  {showResult && isSelected && !isOptionCorrect && (
                    <XCircle className="w-4 h-4 text-white" />
                  )}
                  {!showResult && isSelected && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
                <span className="text-sm text-slate-700">{option.text}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Result */}
      {showResult && (
        <div
          className={clsx(
            'mt-4 p-3 rounded-lg ml-8',
            isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          )}
        >
          <div className="flex items-center gap-2 font-medium mb-1">
            {isCorrect ? (
              <>
                <CheckCircle className="w-4 h-4" />
                Correto!
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4" />
                Incorreto
              </>
            )}
          </div>
          {explanation && <p className="text-sm opacity-90">{explanation}</p>}
        </div>
      )}

      {/* Actions */}
      <div className="mt-4 ml-8 flex gap-2">
        {!showResult ? (
          <button
            onClick={handleCheck}
            disabled={!selectedId}
            className={clsx(
              'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
              selectedId
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            )}
          >
            Verificar
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
          >
            Tentar Novamente
          </button>
        )}
      </div>
    </div>
  );
}

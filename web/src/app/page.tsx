'use client';

import Link from 'next/link';
import { BookOpen, Rocket, Brain, Code2, CheckCircle2, ArrowRight, Play } from 'lucide-react';
import { COURSE_PHASES } from '@/data/course-structure';
import { useCourseProgress } from '@/hooks/useCourseProgress';
import clsx from 'clsx';

export default function HomePage() {
  const { getPhaseProgress, getOverallProgress, progress } = useCourseProgress();
  const overallProgress = getOverallProgress();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="w-12 h-12 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            React Native para Iniciantes
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Aprenda a criar aplicativos mobile do zero, mesmo sem nunca ter programado antes.
          </p>

          {overallProgress > 0 ? (
            <div className="max-w-md mx-auto mb-8">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-slate-400">Seu progresso</span>
                <span className="text-blue-400 font-medium">{overallProgress}%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full transition-all duration-500"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
            </div>
          ) : null}

          <Link
            href={`/curso/${progress.currentPhaseId}/${progress.currentModuleId}`}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            {overallProgress > 0 ? (
              <>
                <Play className="w-5 h-5" />
                Continuar de onde parou
              </>
            ) : (
              <>
                <Rocket className="w-5 h-5" />
                Começar o Curso
              </>
            )}
          </Link>
        </div>
      </header>

      {/* Features */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
              <Brain className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="font-semibold text-white mb-2">Zero Experiência</h3>
              <p className="text-slate-400 text-sm">
                Criado especialmente para quem nunca programou. Explicamos tudo do básico.
              </p>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
              <Code2 className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="font-semibold text-white mb-2">Prática Constante</h3>
              <p className="text-slate-400 text-sm">
                Exercícios após cada conceito para você praticar e fixar o aprendizado.
              </p>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
              <Rocket className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="font-semibold text-white mb-2">Preparado para IA</h3>
              <p className="text-slate-400 text-sm">
                Aprenda a usar IA como ferramenta para programar mais rápido e melhor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Phases */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Trilha do Curso
          </h2>

          <div className="space-y-4">
            {COURSE_PHASES.map((phase, index) => {
              const phaseProgress = getPhaseProgress(phase.id);
              const isComplete = phaseProgress === 100;

              return (
                <Link
                  key={phase.id}
                  href={`/curso/${phase.slug}/${phase.modules[0].id}`}
                  className={clsx(
                    'block bg-slate-800 rounded-xl p-6 border transition-all hover:border-blue-500',
                    isComplete ? 'border-green-500/50' : 'border-slate-700'
                  )}
                >
                  <div className="flex items-start gap-4">
                    {/* Number */}
                    <div
                      className={clsx(
                        'w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0',
                        isComplete
                          ? 'bg-green-500/20 text-green-400'
                          : phaseProgress > 0
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-slate-700 text-slate-400'
                      )}
                    >
                      {isComplete ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        index
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-slate-400">{phase.shortTitle}</span>
                        {phaseProgress > 0 && phaseProgress < 100 && (
                          <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">
                            {phaseProgress}%
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-white mb-1">{phase.title}</h3>
                      <p className="text-sm text-slate-400">{phase.description}</p>
                      <div className="mt-2 text-xs text-slate-500">
                        {phase.modules.length} módulos
                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  </div>

                  {/* Progress bar */}
                  {phaseProgress > 0 && (
                    <div className="mt-4 h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={clsx(
                          'h-full rounded-full transition-all duration-500',
                          isComplete ? 'bg-green-500' : 'bg-blue-500'
                        )}
                        style={{ width: `${phaseProgress}%` }}
                      />
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center text-slate-400 text-sm">
          <p>Curso desenvolvido com carinho para quem quer começar a programar.</p>
        </div>
      </footer>
    </div>
  );
}

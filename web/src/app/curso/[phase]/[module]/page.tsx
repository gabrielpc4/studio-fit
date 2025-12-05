'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { useParams } from 'next/navigation';
import { COURSE_PHASES, getPhaseBySlug } from '@/data/course-structure';
import { useCourseProgress } from '@/hooks/useCourseProgress';
import { ChatBox } from '@/components/chat/ChatBox';
import { Fase1Content } from '@/components/course/content/Fase1Content';
import clsx from 'clsx';

export default function ModulePage() {
  const params = useParams();
  const phaseSlug = params.phase as string;
  const moduleId = params.module as string;

  const { setCurrentModule, completeModule, isModuleComplete } = useCourseProgress();

  const phase = getPhaseBySlug(phaseSlug);
  const module = phase?.modules.find(m => m.id === moduleId);
  const moduleIndex = phase?.modules.findIndex(m => m.id === moduleId) ?? -1;

  // Navigation
  const prevModule = phase?.modules[moduleIndex - 1];
  const nextModule = phase?.modules[moduleIndex + 1];

  // Get next phase if we're at the last module
  const nextPhase = !nextModule
    ? COURSE_PHASES.find(p => p.order === (phase?.order ?? 0) + 1)
    : null;

  // Get prev phase if we're at the first module
  const prevPhase = !prevModule
    ? COURSE_PHASES.find(p => p.order === (phase?.order ?? 0) - 1)
    : null;

  const isComplete = phase && module ? isModuleComplete(phase.id, module.id) : false;

  // Update current module on mount - usando apenas IDs para evitar loops
  useEffect(() => {
    if (phase?.id && module?.id) {
      setCurrentModule(phase.id, module.id);
    }
  }, [phase?.id, module?.id, setCurrentModule]);

  if (!phase || !module) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Módulo não encontrado</h1>
          <p className="text-slate-600 mb-4">O módulo que você está procurando não existe.</p>
          <Link href="/" className="text-blue-600 hover:underline">
            Voltar para o início
          </Link>
        </div>
      </div>
    );
  }

  const handleMarkComplete = () => {
    completeModule(phase.id, module.id);
  };

  // Render content based on phase
  const renderContent = () => {
    switch (phase.id) {
      case 'fase-1':
        return <Fase1Content moduleId={moduleId} />;
      default:
        return (
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600">
              Conteúdo em desenvolvimento...
            </p>
            <p className="text-slate-500">
              Este módulo ainda está sendo preparado. Em breve o conteúdo estará disponível!
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                <Link href="/" className="hover:text-blue-600">Início</Link>
                <span>/</span>
                <span>{phase.shortTitle}</span>
              </div>
              <h1 className="text-xl font-bold text-slate-800">{module.title}</h1>
            </div>

            <div className="flex items-center gap-3">
              {isComplete ? (
                <span className="flex items-center gap-1.5 text-sm text-green-600 font-medium">
                  <CheckCircle className="w-4 h-4" />
                  Concluído
                </span>
              ) : (
                <button
                  onClick={handleMarkComplete}
                  className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  Marcar como Concluído
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {renderContent()}
      </main>

      {/* Navigation */}
      <nav className="max-w-4xl mx-auto px-6 pb-12">
        <div className="flex items-center justify-between pt-8 border-t border-slate-200">
          {/* Previous */}
          <div>
            {prevModule ? (
              <Link
                href={`/curso/${phaseSlug}/${prevModule.id}`}
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <div className="text-left">
                  <span className="text-xs text-slate-400 block">Anterior</span>
                  <span className="text-sm font-medium">{prevModule.title}</span>
                </div>
              </Link>
            ) : prevPhase ? (
              <Link
                href={`/curso/${prevPhase.slug}/${prevPhase.modules[prevPhase.modules.length - 1].id}`}
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <div className="text-left">
                  <span className="text-xs text-slate-400 block">{prevPhase.shortTitle}</span>
                  <span className="text-sm font-medium">
                    {prevPhase.modules[prevPhase.modules.length - 1].title}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* Next */}
          <div>
            {nextModule ? (
              <Link
                href={`/curso/${phaseSlug}/${nextModule.id}`}
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Próximo</span>
                  <span className="text-sm font-medium">{nextModule.title}</span>
                </div>
                <ChevronRight className="w-5 h-5" />
              </Link>
            ) : nextPhase ? (
              <Link
                href={`/curso/${nextPhase.slug}/${nextPhase.modules[0].id}`}
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">{nextPhase.shortTitle}</span>
                  <span className="text-sm font-medium">{nextPhase.modules[0].title}</span>
                </div>
                <ChevronRight className="w-5 h-5" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </nav>

      {/* Chat */}
      <ChatBox
        phaseId={phase.id}
        moduleId={module.id}
        phaseTitle={phase.title}
        moduleTitle={module.title}
        contextSummary={`Estamos na ${phase.shortTitle}: ${phase.title}, módulo: ${module.title}. ${module.description}`}
      />
    </div>
  );
}

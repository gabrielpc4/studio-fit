'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight, BookOpen, CheckCircle2, Circle, Home, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { COURSE_PHASES } from '@/data/course-structure';
import { useCourseProgress } from '@/hooks/useCourseProgress';
import clsx from 'clsx';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { isModuleComplete, getPhaseProgress, getOverallProgress } = useCourseProgress();
  const [expandedPhases, setExpandedPhases] = useState<string[]>(['fase-1']);
  const overallProgress = getOverallProgress();

  // Fecha o menu quando a rota muda (mobile)
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  const togglePhase = (phaseId: string) => {
    setExpandedPhases(prev =>
      prev.includes(phaseId)
        ? prev.filter(id => id !== phaseId)
        : [...prev, phaseId]
    );
  };

  const isPhaseActive = (phaseSlug: string) => {
    return pathname.startsWith(`/curso/${phaseSlug}`);
  };

  const isModuleActive = (phaseSlug: string, moduleId: string) => {
    return pathname === `/curso/${phaseSlug}/${moduleId}`;
  };

  return (
    <>
      {/* Overlay para mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          'w-72 bg-slate-900 text-white h-screen flex flex-col overflow-hidden fixed left-0 top-0 z-50',
          'transition-transform duration-300 ease-in-out',
          'lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-700 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <BookOpen className="w-6 h-6 text-blue-400" />
            <div>
              <span className="font-bold text-lg block">React Native</span>
              <span className="text-xs text-slate-400">Curso para Iniciantes</span>
            </div>
          </Link>
          {/* Botão fechar (mobile) */}
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-lg lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {/* Home link */}
          <Link
            href="/"
            className={clsx(
              'flex items-center gap-2 px-3 py-2 rounded-lg transition-colors',
              pathname === '/'
                ? 'bg-blue-600 text-white'
                : 'text-slate-300 hover:bg-slate-800'
            )}
          >
            <Home className="w-4 h-4" />
            <span className="text-sm font-medium">Início</span>
          </Link>

          <div className="h-2" />

          {/* Phases */}
          {COURSE_PHASES.map(phase => {
            const isExpanded = expandedPhases.includes(phase.id);
            const isActive = isPhaseActive(phase.slug);
            const progress = getPhaseProgress(phase.id);

            return (
              <div key={phase.id} className="space-y-1">
                {/* Phase Header */}
                <button
                  onClick={() => togglePhase(phase.id)}
                  className={clsx(
                    'w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-left',
                    isActive
                      ? 'bg-slate-700 text-white'
                      : 'text-slate-300 hover:bg-slate-800'
                  )}
                >
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400">{phase.shortTitle}</span>
                      {progress === 100 && (
                        <CheckCircle2 className="w-3 h-3 text-green-400" />
                      )}
                    </div>
                    <span className="text-sm font-medium truncate block">
                      {phase.title}
                    </span>
                  </div>
                  {progress > 0 && progress < 100 && (
                    <span className="text-xs text-blue-400">{progress}%</span>
                  )}
                </button>

                {/* Modules */}
                {isExpanded && (
                  <div className="ml-4 space-y-0.5">
                    {phase.modules.map(module => {
                      const isComplete = isModuleComplete(phase.id, module.id);
                      const isActiveModule = isModuleActive(phase.slug, module.id);

                      return (
                        <Link
                          key={module.id}
                          href={`/curso/${phase.slug}/${module.id}`}
                          className={clsx(
                            'flex items-center gap-2 px-3 py-1.5 rounded-md transition-colors text-sm',
                            isActiveModule
                              ? 'bg-blue-600 text-white'
                              : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                          )}
                        >
                          {isComplete ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                          ) : (
                            <Circle className="w-3.5 h-3.5 flex-shrink-0" />
                          )}
                          <span className="truncate">{module.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-700">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Progresso Geral</span>
            <span className="text-blue-400 font-medium">{overallProgress}%</span>
          </div>
          <div className="mt-2 h-1.5 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>
      </aside>
    </>
  );
}

// Botão do menu hamburger para usar no header
export function MobileMenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="p-2 hover:bg-slate-200 rounded-lg lg:hidden"
      aria-label="Abrir menu"
    >
      <Menu className="w-6 h-6 text-slate-700" />
    </button>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight, BookOpen, CheckCircle2, Circle, Home } from 'lucide-react';
import { useState } from 'react';
import { COURSE_PHASES } from '@/data/course-structure';
import { useCourseProgress } from '@/hooks/useCourseProgress';
import clsx from 'clsx';

export function Sidebar() {
  const pathname = usePathname();
  const { isModuleComplete, getPhaseProgress } = useCourseProgress();
  const [expandedPhases, setExpandedPhases] = useState<string[]>(['fase-1']);

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
    <aside className="w-72 bg-slate-900 text-white h-screen flex flex-col overflow-hidden fixed left-0 top-0">
      {/* Header */}
      <div className="p-4 border-b border-slate-700">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <BookOpen className="w-6 h-6 text-blue-400" />
          <span className="font-bold text-lg">React Native</span>
        </Link>
        <p className="text-xs text-slate-400 mt-1">Curso para Iniciantes</p>
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
          <span className="text-blue-400 font-medium">
            {/* Progress will be calculated */}
          </span>
        </div>
        <div className="mt-2 h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: '0%' }}
          />
        </div>
      </div>
    </aside>
  );
}

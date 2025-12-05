'use client';

import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { CourseProgress, ChatMessage, ChatHistory, UserData } from '@/types/course';
import { COURSE_PHASES } from '@/data/course-structure';

// Gera ID único simples
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

const STORAGE_KEY = 'studio-fit-course-data';

const defaultProgress: CourseProgress = {
  currentPhaseId: 'fase-1',
  currentModuleId: 'intro',
  completedModules: [],
  lastAccessed: new Date().toISOString(),
};

const defaultUserData: UserData = {
  progress: defaultProgress,
  chatHistory: { messages: [] },
  exerciseAnswers: {},
  notes: {},
};

export function useCourseProgress() {
  const [userData, setUserData] = useLocalStorage<UserData>(STORAGE_KEY, defaultUserData);

  // Atualiza o módulo atual
  const setCurrentModule = useCallback((phaseId: string, moduleId: string) => {
    setUserData(prev => ({
      ...prev,
      progress: {
        ...prev.progress,
        currentPhaseId: phaseId,
        currentModuleId: moduleId,
        lastAccessed: new Date().toISOString(),
      }
    }));
  }, [setUserData]);

  // Marca módulo como completo
  const completeModule = useCallback((phaseId: string, moduleId: string) => {
    const moduleKey = `${phaseId}:${moduleId}`;
    setUserData(prev => {
      if (prev.progress.completedModules.includes(moduleKey)) {
        return prev;
      }
      return {
        ...prev,
        progress: {
          ...prev.progress,
          completedModules: [...prev.progress.completedModules, moduleKey],
        }
      };
    });
  }, [setUserData]);

  // Verifica se módulo está completo
  const isModuleComplete = useCallback((phaseId: string, moduleId: string): boolean => {
    const moduleKey = `${phaseId}:${moduleId}`;
    return userData.progress.completedModules.includes(moduleKey);
  }, [userData.progress.completedModules]);

  // Adiciona mensagem ao chat
  const addChatMessage = useCallback((message: Omit<ChatMessage, 'id' | 'timestamp'>) => {
    const newMessage: ChatMessage = {
      ...message,
      id: generateId(),
      timestamp: new Date().toISOString(),
    };
    setUserData(prev => ({
      ...prev,
      chatHistory: {
        messages: [...prev.chatHistory.messages, newMessage],
      }
    }));
  }, [setUserData]);

  // Pega mensagens do chat para uma fase/módulo específico
  const getChatMessages = useCallback((phaseId?: string, moduleId?: string): ChatMessage[] => {
    if (!phaseId) return userData.chatHistory.messages;
    if (!moduleId) {
      return userData.chatHistory.messages.filter(m => m.phaseId === phaseId);
    }
    return userData.chatHistory.messages.filter(
      m => m.phaseId === phaseId && m.moduleId === moduleId
    );
  }, [userData.chatHistory.messages]);

  // Salva resposta de exercício
  const saveExerciseAnswer = useCallback((exerciseId: string, answer: string) => {
    setUserData(prev => ({
      ...prev,
      exerciseAnswers: {
        ...prev.exerciseAnswers,
        [exerciseId]: answer,
      }
    }));
  }, [setUserData]);

  // Calcula progresso percentual da fase
  const getPhaseProgress = useCallback((phaseId: string): number => {
    const phase = COURSE_PHASES.find(p => p.id === phaseId);
    if (!phase) return 0;

    const completedCount = phase.modules.filter(
      m => userData.progress.completedModules.includes(`${phaseId}:${m.id}`)
    ).length;

    return Math.round((completedCount / phase.modules.length) * 100);
  }, [userData.progress.completedModules]);

  // Calcula progresso geral do curso
  const getOverallProgress = useCallback((): number => {
    const totalModules = COURSE_PHASES.reduce((acc, phase) => acc + phase.modules.length, 0);
    const completedModules = userData.progress.completedModules.length;
    return Math.round((completedModules / totalModules) * 100);
  }, [userData.progress.completedModules]);

  // Reseta todo o progresso
  const resetProgress = useCallback(() => {
    setUserData(defaultUserData);
  }, [setUserData]);

  return {
    progress: userData.progress,
    chatHistory: userData.chatHistory,
    exerciseAnswers: userData.exerciseAnswers,
    setCurrentModule,
    completeModule,
    isModuleComplete,
    addChatMessage,
    getChatMessages,
    saveExerciseAnswer,
    getPhaseProgress,
    getOverallProgress,
    resetProgress,
  };
}

// Tipos para a estrutura do curso

export interface Module {
  id: string;
  title: string;
  description: string;
}

export interface Phase {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  modules: Module[];
  order: number;
}

export interface CourseProgress {
  currentPhaseId: string;
  currentModuleId: string;
  completedModules: string[]; // formato: "phaseId:moduleId"
  lastAccessed: string; // ISO date
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string; // ISO date
  phaseId: string;
  moduleId: string;
}

export interface ChatHistory {
  messages: ChatMessage[];
}

export interface UserData {
  progress: CourseProgress;
  chatHistory: ChatHistory;
  exerciseAnswers: Record<string, string>; // exerciseId -> answer
  notes: Record<string, string>; // pageId -> notes
}

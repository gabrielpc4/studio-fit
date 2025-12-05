import { Phase } from '@/types/course';

export const COURSE_PHASES: Phase[] = [
  {
    id: 'fase-0',
    slug: 'fase-0',
    title: 'Fundamentos Mentais',
    shortTitle: 'Fase 0',
    description: 'Entenda como computadores e programas funcionam antes de escrever código.',
    order: 0,
    modules: [
      { id: 'intro', title: 'Introdução', description: 'Bem-vindo à sua jornada na programação!' },
      { id: 'o-que-e-programa', title: 'O Que É Um Programa?', description: 'A Analogia da Receita de Bolo' },
      { id: 'como-computador-pensa', title: 'Como o Computador "Pensa"', description: 'Spoiler: Ele Não Pensa' },
      { id: 'o-que-e-codigo', title: 'O Que É Código?', description: 'Código = Texto Que Vira Instruções' },
      { id: 'ambiente-desenvolvimento', title: 'Ambiente de Desenvolvimento', description: 'VS Code, Terminal e Node.js' },
      { id: 'juntando-tudo', title: 'Juntando Tudo', description: 'O Ciclo de Trabalho do Programador' },
    ]
  },
  {
    id: 'fase-1',
    slug: 'fase-1',
    title: 'Lógica de Programação',
    shortTitle: 'Fase 1',
    description: 'Aprenda os blocos fundamentais da programação com JavaScript.',
    order: 1,
    modules: [
      { id: 'intro', title: 'Introdução', description: 'Variáveis, tipos, condições, repetições, funções e objetos' },
      { id: 'semana-1', title: 'Variáveis e Tipos de Dados', description: 'Caixas com etiquetas para guardar informações' },
      { id: 'semana-2', title: 'Estruturas de Decisão', description: 'Fazendo o programa tomar decisões' },
      { id: 'semana-3', title: 'Repetição e Listas', description: 'Arrays e loops para fazer algo muitas vezes' },
      { id: 'semana-4', title: 'Funções e Objetos', description: 'Blocos reutilizáveis e agrupamento de dados' },
      { id: 'projeto-final', title: 'Projeto Final', description: 'Mini Sistema de Academia' },
    ]
  },
  {
    id: 'fase-2-1',
    slug: 'fase-2-1',
    title: 'Encontrando e Resolvendo Erros',
    shortTitle: 'Fase 2.1',
    description: 'Aprenda a ler mensagens de erro e debugar código como um profissional.',
    order: 2,
    modules: [
      { id: 'intro', title: 'Introdução', description: 'Você vai errar. Muito. E isso é normal!' },
      { id: 'erros-amigos', title: 'Erros São Seus Amigos', description: 'Mudando a mentalidade sobre erros' },
      { id: 'lendo-erros', title: 'Lendo Mensagens de Erro', description: 'Anatomia de uma mensagem de erro' },
      { id: 'console-log', title: 'console.log — Sua Ferramenta', description: 'O detetive do código' },
      { id: 'pesquisando', title: 'Pesquisando Soluções', description: 'Google e Stack Overflow são seus amigos' },
      { id: 'erros-comuns', title: 'Erros Comuns em JavaScript', description: 'Os erros que todo mundo comete' },
      { id: 'estrategias', title: 'Estratégias de Debug', description: 'Técnicas para encontrar problemas' },
    ]
  },
  {
    id: 'fase-2-2',
    slug: 'fase-2-2',
    title: 'Trabalhando com IA',
    shortTitle: 'Fase 2.2',
    description: 'Aprenda a usar IA como ferramenta de programação de forma eficiente.',
    order: 3,
    modules: [
      { id: 'intro', title: 'Introdução', description: 'Você é o piloto, IA é o copiloto' },
      { id: 'conhecendo-cursor', title: 'Conhecendo o Cursor', description: 'Chat, Composer e Tab' },
      { id: 'boas-perguntas', title: 'A Arte de Fazer Boas Perguntas', description: 'Contexto, situação, objetivo e restrições' },
      { id: 'mostrando-codigo', title: 'Mostrando Código e Erros', description: 'Sempre mostre o código relevante' },
      { id: 'validando-respostas', title: 'Validando Respostas da IA', description: 'A IA pode errar - você é o piloto' },
      { id: 'quando-ia-erra', title: 'Quando a IA Erra', description: 'Tipos de erros e como corrigir' },
      { id: 'fluxo-trabalho', title: 'Fluxo de Trabalho Com IA', description: 'O processo ideal' },
      { id: 'exemplos-reais', title: 'Praticando Com Exemplos', description: 'Exemplos práticos' },
    ]
  },
  {
    id: 'fase-2',
    slug: 'fase-2',
    title: 'Entendendo Estrutura de Projetos',
    shortTitle: 'Fase 2',
    description: 'Aprenda como projetos reais são organizados e como navegar neles.',
    order: 4,
    modules: [
      { id: 'intro', title: 'Introdução', description: 'De arquivos isolados para projetos reais' },
      { id: 'por-que-dividir', title: 'Por Que Dividir o Código?', description: 'O problema do arquivo gigante' },
      { id: 'estrutura-pastas', title: 'Estrutura de Pastas Comum', description: 'Projeto React Native típico' },
      { id: 'imports-exports', title: 'Imports e Exports', description: 'Conectando arquivos com LEGO' },
      { id: 'package-json', title: 'O Arquivo package.json', description: 'Documento de identidade do projeto' },
      { id: 'git-basico', title: 'Git Básico', description: 'Versionamento de código' },
      { id: 'navegando-projeto', title: 'Navegando em um Projeto Real', description: 'Estratégia de exploração' },
    ]
  },
  {
    id: 'fase-3',
    slug: 'fase-3',
    title: 'Introdução ao React Native',
    shortTitle: 'Fase 3',
    description: 'Crie interfaces visuais e apps de verdade que rodam no celular.',
    order: 5,
    modules: [
      { id: 'intro', title: 'Introdução', description: 'Criando apps nativos com JavaScript' },
      { id: 'o-que-e-rn', title: 'O Que É React Native', description: 'E por que usamos Expo' },
      { id: 'primeiro-projeto', title: 'Criando Seu Primeiro Projeto', description: 'Expo Go e Hot Reload' },
      { id: 'componentes', title: 'Entendendo Componentes', description: 'View, Text, Image e mais' },
      { id: 'estilizacao', title: 'Estilização com StyleSheet', description: 'Flexbox e propriedades comuns' },
      { id: 'estado', title: 'Estado e Interatividade', description: 'useState e formulários' },
      { id: 'flatlist', title: 'Listas com FlatList', description: 'Listas otimizadas para muitos dados' },
      { id: 'navegacao', title: 'Navegação com Expo Router', description: 'Movendo entre telas' },
      { id: 'safe-area', title: 'Áreas Seguras', description: 'Lidando com notch e cantos' },
    ]
  },
  {
    id: 'fase-4',
    slug: 'fase-4',
    title: 'Trabalhando com Dados da Internet',
    shortTitle: 'Fase 4',
    description: 'Busque dados de APIs e conecte seu app a backends.',
    order: 6,
    modules: [
      { id: 'intro', title: 'Introdução', description: 'De dados hardcoded para dados da internet' },
      { id: 'de-onde-vem', title: 'De Onde Vêm os Dados?', description: 'A internet como biblioteca' },
      { id: 'problema-espera', title: 'O Problema da Espera', description: 'Por que assíncrono?' },
      { id: 'async-await', title: 'Async e Await', description: 'Esperando sem travar' },
      { id: 'axios', title: 'Instalando e Usando Axios', description: 'Seu primeiro pedido HTTP' },
      { id: 'tratando-erros', title: 'Tratando Erros', description: 'Try/Catch - o plano B' },
      { id: 'react-native', title: 'Usando Dados no React Native', description: 'useEffect e estados de loading' },
      { id: 'flatlist-api', title: 'FlatList com Dados da Internet', description: 'Listas com dados dinâmicos' },
      { id: 'projeto-pokemon', title: 'Projeto: Lista de Pokémons', description: 'App completo com lista e detalhe' },
    ]
  },
];

export function getPhaseBySlug(slug: string): Phase | undefined {
  return COURSE_PHASES.find(phase => phase.slug === slug);
}

export function getPhaseById(id: string): Phase | undefined {
  return COURSE_PHASES.find(phase => phase.id === id);
}

export function getNextPhase(currentPhaseId: string): Phase | undefined {
  const currentPhase = getPhaseById(currentPhaseId);
  if (!currentPhase) return undefined;
  return COURSE_PHASES.find(phase => phase.order === currentPhase.order + 1);
}

export function getPrevPhase(currentPhaseId: string): Phase | undefined {
  const currentPhase = getPhaseById(currentPhaseId);
  if (!currentPhase) return undefined;
  return COURSE_PHASES.find(phase => phase.order === currentPhase.order - 1);
}

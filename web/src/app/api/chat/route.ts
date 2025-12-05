import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequest {
  message: string;
  phaseId: string;
  moduleId: string;
  phaseTitle: string;
  moduleTitle: string;
  contextSummary?: string;
  previousMessages?: ChatMessage[];
}

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json();
    const { message, phaseId, moduleId, phaseTitle, moduleTitle, contextSummary, previousMessages } = body;

    if (!message || !phaseId || !moduleId) {
      return NextResponse.json(
        { error: 'Mensagem, phaseId e moduleId são obrigatórios' },
        { status: 400 }
      );
    }

    // Construir o prompt do sistema
    const systemPrompt = `Você é um tutor amigável e paciente especializado em ensinar programação React Native para iniciantes absolutos.

CONTEXTO DO ALUNO:
- O aluno está no curso "React Native para Iniciantes"
- Fase atual: ${phaseTitle} (${phaseId})
- Módulo atual: ${moduleTitle} (${moduleId})
${contextSummary ? `- Resumo do conteúdo da aula: ${contextSummary}` : ''}

SUAS DIRETRIZES:
1. Responda APENAS sobre o conteúdo do curso e programação. Se perguntarem algo fora do escopo, gentilmente redirecione.
2. Use linguagem simples e acessível - o aluno não tem background técnico.
3. Use analogias do mundo real (receitas, caixas, armários, etc.) como no material do curso.
4. Seja conciso - respostas diretas e práticas.
5. Se mostrar código, use exemplos simples e explique cada parte.
6. Encoraje o aluno - errar faz parte do processo!
7. Se o aluno perguntar sobre algo de uma fase futura, diga que ele vai aprender isso mais tarde.
8. Formate suas respostas em Markdown quando apropriado (código, listas, etc.)

ESTILO DE COMUNICAÇÃO:
- Amigável mas profissional
- Sem excesso de entusiasmo artificial
- Foco em ser útil e educativo
- Respostas médias de 2-4 parágrafos (a menos que precise de mais)`;

    // Construir mensagens para a API
    const messages: Array<{ role: 'user' | 'assistant'; content: string }> = [];

    // Adicionar mensagens anteriores para contexto
    if (previousMessages && previousMessages.length > 0) {
      for (const msg of previousMessages) {
        messages.push({
          role: msg.role,
          content: msg.content,
        });
      }
    }

    // Adicionar a mensagem atual
    messages.push({
      role: 'user',
      content: message,
    });

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages,
    });

    // Extrair o texto da resposta
    const assistantMessage = response.content[0].type === 'text'
      ? response.content[0].text
      : '';

    return NextResponse.json({ content: assistantMessage });
  } catch (error) {
    console.error('Erro na API de chat:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

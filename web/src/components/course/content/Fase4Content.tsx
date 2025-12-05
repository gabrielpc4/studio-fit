'use client';

import { CodeBlock } from '../CodeBlock';
import { InfoBox } from '../InfoBox';
import { Quiz } from '../Quiz';
import { Exercise } from '../Exercise';

interface Fase4ContentProps {
  moduleId: string;
}

export function Fase4Content({ moduleId }: Fase4ContentProps) {
  switch (moduleId) {
    case 'intro':
      return <IntroContent />;
    case 'conhecendo-cursor':
      return <ConhecendoCursorContent />;
    case 'boas-perguntas':
      return <BoasPerguntasContent />;
    case 'mostrando-codigo':
      return <MostrandoCodigoContent />;
    case 'validando-respostas':
      return <ValidandoRespostasContent />;
    case 'quando-ia-erra':
      return <QuandoIAErraContent />;
    case 'fluxo-trabalho':
      return <FluxoTrabalhoContent />;
    case 'exemplos-reais':
      return <ExemplosReaisContent />;
    default:
      return <div>Conteúdo não encontrado para o módulo: {moduleId}</div>;
  }
}

function IntroContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Trabalhando com IA de Forma Eficiente</h2>

      <p className="text-xl text-slate-600 mb-6">
        Você vai usar IA para programar. <strong>Muito.</strong>
      </p>

      <p>
        E isso não é trapacear — é ser inteligente. Programadores profissionais usam IA todos os dias para:
      </p>

      <ul>
        <li>Escrever código mais rápido</li>
        <li>Entender código que não conhecem</li>
        <li>Resolver problemas complexos</li>
        <li>Aprender coisas novas</li>
      </ul>

      <InfoBox type="warning" title="Mas existe um jeito certo e um jeito errado">
        <div className="grid md:grid-cols-2 gap-4 mt-2">
          <div className="p-3 bg-red-50 rounded-lg">
            <p className="text-red-700 font-medium">❌ Jeito errado</p>
            <p className="text-red-600 text-sm">Pedir código, copiar e colar sem entender, e ficar perdido quando não funciona.</p>
          </div>
          <div className="p-3 bg-green-50 rounded-lg">
            <p className="text-green-700 font-medium">✅ Jeito certo</p>
            <p className="text-green-600 text-sm">Conduzir a IA como um assistente, entender o que ela propõe, e saber quando ela está errada.</p>
          </div>
        </div>
      </InfoBox>

      <p className="text-lg font-semibold mt-6">
        Nesta fase, você vai aprender a ser o <strong>piloto</strong>, não o passageiro.
      </p>

      <h3>O que você vai aprender</h3>

      <ul>
        <li>Como usar ferramentas de IA (Cursor, Chat)</li>
        <li>Como fazer perguntas que geram respostas úteis</li>
        <li>Como validar o que a IA sugere</li>
        <li>Como corrigir quando a IA erra</li>
        <li>O fluxo de trabalho ideal com IA</li>
      </ul>

      <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
        <h4 className="text-blue-800 font-semibold mb-2">Mentalidade importante</h4>
        <p className="text-blue-700">
          A IA é uma ferramenta poderosa, mas você precisa entender o que ela faz. Copiar sem entender é como usar GPS sem saber ler um mapa — funciona até dar problema, aí você fica completamente perdido.
        </p>
      </div>
    </div>
  );
}

function ConhecendoCursorContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Conhecendo o Cursor</h2>

      <h3>O Que É o Cursor?</h3>

      <p>
        <strong>Cursor</strong> é um editor de código (como o VS Code) que tem IA integrada. Em vez de ficar alternando entre o editor e o ChatGPT, você conversa com a IA diretamente no editor, enquanto programa.
      </p>

      <p>
        É como ter um colega programador sentado do seu lado, disponível 24 horas.
      </p>

      <h3>Instalando o Cursor</h3>

      <ol>
        <li>Acesse: <a href="https://cursor.com" target="_blank" rel="noopener noreferrer">cursor.com</a></li>
        <li>Baixe a versão para seu sistema (Windows, Mac ou Linux)</li>
        <li>Instale normalmente</li>
        <li>Abra o Cursor</li>
      </ol>

      <p>Se você já usou VS Code, vai se sentir em casa — a interface é praticamente igual.</p>

      <h3>As Formas de Usar IA no Cursor</h3>

      <p>O Cursor tem três formas principais de interagir com a IA:</p>

      <h4>1. Chat (Cmd+L ou Ctrl+L)</h4>

      <p>Abre uma conversa na lateral. Você pode:</p>
      <ul>
        <li>Fazer perguntas</li>
        <li>Pedir explicações</li>
        <li>Discutir ideias</li>
        <li>Pedir código</li>
      </ul>

      <p>É como conversar com o ChatGPT, mas dentro do editor.</p>

      <h4>2. Composer (Cmd+I ou Ctrl+I)</h4>

      <p>Abre uma janela para fazer mudanças no código. Você descreve o que quer, e a IA:</p>
      <ul>
        <li>Cria arquivos novos</li>
        <li>Modifica arquivos existentes</li>
        <li>Mostra as mudanças antes de aplicar</li>
      </ul>

      <p>Você revisa e aceita (ou rejeita) as mudanças.</p>

      <h4>3. Tab (Autocomplete Inteligente)</h4>

      <p>
        Enquanto você digita, a IA sugere completar o código. Aperte Tab para aceitar.
      </p>

      <p>
        É sutil mas poderoso — a IA "lê" o que você está fazendo e sugere o próximo passo.
      </p>

      <h3>Primeiro Teste: Conversa Simples</h3>

      <p>
        Abra o Cursor, crie um arquivo <code>teste.js</code>, e aperte <strong>Cmd+L</strong> (ou Ctrl+L) para abrir o chat.
      </p>

      <p>Digite:</p>

      <CodeBlock
        language="text"
        code={`O que é uma variável em JavaScript? Explique de forma simples.`}
      />

      <p>
        A IA vai responder. Leia a resposta. Faça outra pergunta se não entender algo.
      </p>

      <p>
        Esse vai ser seu fluxo: <strong>perguntar → ler → entender → perguntar mais se precisar</strong>.
      </p>

      <Quiz
        question="Qual atalho abre o Chat no Cursor?"
        options={[
          { id: 'a', text: 'Cmd+K / Ctrl+K' },
          { id: 'b', text: 'Cmd+L / Ctrl+L' },
          { id: 'c', text: 'Cmd+I / Ctrl+I' },
          { id: 'd', text: 'Cmd+P / Ctrl+P' },
        ]}
        correctId="b"
        explanation="Cmd+L (Mac) ou Ctrl+L (Windows/Linux) abre o Chat. Cmd+I abre o Composer para fazer mudanças no código."
      />
    </div>
  );
}

function BoasPerguntasContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>A Arte de Fazer Boas Perguntas</h2>

      <h3>Por Que a Pergunta Importa?</h3>

      <p>
        A qualidade da resposta da IA depende diretamente da qualidade da sua pergunta.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
          <p className="text-red-700 font-medium mb-2">Pergunta vaga</p>
          <CodeBlock language="text" code={`Como faço um array?`} />
          <p className="text-red-600 text-sm mt-2">→ Resposta genérica</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-green-700 font-medium mb-2">Pergunta específica</p>
          <CodeBlock language="text" code={`Tenho uma lista de nomes de alunos em JavaScript. Quero criar um array com esses nomes e depois percorrer a lista mostrando cada nome no console. Como faço isso?`} />
          <p className="text-green-600 text-sm mt-2">→ Resposta útil</p>
        </div>
      </div>

      <h3>Os 4 Elementos de Uma Boa Pergunta</h3>

      <h4>1. Contexto: O Que Você Está Fazendo</h4>

      <p>Diga em que você está trabalhando:</p>

      <CodeBlock
        language="text"
        code={`Estou criando um sistema de cadastro de alunos para uma academia.`}
      />

      <h4>2. Situação Atual: O Que Você Tem</h4>

      <p>Mostre o código que já existe:</p>

      <CodeBlock
        language="text"
        code={`Tenho esse código que guarda os alunos:

let alunos = [
    { nome: "Maria", idade: 25 },
    { nome: "João", idade: 30 }
];`}
      />

      <h4>3. Objetivo: O Que Você Quer</h4>

      <p>Seja específico sobre o resultado desejado:</p>

      <CodeBlock
        language="text"
        code={`Quero criar uma função que encontra um aluno pelo nome e retorna os dados dele.`}
      />

      <h4>4. Restrições: Como Quer Que Seja</h4>

      <p>Mencione preferências ou limitações:</p>

      <CodeBlock
        language="text"
        code={`Quero que retorne null se não encontrar o aluno.
Prefiro usar um for tradicional em vez de métodos como find().`}
      />

      <h3>Exemplo Completo: Pergunta Bem Feita</h3>

      <CodeBlock
        language="text"
        code={`Estou criando um sistema de cadastro de alunos para uma academia.

Tenho esse código:

let alunos = [
    { nome: "Maria", idade: 25, plano: "mensal" },
    { nome: "João", idade: 30, plano: "anual" }
];

Quero criar uma função que recebe o nome de um aluno e retorna os dados dele. Se não encontrar, deve retornar null.

Prefiro usar um loop for tradicional para eu entender melhor o que está acontecendo.`}
      />

      <p>Essa pergunta vai gerar uma resposta muito mais útil do que "como acho algo num array?".</p>

      <InfoBox type="tip" title="Dica: Use o @ Para Referenciar Arquivos">
        <p>No Cursor, você pode usar <code>@</code> para incluir arquivos na conversa:</p>
        <CodeBlock
          language="text"
          code={`Olha o arquivo @alunos.js e me explica o que a função calcularMensalidade faz.`}
        />
        <p>A IA vai ler o arquivo e responder com base no código real.</p>
      </InfoBox>

      <Exercise
        id="fase4-melhorar-pergunta"
        title="Exercício: Melhorando uma Pergunta"
        description="Transforme esta pergunta ruim em uma pergunta boa: 'Meu código não funciona'"
        expectedAnswer="Uma boa versão seria: 'Esse código deveria somar os números, mas está retornando undefined: [código aqui]. Esperado: 8. Aconteceu: undefined. O que está errado?' - incluindo contexto, código, esperado vs acontecido."
        hint="Pense: o que está faltando para alguém te ajudar? Qual é o código? O que deveria acontecer? O que está acontecendo?"
      />
    </div>
  );
}

function MostrandoCodigoContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Mostrando Código e Erros</h2>

      <h3>Sempre Mostre o Código Relevante</h3>

      <p>Quando algo não funciona, a IA precisa ver o código para ajudar.</p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
          <p className="text-red-700 font-medium mb-2">❌ Ruim</p>
          <CodeBlock language="text" code={`Meu código não funciona. O que faço?`} />
        </div>
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-green-700 font-medium mb-2">✅ Bom</p>
          <CodeBlock language="text" code={`Esse código deveria somar os preços, mas está retornando NaN:

function calcularTotal(itens) {
    let total = 0;
    for (let i = 0; i <= itens.length; i++) {
        total = total + itens[i].preco;
    }
    return total;
}

let produtos = [
    { nome: "Camiseta", preco: 50 },
    { nome: "Calça", preco: 100 }
];

console.log(calcularTotal(produtos)); // NaN`} />
        </div>
      </div>

      <h3>Descreva: Esperado vs. Aconteceu</h3>

      <p>Sempre diga:</p>
      <ol>
        <li>O que você <strong>esperava</strong> que acontecesse</li>
        <li>O que <strong>realmente</strong> aconteceu</li>
      </ol>

      <CodeBlock
        language="text"
        code={`Esperado: Deveria mostrar 150 (soma de 50 + 100)
Aconteceu: Mostra NaN`}
      />

      <p>Isso ajuda a IA a entender exatamente o problema.</p>

      <h3>Inclua a Mensagem de Erro Completa</h3>

      <p>Se tem erro no console, copie a mensagem inteira:</p>

      <CodeBlock
        language="text"
        code={`Estou recebendo esse erro:

TypeError: Cannot read properties of undefined (reading 'preco')
    at calcularTotal (app.js:4:34)

Esse é o código:

[código aqui]`}
      />

      <p>A mensagem de erro dá pistas valiosas que a IA pode usar.</p>

      <h3>Selecionando Código no Cursor</h3>

      <p>No Cursor, você pode selecionar um trecho de código e apertar <strong>Cmd+L</strong> para perguntar sobre ele:</p>

      <ol>
        <li>Selecione o código com o mouse</li>
        <li>Aperte Cmd+L (ou Ctrl+L)</li>
        <li>O código já aparece na conversa</li>
        <li>Faça sua pergunta</li>
      </ol>

      <p>Isso é mais rápido do que copiar e colar manualmente.</p>

      <InfoBox type="success" title="Checklist para pedir ajuda">
        <ul>
          <li>✅ Incluiu o código relevante?</li>
          <li>✅ Disse o que esperava acontecer?</li>
          <li>✅ Disse o que realmente aconteceu?</li>
          <li>✅ Incluiu a mensagem de erro (se houver)?</li>
        </ul>
      </InfoBox>
    </div>
  );
}

function ValidandoRespostasContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Validando Respostas da IA</h2>

      <h3>A IA Pode Errar</h3>

      <p>Isso é <strong>muito importante</strong>: a IA não é perfeita. Ela pode:</p>

      <ul>
        <li>Dar código que não funciona</li>
        <li>Usar sintaxe desatualizada</li>
        <li>Inventar funções que não existem</li>
        <li>Resolver o problema errado</li>
        <li>Dar uma solução complicada demais</li>
      </ul>

      <InfoBox type="warning" title="Lembre-se sempre">
        <p className="text-lg font-semibold">
          Você é o piloto. A IA é o copiloto.
        </p>
        <p>Você precisa verificar o que ela sugere antes de usar.</p>
      </InfoBox>

      <h3>Passo 1: Leia o Código Antes de Usar</h3>

      <p>Nunca copie código sem ler. Sempre pergunte:</p>

      <ul>
        <li>Entendo o que cada linha faz?</li>
        <li>Faz sentido para o meu problema?</li>
        <li>Parece razoável ou muito complicado?</li>
      </ul>

      <p>Se não entender algo, pergunte:</p>

      <CodeBlock
        language="text"
        code={`Pode explicar o que essa parte faz?

itens.filter(item => item.ativo).map(item => item.nome)`}
      />

      <h3>Passo 2: Teste em Partes Pequenas</h3>

      <p>Não aplique tudo de uma vez. Teste aos poucos:</p>

      <ol>
        <li>Aplica uma parte do código</li>
        <li>Testa se funciona</li>
        <li>Só então adiciona a próxima parte</li>
      </ol>

      <p>Se algo quebrar, você sabe exatamente o que causou.</p>

      <h3>Passo 3: Use console.log Para Verificar</h3>

      <p>Use console.log para ver se o código está fazendo o que deveria:</p>

      <CodeBlock
        language="javascript"
        code={`function encontrarAluno(nome) {
    console.log("Buscando aluno:", nome);  // Verificação

    for (let i = 0; i < alunos.length; i++) {
        console.log("Comparando com:", alunos[i].nome);  // Verificação

        if (alunos[i].nome === nome) {
            console.log("Encontrou!");  // Verificação
            return alunos[i];
        }
    }

    console.log("Não encontrou");  // Verificação
    return null;
}`}
      />

      <h3>Sinais de Alerta: Quando Desconfiar</h3>

      <div className="space-y-4 my-6">
        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-yellow-800">🚩 <strong>Código muito complicado para um problema simples</strong></p>
          <p className="text-yellow-700 text-sm">Se você pediu algo simples e veio 50 linhas, desconfie.</p>
        </div>
        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-yellow-800">🚩 <strong>Usa coisas que você nunca viu</strong></p>
          <p className="text-yellow-700 text-sm">Se aparecem conceitos muito avançados, peça uma versão mais simples.</p>
        </div>
        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-yellow-800">🚩 <strong>Nomes de funções/métodos estranhos</strong></p>
          <p className="text-yellow-700 text-sm">Se a IA menciona uma função que você nunca ouviu falar, pesquise se existe.</p>
        </div>
        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-yellow-800">🚩 <strong>Resolve um problema diferente</strong></p>
          <p className="text-yellow-700 text-sm">Às vezes a IA entende errado. Verifique se é isso mesmo que você pediu.</p>
        </div>
      </div>

      <Quiz
        question="A IA sugeriu código que funciona, mas você não entende uma parte. O que você deve fazer?"
        options={[
          { id: 'a', text: 'Usar assim mesmo, desde que funcione' },
          { id: 'b', text: 'Apagar tudo e tentar outra coisa' },
          { id: 'c', text: 'Perguntar para a IA explicar a parte que não entendeu' },
          { id: 'd', text: 'Pesquisar no Google o código inteiro' },
        ]}
        correctId="c"
        explanation="Sempre peça explicação quando não entender. Copiar código sem entender vai te deixar perdido quando algo der errado. A IA pode explicar qualquer parte do código que ela sugeriu."
      />
    </div>
  );
}

function QuandoIAErraContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Quando a IA Erra</h2>

      <h3>Tipos de Erros da IA</h3>

      <h4>1. Código Com Bug</h4>

      <p>O código roda mas faz a coisa errada ou dá erro.</p>

      <p><strong>O que fazer:</strong></p>
      <ul>
        <li>Mostre o erro para a IA</li>
        <li>Explique o que esperava</li>
        <li>Peça para corrigir</li>
      </ul>

      <CodeBlock
        language="text"
        code={`Esse código que você sugeriu está dando erro:

[código]

Erro: TypeError: Cannot read properties of undefined

Pode corrigir?`}
      />

      <h4>2. Entendeu o Problema Errado</h4>

      <p>A IA resolveu outra coisa, não o que você pediu.</p>

      <p><strong>O que fazer:</strong></p>
      <ul>
        <li>Reformule a pergunta</li>
        <li>Seja mais específico</li>
        <li>Dê um exemplo do resultado esperado</li>
      </ul>

      <CodeBlock
        language="text"
        code={`Acho que não fui claro. Deixa eu explicar melhor:

Eu tenho uma lista de alunos. Quero filtrar só os que têm plano "anual". O resultado deveria ser assim:

Entrada: [{ nome: "Maria", plano: "anual" }, { nome: "João", plano: "mensal" }]
Saída: [{ nome: "Maria", plano: "anual" }]`}
      />

      <h4>3. Solução Complicada Demais</h4>

      <p>A IA deu uma solução que funciona, mas você não entende.</p>

      <p><strong>O que fazer:</strong></p>
      <ul>
        <li>Peça uma versão mais simples</li>
        <li>Peça explicação passo a passo</li>
      </ul>

      <CodeBlock
        language="text"
        code={`Essa solução funciona, mas é complicada pra mim.
Pode fazer uma versão mais simples, usando só for e if?
Sou iniciante e quero entender cada linha.`}
      />

      <h4>4. Informação Desatualizada</h4>

      <p>A IA pode usar sintaxe antiga ou mencionar coisas que mudaram.</p>

      <p><strong>O que fazer:</strong></p>
      <ul>
        <li>Se desconfiar, pesquise na documentação oficial</li>
        <li>Pergunte qual versão a IA está considerando</li>
      </ul>

      <CodeBlock
        language="text"
        code={`Isso ainda funciona em 2025?
Quero ter certeza que é a forma atual de fazer.`}
      />

      <h3>Corrigindo o Rumo da Conversa</h3>

      <p>Se a IA foi por um caminho errado, você pode redirecioná-la:</p>

      <CodeBlock
        language="text"
        code={`Para, essa abordagem não é o que eu quero.

Vamos por outro caminho: quero fazer X usando Y.
Esquece o que falamos antes sobre Z.`}
      />

      <p>Não tenha medo de interromper e recomeçar.</p>

      <Exercise
        id="fase4-pedir-simples"
        title="Exercício: Pedindo Versão Simples"
        description="A IA sugeriu: const buscarAluno = (nome) => alunos.find(x => x.nome === nome) ?? null; — Você não entende arrow functions. O que você diria para a IA?"
        expectedAnswer="'Pode reescrever essa função usando: function normal (não arrow function), loop for para percorrer o array, if para comparar os nomes. Sou iniciante e preciso entender cada linha do código.'"
        hint="Seja específico sobre o que você conhece e o que prefere usar."
      />
    </div>
  );
}

function FluxoTrabalhoContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Fluxo de Trabalho Com IA</h2>

      <h3>O Processo Ideal</h3>

      <div className="my-6 p-6 bg-slate-100 rounded-xl">
        <h4 className="text-center font-bold mb-4">FLUXO DE TRABALHO COM IA</h4>
        <ol className="space-y-4">
          <li>
            <strong>1. PLANEJE primeiro (sem IA)</strong>
            <ul className="text-slate-600 text-sm ml-4">
              <li>• O que você quer fazer?</li>
              <li>• Quais são as partes do problema?</li>
            </ul>
          </li>
          <li>
            <strong>2. PEÇA em partes pequenas</strong>
            <ul className="text-slate-600 text-sm ml-4">
              <li>• Uma funcionalidade de cada vez</li>
              <li>• Não peça o sistema inteiro de uma vez</li>
            </ul>
          </li>
          <li>
            <strong>3. ENTENDA antes de aplicar</strong>
            <ul className="text-slate-600 text-sm ml-4">
              <li>• Leia o código sugerido</li>
              <li>• Pergunte se não entender</li>
            </ul>
          </li>
          <li>
            <strong>4. TESTE cada parte</strong>
            <ul className="text-slate-600 text-sm ml-4">
              <li>• Aplique e teste</li>
              <li>• Só prossiga quando funcionar</li>
            </ul>
          </li>
          <li>
            <strong>5. INTEGRE as partes</strong>
            <ul className="text-slate-600 text-sm ml-4">
              <li>• Junte tudo</li>
              <li>• Teste o conjunto</li>
            </ul>
          </li>
        </ol>
      </div>

      <h3>Exemplo Prático: Sistema de Alunos</h3>

      <h4>Passo 1: Planeje (Sem IA)</h4>

      <p>Antes de pedir qualquer código, pense:</p>

      <div className="my-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-blue-800">
          "Quero um sistema que:
        </p>
        <ol className="text-blue-700 mt-2">
          <li>Guarda uma lista de alunos</li>
          <li>Permite adicionar um aluno</li>
          <li>Permite buscar um aluno pelo nome</li>
          <li>Permite listar todos os alunos"</li>
        </ol>
      </div>

      <p>Agora você sabe <strong>o que</strong> precisa. Pode pedir <strong>uma parte de cada vez</strong>.</p>

      <h4>Passo 2: Peça a Primeira Parte</h4>

      <CodeBlock
        language="text"
        code={`Quero criar um sistema de alunos em JavaScript.

Primeiro, me ajuda a criar a estrutura básica:
- Uma variável para guardar a lista de alunos (array)
- Cada aluno tem: nome, idade, plano

Começa só com isso, com alguns alunos de exemplo.`}
      />

      <p>A IA responde. Você lê, entende, testa.</p>

      <h4>Passo 3: Peça a Segunda Parte</h4>

      <CodeBlock
        language="text"
        code={`Funcionou! Agora quero criar uma função para adicionar um novo aluno na lista.

A função recebe nome, idade e plano, e adiciona no array.`}
      />

      <p>Lê, entende, testa.</p>

      <h4>Passo 4: Continue Parte por Parte</h4>

      <CodeBlock
        language="text"
        code={`Ótimo! Agora preciso de uma função para buscar um aluno pelo nome. Deve retornar o aluno encontrado ou null se não existir.`}
      />

      <p>E assim por diante, uma funcionalidade de cada vez.</p>

      <h3>O Que NÃO Fazer</h3>

      <div className="space-y-3 my-6">
        <div className="p-3 bg-red-50 rounded-lg border border-red-200">
          <p className="text-red-700">❌ <strong>Pedir o sistema inteiro de uma vez</strong></p>
          <p className="text-red-600 text-sm">"Faz um sistema completo de academia com cadastro, planos, pagamentos, relatórios..."</p>
          <p className="text-red-500 text-xs">Isso gera código demais, difícil de entender e cheio de problemas.</p>
        </div>
        <div className="p-3 bg-red-50 rounded-lg border border-red-200">
          <p className="text-red-700">❌ <strong>Copiar sem ler</strong></p>
          <p className="text-red-500 text-xs">Você não vai aprender nada e não vai saber resolver quando quebrar.</p>
        </div>
        <div className="p-3 bg-red-50 rounded-lg border border-red-200">
          <p className="text-red-700">❌ <strong>Desistir no primeiro erro</strong></p>
          <p className="text-red-500 text-xs">Erros são normais. Mostre o erro para a IA e peça para corrigir.</p>
        </div>
      </div>

      <Quiz
        question="Qual é a melhor forma de pedir para a IA criar um sistema de cadastro de alunos?"
        options={[
          { id: 'a', text: 'Pedir o sistema completo de uma vez para economizar tempo' },
          { id: 'b', text: 'Pedir uma funcionalidade de cada vez, testando cada parte' },
          { id: 'c', text: 'Copiar código de outro projeto e pedir para adaptar' },
          { id: 'd', text: 'Deixar a IA decidir como estruturar tudo' },
        ]}
        correctId="b"
        explanation="Pedir em partes pequenas permite que você entenda cada parte, teste individualmente, e identifique problemas mais facilmente. Sistemas grandes de uma vez geram código difícil de entender e debugar."
      />
    </div>
  );
}

function ExemplosReaisContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Praticando Com Exemplos Reais</h2>

      <h3>Exemplo 1: Pedindo Ajuda Com Erro</h3>

      <p>Você está com esse código que não funciona:</p>

      <CodeBlock
        language="javascript"
        code={`let alunos = ["Maria", "João", "Ana"];

for (let i = 1; i <= alunos.length; i++) {
    console.log(alunos[i]);
}`}
      />

      <p>Saída:</p>
      <CodeBlock language="text" code={`João\nAna\nundefined`} />

      <p><strong>Como pedir ajuda:</strong></p>

      <CodeBlock
        language="text"
        code={`Esse código deveria mostrar todos os nomes do array, mas está pulando "Maria" no começo e mostrando "undefined" no final:

let alunos = ["Maria", "João", "Ana"];

for (let i = 1; i <= alunos.length; i++) {
    console.log(alunos[i]);
}

Saída atual:
João
Ana
undefined

Esperado:
Maria
João
Ana

O que está errado?`}
      />

      <p>A IA vai explicar que:</p>
      <ul>
        <li>O índice começa em 0, não em 1</li>
        <li>A condição deveria ser {'<'} em vez de {'<='}</li>
      </ul>

      <h3>Exemplo 2: Pedindo Para Explicar Código</h3>

      <p>Você encontrou esse código e não entende:</p>

      <CodeBlock
        language="javascript"
        code={`let ativos = alunos.filter(a => a.ativo).map(a => a.nome);`}
      />

      <p><strong>Como pedir explicação:</strong></p>

      <CodeBlock
        language="text"
        code={`Pode explicar esse código linha por linha?
Sou iniciante, então explica o que cada parte faz:

let ativos = alunos.filter(a => a.ativo).map(a => a.nome);

O que é filter? O que é map? O que significa a => a.ativo?`}
      />

      <h3>Exemplo 3: Pedindo Versão Mais Simples</h3>

      <p>A IA sugeriu isso:</p>

      <CodeBlock
        language="javascript"
        code={`const encontrarAluno = (nome) => alunos.find(a => a.nome === nome) ?? null;`}
      />

      <p>Mas você não entende arrow functions nem o operador <code>??</code>.</p>

      <p><strong>Como pedir versão simples:</strong></p>

      <CodeBlock
        language="text"
        code={`Essa solução funciona, mas não entendo a sintaxe.
Pode reescrever usando:
- function normal (não arrow function)
- if/else em vez de ??
- for loop se precisar percorrer

Sou iniciante e quero entender cada linha.`}
      />

      <p>A IA pode reescrever assim:</p>

      <CodeBlock
        language="javascript"
        code={`function encontrarAluno(nome) {
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nome === nome) {
            return alunos[i];
        }
    }
    return null;
}`}
      />

      <p>Muito mais fácil de entender!</p>

      <h3>Resumo: Trabalhando Com IA</h3>

      <div className="my-6 p-6 bg-slate-100 rounded-xl font-mono text-sm">
        <p className="font-bold text-center mb-4">VOCÊ É O PILOTO, IA É COPILOTO</p>
        <div className="space-y-3">
          <div>
            <p className="font-semibold">ANTES DE PERGUNTAR</p>
            <ul className="text-slate-600">
              <li>• Pense no que você quer</li>
              <li>• Divida em partes pequenas</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">AO PERGUNTAR</p>
            <ul className="text-slate-600">
              <li>• Dê contexto (o que está fazendo)</li>
              <li>• Mostre código relevante</li>
              <li>• Seja específico no objetivo</li>
              <li>• Descreva esperado vs. acontecido</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">AO RECEBER RESPOSTA</p>
            <ul className="text-slate-600">
              <li>• Leia o código (não copie cegamente)</li>
              <li>• Pergunte se não entender</li>
              <li>• Peça versão mais simples se necessário</li>
              <li>• Desconfie se for muito complicado</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">AO APLICAR</p>
            <ul className="text-slate-600">
              <li>• Teste em partes pequenas</li>
              <li>• Use console.log para verificar</li>
              <li>• Se der erro, mostre para a IA</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
        <h4 className="text-green-800 font-semibold mb-2">Parabéns!</h4>
        <p className="text-green-700">
          Você agora sabe usar IA como ferramenta de verdade — como piloto, não passageiro! Na próxima fase, vamos entender como projetos reais são organizados.
        </p>
      </div>
    </div>
  );
}

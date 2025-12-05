'use client';

import { CodeBlock } from '../CodeBlock';
import { InfoBox } from '../InfoBox';
import { Quiz } from '../Quiz';
import { Exercise } from '../Exercise';

interface Fase5ContentProps {
  moduleId: string;
}

export function Fase5Content({ moduleId }: Fase5ContentProps) {
  switch (moduleId) {
    case 'intro':
      return <IntroContent />;
    case 'por-que-dividir':
      return <PorQueDividirContent />;
    case 'estrutura-pastas':
      return <EstruturaPastasContent />;
    case 'imports-exports':
      return <ImportsExportsContent />;
    case 'package-json':
      return <PackageJsonContent />;
    case 'git-basico':
      return <GitBasicoContent />;
    case 'navegando-projeto':
      return <NavegandoProjetoContent />;
    default:
      return <div>Conteúdo não encontrado para o módulo: {moduleId}</div>;
  }
}

function IntroContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Entendendo Estrutura de Projetos</h2>

      <p className="text-xl text-slate-600 mb-6">
        Na Fase 2, você aprendeu a programar em arquivos isolados. Mas projetos reais têm <strong>dezenas ou centenas de arquivos</strong> organizados em pastas.
      </p>

      <h3>O que você vai aprender nesta fase</h3>

      <ul>
        <li><strong>Por que</strong> dividimos código em vários arquivos</li>
        <li><strong>Como</strong> os arquivos se conectam entre si</li>
        <li><strong>O que</strong> são as dependências de um projeto</li>
        <li><strong>Como</strong> navegar em um projeto sem se perder</li>
      </ul>

      <InfoBox type="success" title="Objetivo">
        <p>
          Ao final desta fase, você será capaz de abrir qualquer projeto React Native e entender sua estrutura geral — mesmo sem entender cada linha de código.
        </p>
      </InfoBox>

      <h3>Por que isso importa?</h3>

      <p>
        Quando você for trabalhar em projetos reais ou estudar código de outras pessoas, vai encontrar muitos arquivos. Sem entender como eles se organizam, você vai se sentir perdido.
      </p>

      <p>
        Esta fase vai te dar um "mapa" para navegar em qualquer projeto.
      </p>

      <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
        <h4 className="text-blue-800 font-semibold mb-2">Próximo passo</h4>
        <p className="text-blue-700">
          Vamos começar entendendo por que dividimos o código em vários arquivos em vez de colocar tudo em um arquivo só.
        </p>
      </div>
    </div>
  );
}

function PorQueDividirContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Por Que Dividir o Código?</h2>

      <h3>O Problema do Arquivo Gigante</h3>

      <p>Imagine que todo o código do aplicativo da academia ficasse em um único arquivo:</p>

      <CodeBlock
        language="javascript"
        code={`// app.js - 50.000 linhas de código

// Linhas 1-500: Configurações
// Linhas 501-2000: Funções de alunos
// Linhas 2001-3500: Funções de pagamentos
// Linhas 3501-5000: Funções de agendamento
// Linhas 5001-8000: Telas do aplicativo
// Linhas 8001-12000: Conexão com banco de dados
// ... e assim por diante`}
      />

      <p>Problemas:</p>

      <ol>
        <li><strong>Difícil de encontrar coisas</strong> — Onde está a função de calcular IMC? Boa sorte procurando em 50.000 linhas.</li>
        <li><strong>Difícil de trabalhar em equipe</strong> — Se você e um colega editam o mesmo arquivo ao mesmo tempo, vai dar conflito.</li>
        <li><strong>Difícil de entender</strong> — Você precisa rolar por milhares de linhas para entender o que o projeto faz.</li>
        <li><strong>Difícil de reutilizar</strong> — Se quiser usar a função de calcular IMC em outro projeto, precisa copiar manualmente.</li>
      </ol>

      <h3>A Solução: Separar Responsabilidades</h3>

      <p>Em vez de um arquivo gigante, dividimos o código em <strong>módulos</strong> — arquivos menores, cada um com uma responsabilidade específica:</p>

      <CodeBlock
        language="text"
        code={`academia-app/
├── config/
│   └── database.js         ← Configurações do banco
├── services/
│   ├── alunoService.js     ← Lógica de alunos
│   ├── pagamentoService.js ← Lógica de pagamentos
│   └── agendaService.js    ← Lógica de agendamento
├── screens/
│   ├── HomeScreen.js       ← Tela inicial
│   ├── AlunosScreen.js     ← Tela de alunos
│   └── PerfilScreen.js     ← Tela de perfil
├── utils/
│   └── calculadora.js      ← Funções utilitárias (IMC, etc.)
└── App.js                  ← Arquivo principal`}
      />

      <p>Agora:</p>
      <ul>
        <li>Quer achar a função de IMC? Está em <code>utils/calculadora.js</code></li>
        <li>Quer mudar a tela de alunos? Está em <code>screens/AlunosScreen.js</code></li>
        <li>Cada arquivo tem poucas centenas de linhas, fácil de entender</li>
      </ul>

      <h3>Analogia: O Armário Organizado</h3>

      <p>Pense em como você organiza um armário:</p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
          <p className="text-red-700 font-medium">❌ Armário bagunçado</p>
          <p className="text-red-600 text-sm">Tudo jogado junto — camisetas, calças, meias, documentos, ferramentas...</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-green-700 font-medium">✅ Armário organizado</p>
          <p className="text-green-600 text-sm">Gavetas separadas — uma para camisetas, uma para calças, uma para documentos...</p>
        </div>
      </div>

      <p>
        Código é igual. Separamos por "gavetas" (pastas) e "itens" (arquivos) para encontrar as coisas rapidamente.
      </p>

      <Quiz
        question="Por que dividimos código em vários arquivos?"
        options={[
          { id: 'a', text: 'Para fazer o projeto parecer mais profissional' },
          { id: 'b', text: 'Porque o computador roda mais rápido assim' },
          { id: 'c', text: 'Para organizar, facilitar manutenção e trabalho em equipe' },
          { id: 'd', text: 'Porque arquivos grandes não funcionam' },
        ]}
        correctId="c"
        explanation="Dividir código facilita encontrar coisas, entender o projeto, trabalhar em equipe sem conflitos, e reutilizar código em outros projetos. O computador processa igual, mas para humanos faz muita diferença!"
      />
    </div>
  );
}

function EstruturaPastasContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Estrutura de Pastas Comum</h2>

      <h3>Estrutura Típica de um Projeto React Native</h3>

      <p>Quando você cria ou abre um projeto React Native, vai ver algo assim:</p>

      <CodeBlock
        language="text"
        code={`meu-app/
├── node_modules/          ← Bibliotecas externas (NÃO MEXA!)
├── src/                   ← Seu código fica aqui
│   ├── components/        ← Componentes reutilizáveis
│   ├── screens/           ← Telas do app
│   ├── services/          ← Lógica de negócio e APIs
│   ├── utils/             ← Funções auxiliares
│   └── assets/            ← Imagens, fontes, etc.
├── App.js                 ← Ponto de entrada do app
├── package.json           ← Configurações e dependências
├── package-lock.json      ← Versões exatas das dependências
└── README.md              ← Documentação do projeto`}
      />

      <h3>node_modules/</h3>

      <p>Esta pasta contém todas as <strong>bibliotecas externas</strong> que o projeto usa.</p>

      <InfoBox type="warning" title="NUNCA edite arquivos dentro de node_modules!">
        <ul>
          <li>Ela é gerada automaticamente pelo comando <code>npm install</code></li>
          <li>Pode ter milhares de arquivos (é normal!)</li>
          <li>Se deletar, basta rodar <code>npm install</code> novamente</li>
        </ul>
      </InfoBox>

      <h3>src/ (ou app/)</h3>

      <p>Aqui fica <strong>o código que você escreve</strong>. A organização interna pode variar:</p>

      <h4>components/ — Peças reutilizáveis</h4>
      <CodeBlock
        language="text"
        code={`components/
├── Button.js           ← Botão personalizado
├── Card.js             ← Card de informações
├── Header.js           ← Cabeçalho
└── AlunoListItem.js    ← Item da lista de alunos`}
      />

      <h4>screens/ — Telas completas</h4>
      <CodeBlock
        language="text"
        code={`screens/
├── HomeScreen.js       ← Tela inicial
├── LoginScreen.js      ← Tela de login
├── AlunosScreen.js     ← Lista de alunos
└── AlunoDetailScreen.js ← Detalhes de um aluno`}
      />

      <h4>services/ — Lógica e APIs</h4>
      <CodeBlock
        language="text"
        code={`services/
├── api.js              ← Configuração de conexão
├── alunoService.js     ← Operações com alunos
└── authService.js      ← Autenticação`}
      />

      <h4>utils/ — Funções auxiliares</h4>
      <CodeBlock
        language="text"
        code={`utils/
├── formatters.js       ← Formatar datas, números, etc.
├── validators.js       ← Validar email, CPF, etc.
└── calculators.js      ← Cálculos (IMC, etc.)`}
      />

      <h3>App.js</h3>

      <p>O <strong>ponto de entrada</strong> do aplicativo. É o primeiro arquivo que roda quando o app abre. Geralmente configura navegação e tema.</p>

      <h3>package.json</h3>

      <p>O "documento de identidade" do projeto. Contém:</p>
      <ul>
        <li>Nome do projeto</li>
        <li>Versão</li>
        <li>Lista de dependências (bibliotecas usadas)</li>
        <li>Scripts para rodar o projeto</li>
      </ul>

      <InfoBox type="info" title="README.md">
        <p>Documentação do projeto. Explica o que o projeto faz, como instalar e rodar, e como contribuir.</p>
      </InfoBox>
    </div>
  );
}

function ImportsExportsContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Imports e Exports — Conectando Arquivos</h2>

      <h3>O Conceito</h3>

      <p>
        Quando dividimos código em vários arquivos, precisamos de uma forma de um arquivo <strong>usar código de outro arquivo</strong>.
      </p>

      <p>
        É como peças de LEGO: cada peça é independente, mas elas se conectam para formar algo maior.
      </p>

      <p>
        Em JavaScript, fazemos isso com <strong>export</strong> (disponibilizar) e <strong>import</strong> (buscar).
      </p>

      <h3>Export: Disponibilizando Código</h3>

      <h4>Export Nomeado (Named Export)</h4>

      <p>Você pode exportar várias coisas do mesmo arquivo:</p>

      <CodeBlock
        language="javascript"
        code={`// utils/calculators.js

// Exportando uma função
export function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Exportando outra função
export function calcularIdade(anoNascimento) {
    let anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}

// Exportando uma constante
export const IDADE_MINIMA = 16;`}
      />

      <h4>Export Default (Export Padrão)</h4>

      <p>Quando um arquivo tem uma "coisa principal" para exportar:</p>

      <CodeBlock
        language="javascript"
        code={`// components/Button.js

function Button({ texto, onPress }) {
    // ... código do componente
}

export default Button;`}
      />

      <p>Cada arquivo só pode ter <strong>um</strong> export default.</p>

      <h3>Import: Buscando Código de Outro Arquivo</h3>

      <h4>Importando Named Exports</h4>

      <p>Use chaves <code>{'{ }'}</code> e o nome exato:</p>

      <CodeBlock
        language="javascript"
        code={`// screens/AlunoScreen.js

import { calcularIMC, calcularIdade } from '../utils/calculators';
import { IDADE_MINIMA } from '../utils/calculators';

// Ou tudo junto:
import { calcularIMC, calcularIdade, IDADE_MINIMA } from '../utils/calculators';`}
      />

      <h4>Importando Default Export</h4>

      <p>Sem chaves, e você pode dar o nome que quiser:</p>

      <CodeBlock
        language="javascript"
        code={`// screens/HomeScreen.js

import Button from '../components/Button';

// Poderia ser qualquer nome:
import MeuBotao from '../components/Button';  // Funciona igual!`}
      />

      <h3>Caminhos de Importação</h3>

      <h4>Caminhos Relativos</h4>

      <p>Usam <code>./</code> (mesma pasta) ou <code>../</code> (pasta acima):</p>

      <CodeBlock
        language="javascript"
        code={`// Estou em: src/screens/AlunoScreen.js
// Quero importar: src/utils/calculators.js

import { calcularIMC } from '../utils/calculators';
//                         ↑
//                         Sobe uma pasta (sai de screens/)
//                         depois entra em utils/`}
      />

      <h4>Caminhos Absolutos (Bibliotecas)</h4>

      <p>Quando importamos de <code>node_modules</code>, usamos só o nome:</p>

      <CodeBlock
        language="javascript"
        code={`// Importando do React (biblioteca externa)
import React from 'react';
import { View, Text, Button } from 'react-native';

// Não precisa de ./ ou ../
// O JavaScript sabe que está em node_modules`}
      />

      <Quiz
        question="Qual é a forma correta de importar uma função 'calcularIMC' que foi exportada com 'export function calcularIMC...'?"
        options={[
          { id: 'a', text: "import calcularIMC from './utils'" },
          { id: 'b', text: "import { calcularIMC } from './utils'" },
          { id: 'c', text: "import default calcularIMC from './utils'" },
          { id: 'd', text: "require('./utils').calcularIMC" },
        ]}
        correctId="b"
        explanation="Named exports (função, constante, etc. com 'export' na frente) precisam ser importados com chaves { }. Sem chaves é para default exports."
      />
    </div>
  );
}

function PackageJsonContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>O Arquivo package.json</h2>

      <h3>O Que É</h3>

      <p>O <code>package.json</code> é o <strong>documento de identidade</strong> do projeto. Ele contém:</p>

      <ul>
        <li>Informações básicas (nome, versão, descrição)</li>
        <li>Lista de dependências (bibliotecas que o projeto usa)</li>
        <li>Scripts (comandos para rodar, testar, etc.)</li>
      </ul>

      <h3>Anatomia de um package.json</h3>

      <CodeBlock
        language="json"
        code={`{
  "name": "academia-app",
  "version": "1.0.0",
  "description": "Aplicativo de gestão para academias",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "test": "jest"
  },
  "dependencies": {
    "react": "18.2.0",
    "react-native": "0.72.6",
    "expo": "~49.0.15",
    "@react-navigation/native": "^6.1.9"
  },
  "devDependencies": {
    "jest": "^29.7.0",
    "@babel/core": "^7.20.0"
  }
}`}
      />

      <h4>Scripts</h4>

      <p>Comandos que você pode rodar com <code>npm run {'<nome>'}</code>:</p>

      <CodeBlock
        language="bash"
        code={`npm run start    # ou apenas: npm start
npm run android
npm run test`}
      />

      <h4>Dependencies</h4>

      <p>Bibliotecas que o projeto <strong>precisa para funcionar</strong>.</p>

      <h4>DevDependencies</h4>

      <p>Bibliotecas usadas apenas durante o <strong>desenvolvimento</strong> (não vão para o app final).</p>

      <h3>Comandos Essenciais do npm</h3>

      <div className="my-6 space-y-4">
        <div className="p-4 bg-slate-100 rounded-lg">
          <p className="font-mono font-bold">npm install</p>
          <p className="text-slate-600 text-sm">Instala todas as dependências listadas no package.json</p>
        </div>
        <div className="p-4 bg-slate-100 rounded-lg">
          <p className="font-mono font-bold">npm install axios</p>
          <p className="text-slate-600 text-sm">Adiciona uma nova biblioteca ao projeto</p>
        </div>
        <div className="p-4 bg-slate-100 rounded-lg">
          <p className="font-mono font-bold">npm run {'<script>'}</p>
          <p className="text-slate-600 text-sm">Roda um script definido no package.json</p>
        </div>
      </div>

      <InfoBox type="warning" title="package-lock.json">
        <ul>
          <li>✅ <strong>Mantenha no projeto</strong> — Garante que todos usem as mesmas versões</li>
          <li>❌ <strong>Nunca edite manualmente</strong> — É gerenciado pelo npm</li>
        </ul>
      </InfoBox>

      <Exercise
        id="fase5-package"
        title="Exercício: Lendo package.json"
        description="Dado um package.json com 'scripts': { 'start': 'expo start', 'test': 'jest' }, como você iniciaria o projeto?"
        expectedAnswer="npm run start ou npm start"
        hint="Scripts são rodados com 'npm run' seguido do nome do script."
      />
    </div>
  );
}

function GitBasicoContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Git Básico — Versionamento de Código</h2>

      <h3>O Problema Que o Git Resolve</h3>

      <p>Você já fez isso?</p>

      <CodeBlock
        language="text"
        code={`projeto/
├── app.js
├── app_backup.js
├── app_v2.js
├── app_v2_final.js
├── app_v2_final_FINAL.js
└── app_v2_final_FINAL_agora_vai.js`}
      />

      <p>Ou pior: fez uma mudança que quebrou tudo e não consegue voltar atrás?</p>

      <p>
        <strong>Git</strong> resolve isso. É um sistema de <strong>controle de versão</strong> — ele guarda o histórico completo de todas as mudanças do projeto.
      </p>

      <h3>Conceitos Fundamentais</h3>

      <h4>Repositório (repo)</h4>
      <p>Um projeto gerenciado pelo Git. Contém todo o código e seu histórico.</p>

      <h4>Commit</h4>
      <p>Um "ponto de salvamento". Cada commit guarda:</p>
      <ul>
        <li>O estado de todos os arquivos naquele momento</li>
        <li>Uma mensagem descrevendo o que mudou</li>
        <li>Quando foi feito e por quem</li>
      </ul>

      <div className="my-6 p-4 bg-slate-100 rounded-lg font-mono text-sm">
        <p>Histórico de commits:</p>
        <p className="text-slate-600">Commit 1 → Commit 2 → Commit 3 → Commit 4</p>
        <p className="text-slate-500 text-xs">"Início do projeto" → "Adiciona tela de login" → "Corrige bug" → "Adiciona tela de alunos"</p>
      </div>

      <p>Você pode <strong>voltar para qualquer commit anterior</strong> a qualquer momento!</p>

      <h3>Fluxo Básico de Trabalho</h3>

      <h4>1. Verificar Status</h4>
      <CodeBlock language="bash" code={`git status`} />
      <p>Mostra arquivos modificados, novos, e o que está pronto para commit.</p>

      <h4>2. Adicionar Arquivos</h4>
      <CodeBlock
        language="bash"
        code={`# Adicionar um arquivo específico
git add App.js

# Adicionar todos os arquivos modificados
git add .`}
      />

      <h4>3. Fazer Commit</h4>
      <CodeBlock language="bash" code={`git commit -m "Adiciona tela de cadastro de alunos"`} />

      <InfoBox type="tip" title="Boas mensagens de commit">
        <ul>
          <li>✅ "Adiciona validação de CPF no cadastro"</li>
          <li>✅ "Corrige bug de cálculo de IMC"</li>
          <li>❌ "Mudanças"</li>
          <li>❌ "asdfasdf"</li>
        </ul>
      </InfoBox>

      <h3>Por Que Você Não Precisa Ter Medo</h3>

      <p>Com Git, você tem <strong>superpoderes</strong>:</p>

      <ul>
        <li><strong>Voltar no tempo</strong> — Pode voltar para qualquer versão anterior</li>
        <li><strong>Descartar mudanças</strong> — Se fez algo errado, pode desfazer</li>
        <li><strong>Ver o que mudou</strong> — Compara versões facilmente</li>
      </ul>

      <p>Então, pode experimentar à vontade! Se quebrar, você volta atrás.</p>

      <Quiz
        question="O que um 'commit' no Git representa?"
        options={[
          { id: 'a', text: 'Uma cópia do projeto inteiro em outra pasta' },
          { id: 'b', text: 'Um ponto de salvamento no histórico do projeto' },
          { id: 'c', text: 'Um backup na nuvem' },
          { id: 'd', text: 'Uma versão publicada do app' },
        ]}
        correctId="b"
        explanation="Um commit é um 'snapshot' do seu projeto naquele momento, com uma mensagem descrevendo as mudanças. Você pode voltar para qualquer commit a qualquer momento."
      />
    </div>
  );
}

function NavegandoProjetoContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Navegando em um Projeto Real</h2>

      <h3>Estratégia de Exploração</h3>

      <p>Quando você abre um projeto novo, siga esses passos:</p>

      <h4>Passo 1: Leia o README.md</h4>
      <p>Se existir, começa por aqui. Geralmente explica o que o projeto faz, como instalar, e como rodar.</p>

      <h4>Passo 2: Olhe o package.json</h4>
      <p>Identifique quais bibliotecas são usadas e quais scripts estão disponíveis.</p>

      <h4>Passo 3: Encontre o Ponto de Entrada</h4>
      <p>Geralmente é <code>App.js</code>, <code>index.js</code>, ou <code>src/index.js</code>. Este é o arquivo que "começa tudo".</p>

      <h4>Passo 4: Siga as Importações</h4>
      <p>A partir do ponto de entrada, veja o que é importado e vá seguindo o rastro:</p>

      <CodeBlock
        language="javascript"
        code={`// App.js
import HomeScreen from './src/screens/HomeScreen';  // → Vá ver esse arquivo
import { AuthProvider } from './src/context/AuthContext';  // → E esse também`}
      />

      <h4>Passo 5: Entenda a Estrutura de Pastas</h4>
      <p>Mapeie mentalmente: onde ficam as telas? Onde fica a lógica? Onde ficam os componentes?</p>

      <h3>Exercício: Explorando um Projeto</h3>

      <p>Dado este projeto:</p>

      <CodeBlock
        language="text"
        code={`academia-app/
├── src/
│   ├── components/
│   │   ├── Button.js
│   │   └── AlunoItem.js
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── AlunosScreen.js
│   │   └── CadastroScreen.js
│   ├── services/
│   │   └── alunoService.js
│   └── utils/
│       └── calculators.js
├── App.js
└── package.json`}
      />

      <h4>Perguntas de navegação:</h4>

      <div className="space-y-4 my-6">
        <div className="p-4 bg-slate-100 rounded-lg">
          <p className="font-medium">Onde você iria para mudar o visual de um botão em todo o app?</p>
          <p className="text-slate-600 text-sm mt-2">✅ <code>src/components/Button.js</code> — Componentes são peças visuais reutilizáveis.</p>
        </div>

        <div className="p-4 bg-slate-100 rounded-lg">
          <p className="font-medium">A tela de lista de alunos está mostrando dados errados. Onde procurar?</p>
          <p className="text-slate-600 text-sm mt-2">✅ Primeiro em <code>src/screens/AlunosScreen.js</code>. Se a tela parece correta, o problema pode estar em <code>src/services/alunoService.js</code>.</p>
        </div>

        <div className="p-4 bg-slate-100 rounded-lg">
          <p className="font-medium">Você precisa mudar a fórmula de cálculo de IMC. Onde está?</p>
          <p className="text-slate-600 text-sm mt-2">✅ <code>src/utils/calculators.js</code> — Funções utilitárias de cálculo ficam em utils.</p>
        </div>
      </div>

      <Exercise
        id="fase5-navegacao"
        title="Exercício: Onde Criar?"
        description="Você quer adicionar uma nova tela de 'Relatórios' ao projeto. Em qual pasta e com qual nome você criaria o arquivo?"
        expectedAnswer="src/screens/RelatoriosScreen.js — seguindo o padrão de nomenclatura das outras telas (pasta screens, sufixo Screen.js)"
        hint="Olhe onde estão as outras telas e como elas são nomeadas."
      />

      <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
        <h4 className="text-green-800 font-semibold mb-2">Parabéns!</h4>
        <p className="text-green-700">
          Você agora sabe navegar em projetos reais! Na próxima fase, vamos criar interfaces visuais com React Native.
        </p>
      </div>
    </div>
  );
}

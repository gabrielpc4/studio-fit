'use client';

import { CodeBlock } from '../CodeBlock';
import { InfoBox } from '../InfoBox';
import { Quiz } from '../Quiz';
import { Exercise } from '../Exercise';

interface Fase1ContentProps {
  moduleId: string;
}

export function Fase1Content({ moduleId }: Fase1ContentProps) {
  switch (moduleId) {
    case 'intro':
      return <IntroContent />;
    case 'o-que-e-programa':
      return <OQueEProgramaContent />;
    case 'como-computador-pensa':
      return <ComoComputadorPensaContent />;
    case 'o-que-e-codigo':
      return <OQueECodigoContent />;
    case 'ambiente-desenvolvimento':
      return <AmbienteDesenvolvimentoContent />;
    case 'juntando-tudo':
      return <JuntandoTudoContent />;
    default:
      return <div>Conteúdo não encontrado</div>;
  }
}

function IntroContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Bem-vindo à sua jornada na programação!</h2>

      <p className="text-lg">
        Antes de escrever qualquer código, é importante entender <strong>como computadores e programas funcionam</strong>.
        Essa fase vai te dar a base mental necessária para tudo que vem depois.
      </p>

      <InfoBox type="tip" title="Não tenha pressa">
        <p>
          Você <em>não precisa</em> decorar nada. O objetivo aqui é criar familiaridade,
          não memorização. Ao longo do curso, esses conceitos vão se solidificar naturalmente.
        </p>
      </InfoBox>

      <h3>O que você vai aprender nesta fase:</h3>

      <ul>
        <li>O que é um programa de computador (sem mistério!)</li>
        <li>Como o computador "entende" o que você escreve</li>
        <li>O que é código e como ele se parece</li>
        <li>Como preparar seu ambiente de desenvolvimento</li>
      </ul>

      <InfoBox type="info">
        <p>
          <strong>Tempo estimado:</strong> Cerca de 30-45 minutos para completar esta fase.
          Faça no seu ritmo!
        </p>
      </InfoBox>

      <h3>Preparado?</h3>
      <p>
        Não se preocupe se alguns conceitos parecerem abstratos no início.
        Tudo vai fazer mais sentido quando você começar a praticar. Vamos lá!
      </p>
    </div>
  );
}

function OQueEProgramaContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>A Analogia da Receita de Bolo</h2>

      <p className="text-lg">
        Você já fez ou viu alguém fazer um bolo? Uma receita de bolo tem:
      </p>

      <ul>
        <li><strong>Ingredientes</strong> (farinha, ovos, açúcar...)</li>
        <li><strong>Instruções</strong> em ordem (primeiro misture isso, depois adicione aquilo, depois leve ao forno...)</li>
      </ul>

      <InfoBox type="tip" title="Um programa é exatamente isso!">
        <p>
          É uma lista de <strong>instruções que o computador segue</strong>, passo a passo, para fazer alguma coisa.
        </p>
      </InfoBox>

      <h3>Comparando</h3>

      <div className="grid md:grid-cols-2 gap-4 not-prose">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h4 className="font-bold text-amber-800 mb-2">Receita de Bolo</h4>
          <ol className="text-sm text-amber-900 list-decimal list-inside space-y-1">
            <li>Misture 2 ovos + 1 xícara de açúcar</li>
            <li>Adicione 2 xícaras de farinha</li>
            <li>Coloque em forma untada</li>
            <li>Leve ao forno por 40 min</li>
          </ol>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-bold text-blue-800 mb-2">Programa de Computador</h4>
          <ol className="text-sm text-blue-900 list-decimal list-inside space-y-1">
            <li>Pegue os dados do aluno</li>
            <li>Calcule o IMC do aluno</li>
            <li>Guarde o resultado</li>
            <li>Mostre na tela</li>
          </ol>
        </div>
      </div>

      <h3 className="mt-8">Por Que Isso é Útil?</h3>

      <p>
        Quando você entende que um programa é apenas uma sequência de passos,
        programar fica menos assustador. Você não precisa inventar nada mágico —
        precisa apenas descrever, passo a passo, o que o computador deve fazer.
      </p>

      <h3>Exemplos de Programas no Seu Dia a Dia</h3>

      <ul>
        <li>O <strong>aplicativo de calculadora</strong> do celular: recebe números e operações, calcula, mostra resultado</li>
        <li>O <strong>WhatsApp</strong>: recebe sua mensagem, envia pela internet, mostra na tela do outro</li>
        <li>O <strong>GPS/Waze</strong>: recebe seu destino, calcula melhor rota, te guia passo a passo</li>
      </ul>

      <InfoBox type="info" title="Pense como um robô">
        <p>
          O computador é muito obediente, mas <strong>não sabe improvisar</strong>.
          Se você esquecer um passo ou der uma instrução confusa, ele não vai "adivinhar"
          o que você quis dizer. Ele simplesmente vai fazer errado ou parar.
        </p>
      </InfoBox>

      <Quiz
        question="O que é um programa de computador?"
        options={[
          { id: 'a', text: 'Uma linguagem que computadores inventaram' },
          { id: 'b', text: 'Uma lista de instruções que o computador segue passo a passo' },
          { id: 'c', text: 'Um tipo especial de hardware' },
          { id: 'd', text: 'Uma tela que mostra informações' },
        ]}
        correctId="b"
        explanation="Exatamente! Um programa é como uma receita: uma sequência de instruções que o computador executa em ordem."
      />
    </div>
  );
}

function ComoComputadorPensaContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Spoiler: Ele Não Pensa</h2>

      <p className="text-lg">
        Diferente de você, o computador <strong>não tem ideias próprias</strong>.
        Ele é uma máquina que executa instruções muito rapidamente, mas ele:
      </p>

      <ul>
        <li><strong>Não entende contexto</strong></li>
        <li><strong>Não adivinha o que você quis dizer</strong></li>
        <li><strong>Não tem criatividade</strong></li>
        <li><strong>Faz EXATAMENTE o que você manda</strong> (nem mais, nem menos)</li>
      </ul>

      <h3>A Metáfora do Robô Literal</h3>

      <p>
        Imagine que você tem um robô assistente, mas ele leva TUDO ao pé da letra:
      </p>

      <div className="bg-slate-100 rounded-lg p-4 not-prose my-4">
        <p className="text-slate-700">
          <strong>Você:</strong> "Coloque o lixo para fora"
        </p>
        <p className="text-slate-700 mt-2">
          <strong>Robô:</strong> <em>Pega a lixeira e coloca do lado de fora da porta.
          Mas não coloca o saco de lixo na lixeira, porque você não pediu.</em>
        </p>
      </div>

      <p>
        Computadores são assim. Se você não for específico, o resultado não será o esperado.
      </p>

      <InfoBox type="warning" title="Por que isso é importante?">
        <p>
          Quando você estiver programando e algo não funcionar, lembre-se:
          <strong>o computador fez exatamente o que você mandou</strong>.
          O "erro" geralmente está nas suas instruções, não no computador.
        </p>
      </InfoBox>

      <h3>O Computador Só Entende 0 e 1</h3>

      <p>
        No fundo, o computador só entende sequências de zeros e uns (código binário):
      </p>

      <CodeBlock
        code="01001000 01100101 01101100 01101100 01101111"
        language="binary"
        showLineNumbers={false}
      />

      <p>
        Isso significa "Hello" em código binário! Mas não se preocupe — você nunca
        vai precisar escrever assim. É para isso que existem as <strong>linguagens de programação</strong>.
      </p>

      <h3>Linguagens de Programação: O Tradutor</h3>

      <p>
        Linguagens como JavaScript (que você vai aprender) funcionam como tradutores:
      </p>

      <div className="not-prose my-4 flex flex-col md:flex-row items-center gap-4 justify-center">
        <div className="bg-green-100 border border-green-300 rounded-lg p-3 text-center">
          <p className="text-sm text-green-800">Você escreve</p>
          <code className="text-green-900 font-mono">console.log("Olá")</code>
        </div>

        <div className="text-2xl text-slate-400">→</div>

        <div className="bg-blue-100 border border-blue-300 rounded-lg p-3 text-center">
          <p className="text-sm text-blue-800">Linguagem traduz</p>
          <code className="text-blue-900 font-mono text-xs">01001000 01100101...</code>
        </div>

        <div className="text-2xl text-slate-400">→</div>

        <div className="bg-purple-100 border border-purple-300 rounded-lg p-3 text-center">
          <p className="text-sm text-purple-800">Computador executa</p>
          <p className="text-purple-900">Mostra "Olá" na tela</p>
        </div>
      </div>

      <Quiz
        question="Por que o computador não 'adivinha' o que você quis dizer?"
        options={[
          { id: 'a', text: 'Porque ele é preguiçoso' },
          { id: 'b', text: 'Porque ele só segue instruções exatas, sem interpretar contexto' },
          { id: 'c', text: 'Porque a internet está lenta' },
          { id: 'd', text: 'Porque você precisa pagar uma assinatura' },
        ]}
        correctId="b"
        explanation="O computador é uma máquina que executa instruções literalmente. Ele não tem capacidade de interpretar, inferir ou adivinhar. Faz exatamente o que você manda."
      />
    </div>
  );
}

function OQueECodigoContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Código = Texto Que Vira Instruções</h2>

      <p className="text-lg">
        Código é simplesmente <strong>texto que segue regras específicas</strong>.
        Quando você escreve código em uma linguagem de programação, esse texto é
        interpretado pelo computador como instruções.
      </p>

      <h3>Seu Primeiro Código</h3>

      <p>Olha só como é um código simples em JavaScript:</p>

      <CodeBlock
        code='let nome = "Maria";
console.log("Olá, " + nome + "!");'
        language="javascript"
        filename="exemplo.js"
      />

      <p>
        Esse código faz algo simples: mostra "Olá, Maria!" na tela.
        Vamos entender cada parte:
      </p>

      <ul>
        <li><code>let nome = "Maria"</code> — Cria uma "caixinha" chamada <code>nome</code> e guarda "Maria" dentro</li>
        <li><code>console.log(...)</code> — Comando para mostrar algo na tela</li>
        <li><code>"Olá, " + nome + "!"</code> — Junta os textos para formar a mensagem</li>
      </ul>

      <InfoBox type="tip" title="Não precisa decorar!">
        <p>
          Você vai aprender a escrever código aos poucos. Por enquanto,
          o objetivo é apenas ver que <strong>código é texto legível</strong>,
          não algo misterioso.
        </p>
      </InfoBox>

      <h3>Código Se Parece com Inglês</h3>

      <p>
        A maioria das linguagens de programação usa palavras em inglês.
        Você vai encontrar:
      </p>

      <ul>
        <li><code>let</code> (deixar/criar)</li>
        <li><code>if</code> (se)</li>
        <li><code>else</code> (senão)</li>
        <li><code>function</code> (função)</li>
        <li><code>return</code> (retornar)</li>
      </ul>

      <p>
        Não precisa ser fluente em inglês! São poucas palavras-chave,
        e você vai memorizá-las naturalmente com a prática.
      </p>

      <h3>Exemplo Mais Completo</h3>

      <p>Veja um código que calcula se um aluno está acima do peso:</p>

      <CodeBlock
        code={`let peso = 80;        // kg
let altura = 1.75;    // metros

let imc = peso / (altura * altura);

if (imc > 25) {
    console.log("Acima do peso");
} else {
    console.log("Peso normal");
}`}
        language="javascript"
        filename="imc.js"
      />

      <p>
        Mesmo sem saber programar, dá para ter uma ideia do que o código faz, certo?
        Isso é intencional — código bem escrito é quase legível como texto comum.
      </p>

      <InfoBox type="info" title="Os comentários">
        <p>
          Viu os <code>// kg</code> e <code>// metros</code>? São <strong>comentários</strong> —
          notas que o programador escreve para explicar o código.
          O computador ignora tudo que vem depois de <code>//</code>.
        </p>
      </InfoBox>

      <Quiz
        question="O que são comentários no código (texto após //)?"
        options={[
          { id: 'a', text: 'Instruções que o computador executa mais rápido' },
          { id: 'b', text: 'Notas explicativas que o computador ignora' },
          { id: 'c', text: 'Erros que o programador deixou no código' },
          { id: 'd', text: 'Mensagens que aparecem para o usuário' },
        ]}
        correctId="b"
        explanation="Comentários são notas que o programador escreve para si mesmo ou para outros programadores. O computador simplesmente ignora essas linhas."
      />
    </div>
  );
}

function AmbienteDesenvolvimentoContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Configurando Seu Ambiente</h2>

      <p className="text-lg">
        Para programar, você precisa de algumas ferramentas instaladas no seu computador.
        Não se preocupe — são gratuitas e fáceis de instalar!
      </p>

      <h3>1. Visual Studio Code (VS Code)</h3>

      <p>
        O <strong>VS Code</strong> é um editor de código — é onde você vai escrever seus programas.
        Pense nele como o "Word" para programadores.
      </p>

      <InfoBox type="info" title="Por que VS Code?">
        <ul className="mb-0">
          <li>É gratuito e muito popular</li>
          <li>Tem muitos recursos que ajudam a programar</li>
          <li>É o mesmo editor que profissionais usam</li>
        </ul>
      </InfoBox>

      <h4>Como instalar:</h4>
      <ol>
        <li>Acesse <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">code.visualstudio.com</a></li>
        <li>Clique no botão de download</li>
        <li>Execute o instalador e siga as instruções</li>
      </ol>

      <h3>2. Node.js</h3>

      <p>
        O <strong>Node.js</strong> permite executar JavaScript fora do navegador.
        É ele que vai "rodar" seus programas.
      </p>

      <h4>Como instalar:</h4>
      <ol>
        <li>Acesse <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">nodejs.org</a></li>
        <li>Baixe a versão <strong>LTS</strong> (Long Term Support) — é a mais estável</li>
        <li>Execute o instalador e siga as instruções</li>
      </ol>

      <h3>3. O Terminal</h3>

      <p>
        O <strong>terminal</strong> (ou "linha de comando") é onde você digita comandos para o computador.
        Parece assustador no início, mas você vai usar apenas alguns comandos simples.
      </p>

      <div className="not-prose my-4">
        <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm">
          <p className="text-slate-500 mb-2"># Exemplos de comandos que você vai usar:</p>
          <p className="text-green-400">$ node meu-programa.js</p>
          <p className="text-slate-400">Olá, mundo!</p>
        </div>
      </div>

      <InfoBox type="tip" title="Terminal no VS Code">
        <p>
          O VS Code tem um terminal embutido! Você pode abrir com <kbd>Ctrl</kbd>+<kbd>`</kbd> (ou <kbd>Cmd</kbd>+<kbd>`</kbd> no Mac).
        </p>
      </InfoBox>

      <h3>Verificando a Instalação</h3>

      <p>Depois de instalar tudo, abra o terminal e digite:</p>

      <CodeBlock
        code="node --version"
        language="bash"
        showLineNumbers={false}
      />

      <p>
        Se aparecer um número de versão (ex: <code>v20.10.0</code>), está tudo certo!
      </p>

      <Exercise
        id="fase0-verificar-instalacao"
        title="Verifique sua instalação"
        description="Abra o terminal (pode ser dentro do VS Code) e digite 'node --version'. Qual versão apareceu?"
        hint="Se der erro, verifique se o Node.js foi instalado corretamente e tente reiniciar o terminal."
        expectedAnswer="Deve aparecer algo como v20.x.x ou v18.x.x"
      />
    </div>
  );
}

function JuntandoTudoContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>O Ciclo de Trabalho do Programador</h2>

      <p className="text-lg">
        Agora que você entende o que é um programa e tem as ferramentas instaladas,
        veja como é o dia a dia de um programador:
      </p>

      <div className="not-prose my-6">
        <div className="grid gap-4">
          <div className="flex items-start gap-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div>
              <h4 className="font-semibold text-blue-800">Escreve código</h4>
              <p className="text-sm text-blue-700">No VS Code, você escreve as instruções em JavaScript</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <h4 className="font-semibold text-green-800">Executa o programa</h4>
              <p className="text-sm text-green-700">No terminal, roda o código com <code className="bg-green-100 px-1 rounded">node arquivo.js</code></p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-amber-50 p-4 rounded-lg border border-amber-200">
            <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <h4 className="font-semibold text-amber-800">Vê o resultado</h4>
              <p className="text-sm text-amber-700">O programa executa e mostra o resultado (ou um erro!)</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-purple-50 p-4 rounded-lg border border-purple-200">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
            <div>
              <h4 className="font-semibold text-purple-800">Ajusta e repete</h4>
              <p className="text-sm text-purple-700">Se precisar de mudanças, volta ao passo 1</p>
            </div>
          </div>
        </div>
      </div>

      <InfoBox type="success" title="Seu primeiro programa!">
        <p>
          Vamos criar seu primeiro programa agora mesmo? Siga os passos abaixo:
        </p>
      </InfoBox>

      <h3>Criando Seu Primeiro Programa</h3>

      <ol>
        <li>Abra o VS Code</li>
        <li>Crie uma nova pasta para seus projetos (ex: <code>meus-projetos</code>)</li>
        <li>Dentro dela, crie um arquivo chamado <code>ola.js</code></li>
        <li>Digite o seguinte código:</li>
      </ol>

      <CodeBlock
        code='console.log("Olá, mundo!");
console.log("Eu sou um programa!");
console.log("E estou funcionando!");'
        language="javascript"
        filename="ola.js"
      />

      <ol start={5}>
        <li>Salve o arquivo (<kbd>Ctrl</kbd>+<kbd>S</kbd>)</li>
        <li>Abra o terminal (<kbd>Ctrl</kbd>+<kbd>`</kbd>)</li>
        <li>Digite: <code>node ola.js</code></li>
        <li>Pressione Enter</li>
      </ol>

      <p>
        Se tudo deu certo, você verá as mensagens aparecendo no terminal.
        <strong>Parabéns! Você acabou de executar seu primeiro programa!</strong>
      </p>

      <Exercise
        id="fase0-primeiro-programa"
        title="Seu primeiro programa"
        description="Crie o arquivo ola.js com o código acima e execute no terminal. O que apareceu?"
        hint="Lembre-se: navegue até a pasta onde está o arquivo antes de executar o comando node."
        expectedAnswer="Olá, mundo!\nEu sou um programa!\nE estou funcionando!"
      />

      <h3>E se der erro?</h3>

      <InfoBox type="warning">
        <p>
          <strong>Erros são normais!</strong> Se aparecer uma mensagem de erro, não entre em pânico.
          Leia a mensagem — ela geralmente diz qual é o problema e em qual linha do código.
        </p>
        <p className="mb-0">
          Nas próximas fases, você vai aprender a ler e resolver erros. Por enquanto,
          verifique se você digitou tudo certinho.
        </p>
      </InfoBox>

      <h3>Recapitulando a Fase 1</h3>

      <p>Nesta fase você aprendeu que:</p>

      <ul>
        <li>Um <strong>programa</strong> é uma lista de instruções (como uma receita)</li>
        <li>O computador <strong>não pensa</strong> — ele segue instruções literalmente</li>
        <li><strong>Código</strong> é texto que segue regras específicas</li>
        <li>Você precisa de <strong>VS Code</strong> e <strong>Node.js</strong> para programar</li>
        <li>O <strong>ciclo de trabalho</strong> é: escrever → executar → ver resultado → ajustar</li>
      </ul>

      <InfoBox type="success" title="Fase 1 Completa!">
        <p className="mb-0">
          Você está pronto para a <strong>Fase 2</strong>, onde vai aprender
          os fundamentos da lógica de programação: variáveis, condições, repetições e muito mais!
        </p>
      </InfoBox>
    </div>
  );
}

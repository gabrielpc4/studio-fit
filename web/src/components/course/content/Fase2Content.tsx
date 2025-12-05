'use client';

import { CodeBlock } from '../CodeBlock';
import { InfoBox } from '../InfoBox';
import { Quiz } from '../Quiz';
import { Exercise } from '../Exercise';

interface Fase2ContentProps {
  moduleId: string;
}

export function Fase2Content({ moduleId }: Fase2ContentProps) {
  switch (moduleId) {
    case 'intro':
      return <IntroContent />;
    case 'semana-1':
      return <Semana1Content />;
    case 'semana-2':
      return <Semana2Content />;
    case 'semana-3':
      return <Semana3Content />;
    case 'semana-4':
      return <Semana4Content />;
    case 'projeto-final':
      return <ProjetoFinalContent />;
    default:
      return <div>Conteúdo não encontrado</div>;
  }
}

function IntroContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Agora começa a parte prática!</h2>

      <p className="text-lg">
        Nesta fase, você vai aprender os <strong>blocos fundamentais</strong> da programação:
      </p>

      <ul>
        <li><strong>Variáveis:</strong> Como guardar informações</li>
        <li><strong>Tipos de dados:</strong> Que tipos de informação existem</li>
        <li><strong>Condições:</strong> Como fazer o programa tomar decisões</li>
        <li><strong>Repetições:</strong> Como fazer algo várias vezes</li>
        <li><strong>Funções:</strong> Como organizar código em blocos reutilizáveis</li>
        <li><strong>Objetos:</strong> Como agrupar informações relacionadas</li>
      </ul>

      <InfoBox type="tip" title="O objetivo aqui">
        <p className="mb-0">
          Ao final desta fase, você será capaz de ler código JavaScript simples e entender
          o que está acontecendo. Isso é <strong>muito mais importante</strong> do que saber
          escrever do zero — lembre-se, a IA vai te ajudar a escrever, mas você precisa entender!
        </p>
      </InfoBox>

      <h3>Estrutura da Fase</h3>

      <div className="not-prose grid gap-3">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-800">Semana 1: Variáveis e Tipos de Dados</h4>
          <p className="text-sm text-blue-700">Caixas com etiquetas para guardar informações</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-800">Semana 2: Estruturas de Decisão</h4>
          <p className="text-sm text-green-700">Fazendo o programa tomar decisões</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h4 className="font-semibold text-purple-800">Semana 3: Repetição e Listas</h4>
          <p className="text-sm text-purple-700">Arrays e loops para fazer algo muitas vezes</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h4 className="font-semibold text-amber-800">Semana 4: Funções e Objetos</h4>
          <p className="text-sm text-amber-700">Blocos reutilizáveis e agrupamento de dados</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-red-800">Projeto Final</h4>
          <p className="text-sm text-red-700">Mini Sistema de Academia</p>
        </div>
      </div>
    </div>
  );
}

function Semana1Content() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>O Que São Variáveis?</h2>

      <p>
        Uma variável é como uma <strong>caixa com etiqueta</strong> onde você guarda alguma coisa.
      </p>

      <div className="not-prose bg-slate-100 rounded-lg p-4 font-mono text-sm my-4">
        <pre className="text-slate-700">{`┌─────────────────┐
│                 │
│     "Maria"     │   ← conteúdo (valor)
│                 │
└─────────────────┘
   nomeDoAluno        ← etiqueta (nome da variável)`}</pre>
      </div>

      <p>Em JavaScript, criamos variáveis assim:</p>

      <CodeBlock
        code='let nomeDoAluno = "Maria";'
        language="javascript"
      />

      <p>Vamos destrinchar:</p>

      <ul>
        <li><code>let</code> → Palavra-chave que diz "vou criar uma variável"</li>
        <li><code>nomeDoAluno</code> → O nome que você escolhe para a caixa (a etiqueta)</li>
        <li><code>=</code> → Significa "recebe" ou "guarda" (não é "igual" como na matemática!)</li>
        <li><code>"Maria"</code> → O valor que você está guardando</li>
        <li><code>;</code> → Ponto e vírgula que finaliza a instrução</li>
      </ul>

      <h3>Regras Para Nomes de Variáveis</h3>

      <div className="not-prose grid md:grid-cols-2 gap-4 my-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 mb-2">✅ Pode:</h4>
          <ul className="text-sm text-green-700 space-y-1 list-disc list-inside">
            <li>Começar com letra: <code>nome</code>, <code>idade</code></li>
            <li>Usar números (não no início): <code>aluno1</code></li>
            <li>Usar underline: <code>nome_completo</code></li>
            <li>Usar camelCase: <code>nomeCompleto</code></li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 mb-2">❌ Não pode:</h4>
          <ul className="text-sm text-red-700 space-y-1 list-disc list-inside">
            <li>Começar com número: <s>1aluno</s></li>
            <li>Ter espaços: <s>nome completo</s></li>
            <li>Usar palavras reservadas: <s>let</s>, <s>if</s></li>
          </ul>
        </div>
      </div>

      <InfoBox type="tip" title="Dica de ouro">
        <p className="mb-0">Use nomes que explicam o que está guardado!</p>
      </InfoBox>

      <CodeBlock
        code={`// Ruim (o que é x? o que é n?)
let x = 25;
let n = "Carlos";

// Bom (fica claro o que cada variável guarda)
let idadeDoAluno = 25;
let nomeDoAluno = "Carlos";`}
        language="javascript"
      />

      <h3>let, const, e var</h3>

      <p>Existem três formas de criar variáveis em JavaScript:</p>

      <CodeBlock
        code={`let idade = 25;        // Pode mudar depois
const cpf = "123456";  // NÃO pode mudar (constante)
var nome = "Ana";      // Forma antiga (evite usar)`}
        language="javascript"
      />

      <InfoBox type="info" title="Quando usar cada um">
        <ul className="mb-0">
          <li><code>let</code> → Quando o valor pode mudar (ex: pontuação, contador)</li>
          <li><code>const</code> → Quando o valor nunca muda (ex: CPF, data de nascimento)</li>
          <li><code>var</code> → Não use! É antigo e pode causar problemas</li>
        </ul>
      </InfoBox>

      <h3>Os Tipos de Dados</h3>

      <h4>1. String (Texto)</h4>
      <p>Qualquer texto, sempre entre aspas:</p>

      <CodeBlock
        code={`let nome = "João Silva";
let endereco = "Rua das Flores, 123";
let telefone = "11999887766";  // Mesmo sendo números, é texto!`}
        language="javascript"
      />

      <h4>2. Number (Número)</h4>
      <p>Números inteiros ou decimais, SEM aspas:</p>

      <CodeBlock
        code={`let idade = 28;
let peso = 75.5;
let altura = 1.82;
let temperatura = -5;`}
        language="javascript"
      />

      <InfoBox type="warning">
        <p className="mb-0"><strong>Cuidado:</strong> <code>"28"</code> (com aspas) é texto, não número!</p>
      </InfoBox>

      <h4>3. Boolean (Verdadeiro ou Falso)</h4>
      <p>Só tem dois valores possíveis: <code>true</code> ou <code>false</code></p>

      <CodeBlock
        code={`let alunoAtivo = true;
let mensalidadeAtrasada = false;
let maiorDeIdade = true;`}
        language="javascript"
      />

      <h4>4. null e undefined</h4>
      <p>Representam "ausência de valor":</p>

      <CodeBlock
        code={`let telefoneComercial = null;  // Propositalmente vazio
let endereco;                   // undefined - não recebeu valor
console.log(endereco);          // Mostra: undefined`}
        language="javascript"
      />

      <h3>Operações com Strings</h3>

      <p>Você pode juntar textos (concatenar):</p>

      <CodeBlock
        code={`let primeiroNome = "Maria";
let sobrenome = "Santos";

// Usando o +
let nomeCompleto = primeiroNome + " " + sobrenome;
console.log(nomeCompleto);  // Maria Santos

// Usando template literals (mais moderno e prático)
let mensagem = \`Olá, \${primeiroNome}! Bem-vinda ao sistema.\`;
console.log(mensagem);  // Olá, Maria! Bem-vinda ao sistema.`}
        language="javascript"
      />

      <InfoBox type="tip" title="Template literals">
        <p className="mb-0">
          Usam crase <code>`</code> e permitem colocar variáveis dentro com <code>{"${variavel}"}</code>.
          É muito mais fácil de ler!
        </p>
      </InfoBox>

      <h3>Operações com Números</h3>

      <CodeBlock
        code={`let a = 10;
let b = 3;

console.log(a + b);   // Soma: 13
console.log(a - b);   // Subtração: 7
console.log(a * b);   // Multiplicação: 30
console.log(a / b);   // Divisão: 3.333...
console.log(a % b);   // Resto da divisão: 1
console.log(a ** b);  // Potência (10³): 1000`}
        language="javascript"
      />

      <h3>console.log: Sua Ferramenta de Debug</h3>

      <p>
        <code>console.log()</code> mostra coisas na tela. É sua principal ferramenta
        para entender o que está acontecendo no código:
      </p>

      <CodeBlock
        code={`let nome = "Carlos";
let idade = 30;

console.log(nome);                    // Carlos
console.log(idade);                   // 30
console.log(nome, idade);             // Carlos 30
console.log("A idade é:", idade);     // A idade é: 30
console.log(\`\${nome} tem \${idade} anos\`);  // Carlos tem 30 anos`}
        language="javascript"
      />

      <InfoBox type="success" title="Use e abuse do console.log!">
        <p className="mb-0">
          Quando não entender o que está acontecendo, coloque console.log para ver os valores.
        </p>
      </InfoBox>

      <Quiz
        question="Qual é a diferença entre let e const?"
        options={[
          { id: 'a', text: 'let é mais rápido que const' },
          { id: 'b', text: 'let pode ter o valor alterado, const não pode' },
          { id: 'c', text: 'const só funciona com números' },
          { id: 'd', text: 'Não há diferença, são iguais' },
        ]}
        correctId="b"
        explanation="let cria uma variável que pode ser alterada depois. const (constante) cria uma variável cujo valor não pode mudar."
      />

      <Exercise
        id="fase2-variaveis"
        title="Criando Variáveis de Aluno"
        description="Crie variáveis para: nome completo, idade, peso (kg), altura (metros), e se a mensalidade está em dia. Depois monte uma mensagem com template literal."
        hint="Use let para variáveis que podem mudar e const para as que não mudam. Para a mensalidade, use boolean (true/false)."
        expectedAnswer={`let nomeCompleto = "Ricardo Oliveira";
let idade = 32;
let peso = 78.5;
let altura = 1.75;
let mensalidadeEmDia = true;

console.log(\`Aluno: \${nomeCompleto}, \${idade} anos\`);`}
      />
    </div>
  );
}

function Semana2Content() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Fazendo o Programa Tomar Decisões</h2>

      <p>
        Até agora, nosso código executa linha por linha, sempre igual. Mas e se quisermos
        que ele faça coisas diferentes dependendo da situação?
      </p>

      <p>Por exemplo:</p>
      <ul>
        <li>Se o aluno está com mensalidade em dia, libera a catraca</li>
        <li>Se não está, mostra mensagem de pendência</li>
      </ul>

      <p>Para isso, usamos <strong>estruturas de decisão</strong>.</p>

      <h3>if: A Estrutura Básica</h3>

      <CodeBlock
        code={`if (condição) {
    // código que roda SE a condição for verdadeira
}`}
        language="javascript"
      />

      <p>Exemplo:</p>

      <CodeBlock
        code={`let mensalidadeEmDia = true;

if (mensalidadeEmDia) {
    console.log("Entrada liberada! Bom treino!");
}`}
        language="javascript"
      />

      <h3>if...else: Duas Opções</h3>

      <CodeBlock
        code={`let mensalidadeEmDia = false;

if (mensalidadeEmDia) {
    console.log("Entrada liberada! Bom treino!");
} else {
    console.log("Mensalidade pendente. Procure a recepção.");
}`}
        language="javascript"
      />

      <InfoBox type="info">
        <ul className="mb-0">
          <li>Se a condição for <code>true</code> → executa o primeiro bloco</li>
          <li>Se for <code>false</code> → executa o bloco do <code>else</code></li>
        </ul>
      </InfoBox>

      <h3>Operadores de Comparação</h3>

      <div className="not-prose overflow-x-auto my-4">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-2 text-left">Operador</th>
              <th className="px-4 py-2 text-left">Significado</th>
              <th className="px-4 py-2 text-left">Exemplo</th>
              <th className="px-4 py-2 text-left">Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t"><td className="px-4 py-2 font-mono">===</td><td className="px-4 py-2">Igual a</td><td className="px-4 py-2 font-mono">5 === 5</td><td className="px-4 py-2 text-green-600">true</td></tr>
            <tr className="border-t"><td className="px-4 py-2 font-mono">!==</td><td className="px-4 py-2">Diferente de</td><td className="px-4 py-2 font-mono">5 !== 3</td><td className="px-4 py-2 text-green-600">true</td></tr>
            <tr className="border-t"><td className="px-4 py-2 font-mono">&gt;</td><td className="px-4 py-2">Maior que</td><td className="px-4 py-2 font-mono">10 &gt; 5</td><td className="px-4 py-2 text-green-600">true</td></tr>
            <tr className="border-t"><td className="px-4 py-2 font-mono">&lt;</td><td className="px-4 py-2">Menor que</td><td className="px-4 py-2 font-mono">3 &lt; 8</td><td className="px-4 py-2 text-green-600">true</td></tr>
            <tr className="border-t"><td className="px-4 py-2 font-mono">&gt;=</td><td className="px-4 py-2">Maior ou igual</td><td className="px-4 py-2 font-mono">5 &gt;= 5</td><td className="px-4 py-2 text-green-600">true</td></tr>
            <tr className="border-t"><td className="px-4 py-2 font-mono">&lt;=</td><td className="px-4 py-2">Menor ou igual</td><td className="px-4 py-2 font-mono">4 &lt;= 3</td><td className="px-4 py-2 text-red-600">false</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox type="warning">
        <p className="mb-0"><strong>Importante:</strong> Use <code>===</code> (três iguais), não <code>==</code> (dois iguais). O de três iguais é mais seguro.</p>
      </InfoBox>

      <h3>if...else if...else: Múltiplas Opções</h3>

      <p>Quando você tem mais de duas possibilidades:</p>

      <CodeBlock
        code={`let imc = 26.5;

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc < 25) {
    console.log("Peso normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}
// Resultado: "Sobrepeso"`}
        language="javascript"
      />

      <h3>Operadores Lógicos: Combinando Condições</h3>

      <h4>&& (E): Ambas precisam ser verdadeiras</h4>

      <CodeBlock
        code={`let idade = 25;
let mensalidadeEmDia = true;

if (idade >= 18 && mensalidadeEmDia) {
    console.log("Acesso liberado");
}
// Só libera se tiver 18+ E mensalidade em dia`}
        language="javascript"
      />

      <h4>|| (OU): Pelo menos uma precisa ser verdadeira</h4>

      <CodeBlock
        code={`let plano = "premium";

if (plano === "premium" || plano === "vip") {
    console.log("Acesso à área exclusiva liberado");
}
// Libera se for premium OU vip`}
        language="javascript"
      />

      <h4>! (NÃO): Inverte o valor</h4>

      <CodeBlock
        code={`let alunoAtivo = false;

if (!alunoAtivo) {
    console.log("Aluno inativo no sistema");
}
// !false vira true, então entra no if`}
        language="javascript"
      />

      <Quiz
        question="O que o código abaixo mostra no console?\n\nlet idade = 20;\nif (idade >= 18 && idade < 60) {\n    console.log('Adulto');\n} else {\n    console.log('Outro');\n}"
        options={[
          { id: 'a', text: 'Adulto' },
          { id: 'b', text: 'Outro' },
          { id: 'c', text: 'Nada, dá erro' },
          { id: 'd', text: '20' },
        ]}
        correctId="a"
        explanation="idade é 20, que é >= 18 E < 60. Como ambas condições são verdadeiras (por causa do &&), entra no primeiro bloco e mostra 'Adulto'."
      />

      <Exercise
        id="fase2-condicoes"
        title="Sistema de Acesso"
        description="Crie um programa que verifica se um aluno pode acessar a academia. Regras: deve ter 16+ anos, mensalidade em dia, e ter feito avaliação física."
        hint="Use if/else if/else para verificar cada condição. Você pode usar && para verificar todas de uma vez ou verificar uma por uma."
        expectedAnswer={`let idade = 17;
let mensalidadeEmDia = true;
let avaliacaoFeita = false;

if (idade < 16) {
    console.log("Idade mínima: 16 anos");
} else if (!mensalidadeEmDia) {
    console.log("Mensalidade pendente");
} else if (!avaliacaoFeita) {
    console.log("Avaliação física pendente");
} else {
    console.log("Acesso liberado!");
}`}
      />
    </div>
  );
}

function Semana3Content() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>O Problema: Fazer Algo Muitas Vezes</h2>

      <p>Imagine que você precisa mostrar os nomes de 5 alunos:</p>

      <CodeBlock
        code={`console.log("Maria");
console.log("João");
console.log("Ana");
console.log("Carlos");
console.log("Pedro");`}
        language="javascript"
      />

      <p>Funciona, mas e se forem 500 alunos? E se a lista mudar?</p>

      <p>Para isso, usamos <strong>arrays</strong> (listas) e <strong>loops</strong> (repetições).</p>

      <h3>Arrays: Listas de Coisas</h3>

      <p>Um array é uma lista ordenada de valores:</p>

      <CodeBlock
        code='let alunos = ["Maria", "João", "Ana", "Carlos", "Pedro"];'
        language="javascript"
      />

      <div className="not-prose bg-slate-100 rounded-lg p-4 font-mono text-sm my-4">
        <pre className="text-slate-700">{`Índice:    0        1       2        3         4
        ┌───────┬───────┬───────┬─────────┬────────┐
alunos: │"Maria"│"João" │ "Ana" │"Carlos" │"Pedro" │
        └───────┴───────┴───────┴─────────┴────────┘`}</pre>
      </div>

      <InfoBox type="warning">
        <p className="mb-0"><strong>Importante:</strong> Os índices começam em 0, não em 1!</p>
      </InfoBox>

      <h4>Acessando Elementos</h4>

      <CodeBlock
        code={`let alunos = ["Maria", "João", "Ana", "Carlos", "Pedro"];

console.log(alunos[0]);  // Maria (primeiro)
console.log(alunos[1]);  // João (segundo)
console.log(alunos[4]);  // Pedro (último)
console.log(alunos[5]);  // undefined (não existe)`}
        language="javascript"
      />

      <h4>Propriedades e Métodos Úteis</h4>

      <CodeBlock
        code={`let alunos = ["Maria", "João", "Ana"];

// Quantos elementos tem?
console.log(alunos.length);  // 3

// Adicionar no final
alunos.push("Carlos");
console.log(alunos);  // ["Maria", "João", "Ana", "Carlos"]

// Remover do final
let removido = alunos.pop();
console.log(removido);  // "Carlos"

// Verificar se existe
console.log(alunos.includes("Maria"));  // true
console.log(alunos.includes("Pedro"));  // false`}
        language="javascript"
      />

      <h3>for: O Loop Clássico</h3>

      <CodeBlock
        code={`for (let i = 0; i < 5; i++) {
    console.log(\`Número: \${i}\`);
}
// Número: 0
// Número: 1
// Número: 2
// Número: 3
// Número: 4`}
        language="javascript"
      />

      <InfoBox type="info" title="Destrinchando o for">
        <ul className="mb-0">
          <li><code>let i = 0</code> → Inicialização: onde começar</li>
          <li><code>i &lt; 5</code> → Condição: continuar enquanto isso for true</li>
          <li><code>i++</code> → Incremento: o que fazer após cada repetição</li>
        </ul>
      </InfoBox>

      <h4>Percorrendo um Array com for</h4>

      <CodeBlock
        code={`let alunos = ["Maria", "João", "Ana", "Carlos", "Pedro"];

for (let i = 0; i < alunos.length; i++) {
    console.log(\`\${i + 1}. \${alunos[i]}\`);
}
// 1. Maria
// 2. João
// 3. Ana
// 4. Carlos
// 5. Pedro`}
        language="javascript"
      />

      <h3>for...of: Forma Mais Simples</h3>

      <p>Quando você só quer percorrer os elementos (sem precisar do índice):</p>

      <CodeBlock
        code={`let alunos = ["Maria", "João", "Ana", "Carlos", "Pedro"];

for (let aluno of alunos) {
    console.log(\`Olá, \${aluno}!\`);
}
// Olá, Maria!
// Olá, João!
// ...`}
        language="javascript"
      />

      <h3>filter: Filtrando Arrays</h3>

      <p>O <code>filter</code> cria um novo array apenas com elementos que passam em um teste:</p>

      <CodeBlock
        code={`let idades = [15, 22, 17, 30, 16, 25];

let maioresDeIdade = idades.filter((idade) => {
    return idade >= 18;
});

console.log(maioresDeIdade);  // [22, 30, 25]`}
        language="javascript"
      />

      <h3>map: Transformando Arrays</h3>

      <p>O <code>map</code> cria um novo array transformando cada elemento:</p>

      <CodeBlock
        code={`let numeros = [1, 2, 3, 4, 5];

let dobrados = numeros.map((numero) => {
    return numero * 2;
});

console.log(dobrados);  // [2, 4, 6, 8, 10]`}
        language="javascript"
      />

      <h3>find: Encontrando Um Elemento</h3>

      <p>O <code>find</code> retorna o primeiro elemento que passa no teste:</p>

      <CodeBlock
        code={`let alunos = [
    { nome: "Maria", cpf: "111" },
    { nome: "João", cpf: "222" },
    { nome: "Ana", cpf: "333" }
];

let encontrado = alunos.find((aluno) => {
    return aluno.cpf === "222";
});

console.log(encontrado);  // { nome: "João", cpf: "222" }`}
        language="javascript"
      />

      <Quiz
        question="Qual é o índice do elemento 'Ana' no array ['Maria', 'João', 'Ana', 'Carlos']?"
        options={[
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '3' },
          { id: 'd', text: '4' },
        ]}
        correctId="b"
        explanation="Arrays começam no índice 0. Então: Maria=0, João=1, Ana=2, Carlos=3."
      />

      <Exercise
        id="fase2-arrays"
        title="Contando Presenças"
        description="Dado um array de presenças [true, true, false, true, false, true], conte quantas presenças e quantas faltas."
        hint="Use um for...of para percorrer o array e incremente contadores baseado se é true ou false."
        expectedAnswer={`let presencas = [true, true, false, true, false, true];
let qtdPresencas = 0;
let qtdFaltas = 0;

for (let presenca of presencas) {
    if (presenca) {
        qtdPresencas++;
    } else {
        qtdFaltas++;
    }
}

console.log(\`Presenças: \${qtdPresencas}, Faltas: \${qtdFaltas}\`);`}
      />
    </div>
  );
}

function Semana4Content() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>O Que São Funções?</h2>

      <p>
        Uma função é um <strong>bloco de código reutilizável</strong> que faz uma tarefa específica.
      </p>

      <InfoBox type="tip" title="Analogia">
        <p className="mb-0">
          Pense numa receita. Em vez de reescrever todos os passos toda vez que quer fazer um bolo,
          você guarda a receita e só diz "faça o bolo".
        </p>
      </InfoBox>

      <h3>Criando uma Função</h3>

      <CodeBlock
        code={`function dizerOla() {
    console.log("Olá!");
}

// A função existe, mas ainda não fez nada...

// Para executar (chamar) a função:
dizerOla();  // Olá!
dizerOla();  // Olá!
dizerOla();  // Olá!`}
        language="javascript"
      />

      <h3>Funções com Parâmetros</h3>

      <p>Funções podem receber informações:</p>

      <CodeBlock
        code={`function dizerOlaPara(nome) {
    console.log(\`Olá, \${nome}!\`);
}

dizerOlaPara("Maria");   // Olá, Maria!
dizerOlaPara("João");    // Olá, João!
dizerOlaPara("Carlos");  // Olá, Carlos!`}
        language="javascript"
      />

      <h3>Funções que Retornam Valores</h3>

      <p>Funções podem calcular algo e devolver o resultado:</p>

      <CodeBlock
        code={`function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

let meuIMC = calcularIMC(75, 1.80);
console.log(\`Meu IMC: \${meuIMC.toFixed(2)}\`);  // Meu IMC: 23.15`}
        language="javascript"
      />

      <InfoBox type="info" title="O return">
        <p className="mb-0">O <code>return</code> faz duas coisas: devolve o valor e encerra a função.</p>
      </InfoBox>

      <h3>Arrow Functions (Funções Flecha)</h3>

      <p>Uma forma mais curta de escrever funções:</p>

      <CodeBlock
        code={`// Função tradicional
function dobrar(numero) {
    return numero * 2;
}

// Arrow function (faz a mesma coisa)
const dobrar = (numero) => {
    return numero * 2;
};

// Arrow function simplificada (quando tem só uma linha)
const dobrar = (numero) => numero * 2;`}
        language="javascript"
      />

      <h2>O Que São Objetos?</h2>

      <p>Um objeto agrupa informações relacionadas em uma única "coisa":</p>

      <CodeBlock
        code={`let aluno = {
    nome: "Maria Silva",
    idade: 25,
    peso: 65,
    altura: 1.68,
    mensalidadeEmDia: true,
    plano: "trimestral"
};`}
        language="javascript"
      />

      <p>É como uma ficha cadastral: várias informações sobre a mesma pessoa.</p>

      <h3>Acessando Propriedades</h3>

      <CodeBlock
        code={`let aluno = {
    nome: "Maria Silva",
    idade: 25,
    plano: "trimestral"
};

// Notação de ponto (mais comum)
console.log(aluno.nome);   // Maria Silva
console.log(aluno.idade);  // 25

// Notação de colchetes
console.log(aluno["plano"]);  // trimestral`}
        language="javascript"
      />

      <h3>Objetos Dentro de Arrays</h3>

      <p>A combinação mais comum em aplicativos reais:</p>

      <CodeBlock
        code={`let alunos = [
    { nome: "Maria", idade: 25, mensalidadeEmDia: true },
    { nome: "João", idade: 30, mensalidadeEmDia: false },
    { nome: "Ana", idade: 22, mensalidadeEmDia: true }
];

// Acessando o primeiro aluno
console.log(alunos[0].nome);  // Maria

// Percorrendo todos
for (let aluno of alunos) {
    console.log(\`\${aluno.nome} - \${aluno.idade} anos\`);
}`}
        language="javascript"
      />

      <Quiz
        question="O que o código abaixo mostra?\n\nlet aluno = { nome: 'Ana', idade: 22 };\nconsole.log(aluno.nome);"
        options={[
          { id: 'a', text: 'aluno.nome' },
          { id: 'b', text: '{ nome: "Ana", idade: 22 }' },
          { id: 'c', text: 'Ana' },
          { id: 'd', text: 'undefined' },
        ]}
        correctId="c"
        explanation="aluno.nome acessa a propriedade 'nome' do objeto, que tem o valor 'Ana'."
      />

      <Exercise
        id="fase2-funcoes"
        title="Função de IMC"
        description="Crie uma função calcularIMC que recebe peso e altura e retorna o IMC. Depois crie outra função classificarIMC que recebe um IMC e retorna a classificação."
        hint="IMC = peso / (altura * altura). Classificações: <18.5 'Abaixo do peso', <25 'Normal', <30 'Sobrepeso', senão 'Obesidade'."
        expectedAnswer={`function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidade";
}

let imc = calcularIMC(70, 1.75);
console.log(classificarIMC(imc));`}
      />
    </div>
  );
}

function ProjetoFinalContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Mini Sistema de Academia</h2>

      <p>Agora você vai juntar tudo o que aprendeu em um projeto!</p>

      <h3>O Desafio</h3>

      <p>Crie um arquivo <code>sistema-academia.js</code> que tenha:</p>

      <ol>
        <li>
          Um array de alunos (pelo menos 5) com: id, nome, idade, peso, altura,
          plano, mensalidadeEmDia, e presencas (array de booleans)
        </li>
        <li>
          As seguintes funções:
          <ul>
            <li><code>listarTodosAlunos()</code> - mostra todos os alunos</li>
            <li><code>buscarAluno(id)</code> - encontra um aluno pelo ID</li>
            <li><code>calcularIMCAluno(id)</code> - calcula e retorna o IMC</li>
            <li><code>calcularFrequenciaAluno(id)</code> - calcula a frequência em %</li>
            <li><code>verificarAcessoAluno(id)</code> - verifica se pode entrar</li>
            <li><code>gerarRelatorioGeral()</code> - estatísticas gerais</li>
          </ul>
        </li>
        <li>Um "menu" no final que demonstra cada função funcionando</li>
      </ol>

      <InfoBox type="tip" title="Dica">
        <p className="mb-0">
          Comece simples! Faça uma função de cada vez, teste, e só depois passe para a próxima.
        </p>
      </InfoBox>

      <h3>Exemplo de Estrutura de Dados</h3>

      <CodeBlock
        code={`let alunos = [
    {
        id: 1,
        nome: "Maria Silva",
        idade: 25,
        peso: 65,
        altura: 1.68,
        plano: "trimestral",
        mensalidadeEmDia: true,
        presencas: [true, true, true, false, true, true, true, false, true, true]
    },
    // ... mais alunos
];`}
        language="javascript"
        filename="sistema-academia.js"
      />

      <h3>Exemplo de Função</h3>

      <CodeBlock
        code={`function buscarAluno(id) {
    let alunoEncontrado = alunos.find((aluno) => {
        return aluno.id === id;
    });
    return alunoEncontrado;
}

// Testando
let aluno = buscarAluno(1);
console.log(aluno.nome);  // Maria Silva`}
        language="javascript"
      />

      <Exercise
        id="fase2-projeto"
        title="Seu Mini Sistema de Academia"
        description="Implemente o sistema completo seguindo as especificações acima. Comece pelos dados, depois crie uma função por vez."
        hint="Reutilize as funções que você já criou nos exercícios anteriores. calcularIMC, por exemplo, já está pronta!"
      />

      <h3>Recapitulando a Fase 2</h3>

      <p>Nesta fase você aprendeu:</p>

      <div className="not-prose grid md:grid-cols-2 gap-4 my-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-800 mb-2">Variáveis e Tipos</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>Criar variáveis com let e const</li>
            <li>Diferenciar string, number, boolean</li>
            <li>Usar template literals</li>
          </ul>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 mb-2">Condições</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>Usar if, else if, else</li>
            <li>Operadores de comparação</li>
            <li>Combinar condições com && e ||</li>
          </ul>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h4 className="font-semibold text-purple-800 mb-2">Repetições e Listas</h4>
          <ul className="text-sm text-purple-700 space-y-1">
            <li>Criar e manipular arrays</li>
            <li>Percorrer com for, for...of</li>
            <li>Usar filter, map, find</li>
          </ul>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h4 className="font-semibold text-amber-800 mb-2">Funções e Objetos</h4>
          <ul className="text-sm text-amber-700 space-y-1">
            <li>Criar funções com parâmetros</li>
            <li>Retornar valores</li>
            <li>Trabalhar com objetos</li>
          </ul>
        </div>
      </div>

      <InfoBox type="success" title="Fase 2 Completa!">
        <p className="mb-0">
          Você agora tem a base de lógica de programação. Na <strong>Fase 3</strong>,
          vamos aprender a encontrar e resolver erros no código — uma habilidade essencial!
        </p>
      </InfoBox>
    </div>
  );
}

'use client';

import { CodeBlock } from '../CodeBlock';
import { InfoBox } from '../InfoBox';
import { Quiz } from '../Quiz';
import { Exercise } from '../Exercise';

interface Fase3ContentProps {
  moduleId: string;
}

export function Fase3Content({ moduleId }: Fase3ContentProps) {
  switch (moduleId) {
    case 'intro':
      return <IntroContent />;
    case 'erros-amigos':
      return <ErrosAmigosContent />;
    case 'lendo-erros':
      return <LendoErrosContent />;
    case 'console-log':
      return <ConsoleLogContent />;
    case 'pesquisando':
      return <PesquisandoContent />;
    case 'erros-comuns':
      return <ErrosComunsContent />;
    case 'estrategias':
      return <EstrategiasContent />;
    default:
      return <div>Conteúdo não encontrado para o módulo: {moduleId}</div>;
  }
}

function IntroContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Você vai errar. Muito.</h2>

      <p className="text-xl text-slate-600 mb-6">
        E isso é completamente normal! Todo programador — do iniciante ao mais experiente — comete erros todos os dias. A diferença é que programadores experientes <strong>sabem encontrar e corrigir erros rapidamente</strong>.
      </p>

      <InfoBox type="success" title="O que você vai aprender nesta fase">
        <ul className="mt-2 space-y-1">
          <li>Por que erros não são motivo de pânico</li>
          <li>Como ler mensagens de erro</li>
          <li>Como investigar problemas no código</li>
          <li>Como pesquisar soluções na internet</li>
          <li>Os erros mais comuns e como evitá-los</li>
        </ul>
      </InfoBox>

      <p>
        Essa é uma das habilidades mais importantes que você vai desenvolver! Não importa o quão bom programador você se torne, erros sempre vão acontecer. O que diferencia os profissionais é a capacidade de lidar com eles de forma eficiente.
      </p>

      <InfoBox type="tip" title="Mentalidade certa">
        <p>
          Pense em erros como <strong>feedback do computador</strong>, não como punição. O computador está tentando te ajudar a entender o que deu errado.
        </p>
      </InfoBox>

      <h3>Por que esta fase é tão importante?</h3>

      <p>
        Muitos iniciantes ficam frustrados quando encontram erros e não sabem como resolver. Eles passam horas olhando para o código sem saber o que fazer. Depois desta fase, você terá um <strong>processo claro</strong> para seguir quando algo der errado.
      </p>

      <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
        <h4 className="text-blue-800 font-semibold mb-2">Próximo passo</h4>
        <p className="text-blue-700">
          Vamos começar mudando sua mentalidade sobre erros. Você vai aprender que eles são seus amigos, não seus inimigos!
        </p>
      </div>
    </div>
  );
}

function ErrosAmigosContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Erros São Seus Amigos</h2>

      <h3>Mudando a Mentalidade</h3>

      <p>
        Quando você vê uma mensagem de erro vermelha na tela, qual é sua primeira reação?
      </p>

      <p>
        Se for pânico, medo ou frustração — isso é normal no começo. Mas vamos mudar isso.
      </p>

      <InfoBox type="warning" title="Verdade importante">
        <p className="text-lg font-semibold">
          Erros não são punição. São informação.
        </p>
      </InfoBox>

      <p>
        Pense assim: imagine que você está cozinhando e a comida fica salgada demais. O que você faz?
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
          <p className="text-red-700 font-medium">❌ Errado</p>
          <p className="text-red-600">Entrar em pânico e jogar tudo fora</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-green-700 font-medium">✅ Certo</p>
          <p className="text-green-600">Pensar: "Coloquei sal demais. Na próxima, coloco menos."</p>
        </div>
      </div>

      <p>
        Com código é igual. O erro está te dizendo <strong>o que deu errado</strong> e muitas vezes <strong>onde está o problema</strong>.
      </p>

      <h3>O Computador Está Tentando te Ajudar</h3>

      <p>
        Mensagens de erro parecem assustadoras, mas são o computador tentando te ajudar:
      </p>

      <CodeBlock
        language="text"
        code={`"Ei, você escreveu 'consle.log' mas acho que você quis dizer 'console.log'.
O erro está na linha 5 do arquivo app.js."`}
      />

      <p>
        É como um professor corrigindo sua prova e mostrando onde você errou, em vez de só dar nota zero sem explicação.
      </p>

      <h3>Tipos de Erro</h3>

      <p>Existem basicamente três tipos de erro:</p>

      <h4>1. Erros de Sintaxe (o código está escrito errado)</h4>

      <p>Como erros de português — faltou uma vírgula, uma palavra está escrita errada.</p>

      <CodeBlock
        language="javascript"
        code={`// Faltou fechar o parêntese
console.log("Olá"

// Escreveu errado
consle.log("Olá");`}
      />

      <p>O código nem roda. O computador para e diz: "Não entendi isso aqui."</p>

      <h4>2. Erros de Execução (o código roda mas quebra no meio)</h4>

      <p>O código está escrito certo, mas algo dá errado quando roda.</p>

      <CodeBlock
        language="javascript"
        code={`let alunos = null;
console.log(alunos.length);  // ERRO! null não tem .length`}
      />

      <p>É como uma receita que diz "bata as claras" mas você não tem ovos.</p>

      <h4>3. Erros de Lógica (o código roda mas faz a coisa errada)</h4>

      <p>O código roda sem erros, mas o resultado está errado.</p>

      <CodeBlock
        language="javascript"
        code={`// Queria somar, mas multiplicou
function calcularTotal(preco, quantidade) {
    return preco * quantidade * quantidade;  // Ops! quantidade duas vezes
}`}
      />

      <p>Esse é o mais difícil de encontrar porque o computador não reclama.</p>

      <Quiz
        question="Qual tipo de erro é mais difícil de encontrar?"
        options={[
          { id: 'a', text: 'Erro de Sintaxe' },
          { id: 'b', text: 'Erro de Execução' },
          { id: 'c', text: 'Erro de Lógica' },
          { id: 'd', text: 'Todos são igualmente difíceis' },
        ]}
        correctId="c"
        explanation="Erros de Lógica são os mais difíceis porque o código roda sem problemas, mas o resultado está errado. O computador não reclama, então você precisa descobrir sozinho onde está o problema."
      />

      <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
        <h4 className="text-green-800 font-semibold mb-2">Lembre-se</h4>
        <p className="text-green-700">
          Cada erro que você encontra e resolve te torna um programador melhor. Erros são oportunidades de aprendizado!
        </p>
      </div>
    </div>
  );
}

function LendoErrosContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Lendo Mensagens de Erro</h2>

      <h3>Anatomia de Uma Mensagem de Erro</h3>

      <p>Mensagens de erro têm uma estrutura. Vamos aprender a ler:</p>

      <CodeBlock
        language="text"
        code={`ReferenceError: nme is not defined
    at calcularIdade (app.js:15:17)
    at main (app.js:8:5)`}
      />

      <p>Parece confuso, mas tem informações valiosas:</p>

      <div className="my-6 p-4 bg-slate-100 rounded-lg font-mono text-sm">
        <p><strong className="text-red-600">ReferenceError</strong>: nme is not defined</p>
        <p className="text-slate-500 text-xs mt-1">↑ Tipo do erro &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↑ O que aconteceu</p>
        <br />
        <p className="text-slate-600">    at <strong>calcularIdade</strong> (<strong>app.js</strong>:<strong>15</strong>:17)</p>
        <p className="text-slate-500 text-xs mt-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑ Função onde aconteceu &nbsp; ↑ Arquivo &nbsp; ↑ Linha</p>
      </div>

      <p>
        <strong>Traduzindo:</strong> "Erro de Referência: 'nme' não existe. Aconteceu na função calcularIdade, no arquivo app.js, linha 15, coluna 17."
      </p>

      <h3>Os Tipos de Erro Mais Comuns</h3>

      <h4>SyntaxError (Erro de Sintaxe)</h4>

      <p>Você escreveu algo que o JavaScript não entende.</p>

      <CodeBlock language="text" code={`SyntaxError: Unexpected token ')'`} />

      <p>Significa: "Encontrei um ')' onde não deveria ter."</p>

      <InfoBox type="info" title="Causas comuns">
        <ul>
          <li>Faltou abrir ou fechar parênteses, chaves, colchetes</li>
          <li>Faltou vírgula ou ponto e vírgula</li>
          <li>Aspas não fechadas</li>
        </ul>
      </InfoBox>

      <h4>ReferenceError (Erro de Referência)</h4>

      <p>Você tentou usar algo que não existe.</p>

      <CodeBlock language="text" code={`ReferenceError: nme is not defined`} />

      <p>Significa: "Você usou 'nme' mas isso não existe."</p>

      <InfoBox type="info" title="Causas comuns">
        <ul>
          <li>Escreveu o nome da variável errado (nme em vez de nome)</li>
          <li>Usou uma variável antes de criar ela</li>
          <li>Esqueceu de importar algo</li>
        </ul>
      </InfoBox>

      <h4>TypeError (Erro de Tipo)</h4>

      <p>Você tentou fazer algo impossível com um tipo de dado.</p>

      <CodeBlock language="text" code={`TypeError: Cannot read property 'nome' of undefined`} />

      <p>Significa: "Você tentou acessar .nome de algo que é undefined."</p>

      <InfoBox type="info" title="Causas comuns">
        <ul>
          <li>A variável é undefined ou null</li>
          <li>Tentou usar um método que não existe para aquele tipo</li>
        </ul>
      </InfoBox>

      <Exercise
        id="fase3-traduzir-erros"
        title="Exercício: Traduzindo Erros"
        description="Tente traduzir esta mensagem de erro para português simples: TypeError: alunos.map is not a function at listarAlunos (app.js:12:18)"
        expectedAnswer="Na linha 12 do arquivo app.js, você tentou usar .map() em 'alunos', mas 'alunos' não é um array (pode ser undefined, null, ou outro tipo). Verifique se 'alunos' foi inicializado como array."
        hint="Pense: o que é .map()? Em quais tipos de dados ele funciona? O que pode ter acontecido com 'alunos'?"
      />
    </div>
  );
}

function ConsoleLogContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>console.log — Sua Ferramenta de Investigação</h2>

      <h3>O Detetive do Código</h3>

      <p>
        Quando algo não funciona e você não sabe por quê, <code>console.log</code> é seu melhor amigo.
      </p>

      <p>
        É como ser um detetive: você coloca "câmeras" no código para ver o que está acontecendo em cada passo.
      </p>

      <CodeBlock
        language="javascript"
        code={`function calcularDesconto(preco, percentual) {
    console.log("Entrou na função");
    console.log("preco:", preco);
    console.log("percentual:", percentual);

    let desconto = preco * percentual / 100;
    console.log("desconto calculado:", desconto);

    let precoFinal = preco - desconto;
    console.log("precoFinal:", precoFinal);

    return precoFinal;
}

let resultado = calcularDesconto(100, 20);
console.log("resultado:", resultado);`}
      />

      <p>Saída:</p>

      <CodeBlock
        language="text"
        code={`Entrou na função
preco: 100
percentual: 20
desconto calculado: 20
precoFinal: 80
resultado: 80`}
      />

      <p>Agora você <strong>VÊ</strong> exatamente o que está acontecendo em cada passo!</p>

      <h3>Quando Usar console.log</h3>

      <p>Use console.log para descobrir:</p>

      <h4>1. Se o código está chegando naquele ponto</h4>

      <CodeBlock
        language="javascript"
        code={`function minhaFuncao() {
    console.log(">>> Entrou em minhaFuncao");
    // resto do código
}`}
      />

      <h4>2. Qual é o valor de uma variável</h4>

      <CodeBlock
        language="javascript"
        code={`console.log("O valor de x é:", x);`}
      />

      <h4>3. Que tipo de dado é uma variável</h4>

      <CodeBlock
        language="javascript"
        code={`console.log("Tipo de alunos:", typeof alunos);
console.log("alunos é array?", Array.isArray(alunos));`}
      />

      <h4>4. O que está dentro de um objeto ou array</h4>

      <CodeBlock
        language="javascript"
        code={`console.log("Conteúdo completo:", alunos);`}
      />

      <h3>Técnica: Isolando o Problema</h3>

      <p>
        Imagine que sua função não está funcionando. Você tem 10 linhas de código. Onde está o erro?
      </p>

      <InfoBox type="tip" title="Técnica">
        <p>Coloque console.log entre cada passo para ver onde o código para de funcionar corretamente.</p>
      </InfoBox>

      <CodeBlock
        language="javascript"
        code={`function processarAluno(aluno) {
    console.log("1. Recebeu aluno:", aluno);

    let nome = aluno.nome;
    console.log("2. Nome extraído:", nome);

    let idade = calcularIdade(aluno.nascimento);
    console.log("3. Idade calculada:", idade);

    let status = idade >= 18 ? "adulto" : "menor";
    console.log("4. Status definido:", status);

    return { nome, idade, status };
}`}
      />

      <p>Se a saída for:</p>

      <CodeBlock
        language="text"
        code={`1. Recebeu aluno: { nome: "Maria", nascimento: "2000-05-15" }
2. Nome extraído: Maria
3. Idade calculada: undefined`}
      />

      <p>
        <strong>Aha!</strong> O problema está na função <code>calcularIdade</code> — ela está retornando undefined.
      </p>

      <h3>Limpando Depois</h3>

      <p>
        Depois de resolver o problema, <strong>remova os console.log</strong> ou eles vão poluir seu código.
      </p>

      <InfoBox type="warning" title="Boa prática">
        <p>Use comentários enquanto debuga para lembrar de remover depois:</p>
        <pre className="text-sm mt-2 bg-slate-100 p-2 rounded">// DEBUG: remover depois{'\n'}console.log("valor:", valor);</pre>
      </InfoBox>

      <Exercise
        id="fase3-debug-console"
        title="Exercício: Encontrando o Bug"
        description="O código abaixo deveria somar os números de um array, mas retorna NaN. Onde você colocaria console.log para investigar? Descreva seu processo."
        expectedAnswer="Colocaria console.log para ver: 1) Se os números estão corretos no array, 2) O valor de 'soma' a cada iteração do loop, 3) O valor de 'i' a cada iteração. Provavelmente o problema está no loop (índice errado ou valor undefined)."
        hint="Pense: NaN aparece quando você tenta fazer matemática com algo que não é número. Onde um valor undefined poderia entrar na conta?"
      />
    </div>
  );
}

function PesquisandoContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Pesquisando Soluções</h2>

      <h3>Você Não Está Sozinho</h3>

      <p>
        Toda mensagem de erro que você vê, milhares de outras pessoas já viram antes. E muitas delas perguntaram na internet e receberam respostas.
      </p>

      <InfoBox type="success" title="Verdade libertadora">
        <p className="text-lg font-semibold">
          Pesquisar é parte do trabalho de programador. Não é trapacear!
        </p>
      </InfoBox>

      <h3>Como Pesquisar Bem</h3>

      <h4>Passo 1: Copie a mensagem de erro principal</h4>

      <CodeBlock language="text" code={`TypeError: Cannot read property 'map' of undefined`} />

      <p>Cole isso no Google. Simples assim.</p>

      <h4>Passo 2: Adicione contexto se necessário</h4>

      <p>Se a busca for muito genérica, adicione:</p>
      <ul>
        <li>A linguagem: "JavaScript"</li>
        <li>A ferramenta: "React Native"</li>
        <li>O que você estava tentando fazer</li>
      </ul>

      <p>Exemplo:</p>

      <CodeBlock
        language="text"
        code={`"TypeError: Cannot read property 'map' of undefined" JavaScript array`}
      />

      <h4>Passo 3: Olhe os primeiros resultados</h4>

      <p>Os melhores lugares para encontrar respostas:</p>

      <ol>
        <li><strong>Stack Overflow</strong> — Perguntas e respostas de programadores</li>
        <li><strong>GitHub Issues</strong> — Problemas relatados em projetos</li>
        <li><strong>Documentação oficial</strong> — Às vezes o erro é explicado lá</li>
      </ol>

      <h3>Lendo Respostas no Stack Overflow</h3>

      <p>Stack Overflow é um site de perguntas e respostas. Quando você entra:</p>

      <ol>
        <li><strong>Leia a pergunta</strong> — Veja se é parecida com seu problema</li>
        <li><strong>Olhe a resposta com mais votos</strong> — Geralmente é a melhor</li>
        <li><strong>Leia os comentários</strong> — Às vezes tem informação importante</li>
        <li><strong>Não copie cegamente</strong> — Entenda o que a solução faz</li>
      </ol>

      <h3>O Que NÃO Fazer</h3>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
          <p className="text-red-700 font-medium mb-2">❌ Evite</p>
          <ul className="text-red-600 text-sm space-y-1">
            <li>Copiar código sem entender o que faz</li>
            <li>Usar a primeira solução sem ler direito</li>
            <li>Ficar frustrado e desistir depois de 5 minutos</li>
            <li>Ter vergonha de pesquisar</li>
          </ul>
        </div>
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-green-700 font-medium mb-2">✅ Faça</p>
          <ul className="text-green-600 text-sm space-y-1">
            <li>Entender POR QUE a solução funciona</li>
            <li>Ler várias respostas para entender melhor</li>
            <li>Tentar algumas soluções diferentes</li>
            <li>Pesquisar é normal e esperado!</li>
          </ul>
        </div>
      </div>

      <Quiz
        question="Você encontrou um erro que nunca viu. O que você faz primeiro?"
        options={[
          { id: 'a', text: 'Apagar todo o código e recomeçar' },
          { id: 'b', text: 'Copiar a mensagem de erro e pesquisar no Google' },
          { id: 'c', text: 'Pedir para alguém resolver para você' },
          { id: 'd', text: 'Ficar tentando coisas aleatórias até funcionar' },
        ]}
        correctId="b"
        explanation="Pesquisar a mensagem de erro é quase sempre o primeiro passo. Milhões de programadores já tiveram o mesmo erro e as soluções estão documentadas na internet."
      />
    </div>
  );
}

function ErrosComunsContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Erros Comuns em JavaScript</h2>

      <h3>1. Erro de Digitação em Nomes</h3>

      <p>O erro mais comum de todos!</p>

      <CodeBlock
        language="javascript"
        code={`// Declarou assim
let nomeDoAluno = "Maria";

// Mas usou assim
console.log(nomeDoaluno);  // ERRO! 'a' minúsculo

// Ou assim
console.log(nomedoaluno);  // ERRO! tudo minúsculo

// Ou assim
console.log(nome_do_aluno);  // ERRO! com underline`}
      />

      <InfoBox type="warning" title="Dica">
        <p>JavaScript diferencia maiúsculas de minúsculas. <code>nome</code>, <code>Nome</code> e <code>NOME</code> são três coisas diferentes.</p>
      </InfoBox>

      <h3>2. Esquecer de Fechar Coisas</h3>

      <CodeBlock
        language="javascript"
        code={`// Faltou fechar parêntese
console.log("Olá"
           // ^ faltou )

// Faltou fechar chave
function teste() {
    console.log("oi");
                      // faltou }

// Faltou fechar aspas
let nome = "Maria;
                // ^ faltou "

// Faltou fechar colchete
let numeros = [1, 2, 3
                     // ^ faltou ]`}
      />

      <InfoBox type="tip" title="Dica">
        <p>Use um editor que mostra pares de parênteses/chaves coloridos.</p>
      </InfoBox>

      <h3>3. Usar = em vez de == ou ===</h3>

      <CodeBlock
        language="javascript"
        code={`let idade = 18;

// ERRADO: isso ATRIBUI valor, não compara
if (idade = 20) {
    console.log("Tem 20 anos");
}

// CERTO: isso COMPARA valores
if (idade === 20) {
    console.log("Tem 20 anos");
}`}
      />

      <InfoBox type="warning" title="Dica">
        <p>Para comparar, use <code>===</code> (três iguais). Um <code>=</code> sozinho é para atribuir valor.</p>
      </InfoBox>

      <h3>4. Acessar Propriedade de undefined/null</h3>

      <CodeBlock
        language="javascript"
        code={`let aluno = null;
console.log(aluno.nome);  // ERRO! null não tem .nome

let aluno2;  // undefined
console.log(aluno2.nome);  // ERRO! undefined não tem .nome

let aluno3 = {};  // objeto vazio
console.log(aluno3.nome);  // Não dá erro, mas retorna undefined`}
      />

      <InfoBox type="tip" title="Dica">
        <p>Sempre verifique se a variável existe antes de acessar propriedades:</p>
        <pre className="text-sm mt-2 bg-slate-100 p-2 rounded">if (aluno) {'{'}{'\n'}    console.log(aluno.nome);{'\n'}{'}'}</pre>
      </InfoBox>

      <h3>5. Esquecer o return</h3>

      <CodeBlock
        language="javascript"
        code={`// ERRADO: esqueceu o return
function dobrar(numero) {
    let resultado = numero * 2;
    // Não retornou nada!
}

let x = dobrar(5);
console.log(x);  // undefined (a função não retornou nada)

// CERTO: com return
function dobrar(numero) {
    let resultado = numero * 2;
    return resultado;
}`}
      />

      <h3>6. Confundir Índice com Valor em Arrays</h3>

      <CodeBlock
        language="javascript"
        code={`let frutas = ["maçã", "banana", "laranja"];

// Índices são: 0, 1, 2
// Valores são: "maçã", "banana", "laranja"

console.log(frutas[1]);     // "banana" (índice 1)
console.log(frutas.length); // 3 (quantidade de itens)
console.log(frutas[3]);     // undefined (não existe índice 3!)`}
      />

      <InfoBox type="warning" title="Dica">
        <p>Arrays começam no índice 0, não no 1.</p>
      </InfoBox>

      <h3>7. Modificar Array/Objeto Errado</h3>

      <CodeBlock
        language="javascript"
        code={`let original = { nome: "Maria" };
let copia = original;  // Isso NÃO copia, só cria referência!

copia.nome = "João";

console.log(original.nome);  // "João" — original também mudou!`}
      />

      <p>Para copiar de verdade:</p>

      <CodeBlock
        language="javascript"
        code={`let copia = { ...original };  // Spread operator faz cópia`}
      />

      <Exercise
        id="fase3-encontrar-erro"
        title="Exercício: Encontre o Erro"
        description={`Este código deveria mostrar a soma dos preços, mas retorna undefined. Encontre o erro:\n\nfunction calcularTotal(itens) {\n    let soma = 0;\n    for (let i = 0; i < itens.length; i++) {\n        soma = soma + itens[i].preco;\n    }\n}\n\nlet produtos = [{preco: 50}, {preco: 100}];\nconsole.log(calcularTotal(produtos));`}
        expectedAnswer="Faltou o return! A função calcula a soma mas não retorna nada. Deve ter 'return soma;' no final."
        hint="A função calcula corretamente, mas o que ela faz com o resultado?"
      />
    </div>
  );
}

function EstrategiasContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Estratégias de Debug</h2>

      <h3>1. Leia o Erro Com Calma</h3>

      <p>Não entre em pânico. Respire. Leia a mensagem de erro devagar.</p>

      <p>Pergunte:</p>
      <ul>
        <li><strong>O que</strong> o erro diz que aconteceu?</li>
        <li><strong>Onde</strong> (arquivo, linha) aconteceu?</li>
        <li>Tem alguma <strong>dica</strong> de como resolver?</li>
      </ul>

      <h3>2. Reproduza o Erro</h3>

      <p>
        Antes de tentar resolver, tenha certeza de que consegue fazer o erro acontecer de novo. Se não consegue reproduzir, fica difícil saber se resolveu.
      </p>

      <h3>3. Isole o Problema</h3>

      <p>Se tem muito código, tente descobrir qual parte está causando o erro.</p>

      <InfoBox type="tip" title="Técnica: Comente metade do código">
        <p>Se o erro continuar → o erro está na metade que ficou</p>
        <p>Se parar → o erro está na metade que você comentou</p>
        <p>Repita até encontrar a linha problemática.</p>
      </InfoBox>

      <h3>4. Verifique Suas Suposições</h3>

      <p>
        Muitas vezes o erro acontece porque você ACHA que uma variável tem um valor, mas na verdade tem outro.
      </p>

      <CodeBlock
        language="javascript"
        code={`// Você ACHA que alunos é um array com dados
// Mas na verdade é undefined

console.log("alunos é:", alunos);  // Mostra o valor real
console.log("tipo:", typeof alunos);  // Mostra o tipo`}
      />

      <h3>5. Explique o Problema em Voz Alta</h3>

      <p>Isso se chama "Rubber Duck Debugging" (Debug do Patinho de Borracha).</p>

      <p>
        A ideia: explique o problema em voz alta, como se estivesse explicando para alguém (ou para um patinho de borracha).
      </p>

      <p>
        Muitas vezes, ao explicar o problema, você percebe a solução!
      </p>

      <div className="my-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <p className="text-yellow-800 italic">
          "Então, eu tenho essa função que recebe um aluno e... espera... eu nunca passo o aluno para a função! Era isso!"
        </p>
      </div>

      <h3>6. Faça Uma Pausa</h3>

      <p>Se você está travado há mais de 30 minutos no mesmo erro:</p>

      <ol>
        <li><strong>Levante</strong> e faça outra coisa por 10 minutos</li>
        <li><strong>Beba água</strong>, vá ao banheiro</li>
        <li><strong>Volte</strong> com a mente fresca</li>
      </ol>

      <p>
        Muitos bugs são resolvidos depois de uma pausa, quando você volta e vê algo que não tinha visto antes.
      </p>

      <h3>Resumo: Quando Algo Der Errado</h3>

      <div className="my-6 p-6 bg-slate-100 rounded-xl font-mono text-sm">
        <p className="font-bold text-center mb-4">ALGO DEU ERRADO — O QUE FAZER?</p>
        <ol className="space-y-2">
          <li><strong>1. CALMA</strong> — respire, não entre em pânico</li>
          <li><strong>2. LEIA O ERRO</strong>
            <ul className="ml-4 text-slate-600">
              <li>• Qual é o tipo? (Syntax, Reference, Type)</li>
              <li>• Em qual arquivo e linha?</li>
              <li>• O que a mensagem diz?</li>
            </ul>
          </li>
          <li><strong>3. INVESTIGUE</strong> com console.log
            <ul className="ml-4 text-slate-600">
              <li>• Qual é o valor das variáveis?</li>
              <li>• O código está chegando naquele ponto?</li>
            </ul>
          </li>
          <li><strong>4. PESQUISE</strong>
            <ul className="ml-4 text-slate-600">
              <li>• Copie o erro no Google</li>
              <li>• Olhe resultados do Stack Overflow</li>
              <li>• Entenda a solução antes de aplicar</li>
            </ul>
          </li>
          <li><strong>5. TENTE</strong> soluções
            <ul className="ml-4 text-slate-600">
              <li>• Uma de cada vez</li>
              <li>• Teste após cada mudança</li>
            </ul>
          </li>
          <li><strong>6. PAUSA</strong> se ficar travado muito tempo
            <ul className="ml-4 text-slate-600">
              <li>• 10 minutos fazendo outra coisa</li>
              <li>• Volte com a mente fresca</li>
            </ul>
          </li>
        </ol>
      </div>

      <Quiz
        question="Você está há 45 minutos tentando resolver o mesmo bug sem progresso. O que é mais provável de ajudar?"
        options={[
          { id: 'a', text: 'Continuar tentando por mais 45 minutos' },
          { id: 'b', text: 'Apagar todo o código e começar do zero' },
          { id: 'c', text: 'Fazer uma pausa de 10-15 minutos' },
          { id: 'd', text: 'Desistir completamente do projeto' },
        ]}
        correctId="c"
        explanation="Quando estamos travados muito tempo, nosso cérebro fica 'preso' em uma forma de pensar. Uma pausa ajuda a resetar e voltar com uma perspectiva fresca. Muitos bugs são resolvidos logo após uma pausa!"
      />

      <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
        <h4 className="text-green-800 font-semibold mb-2">Parabéns!</h4>
        <p className="text-green-700">
          Você agora tem as ferramentas para resolver problemas no código. Essa habilidade vai te acompanhar por toda sua jornada como programador! Na próxima fase, vamos aprender a usar IA como ferramenta de desenvolvimento.
        </p>
      </div>
    </div>
  );
}

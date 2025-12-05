'use client';

import { CodeBlock } from '../CodeBlock';
import { InfoBox } from '../InfoBox';
import { Quiz } from '../Quiz';
import { Exercise } from '../Exercise';

interface Fase7ContentProps {
  moduleId: string;
}

export function Fase7Content({ moduleId }: Fase7ContentProps) {
  switch (moduleId) {
    case 'intro':
      return <IntroModule />;
    case 'de-onde-vem':
      return <DeOndeVemModule />;
    case 'problema-espera':
      return <ProblemaEsperaModule />;
    case 'async-await':
      return <AsyncAwaitModule />;
    case 'axios':
      return <AxiosModule />;
    case 'tratando-erros':
      return <TratandoErrosModule />;
    case 'react-native':
      return <ReactNativeModule />;
    case 'flatlist-api':
      return <FlatListApiModule />;
    case 'projeto-pokemon':
      return <ProjetoPokemonModule />;
    default:
      return (
        <div className="prose prose-slate max-w-none">
          <p>Módulo não encontrado.</p>
        </div>
      );
  }
}

function IntroModule() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Trabalhando com Dados da Internet</h2>

      <p className="lead">
        Até agora, todos os dados dos nossos exemplos estavam "escritos no código".
        Mas apps reais não funcionam assim — os dados vêm de algum lugar na internet.
      </p>

      <p>Lembra da lista de alunos? Ela estava assim:</p>

      <CodeBlock
        language="javascript"
        code={`const alunos = [
    { id: 1, nome: 'Maria Silva' },
    { id: 2, nome: 'João Santos' },
];`}
      />

      <p>
        Esses dados estavam <strong>fixos no código</strong>. Chamamos isso de dados
        "hardcoded" ou "estáticos".
      </p>

      <InfoBox type="info" title="Na vida real...">
        Apps reais buscam dados de <strong>servidores na internet</strong> — um banco
        de dados, uma API, algum serviço online. Quando você abre o Instagram, ele
        busca suas fotos de um servidor. Quando abre o Uber, ele busca os motoristas
        disponíveis em tempo real.
      </InfoBox>

      <h3>O que você vai aprender nesta fase</h3>

      <ul>
        <li><strong>De onde vêm os dados</strong> — como apps buscam informações</li>
        <li><strong>Código assíncrono</strong> — como esperar sem travar</li>
        <li><strong>Async/Await</strong> — as palavras mágicas do JavaScript</li>
        <li><strong>Axios</strong> — ferramenta para buscar dados</li>
        <li><strong>Tratamento de erros</strong> — o que fazer quando dá problema</li>
        <li><strong>Projeto prático</strong> — uma Pokédex funcional!</li>
      </ul>

      <InfoBox type="tip" title="Por que isso é importante?">
        Praticamente todo app moderno precisa buscar dados da internet. Dominar esse
        conceito abre portas para criar apps que se conectam a qualquer serviço —
        redes sociais, bancos, lojas, jogos, e muito mais.
      </InfoBox>

      <Quiz
        question="Por que apps não guardam todos os dados dentro do código?"
        options={[
          { id: 'a', text: 'Porque seria muito lento' },
          { id: 'b', text: 'Porque os dados mudam constantemente e precisam estar atualizados' },
          { id: 'c', text: 'Porque JavaScript não permite guardar dados' },
          { id: 'd', text: 'Porque o celular não tem espaço' },
        ]}
        correctId="b"
        explanation="Apps buscam dados de servidores porque as informações mudam o tempo todo. Imagine se o Instagram tivesse que atualizar o app toda vez que alguém postasse uma foto!"
      />
    </div>
  );
}

function DeOndeVemModule() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>De Onde Vêm os Dados?</h2>

      <h3>A Internet Como Uma Grande Biblioteca</h3>

      <p>Imagine a internet como uma <strong>biblioteca gigante</strong>. Quando você quer um livro:</p>

      <ol>
        <li>Você vai até o balcão</li>
        <li>Pede o livro que quer</li>
        <li>O bibliotecário vai buscar</li>
        <li>Ele volta com o livro</li>
        <li>Você lê o livro</li>
      </ol>

      <p>Apps funcionam igual:</p>

      <ol>
        <li>O app quer mostrar uma lista de pokémons</li>
        <li>O app <strong>pede</strong> essa lista para um servidor na internet</li>
        <li>O servidor busca os dados</li>
        <li>O servidor <strong>responde</strong> com os dados</li>
        <li>O app mostra na tela</li>
      </ol>

      <CodeBlock
        language="text"
        code={`┌─────────────┐         "Me dá a lista         ┌─────────────┐
│             │         de pokémons"           │             │
│   Seu App   │  ─────────────────────────►    │  Servidor   │
│             │                                │  (Internet) │
│             │  ◄─────────────────────────    │             │
│             │         Lista de               │             │
└─────────────┘         pokémons               └─────────────┘`}
      />

      <h3>O Que É uma API?</h3>

      <p>
        Você já ouviu falar de <strong>API</strong>. Parece complicado, mas é simples.
      </p>

      <p><strong>API</strong> é como o <strong>cardápio de um restaurante</strong>. O cardápio te diz:</p>

      <ul>
        <li>O que você pode pedir</li>
        <li>Como pedir (nome do prato)</li>
        <li>O que você vai receber</li>
      </ul>

      <p>Uma API te diz:</p>

      <ul>
        <li>Quais dados você pode pedir</li>
        <li>Como pedir (qual endereço usar)</li>
        <li>O que você vai receber de volta</li>
      </ul>

      <InfoBox type="info" title="Exemplo: PokeAPI">
        Existe uma API pública e gratuita de Pokémons. Ela te diz: "Se você acessar
        o endereço <code>https://pokeapi.co/api/v2/pokemon</code>, eu te dou uma
        lista de pokémons." Você não precisa criar nada — a API já existe!
      </InfoBox>

      <h3>APIs Públicas: Dados de Graça</h3>

      <p>Existem muitas APIs públicas que qualquer pessoa pode usar sem pagar:</p>

      <ul>
        <li><strong>PokeAPI</strong> — Dados de Pokémons</li>
        <li><strong>JSONPlaceholder</strong> — Dados fictícios para testes</li>
        <li><strong>Dog API</strong> — Fotos aleatórias de cachorros</li>
        <li><strong>Cat Facts</strong> — Fatos curiosos sobre gatos</li>
      </ul>

      <p>Nesta fase, vamos usar essas APIs para praticar.</p>

      <Quiz
        question="O que é uma API?"
        options={[
          { id: 'a', text: 'Uma linguagem de programação' },
          { id: 'b', text: 'Um tipo de celular' },
          { id: 'c', text: 'Uma forma de apps pedirem dados para servidores' },
          { id: 'd', text: 'Um banco de dados' },
        ]}
        correctId="c"
        explanation="API é como um 'cardápio' que diz quais dados você pode pedir e como pedir. É a forma padrão de apps se comunicarem com servidores."
      />
    </div>
  );
}

function ProblemaEsperaModule() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>O Problema da Espera</h2>

      <p>Antes de buscar dados, precisamos entender um conceito muito importante.</p>

      <h3>Quando Você Pede Uma Pizza...</h3>

      <p>Imagine que você ligou para pedir uma pizza. O que acontece?</p>

      <ol>
        <li>Você faz o pedido</li>
        <li><strong>Você espera</strong> (pode demorar 30 minutos!)</li>
        <li>A pizza chega</li>
      </ol>

      <p>
        Enquanto espera, você <strong>não fica parado olhando para a porta</strong>.
        Você faz outras coisas — assiste TV, mexe no celular, arruma a casa.
      </p>

      <h3>O Computador Também Precisa Esperar</h3>

      <p>
        Quando seu app pede dados da internet, <strong>a resposta não vem
        instantaneamente</strong>. Pode demorar um pouquinho — meio segundo, um
        segundo, às vezes mais.
      </p>

      <p>Se o app ficasse <strong>travado esperando</strong>, seria horrível:</p>

      <CodeBlock
        language="text"
        code={`Usuário clica em "Ver Pokémons"
     │
     ▼
App pede os dados
     │
     ▼
TELA CONGELADA... (esperando resposta)
TELA CONGELADA...
TELA CONGELADA...
     │
     ▼
Resposta chega
     │
     ▼
App mostra os dados`}
      />

      <p>O usuário ia achar que o app travou!</p>

      <h3>A Solução: Fazer Outras Coisas Enquanto Espera</h3>

      <p>A solução é: enquanto espera a resposta, o app <strong>continua funcionando</strong>:</p>

      <CodeBlock
        language="text"
        code={`Usuário clica em "Ver Pokémons"
     │
     ▼
App pede os dados
     │
     ▼
App mostra "Carregando..." ← Continua funcionando!
Usuário pode rolar a tela
Pode clicar em outras coisas
     │
     ▼
Resposta chega
     │
     ▼
App mostra os dados`}
      />

      <InfoBox type="info" title="Código Assíncrono">
        Isso se chama código <strong>assíncrono</strong> — código que sabe esperar
        sem travar. É como você esperando a pizza: você não fica parado, continua
        fazendo outras coisas.
      </InfoBox>

      <Quiz
        question="Por que código assíncrono é importante?"
        options={[
          { id: 'a', text: 'Porque deixa o app mais bonito' },
          { id: 'b', text: 'Porque o app continua funcionando enquanto espera dados' },
          { id: 'c', text: 'Porque usa menos memória' },
          { id: 'd', text: 'Porque é mais fácil de escrever' },
        ]}
        correctId="b"
        explanation="Código assíncrono permite que o app continue respondendo ao usuário enquanto espera dados da internet. Sem isso, o app ficaria travado!"
      />
    </div>
  );
}

function AsyncAwaitModule() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Async e Await — Esperando Sem Travar</h2>

      <h3>As Duas Palavras Mágicas</h3>

      <p>Para fazer o app esperar sem travar, usamos duas palavras especiais:</p>

      <ul>
        <li><strong>async</strong> — Marca uma função que vai ter espera</li>
        <li><strong>await</strong> — Marca o ponto onde o app deve esperar</li>
      </ul>

      <p>Parece complicado, mas veja:</p>

      <CodeBlock
        language="javascript"
        code={`// Uma função NORMAL (sem espera)
function somar(a, b) {
    return a + b;
}

// Uma função que ESPERA dados da internet
async function buscarPokemons() {
    let resposta = await pedirDadosDaInternet();
    return resposta;
}`}
      />

      <p>A diferença:</p>
      <ul>
        <li><code>somar</code> roda instantaneamente</li>
        <li><code>buscarPokemons</code> precisa esperar, então marcamos com <code>async</code> e <code>await</code></li>
      </ul>

      <h3>Analogia: O Garçom do Restaurante</h3>

      <p>Pense em um garçom. Quando você faz um pedido:</p>

      <ol>
        <li>O garçom anota seu pedido</li>
        <li>Leva para a cozinha</li>
        <li><strong>Enquanto a comida é preparada</strong>, ele atende outras mesas</li>
        <li>Quando a comida fica pronta, ele traz para você</li>
      </ol>

      <p>O garçom não fica parado esperando sua comida ficar pronta. Ele continua trabalhando.</p>

      <InfoBox type="tip" title="O que await significa">
        <code>await</code> é como dizer: "espere isso ficar pronto, mas continue fazendo
        outras coisas enquanto isso". O app pode mostrar animações, responder a cliques,
        tudo enquanto espera.
      </InfoBox>

      <h3>Regra Importante</h3>

      <p><strong><code>await</code> só pode ser usado dentro de funções marcadas com <code>async</code>.</strong></p>

      <CodeBlock
        language="javascript"
        code={`// ❌ ERRADO — await fora de função async
let dados = await buscarDados();

// ✅ CORRETO — await dentro de função async
async function carregarTela() {
    let dados = await buscarDados();
    console.log(dados);
}`}
      />

      <p>
        Pense assim: você só pode "esperar" se avisou antes que ia ter espera
        (usando <code>async</code>).
      </p>

      <Exercise
        id="fase7-async-erro"
        title="Identificando o Erro"
        description="Qual é o problema neste código? function buscarUsuarios() { let resposta = await axios.get('https://api.exemplo.com/usuarios'); return resposta.data; }"
        expectedAnswer="Falta o 'async' antes de 'function'. Await só pode ser usado dentro de funções async: async function buscarUsuarios() { ... }"
        hint="Olhe para a palavra 'await' - await só pode ser usado dentro de funções marcadas com async."
      />

      <Quiz
        question="O que acontece se você usar await sem async?"
        options={[
          { id: 'a', text: 'Funciona normalmente' },
          { id: 'b', text: 'O código fica mais lento' },
          { id: 'c', text: 'Dá erro de sintaxe' },
          { id: 'd', text: 'O app trava' },
        ]}
        correctId="c"
        explanation="JavaScript não permite usar await fora de uma função async. Você precisa marcar a função com async para poder usar await dentro dela."
      />
    </div>
  );
}

function AxiosModule() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Instalando e Usando Axios</h2>

      <h3>O Que É Axios?</h3>

      <p>
        <strong>Axios</strong> é uma ferramenta que facilita pedir dados da internet.
        É como ter um assistente que faz os pedidos para você.
      </p>

      <p>Sem Axios, você teria que fazer muitas coisas manualmente. Com Axios, fica simples.</p>

      <h3>Instalando o Axios</h3>

      <p>No terminal, dentro da pasta do seu projeto:</p>

      <CodeBlock
        language="bash"
        code={`npm install axios`}
      />

      <p>Pronto! Agora você pode usar o Axios no seu código.</p>

      <h3>Seu Primeiro Pedido com Axios</h3>

      <p>
        Vamos buscar dados de uma API pública. A mais simples é a <strong>JSONPlaceholder</strong>,
        que tem dados fictícios para testes.
      </p>

      <CodeBlock
        language="javascript"
        code={`import axios from 'axios';

async function buscarUsuarios() {
    let resposta = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(resposta.data);
}`}
      />

      <p>Vamos entender cada parte:</p>

      <CodeBlock
        language="javascript"
        code={`import axios from 'axios';
// ↑ Traz o axios para podermos usar

async function buscarUsuarios() {
// ↑ Marca que essa função vai ter espera

    let resposta = await axios.get('https://...');
    //             ↑ Espera a resposta chegar
    //                   ↑ Faz um pedido GET para esse endereço

    console.log(resposta.data);
    //                   ↑ Os dados que vieram ficam em .data
}`}
      />

      <h3>O Que É GET?</h3>

      <p><code>GET</code> significa "pegar" ou "buscar". Quando você quer <strong>obter</strong> dados, usa GET.</p>

      <CodeBlock
        language="javascript"
        code={`axios.get('endereço')   // Busca dados desse endereço`}
      />

      <InfoBox type="info" title="Outros tipos de pedido">
        Existem outros tipos de pedido (POST, PUT, DELETE), mas por enquanto só
        precisamos do GET. GET é para buscar, os outros são para criar, atualizar
        e deletar dados.
      </InfoBox>

      <Quiz
        question="Onde ficam os dados que vêm do servidor quando usamos Axios?"
        options={[
          { id: 'a', text: 'Em resposta.resultado' },
          { id: 'b', text: 'Em resposta.dados' },
          { id: 'c', text: 'Em resposta.data' },
          { id: 'd', text: 'Em resposta.content' },
        ]}
        correctId="c"
        explanation="O Axios coloca os dados que vieram do servidor dentro de 'resposta.data'. É sempre assim, então você pode contar com isso!"
      />
    </div>
  );
}

function TratandoErrosModule() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Tratando Erros — E Se Der Problema?</h2>

      <h3>Coisas Podem Dar Errado</h3>

      <p>Quando você pede dados da internet, várias coisas podem dar errado:</p>

      <ul>
        <li>O celular pode estar sem internet</li>
        <li>O servidor pode estar fora do ar</li>
        <li>O endereço pode estar errado</li>
        <li>A conexão pode ser muito lenta</li>
      </ul>

      <p>
        Se não tratarmos esses problemas, o app pode travar ou mostrar uma tela branca.
      </p>

      <h3>Try e Catch: Tentando e Pegando Erros</h3>

      <p>JavaScript tem uma forma de lidar com erros: <strong>try</strong> e <strong>catch</strong>.</p>

      <ul>
        <li><strong>try</strong> = "tente fazer isso"</li>
        <li><strong>catch</strong> = "se der erro, faça isso outro"</li>
      </ul>

      <CodeBlock
        language="javascript"
        code={`async function buscarDados() {
    try {
        // Tenta fazer o pedido
        let resposta = await axios.get('https://...');
        console.log('Deu certo!', resposta.data);

    } catch (erro) {
        // Se der qualquer problema, cai aqui
        console.log('Deu erro!', erro.message);
    }
}`}
      />

      <h3>Analogia: O Plano B</h3>

      <p>Pense assim: você tenta ligar para alguém.</p>

      <CodeBlock
        language="text"
        code={`TRY (tente):
    Ligar para a pessoa

CATCH (se não conseguir):
    Mandar mensagem de texto`}
      />

      <p>No código:</p>

      <CodeBlock
        language="javascript"
        code={`try {
    // Tenta buscar da internet
    let resposta = await axios.get('https://...');
    mostrarDados(resposta.data);

} catch (erro) {
    // Se não conseguir, mostra mensagem de erro
    mostrarMensagem('Não foi possível carregar. Verifique sua internet.');
}`}
      />

      <InfoBox type="warning" title="Regra de Ouro">
        <strong>Sempre</strong> use try/catch com Axios. Toda vez que você fizer
        um pedido para a internet, coloque dentro de try/catch. Assim seu app
        nunca vai travar por falta de internet.
      </InfoBox>

      <CodeBlock
        language="javascript"
        code={`async function buscarPokemons() {
    try {
        let resposta = await axios.get('https://pokeapi.co/api/v2/pokemon');
        return resposta.data;

    } catch (erro) {
        console.log('Erro ao buscar pokémons:', erro.message);
        return null;  // Retorna null para indicar que falhou
    }
}`}
      />

      <Quiz
        question="Para que serve o bloco catch?"
        options={[
          { id: 'a', text: 'Para fazer o código rodar mais rápido' },
          { id: 'b', text: 'Para executar código quando dá erro no try' },
          { id: 'c', text: 'Para repetir o código do try' },
          { id: 'd', text: 'Para cancelar a operação' },
        ]}
        correctId="b"
        explanation="O catch é executado quando algo dá errado no try. É seu 'plano B' — você pode mostrar uma mensagem de erro amigável para o usuário em vez do app travar."
      />
    </div>
  );
}

function ReactNativeModule() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Usando Dados no React Native</h2>

      <p>Agora vamos juntar tudo: buscar dados e mostrar na tela do app.</p>

      <h3>O Hook useEffect: Quando Buscar os Dados?</h3>

      <p>
        Precisamos decidir <strong>quando</strong> buscar os dados. O momento mais
        comum é: <strong>quando a tela abre</strong>.
      </p>

      <p>Para isso, usamos o hook <code>useEffect</code>:</p>

      <CodeBlock
        language="javascript"
        code={`import { useEffect } from 'react';

useEffect(() => {
    // Código aqui roda quando a tela abre
    console.log('A tela abriu!');
}, []);`}
      />

      <p>O <code>[]</code> no final (array vazio) significa: "rode isso <strong>uma vez</strong>, quando a tela abrir".</p>

      <h3>Exemplo Simples: Buscando e Mostrando</h3>

      <CodeBlock
        language="tsx"
        filename="TelaUsuarios.tsx"
        code={`import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default function TelaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        buscarUsuarios();
    }, []);

    async function buscarUsuarios() {
        try {
            let resposta = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsuarios(resposta.data);
        } catch (erro) {
            console.log('Erro:', erro.message);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Usuários</Text>

            {usuarios.map((usuario) => (
                <Text key={usuario.id} style={styles.nome}>
                    {usuario.name}
                </Text>
            ))}
        </View>
    );
}`}
      />

      <h4>Explicando Passo a Passo</h4>

      <ol>
        <li><strong>useState</strong> guarda a lista de usuários (começa vazia)</li>
        <li><strong>useEffect</strong> roda quando a tela abre</li>
        <li><strong>buscarUsuarios</strong> pede os dados para a API</li>
        <li>Quando os dados chegam, <strong>setUsuarios</strong> atualiza a lista</li>
        <li>O componente re-renderiza mostrando os usuários</li>
      </ol>

      <h3>Mostrando "Carregando..."</h3>

      <p>É importante mostrar algo enquanto os dados não chegaram:</p>

      <CodeBlock
        language="tsx"
        filename="TelaUsuarios.tsx"
        code={`import { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

export default function TelaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [carregando, setCarregando] = useState(true);  // Começa carregando

    useEffect(() => {
        buscarUsuarios();
    }, []);

    async function buscarUsuarios() {
        try {
            let resposta = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsuarios(resposta.data);
        } catch (erro) {
            console.log('Erro:', erro.message);
        }

        setCarregando(false);  // Terminou de carregar
    }

    // Enquanto carrega, mostra o indicador
    if (carregando) {
        return (
            <View style={styles.centralizado}>
                <ActivityIndicator size="large" color="#007AFF" />
                <Text style={styles.textoCarregando}>Carregando...</Text>
            </View>
        );
    }

    // Quando terminar, mostra os dados
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Usuários ({usuarios.length})</Text>

            {usuarios.map((usuario) => (
                <Text key={usuario.id} style={styles.nome}>
                    {usuario.name}
                </Text>
            ))}
        </View>
    );
}`}
      />

      <InfoBox type="info" title="O Fluxo Completo">
        <ol>
          <li>Tela abre → carregando = true → Mostra "Carregando..."</li>
          <li>useEffect roda → Chama buscarUsuarios()</li>
          <li>buscarUsuarios pede dados → Espera resposta...</li>
          <li>Resposta chega → setUsuarios(dados) → setCarregando(false)</li>
          <li>Componente atualiza → carregando = false → Mostra lista de usuários</li>
        </ol>
      </InfoBox>

      <Quiz
        question="Para que serve o estado 'carregando'?"
        options={[
          { id: 'a', text: 'Para deixar o código mais organizado' },
          { id: 'b', text: 'Para saber quando mostrar o indicador de loading vs os dados' },
          { id: 'c', text: 'Para fazer a requisição mais rápida' },
          { id: 'd', text: 'Para salvar os dados no celular' },
        ]}
        correctId="b"
        explanation="O estado 'carregando' nos ajuda a decidir o que mostrar na tela. Enquanto é true, mostramos o indicador de loading. Quando vira false, mostramos os dados."
      />
    </div>
  );
}

function FlatListApiModule() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Usando FlatList com Dados da Internet</h2>

      <p>Para listas maiores, é melhor usar <code>FlatList</code> em vez de <code>.map()</code>:</p>

      <CodeBlock
        language="tsx"
        filename="ListaUsuarios.tsx"
        code={`import { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

export default function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        carregarUsuarios();
    }, []);

    async function carregarUsuarios() {
        try {
            setCarregando(true);
            setErro(null);

            let resposta = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsuarios(resposta.data);

        } catch (e) {
            setErro('Não foi possível carregar os usuários');

        } finally {
            setCarregando(false);
        }
    }

    // Estado: Carregando
    if (carregando) {
        return (
            <View style={styles.centralizado}>
                <ActivityIndicator size="large" color="#007AFF" />
                <Text style={styles.texto}>Carregando...</Text>
            </View>
        );
    }

    // Estado: Erro
    if (erro) {
        return (
            <View style={styles.centralizado}>
                <Text style={styles.textoErro}>{erro}</Text>
            </View>
        );
    }

    // Estado: Dados carregados
    return (
        <FlatList
            data={usuarios}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Text style={styles.nome}>{item.name}</Text>
                    <Text style={styles.email}>{item.email}</Text>
                </View>
            )}
            contentContainerStyle={styles.lista}
        />
    );
}`}
      />

      <h3>O Bloco "finally"</h3>

      <p>Você viu um novo bloco: <code>finally</code>. Ele <strong>sempre roda</strong>, dando erro ou não:</p>

      <CodeBlock
        language="javascript"
        code={`try {
    // Tenta fazer algo
} catch (erro) {
    // Se der erro, faz isso
} finally {
    // SEMPRE faz isso, no final
}`}
      />

      <InfoBox type="tip" title="Por que usar finally?">
        Usamos <code>finally</code> para garantir que <code>setCarregando(false)</code>
        rode mesmo se der erro. Assim o indicador de loading sempre some, seja
        sucesso ou falha.
      </InfoBox>

      <h3>Os Três Estados da Tela</h3>

      <p>Toda tela que busca dados tem três estados possíveis:</p>

      <ol>
        <li><strong>Carregando</strong> — Mostra indicador de loading</li>
        <li><strong>Erro</strong> — Mostra mensagem de erro</li>
        <li><strong>Sucesso</strong> — Mostra os dados</li>
      </ol>

      <CodeBlock
        language="javascript"
        code={`// Estado 1: Carregando
if (carregando) {
    return <ActivityIndicator />;
}

// Estado 2: Erro
if (erro) {
    return <Text>{erro}</Text>;
}

// Estado 3: Sucesso
return <FlatList data={dados} ... />;`}
      />

      <Quiz
        question="O que o bloco 'finally' faz?"
        options={[
          { id: 'a', text: 'Roda apenas quando dá erro' },
          { id: 'b', text: 'Roda apenas quando dá certo' },
          { id: 'c', text: 'Sempre roda, independente de sucesso ou erro' },
          { id: 'd', text: 'Cancela a operação' },
        ]}
        correctId="c"
        explanation="O bloco finally sempre executa, não importa se o try teve sucesso ou se caiu no catch. É perfeito para 'limpeza' como desligar o loading."
      />
    </div>
  );
}

function ProjetoPokemonModule() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Projeto Prático — Lista e Detalhe de Pokémons</h2>

      <p>Vamos criar um mini-app que:</p>
      <ol>
        <li>Mostra uma lista de pokémons</li>
        <li>Ao clicar em um, mostra os detalhes</li>
      </ol>

      <h3>Estrutura de Arquivos</h3>

      <CodeBlock
        language="text"
        code={`app/
├── (tabs)/
│   └── index.tsx       ← Lista de Pokémons
└── pokemon/
    └── [nome].tsx      ← Detalhe do Pokémon`}
      />

      <h3>Tela 1: Lista de Pokémons</h3>

      <CodeBlock
        language="tsx"
        filename="app/(tabs)/index.tsx"
        code={`import { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    Pressable,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import { Link } from 'expo-router';
import axios from 'axios';

export default function ListaPokemons() {
    const [pokemons, setPokemons] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        carregarPokemons();
    }, []);

    async function carregarPokemons() {
        try {
            setCarregando(true);
            setErro(null);

            // A PokeAPI retorna uma lista com nome e URL de cada pokémon
            let resposta = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
            setPokemons(resposta.data.results);

        } catch (e) {
            setErro('Não foi possível carregar os pokémons');
            console.log('Erro:', e.message);

        } finally {
            setCarregando(false);
        }
    }

    // Mostra indicador enquanto carrega
    if (carregando) {
        return (
            <View style={styles.centralizado}>
                <ActivityIndicator size="large" color="#ee1515" />
                <Text style={styles.textoCarregando}>Carregando pokémons...</Text>
            </View>
        );
    }

    // Mostra erro se houver
    if (erro) {
        return (
            <View style={styles.centralizado}>
                <Text style={styles.textoErro}>{erro}</Text>
                <Pressable style={styles.botaoTentar} onPress={carregarPokemons}>
                    <Text style={styles.textoBotao}>Tentar Novamente</Text>
                </Pressable>
            </View>
        );
    }

    // Mostra a lista
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Pokédex</Text>

            <FlatList
                data={pokemons}
                keyExtractor={(item) => item.name}
                renderItem={({ item, index }) => (
                    <Link href={\`/pokemon/\${item.name}\`} asChild>
                        <Pressable style={styles.card}>
                            <Text style={styles.numero}>#{index + 1}</Text>
                            <Text style={styles.nome}>
                                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                            </Text>
                            <Text style={styles.seta}>→</Text>
                        </Pressable>
                    </Link>
                )}
                contentContainerStyle={styles.lista}
            />
        </View>
    );
}`}
      />

      <h3>Tela 2: Detalhe do Pokémon</h3>

      <CodeBlock
        language="tsx"
        filename="app/pokemon/[nome].tsx"
        code={`import { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import axios from 'axios';

export default function DetalhePokemon() {
    // Pega o nome da URL (ex: /pokemon/pikachu → nome = "pikachu")
    const { nome } = useLocalSearchParams();

    const [pokemon, setPokemon] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        carregarPokemon();
    }, [nome]);

    async function carregarPokemon() {
        try {
            setCarregando(true);
            setErro(null);

            let resposta = await axios.get(\`https://pokeapi.co/api/v2/pokemon/\${nome}\`);
            setPokemon(resposta.data);

        } catch (e) {
            setErro('Não foi possível carregar este pokémon');
            console.log('Erro:', e.message);

        } finally {
            setCarregando(false);
        }
    }

    // Carregando
    if (carregando) {
        return (
            <View style={styles.centralizado}>
                <ActivityIndicator size="large" color="#ee1515" />
                <Text style={styles.textoCarregando}>Carregando...</Text>
            </View>
        );
    }

    // Erro
    if (erro || !pokemon) {
        return (
            <View style={styles.centralizado}>
                <Text style={styles.textoErro}>{erro || 'Pokémon não encontrado'}</Text>
            </View>
        );
    }

    // Mostra os detalhes
    return (
        <ScrollView style={styles.container}>
            {/* Imagem */}
            <View style={styles.imagemContainer}>
                <Image
                    source={{ uri: pokemon.sprites.front_default }}
                    style={styles.imagem}
                />
            </View>

            {/* Nome e número */}
            <Text style={styles.numero}>#{pokemon.id}</Text>
            <Text style={styles.nome}>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Text>

            {/* Tipos */}
            <View style={styles.tipos}>
                {pokemon.types.map((tipo) => (
                    <View key={tipo.type.name} style={styles.tipoBadge}>
                        <Text style={styles.tipoTexto}>
                            {tipo.type.name.toUpperCase()}
                        </Text>
                    </View>
                ))}
            </View>

            {/* Informações */}
            <View style={styles.infoContainer}>
                <View style={styles.infoItem}>
                    <Text style={styles.infoValor}>{pokemon.height / 10} m</Text>
                    <Text style={styles.infoLabel}>Altura</Text>
                </View>

                <View style={styles.infoItem}>
                    <Text style={styles.infoValor}>{pokemon.weight / 10} kg</Text>
                    <Text style={styles.infoLabel}>Peso</Text>
                </View>
            </View>

            {/* Habilidades */}
            <Text style={styles.secaoTitulo}>Habilidades</Text>
            <View style={styles.habilidades}>
                {pokemon.abilities.map((hab) => (
                    <Text key={hab.ability.name} style={styles.habilidade}>
                        • {hab.ability.name}
                    </Text>
                ))}
            </View>
        </ScrollView>
    );
}`}
      />

      <InfoBox type="tip" title="Parâmetros Dinâmicos">
        O arquivo <code>[nome].tsx</code> é uma rota dinâmica. O <code>[nome]</code>
        vira uma variável que pegamos com <code>useLocalSearchParams()</code>.
        Assim, <code>/pokemon/pikachu</code> define <code>nome = "pikachu"</code>.
      </InfoBox>

      <Exercise
        id="fase7-reflexao"
        title="Reflexão: Conceitos Usados"
        description="Olhe para o projeto Pokédex e identifique: 1) Onde usamos async/await? 2) Por que try/catch é importante? 3) Quais estados temos? 4) Quando useEffect roda? 5) Quais são os três estados da tela?"
        expectedAnswer="1) async/await nas funções carregarPokemons() e carregarPokemon(). 2) try/catch para tratar erros de rede. 3) Três estados: dados, carregando (boolean), erro (string). 4) useEffect roda quando a tela abre. 5) Estados: Carregando (mostra ActivityIndicator), Erro (mostra mensagem), Sucesso (mostra dados)."
        hint="Procure as palavras-chave: async, await, try, catch, useState, useEffect. Veja quantos useState existem e o que acontece em cada if() antes do return final."
      />

      <h3>Checklist de Conclusão</h3>

      <p>Antes de terminar esta fase, confirme que você consegue:</p>

      <p><strong>Conceitos:</strong></p>
      <ul>
        <li>Explicar de onde vêm os dados de um app (internet/servidor)</li>
        <li>Explicar o que é uma API com suas próprias palavras</li>
        <li>Explicar por que código assíncrono é necessário</li>
        <li>Explicar o que fazem <code>async</code> e <code>await</code></li>
        <li>Explicar para que serve try/catch</li>
      </ul>

      <p><strong>Prática:</strong></p>
      <ul>
        <li>Instalar e importar o Axios</li>
        <li>Fazer uma requisição GET com Axios</li>
        <li>Usar try/catch para tratar erros</li>
        <li>Usar useEffect para carregar dados quando a tela abre</li>
        <li>Mostrar "Carregando..." enquanto busca dados</li>
        <li>Mostrar mensagem de erro quando falha</li>
        <li>Mostrar os dados quando chegam</li>
      </ul>

      <InfoBox type="success" title="Parabéns!">
        Você completou todas as fases do curso! Agora você tem uma base sólida para
        criar apps React Native que buscam dados da internet. Continue praticando
        e explorando — cada projeto novo vai te ensinar algo diferente!
      </InfoBox>
    </div>
  );
}

'use client';

import { CodeBlock } from '../CodeBlock';
import { InfoBox } from '../InfoBox';
import { Quiz } from '../Quiz';
import { Exercise } from '../Exercise';

interface Fase6ContentProps {
  moduleId: string;
}

export function Fase6Content({ moduleId }: Fase6ContentProps) {
  switch (moduleId) {
    case 'intro':
      return <IntroContent />;
    case 'o-que-e-rn':
      return <OQueERNContent />;
    case 'primeiro-projeto':
      return <PrimeiroProjetoContent />;
    case 'componentes':
      return <ComponentesContent />;
    case 'estilizacao':
      return <EstilizacaoContent />;
    case 'estado':
      return <EstadoContent />;
    case 'flatlist':
      return <FlatListContent />;
    case 'navegacao':
      return <NavegacaoContent />;
    case 'safe-area':
      return <SafeAreaContent />;
    default:
      return <div>Conteúdo não encontrado para o módulo: {moduleId}</div>;
  }
}

function IntroContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Introdução ao React Native</h2>

      <p className="text-xl text-slate-600 mb-6">
        Chegou a hora de criar interfaces visuais! Até agora você aprendeu lógica de programação e estrutura de projetos, mas tudo foi "invisível" — só texto no terminal.
      </p>

      <p>
        Nesta fase, você vai aprender a criar <strong>aplicativos de verdade</strong> que rodam no celular. E a boa notícia: vamos usar ferramentas que tornam isso muito mais fácil do que você imagina.
      </p>

      <h3>O que você vai aprender</h3>

      <ul>
        <li>Entender o que é React Native e por que usamos ele</li>
        <li>Criar telas com componentes visuais</li>
        <li>Fazer elementos responderem a toques</li>
        <li>Navegar entre diferentes telas</li>
        <li>Criar listas que mostram dados</li>
      </ul>

      <InfoBox type="success" title="Pré-requisitos">
        <p>Certifique-se de ter o Node.js instalado (da Fase 1) e um celular com o app Expo Go (iPhone ou Android).</p>
      </InfoBox>

      <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
        <h4 className="text-blue-800 font-semibold mb-2">Próximo passo</h4>
        <p className="text-blue-700">
          Vamos começar entendendo o que é React Native e por que usamos o Expo para desenvolver.
        </p>
      </div>
    </div>
  );
}

function OQueERNContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>O Que É React Native (E Por Que Expo?)</h2>

      <h3>React Native: Apps Nativos com JavaScript</h3>

      <p>
        <strong>React Native</strong> é uma tecnologia criada pelo Facebook (agora Meta) que permite criar aplicativos para iPhone e Android usando JavaScript.
      </p>

      <p>A mágica: você escreve <strong>um código só</strong> e ele funciona nos dois sistemas!</p>

      <div className="my-6 p-4 bg-slate-100 rounded-lg text-center">
        <p className="font-mono text-sm">Seu Código JavaScript</p>
        <p className="text-2xl my-2">↓</p>
        <div className="flex justify-center gap-4">
          <div className="p-3 bg-white rounded-lg">App iPhone (Nativo)</div>
          <div className="p-3 bg-white rounded-lg">App Android (Nativo)</div>
        </div>
      </div>

      <p>
        Diferente de um site que roda dentro de um navegador, React Native cria <strong>apps nativos de verdade</strong> — com a mesma performance e experiência de apps feitos especificamente para cada plataforma.
      </p>

      <h3>Expo: Seu Melhor Amigo</h3>

      <p>React Native "puro" pode ser complicado de configurar. É aí que entra o <strong>Expo</strong>.</p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
          <p className="text-red-700 font-medium mb-2">Sem Expo</p>
          <ul className="text-red-600 text-sm space-y-1">
            <li>Instalar Android Studio (~4GB)</li>
            <li>Instalar Xcode (só Mac)</li>
            <li>Configurar emuladores</li>
            <li>Lidar com código nativo</li>
          </ul>
        </div>
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-green-700 font-medium mb-2">Com Expo</p>
          <ul className="text-green-600 text-sm space-y-1">
            <li>Não precisa de Android Studio</li>
            <li>Não precisa de Xcode</li>
            <li>Usa o app Expo Go no celular</li>
            <li>Expo cuida do código nativo</li>
          </ul>
        </div>
      </div>

      <h3>O App Expo Go</h3>

      <p>O Expo Go é um aplicativo que você instala no seu celular. Com ele, você:</p>

      <ol>
        <li>Escreve código no computador</li>
        <li>Escaneia um QR code</li>
        <li>Vê o app rodando instantaneamente no seu celular!</li>
      </ol>

      <p>Qualquer mudança que você faz no código aparece no celular em segundos. É quase mágico.</p>

      <InfoBox type="info" title="Importante">
        <p>
          Expo não é "React Native para iniciantes" — é uma ferramenta profissional usada por empresas grandes. Você não está aprendendo algo "simplificado", está aprendendo a forma moderna de desenvolver.
        </p>
      </InfoBox>

      <Quiz
        question="Por que usamos Expo em vez de React Native puro?"
        options={[
          { id: 'a', text: 'Porque é mais barato' },
          { id: 'b', text: 'Porque simplifica a configuração e permite testar no celular facilmente' },
          { id: 'c', text: 'Porque roda mais rápido' },
          { id: 'd', text: 'Porque funciona só em iPhone' },
        ]}
        correctId="b"
        explanation="Expo simplifica muito o processo de desenvolvimento, eliminando a necessidade de configurar Android Studio, Xcode, e emuladores. Com o app Expo Go, você testa direto no seu celular."
      />
    </div>
  );
}

function PrimeiroProjetoContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Criando Seu Primeiro Projeto</h2>

      <h3>Pré-requisitos</h3>

      <p>Antes de começar, certifique-se de ter:</p>

      <ol>
        <li><strong>Node.js instalado</strong> (você fez isso na Fase 1)</li>
        <li><strong>Um celular</strong> com o app Expo Go instalado:
          <ul>
            <li>iPhone: Busque "Expo Go" na App Store</li>
            <li>Android: Busque "Expo Go" na Play Store</li>
          </ul>
        </li>
        <li><strong>Celular e computador na mesma rede Wi-Fi</strong></li>
      </ol>

      <h3>Criando o Projeto</h3>

      <p>Abra o terminal e rode:</p>

      <CodeBlock language="bash" code={`npx create-expo-app@latest academia-app`} />

      <p>O que esse comando faz:</p>
      <ul>
        <li><code>npx</code> — Executa um pacote do npm</li>
        <li><code>create-expo-app@latest</code> — Ferramenta que cria projetos Expo</li>
        <li><code>academia-app</code> — Nome do seu projeto</li>
      </ul>

      <p>Aguarde a instalação (pode demorar alguns minutos).</p>

      <h3>Rodando o Projeto</h3>

      <p>Entre na pasta e inicie o servidor:</p>

      <CodeBlock
        language="bash"
        code={`cd academia-app
npx expo start`}
      />

      <p>Você verá um QR code no terminal. Agora:</p>

      <ol>
        <li>Abra o app <strong>Expo Go</strong> no seu celular</li>
        <li>Escaneie o <strong>QR code</strong></li>
        <li>Aguarde carregar...</li>
        <li><strong>Pronto!</strong> Seu app está rodando no celular! 🎉</li>
      </ol>

      <h3>Primeiro Teste: Modificando o App</h3>

      <p>Abra o arquivo <code>app/(tabs)/index.tsx</code> no VS Code.</p>

      <p>Encontre o texto que aparece na tela e mude para algo seu:</p>

      <CodeBlock
        language="tsx"
        code={`// Encontre algo como:
<Text>Welcome!</Text>

// Mude para:
<Text>Olá, Academia!</Text>`}
      />

      <p>Salve o arquivo (Ctrl+S).</p>

      <p>Olhe para o celular — a mudança apareceu automaticamente! Isso se chama <strong>Hot Reload</strong>.</p>

      <InfoBox type="success" title="Parabéns!">
        <p>Você acabou de criar e rodar seu primeiro app React Native!</p>
      </InfoBox>
    </div>
  );
}

function ComponentesContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Entendendo Componentes</h2>

      <h3>O Que São Componentes?</h3>

      <p>
        Em React Native, tudo é construído com <strong>componentes</strong>. Um componente é uma peça da interface que pode ser reutilizada.
      </p>

      <p>
        Pense em LEGO: você tem peças pequenas (botões, textos) que se combinam para formar peças maiores (cards, formulários), que se combinam para formar o app completo.
      </p>

      <h3>Componentes Básicos do React Native</h3>

      <h4>View — O Container Universal</h4>

      <p><code>View</code> é como uma <code>{'<div>'}</code> do HTML. É um container que agrupa outros elementos.</p>

      <CodeBlock
        language="tsx"
        code={`import { View } from 'react-native';

function MeuComponente() {
    return (
        <View>
            {/* Outros componentes aqui dentro */}
        </View>
    );
}`}
      />

      <h4>Text — Para Mostrar Textos</h4>

      <p>Todo texto precisa estar dentro de um <code>Text</code>.</p>

      <CodeBlock
        language="tsx"
        code={`import { View, Text } from 'react-native';

function MeuComponente() {
    return (
        <View>
            <Text>Olá, mundo!</Text>
        </View>
    );
}`}
      />

      <InfoBox type="warning" title="Erro comum">
        <p>Texto fora de <code>{'<Text>'}</code> causa erro!</p>
        <CodeBlock
          language="tsx"
          code={`// ❌ ERRADO
<View>
    Olá, mundo!
</View>

// ✅ CORRETO
<View>
    <Text>Olá, mundo!</Text>
</View>`}
        />
      </InfoBox>

      <h4>Pressable — Elemento Clicável</h4>

      <p>Para fazer algo acontecer quando o usuário toca:</p>

      <CodeBlock
        language="tsx"
        code={`import { Pressable, Text } from 'react-native';

function BotaoSimples() {
    function handlePress() {
        console.log('Botão foi pressionado!');
    }

    return (
        <Pressable onPress={handlePress}>
            <Text>Clique aqui</Text>
        </Pressable>
    );
}`}
      />

      <h4>TextInput — Campo de Texto</h4>

      <p>Para o usuário digitar algo:</p>

      <CodeBlock
        language="tsx"
        code={`import { TextInput } from 'react-native';

<TextInput
    placeholder="Digite seu nome"
    onChangeText={(texto) => console.log(texto)}
/>`}
      />

      <h3>JSX: HTML Dentro do JavaScript</h3>

      <p>
        Aquela sintaxe que parece HTML (<code>{'<View>'}</code>, <code>{'<Text>'}</code>) é chamada <strong>JSX</strong>. É uma extensão do JavaScript que permite escrever a interface de forma declarativa.
      </p>

      <p>Use chaves <code>{'{}'}</code> para colocar JavaScript dentro do JSX:</p>

      <CodeBlock
        language="tsx"
        code={`function Saudacao() {
    let nome = "Carlos";

    return (
        <View>
            <Text>Olá, {nome}!</Text>
            <Text>Você tem {2025 - 1990} anos</Text>
        </View>
    );
}`}
      />

      <Quiz
        question="Em React Native, onde você deve colocar textos?"
        options={[
          { id: 'a', text: 'Direto dentro de <View>' },
          { id: 'b', text: 'Dentro de <Text>' },
          { id: 'c', text: 'Em qualquer lugar' },
          { id: 'd', text: 'Dentro de <Span>' },
        ]}
        correctId="b"
        explanation="Todo texto em React Native deve estar dentro de um componente <Text>. Colocar texto solto dentro de <View> causa erro."
      />
    </div>
  );
}

function EstilizacaoContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Estilização com StyleSheet</h2>

      <h3>Como Funciona</h3>

      <p>
        Em React Native, não usamos CSS tradicional. Usamos objetos JavaScript que se parecem com CSS:
      </p>

      <CodeBlock
        language="tsx"
        code={`import { View, Text, StyleSheet } from 'react-native';

function CartaoAluno() {
    return (
        <View style={styles.card}>
            <Text style={styles.nome}>Maria Silva</Text>
            <Text style={styles.plano}>Plano: Anual</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        marginBottom: 10,
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    plano: {
        fontSize: 14,
        color: 'gray',
    },
});`}
      />

      <h3>Diferenças do CSS</h3>

      <div className="my-6 overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-slate-100">
              <th className="px-4 py-2 text-left">CSS</th>
              <th className="px-4 py-2 text-left">React Native</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-4 py-2 border-b"><code>background-color</code></td><td className="px-4 py-2 border-b"><code>backgroundColor</code></td></tr>
            <tr><td className="px-4 py-2 border-b"><code>font-size</code></td><td className="px-4 py-2 border-b"><code>fontSize</code></td></tr>
            <tr><td className="px-4 py-2 border-b"><code>10px</code></td><td className="px-4 py-2 border-b"><code>10</code> (sem unidade)</td></tr>
            <tr><td className="px-4 py-2 border-b"><code>border-radius</code></td><td className="px-4 py-2 border-b"><code>borderRadius</code></td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox type="tip" title="Regra geral">
        <p>Troque hífens por camelCase e remova unidades.</p>
      </InfoBox>

      <h3>Flexbox: O Sistema de Layout</h3>

      <p>React Native usa <strong>Flexbox</strong> para posicionar elementos:</p>

      <CodeBlock
        language="tsx"
        code={`const styles = StyleSheet.create({
    container: {
        flex: 1,                    // Ocupa todo espaço disponível
        flexDirection: 'column',    // 'column' (vertical) ou 'row' (horizontal)
        justifyContent: 'center',   // Alinhamento principal
        alignItems: 'center',       // Alinhamento secundário
        padding: 20,
    },
});`}
      />

      <Exercise
        id="fase6-estilo"
        title="Exercício: Criando um Card"
        description="Crie um StyleSheet com um estilo 'card' que tenha: fundo branco, padding de 16, border radius de 12, e uma pequena sombra."
        expectedAnswer="card: { backgroundColor: 'white', padding: 16, borderRadius: 12, elevation: 3 } ou similar com shadowColor, shadowOffset, etc."
        hint="Use backgroundColor, padding, borderRadius. Para sombra: elevation (Android) ou shadowColor/shadowOffset (iOS)."
      />
    </div>
  );
}

function EstadoContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Estado e Interatividade</h2>

      <h3>O Que É Estado?</h3>

      <p>
        <strong>Estado</strong> é informação que pode mudar ao longo do tempo e que, quando muda, faz a tela atualizar.
      </p>

      <p>Exemplos:</p>
      <ul>
        <li>O texto que o usuário digitou</li>
        <li>Se um checkbox está marcado ou não</li>
        <li>A lista de alunos carregada do servidor</li>
        <li>Quantos itens tem no carrinho</li>
      </ul>

      <h3>useState: O Hook de Estado</h3>

      <CodeBlock
        language="tsx"
        code={`import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

function Contador() {
    const [contador, setContador] = useState(0);

    function incrementar() {
        setContador(contador + 1);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.numero}>{contador}</Text>
            <Pressable style={styles.botao} onPress={incrementar}>
                <Text style={styles.textoBotao}>+ Aumentar</Text>
            </Pressable>
        </View>
    );
}`}
      />

      <h4>Como useState Funciona</h4>

      <CodeBlock
        language="tsx"
        code={`const [contador, setContador] = useState(0);
//     ───┬───  ─────┬─────          ─┬─
//        │          │                │
//        │          │                └── Valor inicial
//        │          └── Função para MUDAR o valor
//        └── O valor atual`}
      />

      <InfoBox type="warning" title="Regras importantes">
        <ol>
          <li><strong>Nunca mude o estado diretamente:</strong> Use sempre a função set (ex: setContador)</li>
          <li><strong>Hooks só dentro de componentes:</strong> useState deve estar dentro da função do componente</li>
          <li><strong>Hooks no topo:</strong> Declare todos os useState antes de qualquer lógica</li>
        </ol>
      </InfoBox>

      <h3>Estado com Texto (Input)</h3>

      <CodeBlock
        language="tsx"
        code={`import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

function FormularioNome() {
    const [nome, setNome] = useState('');

    return (
        <View style={styles.container}>
            <Text>Digite seu nome:</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                placeholder="Seu nome aqui"
            />
            <Text>
                {nome ? \`Olá, \${nome}!\` : 'Digite algo acima'}
            </Text>
        </View>
    );
}`}
      />

      <Quiz
        question="Como você atualiza o valor de um estado criado com useState?"
        options={[
          { id: 'a', text: 'Atribuindo diretamente: contador = 5' },
          { id: 'b', text: 'Usando a função set: setContador(5)' },
          { id: 'c', text: 'Modificando o objeto: estado.contador = 5' },
          { id: 'd', text: 'Chamando useState novamente' },
        ]}
        correctId="b"
        explanation="Você deve sempre usar a função 'set' retornada pelo useState (ex: setContador). Modificar o valor diretamente não faz a tela atualizar."
      />
    </div>
  );
}

function FlatListContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Listas com FlatList</h2>

      <h3>O Problema do ScrollView</h3>

      <p>
        Para mostrar poucos itens, <code>ScrollView</code> funciona bem. Mas com muitos itens (centenas de alunos), ele fica lento porque renderiza TUDO de uma vez.
      </p>

      <h3>FlatList: Listas Otimizadas</h3>

      <p><code>FlatList</code> só renderiza o que está visível na tela. Perfeito para listas grandes!</p>

      <CodeBlock
        language="tsx"
        code={`import { FlatList, View, Text, StyleSheet } from 'react-native';

function ListaSimples() {
    const dados = [
        { id: '1', nome: 'Maria Silva' },
        { id: '2', nome: 'João Santos' },
        { id: '3', nome: 'Ana Costa' },
    ];

    return (
        <FlatList
            data={dados}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text>{item.nome}</Text>
                </View>
            )}
        />
    );
}`}
      />

      <h3>Propriedades da FlatList</h3>

      <ul>
        <li><code>data</code> — Array de dados</li>
        <li><code>keyExtractor</code> — Identificador único de cada item</li>
        <li><code>renderItem</code> — Como renderizar cada item</li>
        <li><code>ListEmptyComponent</code> — O que mostrar se a lista estiver vazia</li>
      </ul>

      <CodeBlock
        language="tsx"
        code={`<FlatList
    data={alunos}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
        <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.plano}>{item.plano}</Text>
        </View>
    )}
    ListEmptyComponent={() => (
        <Text>Nenhum aluno cadastrado</Text>
    )}
/>`}
      />

      <InfoBox type="info" title="Por que keyExtractor?">
        <p>O React precisa identificar cada item unicamente para otimizar atualizações. Cada item deve ter um ID único.</p>
      </InfoBox>

      <Exercise
        id="fase6-flatlist"
        title="Exercício: Lista de Alunos"
        description="Você tem um array de alunos com id, nome e plano. Escreva o componente FlatList para mostrar cada aluno em um card."
        expectedAnswer="<FlatList data={alunos} keyExtractor={(item) => item.id} renderItem={({ item }) => <View><Text>{item.nome}</Text><Text>{item.plano}</Text></View>} />"
        hint="Use data para os dados, keyExtractor para o ID, renderItem para o visual de cada item."
      />
    </div>
  );
}

function NavegacaoContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Navegação com Expo Router</h2>

      <h3>O Que É Navegação?</h3>

      <p>Navegação é como o usuário se move entre as telas do app:</p>
      <ul>
        <li>Da lista de alunos para os detalhes de um aluno</li>
        <li>Da tela inicial para configurações</li>
        <li>Do cadastro para a confirmação</li>
      </ul>

      <h3>Expo Router: Navegação por Arquivos</h3>

      <p>O Expo Router usa uma abordagem moderna: a <strong>estrutura de arquivos</strong> define as rotas!</p>

      <CodeBlock
        language="text"
        code={`app/
├── index.tsx           →  /  (tela inicial)
├── alunos.tsx          →  /alunos
├── sobre.tsx           →  /sobre
└── aluno/
    └── [id].tsx        →  /aluno/123 (rota dinâmica)`}
      />

      <p>Cada arquivo dentro de <code>app/</code> vira automaticamente uma rota!</p>

      <h3>Navegando Entre Telas</h3>

      <h4>Usando o Componente Link</h4>

      <CodeBlock
        language="tsx"
        code={`import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function HomeScreen() {
    return (
        <View>
            <Text>Home</Text>

            <Link href="/alunos">
                Ver Lista de Alunos
            </Link>

            <Link href="/aluno/123">
                Ver Aluno #123
            </Link>
        </View>
    );
}`}
      />

      <h4>Usando o Hook useRouter</h4>

      <p>Para navegação programática (dentro de funções):</p>

      <CodeBlock
        language="tsx"
        code={`import { useRouter } from 'expo-router';
import { Pressable, Text } from 'react-native';

export default function ListaAlunos() {
    const router = useRouter();

    function verDetalhes(alunoId) {
        router.push(\`/aluno/\${alunoId}\`);
    }

    return (
        <Pressable onPress={() => verDetalhes(42)}>
            <Text>Ver Aluno 42</Text>
        </Pressable>
    );
}`}
      />

      <h3>Métodos do Router</h3>

      <ul>
        <li><code>router.push('/rota')</code> — Adiciona tela na pilha (pode voltar)</li>
        <li><code>router.replace('/rota')</code> — Substitui tela atual (não pode voltar)</li>
        <li><code>router.back()</code> — Volta para a tela anterior</li>
      </ul>

      <Quiz
        question="No Expo Router, como você navega para uma tela /alunos?"
        options={[
          { id: 'a', text: "<Navigate to='/alunos' />" },
          { id: 'b', text: "<Link href='/alunos'>Ver Alunos</Link>" },
          { id: 'c', text: "<Route path='/alunos' />" },
          { id: 'd', text: "window.location = '/alunos'" },
        ]}
        correctId="b"
        explanation="O Expo Router usa o componente <Link> com href para navegação declarativa. Também é possível usar router.push() para navegação programática."
      />
    </div>
  );
}

function SafeAreaContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>Áreas Seguras (Safe Area)</h2>

      <h3>O Problema</h3>

      <p>Celulares modernos têm:</p>
      <ul>
        <li>Notch (entalhe da câmera)</li>
        <li>Ilha Dinâmica (iPhone 14+)</li>
        <li>Cantos arredondados</li>
        <li>Barra de status</li>
        <li>Barra de navegação (Android)</li>
      </ul>

      <p>Se você não tratar isso, seu conteúdo pode ficar escondido!</p>

      <h3>A Solução: react-native-safe-area-context</h3>

      <InfoBox type="warning" title="Importante">
        <p>O componente <code>SafeAreaView</code> nativo do React Native está <strong>deprecado</strong>. Use a biblioteca <code>react-native-safe-area-context</code>.</p>
      </InfoBox>

      <h4>Instalação</h4>

      <CodeBlock language="bash" code={`npx expo install react-native-safe-area-context`} />

      <h4>Uso Básico</h4>

      <CodeBlock
        language="tsx"
        code={`import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';

export default function MinhaTelaSegura() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.texto}>
                Este conteúdo respeita as áreas seguras!
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    texto: {
        fontSize: 18,
        padding: 20,
    },
});`}
      />

      <h4>Com Mais Controle</h4>

      <p>Para controle granular, use o hook <code>useSafeAreaInsets</code>:</p>

      <CodeBlock
        language="tsx"
        code={`import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TelaComControle() {
    const insets = useSafeAreaInsets();

    return (
        <View style={{
            flex: 1,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
        }}>
            <Text>Conteúdo com padding customizado</Text>
        </View>
    );
}`}
      />

      <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
        <h4 className="text-green-800 font-semibold mb-2">Parabéns!</h4>
        <p className="text-green-700">
          Você agora sabe criar interfaces visuais com React Native! Na próxima fase, vamos aprender a buscar dados de APIs e conectar seu app a backends.
        </p>
      </div>
    </div>
  );
}

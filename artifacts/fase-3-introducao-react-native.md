# Fase 3: Introdução ao React Native

## Introdução

Chegou a hora de criar interfaces visuais! Até agora você aprendeu lógica de programação e estrutura de projetos, mas tudo foi "invisível" — só texto no terminal.

Nesta fase, você vai aprender a criar **aplicativos de verdade** que rodam no celular. E a boa notícia: vamos usar ferramentas que tornam isso muito mais fácil do que você imagina.

Ao final desta fase, você será capaz de:
- Entender o que é React Native e por que usamos ele
- Criar telas com componentes visuais
- Fazer elementos responderem a toques
- Navegar entre diferentes telas
- Criar listas que mostram dados

---

# Módulo 1: O Que É React Native (E Por Que Expo?)

## React Native: Apps Nativos com JavaScript

**React Native** é uma tecnologia criada pelo Facebook (agora Meta) que permite criar aplicativos para iPhone e Android usando JavaScript.

A mágica: você escreve **um código só** e ele funciona nos dois sistemas!

```
                    ┌─────────────────┐
                    │  Seu Código     │
                    │  JavaScript     │
                    └────────┬────────┘
                             │
              ┌──────────────┴──────────────┐
              │                             │
              ▼                             ▼
    ┌─────────────────┐           ┌─────────────────┐
    │   App iPhone    │           │  App Android    │
    │   (Nativo)      │           │   (Nativo)      │
    └─────────────────┘           └─────────────────┘
```

Diferente de um site que roda dentro de um navegador, React Native cria **apps nativos de verdade** — com a mesma performance e experiência de apps feitos especificamente para cada plataforma.

## Expo: Seu Melhor Amigo

Agora, React Native "puro" pode ser complicado de configurar. Você precisaria instalar Android Studio, Xcode, configurar emuladores, lidar com dependências nativas...

É aí que entra o **Expo**.

**Expo** é como um "kit de ferramentas" que simplifica tudo:

| Sem Expo | Com Expo |
|----------|----------|
| Instalar Android Studio (~4GB) | Não precisa |
| Instalar Xcode (só Mac) | Não precisa |
| Configurar emuladores | Usa o app Expo Go no seu celular |
| Lidar com código nativo | Expo cuida disso |
| Configuração complexa | Já vem pronto |

### O App Expo Go

O Expo Go é um aplicativo que você instala no seu celular (iPhone ou Android). Com ele, você:

1. Escreve código no computador
2. Escaneia um QR code
3. Vê o app rodando instantaneamente no seu celular!

Qualquer mudança que você faz no código aparece no celular em segundos. É quase mágico.

### Por Que Usamos Expo?

1. **Simplicidade:** Menos configuração, mais programação
2. **Rapidez:** Ver mudanças instantaneamente no celular
3. **Comunidade:** Milhões de desenvolvedores usam
4. **Recursos prontos:** Câmera, GPS, notificações — tudo facilitado
5. **Multiplataforma:** Mesmo código para iOS, Android e Web

**Importante:** Expo não é "React Native para iniciantes" — é uma ferramenta profissional usada por empresas grandes. Você não está aprendendo algo "simplificado", está aprendendo a forma moderna de desenvolver.

## Versões Que Vamos Usar

Para referência, nossos projetos usam:

- **Expo SDK:** 54
- **React Native:** 0.81
- **React:** 19.1

Essas são as versões mais recentes (2025). Sempre que pesquisar algo ou pedir ajuda à IA, mencione essas versões para garantir respostas atualizadas.

---

# Módulo 2: Criando Seu Primeiro Projeto

## Pré-requisitos

Antes de começar, certifique-se de ter:

1. **Node.js instalado** (você fez isso na Fase 0)
2. **Um celular** com o app Expo Go instalado:
   - iPhone: Busque "Expo Go" na App Store
   - Android: Busque "Expo Go" na Play Store
3. **Celular e computador na mesma rede Wi-Fi**

## Criando o Projeto

Abra o terminal e rode:

```bash
npx create-expo-app@latest academia-app
```

O que esse comando faz:
- `npx` — Executa um pacote do npm
- `create-expo-app@latest` — Ferramenta que cria projetos Expo (versão mais recente)
- `academia-app` — Nome do seu projeto

Aguarde a instalação (pode demorar alguns minutos).

## Estrutura do Projeto Criado

Entre na pasta e veja o que foi criado:

```bash
cd academia-app
```

```
academia-app/
├── app/                    ← Suas telas ficam aqui!
│   ├── (tabs)/             ← Telas com abas
│   │   ├── _layout.tsx
│   │   ├── index.tsx       ← Tela inicial
│   │   └── explore.tsx
│   ├── _layout.tsx         ← Layout principal
│   └── +not-found.tsx      ← Tela de erro 404
├── assets/                 ← Imagens e fontes
├── components/             ← Componentes reutilizáveis
├── constants/              ← Valores constantes (cores, etc.)
├── hooks/                  ← Hooks personalizados
├── node_modules/           ← Dependências (não mexa!)
├── app.json                ← Configurações do app
├── package.json            ← Dependências e scripts
└── tsconfig.json           ← Configuração do TypeScript
```

A pasta mais importante é `app/` — é onde ficam suas telas. O Expo Router usa **navegação baseada em arquivos**: cada arquivo dentro de `app/` vira automaticamente uma tela!

## Rodando o Projeto

Inicie o servidor de desenvolvimento:

```bash
npx expo start
```

Você verá algo assim no terminal:

```
› Metro waiting on exp://192.168.1.100:8081
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Web is waiting on http://localhost:8081

› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press r │ reload app
› Press j │ open debugger
› Press ? │ more options
```

Agora:
1. Abra o app **Expo Go** no seu celular
2. Escaneie o **QR code** que apareceu
3. Aguarde carregar...
4. **Pronto!** Seu app está rodando no celular! 🎉

## Primeiro Teste: Modificando o App

Abra o arquivo `app/(tabs)/index.tsx` no VS Code.

Encontre o texto que aparece na tela e mude para algo seu:

```tsx
// Encontre algo como:
<ThemedText type="title">Welcome!</ThemedText>

// Mude para:
<ThemedText type="title">Olá, Academia!</ThemedText>
```

Salve o arquivo (Ctrl+S).

Olhe para o celular — a mudança apareceu automaticamente! Isso se chama **Hot Reload**.

---

# Módulo 3: Entendendo Componentes

## O Que São Componentes?

Em React Native, tudo é construído com **componentes**. Um componente é uma peça da interface que pode ser reutilizada.

Pense em LEGO: você tem peças pequenas (botões, textos) que se combinam para formar peças maiores (cards, formulários), que se combinam para formar a construção completa (telas, app).

```
App Completo
    │
    ├── Tela de Alunos
    │       │
    │       ├── Cabeçalho
    │       │      ├── Texto "Lista de Alunos"
    │       │      └── Botão de Adicionar
    │       │
    │       └── Lista de Cards
    │              ├── Card do Aluno 1
    │              │      ├── Foto
    │              │      ├── Nome
    │              │      └── Botão Ver Mais
    │              │
    │              └── Card do Aluno 2
    │                     └── ...
```

## Componentes Básicos do React Native

React Native vem com componentes prontos. Os mais usados:

### View — O Container Universal

`View` é como uma `<div>` do HTML. É um container que agrupa outros elementos.

```tsx
import { View } from 'react-native';

function MeuComponente() {
    return (
        <View>
            {/* Outros componentes aqui dentro */}
        </View>
    );
}
```

### Text — Para Mostrar Textos

Todo texto precisa estar dentro de um `Text`. Diferente da web, você não pode colocar texto solto.

```tsx
import { View, Text } from 'react-native';

function MeuComponente() {
    return (
        <View>
            <Text>Olá, mundo!</Text>
            <Text>Bem-vindo ao app da academia.</Text>
        </View>
    );
}
```

⚠️ **Erro comum:** Texto fora de `<Text>` causa erro!

```tsx
// ❌ ERRADO - vai dar erro
<View>
    Olá, mundo!
</View>

// ✅ CORRETO
<View>
    <Text>Olá, mundo!</Text>
</View>
```

### Image — Para Mostrar Imagens

```tsx
import { Image } from 'react-native';

// Imagem local (da pasta assets)
<Image source={require('../assets/logo.png')} />

// Imagem da internet
<Image source={{ uri: 'https://exemplo.com/foto.jpg' }} />
```

### ScrollView — Conteúdo Rolável

Quando o conteúdo é maior que a tela, use `ScrollView`:

```tsx
import { ScrollView, Text } from 'react-native';

function TelaComMuitoConteudo() {
    return (
        <ScrollView>
            <Text>Linha 1</Text>
            <Text>Linha 2</Text>
            {/* ... muitas linhas ... */}
            <Text>Linha 100</Text>
        </ScrollView>
    );
}
```

### Pressable — Elemento Clicável

Para fazer algo acontecer quando o usuário toca:

```tsx
import { Pressable, Text } from 'react-native';

function BotaoSimples() {
    function handlePress() {
        console.log('Botão foi pressionado!');
    }

    return (
        <Pressable onPress={handlePress}>
            <Text>Clique aqui</Text>
        </Pressable>
    );
}
```

### TextInput — Campo de Texto

Para o usuário digitar algo:

```tsx
import { TextInput } from 'react-native';

<TextInput
    placeholder="Digite seu nome"
    onChangeText={(texto) => console.log(texto)}
/>
```

## Anatomia de um Componente

Vamos criar um componente completo e entender cada parte:

```tsx
// 1. Importações - trazer o que vamos usar
import { View, Text, StyleSheet } from 'react-native';

// 2. O Componente - uma função que retorna JSX
function CartaoAluno() {
    // 3. Lógica (variáveis, funções, etc.)
    let nomeAluno = "Maria Silva";
    let idade = 25;

    // 4. Retorno - o que aparece na tela (JSX)
    return (
        <View style={styles.cartao}>
            <Text style={styles.nome}>{nomeAluno}</Text>
            <Text style={styles.idade}>{idade} anos</Text>
        </View>
    );
}

// 5. Estilos - como os elementos aparecem
const styles = StyleSheet.create({
    cartao: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        marginBottom: 10,
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    idade: {
        fontSize: 14,
        color: 'gray',
    },
});

// 6. Exportar - disponibilizar para outros arquivos
export default CartaoAluno;
```

### JSX: HTML Dentro do JavaScript

Aquela sintaxe que parece HTML (`<View>`, `<Text>`) é chamada **JSX**. É uma extensão do JavaScript que permite escrever a interface de forma declarativa.

Diferenças importantes do HTML:

| HTML | JSX (React Native) |
|------|-------------------|
| `class="nome"` | `style={styles.nome}` |
| `onclick="funcao()"` | `onPress={funcao}` |
| `<div>` | `<View>` |
| `<span>`, `<p>` | `<Text>` |
| `<img src="...">` | `<Image source={...} />` |
| `<input>` | `<TextInput />` |

### Expressões JavaScript no JSX

Use chaves `{}` para colocar JavaScript dentro do JSX:

```tsx
function Saudacao() {
    let nome = "Carlos";
    let hora = 14;

    return (
        <View>
            {/* Variável */}
            <Text>Olá, {nome}!</Text>

            {/* Expressão */}
            <Text>Você tem {2025 - 1990} anos</Text>

            {/* Condicional simples */}
            <Text>{hora < 12 ? 'Bom dia!' : 'Boa tarde!'}</Text>
        </View>
    );
}
```

---

# Módulo 4: Estilização com StyleSheet

## Como Funciona

Em React Native, não usamos CSS tradicional. Usamos objetos JavaScript que se parecem com CSS:

```tsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
});
```

### Diferenças do CSS

| CSS | React Native StyleSheet |
|-----|------------------------|
| `background-color` | `backgroundColor` |
| `font-size` | `fontSize` |
| `font-weight: bold` | `fontWeight: 'bold'` |
| `margin-bottom` | `marginBottom` |
| `10px` | `10` (sem unidade, já é em pixels) |
| `border-radius` | `borderRadius` |

**Regra geral:** Troque hífens por camelCase e remova unidades.

## Propriedades Comuns

### Layout (Posicionamento)

```tsx
const styles = StyleSheet.create({
    container: {
        flex: 1,              // Ocupa todo espaço disponível
        flexDirection: 'column', // 'column' (vertical) ou 'row' (horizontal)
        justifyContent: 'center', // Alinhamento no eixo principal
        alignItems: 'center',     // Alinhamento no eixo secundário
        padding: 20,          // Espaço interno
        margin: 10,           // Espaço externo
    },
});
```

### Visuais

```tsx
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',

        // Sombra (iOS)
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        // Sombra (Android)
        elevation: 3,
    },
});
```

### Texto

```tsx
const styles = StyleSheet.create({
    texto: {
        fontSize: 16,
        fontWeight: 'bold',     // 'normal', 'bold', '100'-'900'
        color: '#333333',
        textAlign: 'center',    // 'left', 'center', 'right'
        lineHeight: 24,
        textTransform: 'uppercase',
    },
});
```

## Flexbox: O Sistema de Layout

React Native usa **Flexbox** para posicionar elementos. É um sistema poderoso que você vai usar o tempo todo.

### flex: Dividindo Espaço

```tsx
<View style={{ flex: 1, flexDirection: 'row' }}>
    <View style={{ flex: 1, backgroundColor: 'red' }} />
    <View style={{ flex: 2, backgroundColor: 'blue' }} />
    <View style={{ flex: 1, backgroundColor: 'green' }} />
</View>
```

Resultado: três caixas lado a lado. A azul tem o dobro do tamanho das outras.

```
┌─────────────────────────────────────┐
│   RED   │      BLUE      │  GREEN  │
│  flex:1 │     flex:2     │  flex:1 │
└─────────────────────────────────────┘
```

### flexDirection: Direção dos Filhos

```tsx
// Filhos empilhados verticalmente (padrão)
<View style={{ flexDirection: 'column' }}>

// Filhos lado a lado
<View style={{ flexDirection: 'row' }}>
```

### justifyContent: Alinhamento no Eixo Principal

```tsx
<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
```

Valores:
- `flex-start` — Início
- `flex-end` — Final
- `center` — Centro
- `space-between` — Espaço entre elementos
- `space-around` — Espaço ao redor dos elementos

### alignItems: Alinhamento no Eixo Secundário

```tsx
<View style={{ flexDirection: 'row', alignItems: 'center' }}>
```

Valores: `flex-start`, `flex-end`, `center`, `stretch`

### Exemplo Visual

```tsx
import { View, Text, StyleSheet } from 'react-native';

function ExemploFlexbox() {
    return (
        <View style={styles.container}>
            <View style={styles.caixa1}>
                <Text>1</Text>
            </View>
            <View style={styles.caixa2}>
                <Text>2</Text>
            </View>
            <View style={styles.caixa3}>
                <Text>3</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',        // Horizontal
        justifyContent: 'space-around', // Espaçados
        alignItems: 'center',         // Centralizados verticalmente
        backgroundColor: '#eee',
    },
    caixa1: {
        width: 60,
        height: 60,
        backgroundColor: '#ff6b6b',
        justifyContent: 'center',
        alignItems: 'center',
    },
    caixa2: {
        width: 60,
        height: 80,
        backgroundColor: '#4ecdc4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    caixa3: {
        width: 60,
        height: 40,
        backgroundColor: '#45b7d1',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
```

---

# Módulo 5: Estado e Interatividade

## O Que É Estado?

**Estado** é informação que pode mudar ao longo do tempo e que, quando muda, faz a tela atualizar.

Exemplos:
- O texto que o usuário digitou
- Se um checkbox está marcado ou não
- A lista de alunos carregada do servidor
- Quantos itens tem no carrinho

## useState: O Hook de Estado

Para criar estado, usamos o **hook** `useState`:

```tsx
import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

function Contador() {
    // Declara uma variável de estado chamada "contador"
    // O valor inicial é 0
    const [contador, setContador] = useState(0);

    function incrementar() {
        setContador(contador + 1);
    }

    function decrementar() {
        setContador(contador - 1);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.numero}>{contador}</Text>

            <Pressable style={styles.botao} onPress={incrementar}>
                <Text style={styles.textoBotao}>+ Aumentar</Text>
            </Pressable>

            <Pressable style={styles.botao} onPress={decrementar}>
                <Text style={styles.textoBotao}>- Diminuir</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numero: {
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    botao: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        marginVertical: 5,
    },
    textoBotao: {
        color: 'white',
        fontSize: 18,
    },
});

export default Contador;
```

### Como useState Funciona

```tsx
const [contador, setContador] = useState(0);
//     ───┬───  ─────┬─────          ─┬─
//        │          │                │
//        │          │                └── Valor inicial
//        │          │
//        │          └── Função para MUDAR o valor
//        │
//        └── O valor atual
```

**Regras importantes:**

1. **Nunca mude o estado diretamente:**
   ```tsx
   // ❌ ERRADO
   contador = contador + 1;

   // ✅ CORRETO
   setContador(contador + 1);
   ```

2. **Hooks só podem ser usados dentro de componentes:**
   ```tsx
   // ❌ ERRADO - fora do componente
   const [valor, setValor] = useState(0);

   function MeuComponente() {
       return <Text>{valor}</Text>;
   }

   // ✅ CORRETO - dentro do componente
   function MeuComponente() {
       const [valor, setValor] = useState(0);
       return <Text>{valor}</Text>;
   }
   ```

3. **Hooks sempre no topo do componente:**
   ```tsx
   function MeuComponente() {
       // ✅ Hooks primeiro, antes de qualquer lógica
       const [valor, setValor] = useState(0);
       const [nome, setNome] = useState('');

       // Depois vem a lógica e o return
       return <Text>{valor}</Text>;
   }
   ```

## Estado com Texto (Input)

```tsx
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

function FormularioNome() {
    const [nome, setNome] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Digite seu nome:</Text>

            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                placeholder="Seu nome aqui"
            />

            <Text style={styles.preview}>
                {nome ? `Olá, ${nome}!` : 'Digite algo acima'}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
    },
    preview: {
        marginTop: 20,
        fontSize: 18,
        color: '#333',
    },
});

export default FormularioNome;
```

### Explicando o TextInput

```tsx
<TextInput
    value={nome}           // Valor atual (controlado pelo estado)
    onChangeText={setNome} // Função chamada quando texto muda
    placeholder="..."      // Texto quando vazio
/>
```

Quando o usuário digita:
1. `onChangeText` é chamado com o novo texto
2. `setNome` atualiza o estado
3. O componente re-renderiza com o novo valor

## Estado com Objetos

Para formulários maiores, podemos usar um objeto:

```tsx
import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

function FormularioAluno() {
    const [aluno, setAluno] = useState({
        nome: '',
        idade: '',
        email: '',
    });

    function atualizarCampo(campo, valor) {
        setAluno({
            ...aluno,        // Mantém os outros campos
            [campo]: valor,  // Atualiza só o campo específico
        });
    }

    function salvar() {
        console.log('Salvando:', aluno);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro de Aluno</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={aluno.nome}
                onChangeText={(texto) => atualizarCampo('nome', texto)}
            />

            <TextInput
                style={styles.input}
                placeholder="Idade"
                value={aluno.idade}
                onChangeText={(texto) => atualizarCampo('idade', texto)}
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={aluno.email}
                onChangeText={(texto) => atualizarCampo('email', texto)}
                keyboardType="email-address"
            />

            <Pressable style={styles.botao} onPress={salvar}>
                <Text style={styles.textoBotao}>Salvar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 12,
    },
    botao: {
        backgroundColor: '#28a745',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    textoBotao: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default FormularioAluno;
```

### O Spread Operator (...)

```tsx
setAluno({
    ...aluno,         // "Espalha" todas as propriedades do objeto atual
    [campo]: valor,   // Sobrescreve só uma propriedade
});
```

Isso é necessário porque você deve **substituir** o objeto inteiro, não modificá-lo diretamente.

---

# Módulo 6: Listas com FlatList

## O Problema do ScrollView

Para mostrar poucos itens, `ScrollView` funciona bem. Mas com muitos itens (centenas de alunos), ele fica lento porque renderiza TUDO de uma vez.

## FlatList: Listas Otimizadas

`FlatList` só renderiza o que está visível na tela. Perfeito para listas grandes!

```tsx
import { FlatList, View, Text, StyleSheet } from 'react-native';

function ListaSimples() {
    const dados = [
        { id: '1', nome: 'Maria Silva' },
        { id: '2', nome: 'João Santos' },
        { id: '3', nome: 'Ana Costa' },
        { id: '4', nome: 'Pedro Lima' },
        { id: '5', nome: 'Carla Souza' },
    ];

    return (
        <FlatList
            data={dados}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text style={styles.nome}>{item.nome}</Text>
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 15,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 8,
    },
    nome: {
        fontSize: 16,
    },
});

export default ListaSimples;
```

### Propriedades da FlatList

```tsx
<FlatList
    data={dados}                    // Array de dados
    keyExtractor={(item) => item.id} // Identificador único de cada item
    renderItem={({ item }) => (...)} // Como renderizar cada item
/>
```

**Por que `keyExtractor`?** O React precisa identificar cada item unicamente para otimizar atualizações. Cada item deve ter um ID único.

## Lista de Alunos Completa

```tsx
import { useState } from 'react';
import { FlatList, View, Text, Pressable, StyleSheet } from 'react-native';

function ListaAlunos() {
    const [alunos, setAlunos] = useState([
        { id: '1', nome: 'Maria Silva', plano: 'Mensal', ativo: true },
        { id: '2', nome: 'João Santos', plano: 'Anual', ativo: true },
        { id: '3', nome: 'Ana Costa', plano: 'Trimestral', ativo: false },
        { id: '4', nome: 'Pedro Lima', plano: 'Mensal', ativo: true },
        { id: '5', nome: 'Carla Souza', plano: 'Anual', ativo: true },
    ]);

    function verDetalhes(aluno) {
        console.log('Ver detalhes de:', aluno.nome);
    }

    function renderizarAluno({ item }) {
        return (
            <Pressable
                style={styles.card}
                onPress={() => verDetalhes(item)}
            >
                <View style={styles.cardHeader}>
                    <Text style={styles.nome}>{item.nome}</Text>
                    <View style={[
                        styles.badge,
                        item.ativo ? styles.badgeAtivo : styles.badgeInativo
                    ]}>
                        <Text style={styles.badgeTexto}>
                            {item.ativo ? 'Ativo' : 'Inativo'}
                        </Text>
                    </View>
                </View>
                <Text style={styles.plano}>Plano: {item.plano}</Text>
            </Pressable>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Alunos ({alunos.length})</Text>

            <FlatList
                data={alunos}
                keyExtractor={(item) => item.id}
                renderItem={renderizarAluno}
                contentContainerStyle={styles.lista}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 20,
        backgroundColor: 'white',
    },
    lista: {
        padding: 10,
    },
    card: {
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    plano: {
        fontSize: 14,
        color: '#666',
    },
    badge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    badgeAtivo: {
        backgroundColor: '#d4edda',
    },
    badgeInativo: {
        backgroundColor: '#f8d7da',
    },
    badgeTexto: {
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default ListaAlunos;
```

## FlatList com Lista Vazia

```tsx
<FlatList
    data={alunos}
    keyExtractor={(item) => item.id}
    renderItem={renderizarAluno}
    ListEmptyComponent={() => (
        <View style={styles.vazio}>
            <Text style={styles.vazioTexto}>Nenhum aluno cadastrado</Text>
        </View>
    )}
/>
```

## FlatList com Cabeçalho

```tsx
<FlatList
    data={alunos}
    keyExtractor={(item) => item.id}
    renderItem={renderizarAluno}
    ListHeaderComponent={() => (
        <View style={styles.cabecalho}>
            <Text style={styles.cabecalhoTexto}>Lista de Alunos</Text>
        </View>
    )}
/>
```

---

# Módulo 7: Navegação com Expo Router

## O Que É Navegação?

Navegação é como o usuário se move entre as telas do app. Por exemplo:
- Da lista de alunos para os detalhes de um aluno
- Da tela inicial para a tela de configurações
- Do cadastro para a confirmação

## Expo Router: Navegação por Arquivos

O Expo Router usa uma abordagem moderna: a **estrutura de arquivos** define as rotas!

```
app/
├── index.tsx           →  /  (tela inicial)
├── alunos.tsx          →  /alunos
├── sobre.tsx           →  /sobre
└── aluno/
    └── [id].tsx        →  /aluno/123 (rota dinâmica)
```

Cada arquivo dentro de `app/` vira automaticamente uma rota. Sem configuração manual!

## Tipos de Navegação

### Stack (Pilha)

Telas empilhadas uma sobre a outra. O botão "voltar" remove a tela do topo.

```
┌─────────────────┐
│  Tela Detalhes  │  ← Tela atual (topo da pilha)
├─────────────────┤
│  Tela Lista     │
├─────────────────┤
│  Tela Home      │  ← Base da pilha
└─────────────────┘
```

### Tabs (Abas)

Abas na parte de baixo da tela para alternar entre seções principais.

```
┌─────────────────────────────────────┐
│                                     │
│         Conteúdo da aba             │
│                                     │
├─────────────────────────────────────┤
│  🏠 Home  │  📋 Alunos  │  ⚙️ Config  │
└─────────────────────────────────────┘
```

## Criando Rotas

### Estrutura Básica com Tabs

```
app/
├── _layout.tsx              ← Layout raiz
├── (tabs)/                  ← Grupo de abas
│   ├── _layout.tsx          ← Configuração das tabs
│   ├── index.tsx            ← Tab Home
│   ├── alunos.tsx           ← Tab Alunos
│   └── configuracoes.tsx    ← Tab Configurações
└── aluno/
    └── [id].tsx             ← Detalhe do aluno (fora das tabs)
```

### Layout das Tabs

**app/(tabs)/_layout.tsx:**
```tsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#007AFF',
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Início',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="alunos"
                options={{
                    title: 'Alunos',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="people" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="configuracoes"
                options={{
                    title: 'Config',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
```

### Tela Home

**app/(tabs)/index.tsx:**
```tsx
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem-vindo!</Text>
            <Text style={styles.subtitulo}>Sistema de Academia</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    subtitulo: {
        fontSize: 16,
        color: '#666',
        marginTop: 8,
    },
});
```

## Navegando Entre Telas

### Usando o Componente Link

```tsx
import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Home</Text>

            {/* Link simples */}
            <Link href="/alunos" style={styles.link}>
                Ver Lista de Alunos
            </Link>

            {/* Link com parâmetro */}
            <Link href="/aluno/123" style={styles.link}>
                Ver Aluno #123
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    link: {
        fontSize: 16,
        color: '#007AFF',
        marginVertical: 10,
    },
});
```

### Usando o Hook useRouter

Para navegação programática (dentro de funções):

```tsx
import { useRouter } from 'expo-router';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function ListaAlunos() {
    const router = useRouter();

    function verDetalhes(alunoId) {
        router.push(`/aluno/${alunoId}`);
    }

    function voltarParaHome() {
        router.back();
    }

    function irParaHome() {
        router.replace('/');
    }

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.botao}
                onPress={() => verDetalhes(42)}
            >
                <Text style={styles.textoBotao}>Ver Aluno 42</Text>
            </Pressable>

            <Pressable
                style={styles.botao}
                onPress={voltarParaHome}
            >
                <Text style={styles.textoBotao}>Voltar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
    },
    textoBotao: {
        color: 'white',
        fontSize: 16,
    },
});
```

### Métodos do Router

| Método | Descrição |
|--------|-----------|
| `router.push('/rota')` | Adiciona tela na pilha (pode voltar) |
| `router.replace('/rota')` | Substitui tela atual (não pode voltar) |
| `router.back()` | Volta para a tela anterior |
| `router.navigate('/rota')` | Navega inteligentemente (evita duplicatas) |

## Rotas Dinâmicas

Para telas que mostram detalhes de um item específico (aluno, produto, etc.), usamos rotas dinâmicas:

**Estrutura:**
```
app/
└── aluno/
    └── [id].tsx    ← O [id] captura qualquer valor
```

**app/aluno/[id].tsx:**
```tsx
import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function DetalheAluno() {
    // Captura o parâmetro da URL
    const { id } = useLocalSearchParams();

    // Em um app real, você buscaria os dados do aluno pelo ID
    const aluno = {
        id: id,
        nome: 'Maria Silva',
        email: 'maria@email.com',
        plano: 'Anual',
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{aluno.nome}</Text>
            <Text style={styles.info}>ID: {aluno.id}</Text>
            <Text style={styles.info}>Email: {aluno.email}</Text>
            <Text style={styles.info}>Plano: {aluno.plano}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    info: {
        fontSize: 16,
        marginBottom: 8,
        color: '#333',
    },
});
```

**Como acessar:**
- `/aluno/1` → id = "1"
- `/aluno/42` → id = "42"
- `/aluno/maria-silva` → id = "maria-silva"

---

# Módulo 8: Áreas Seguras (Safe Area)

## O Problema

Celulares modernos têm:
- Notch (entalhe da câmera)
- Ilha Dinâmica (iPhone 14+)
- Cantos arredondados
- Barra de status
- Barra de navegação (Android)

Se você não tratar isso, seu conteúdo pode ficar escondido!

```
┌───────────────────────────┐
│▓▓▓▓▓▓▓ NOTCH ▓▓▓▓▓▓▓│  ← Conteúdo escondido!
│ Olá, mundo!               │
│                           │
│                           │
│                           │
└───────────────────────────┘
```

## A Solução: react-native-safe-area-context

⚠️ **Importante:** O componente `SafeAreaView` nativo do React Native está **deprecado** (obsoleto) desde a versão 0.81. Use a biblioteca `react-native-safe-area-context`.

### Instalação

```bash
npx expo install react-native-safe-area-context
```

### Uso Básico

```tsx
import { SafeAreaView } from 'react-native-safe-area-context';
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
});
```

### Com Mais Controle

```tsx
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaComControle() {
    const insets = useSafeAreaInsets();

    return (
        <View style={[
            styles.container,
            {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }
        ]}>
            <Text>Conteúdo com padding customizado</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
```

O hook `useSafeAreaInsets()` retorna os valores de padding necessários para cada lado da tela.

---

# Exercícios da Fase 3

### Exercício 3.1: Componente de Card

Crie um componente `CardAluno` que recebe `nome`, `idade` e `plano` como props e exibe essas informações em um card estilizado.

**✅ Resposta:**

```tsx
// components/CardAluno.tsx
import { View, Text, StyleSheet } from 'react-native';

type CardAlunoProps = {
    nome: string;
    idade: number;
    plano: string;
};

export default function CardAluno({ nome, idade, plano }: CardAlunoProps) {
    return (
        <View style={styles.card}>
            <Text style={styles.nome}>{nome}</Text>
            <Text style={styles.info}>Idade: {idade} anos</Text>
            <Text style={styles.info}>Plano: {plano}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 12,
        marginVertical: 8,
        marginHorizontal: 16,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    info: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
});

// Uso:
// <CardAluno nome="Maria Silva" idade={25} plano="Anual" />
```

---

### Exercício 3.2: Contador de Presenças

Crie um componente que mostra um número (presenças) e dois botões: um para incrementar e outro para zerar.

**✅ Resposta:**

```tsx
import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function ContadorPresencas() {
    const [presencas, setPresencas] = useState(0);

    function registrarPresenca() {
        setPresencas(presencas + 1);
    }

    function zerarPresencas() {
        setPresencas(0);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Presenças do Mês</Text>
            <Text style={styles.numero}>{presencas}</Text>

            <View style={styles.botoes}>
                <Pressable
                    style={[styles.botao, styles.botaoRegistrar]}
                    onPress={registrarPresenca}
                >
                    <Text style={styles.textoBotao}>+ Registrar Presença</Text>
                </Pressable>

                <Pressable
                    style={[styles.botao, styles.botaoZerar]}
                    onPress={zerarPresencas}
                >
                    <Text style={styles.textoBotao}>Zerar</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },
    label: {
        fontSize: 18,
        color: '#666',
    },
    numero: {
        fontSize: 72,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 20,
    },
    botoes: {
        flexDirection: 'row',
        gap: 10,
    },
    botao: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
    },
    botaoRegistrar: {
        backgroundColor: '#28a745',
    },
    botaoZerar: {
        backgroundColor: '#dc3545',
    },
    textoBotao: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
```

---

### Exercício 3.3: Formulário de Cadastro

Crie um formulário com campos para Nome, Email e Telefone. Ao clicar em "Salvar", mostre os dados no console.

**✅ Resposta:**

```tsx
import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';

export default function FormularioCadastro() {
    const [dados, setDados] = useState({
        nome: '',
        email: '',
        telefone: '',
    });

    function atualizarCampo(campo: string, valor: string) {
        setDados({
            ...dados,
            [campo]: valor,
        });
    }

    function salvar() {
        if (!dados.nome || !dados.email) {
            Alert.alert('Erro', 'Preencha nome e email');
            return;
        }

        console.log('Dados salvos:', dados);
        Alert.alert('Sucesso', `Aluno ${dados.nome} cadastrado!`);

        // Limpar formulário
        setDados({ nome: '', email: '', telefone: '' });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro de Aluno</Text>

            <Text style={styles.label}>Nome *</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o nome"
                value={dados.nome}
                onChangeText={(texto) => atualizarCampo('nome', texto)}
            />

            <Text style={styles.label}>Email *</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o email"
                value={dados.email}
                onChangeText={(texto) => atualizarCampo('email', texto)}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <Text style={styles.label}>Telefone</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o telefone"
                value={dados.telefone}
                onChangeText={(texto) => atualizarCampo('telefone', texto)}
                keyboardType="phone-pad"
            />

            <Pressable style={styles.botao} onPress={salvar}>
                <Text style={styles.textoBotao}>Salvar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 15,
    },
    botao: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    textoBotao: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
```

---

### Exercício 3.4: Lista de Alunos com FlatList

Crie uma tela que mostra uma lista de alunos usando FlatList. Cada item deve mostrar nome e plano.

**✅ Resposta:**

```tsx
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ALUNOS = [
    { id: '1', nome: 'Maria Silva', plano: 'Anual' },
    { id: '2', nome: 'João Santos', plano: 'Mensal' },
    { id: '3', nome: 'Ana Costa', plano: 'Trimestral' },
    { id: '4', nome: 'Pedro Lima', plano: 'Anual' },
    { id: '5', nome: 'Carla Souza', plano: 'Mensal' },
    { id: '6', nome: 'Lucas Oliveira', plano: 'Semestral' },
    { id: '7', nome: 'Julia Ferreira', plano: 'Anual' },
];

export default function TelaAlunos() {
    function renderizarItem({ item }) {
        return (
            <View style={styles.card}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.plano}>{item.plano}</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Alunos Cadastrados</Text>

            <FlatList
                data={ALUNOS}
                keyExtractor={(item) => item.id}
                renderItem={renderizarItem}
                contentContainerStyle={styles.lista}
                ListEmptyComponent={() => (
                    <Text style={styles.vazio}>Nenhum aluno cadastrado</Text>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        padding: 20,
        backgroundColor: 'white',
    },
    lista: {
        padding: 10,
    },
    card: {
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    nome: {
        fontSize: 16,
        fontWeight: '600',
    },
    plano: {
        fontSize: 14,
        color: '#007AFF',
        backgroundColor: '#e3f2fd',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    vazio: {
        textAlign: 'center',
        color: '#999',
        marginTop: 50,
        fontSize: 16,
    },
});
```

---

# Checklist de Conclusão da Fase 3

Antes de ir para a Fase 4, confirme que você consegue:

**Conceitos:**
- [ ] Explicar o que é React Native e Expo
- [ ] Entender o que são componentes
- [ ] Diferenciar componentes básicos (View, Text, Image, etc.)

**Prática:**
- [ ] Criar um projeto Expo e rodar no celular
- [ ] Criar componentes com estilos
- [ ] Usar useState para gerenciar estado
- [ ] Criar formulários com TextInput
- [ ] Mostrar listas com FlatList
- [ ] Navegar entre telas com Expo Router

**Estilização:**
- [ ] Usar StyleSheet.create
- [ ] Aplicar Flexbox para layout
- [ ] Usar SafeAreaView corretamente

**Completou tudo? Parabéns! 🎉**

Você agora sabe criar interfaces visuais! Na Fase 4, vamos aprender a buscar e enviar dados para servidores.

---

# Glossário da Fase 3

| Termo | Significado |
|-------|-------------|
| **React Native** | Framework para criar apps nativos com JavaScript |
| **Expo** | Plataforma que facilita o desenvolvimento React Native |
| **Expo Go** | App para testar seu projeto no celular |
| **Componente** | Peça reutilizável da interface |
| **JSX** | Sintaxe que mistura JavaScript com marcação tipo HTML |
| **Props** | Propriedades passadas para um componente |
| **State/Estado** | Dados que mudam e fazem a tela atualizar |
| **useState** | Hook para criar estado em componentes |
| **Hook** | Função especial do React (começam com "use") |
| **StyleSheet** | Objeto para definir estilos no React Native |
| **Flexbox** | Sistema de layout para posicionar elementos |
| **FlatList** | Componente otimizado para listas grandes |
| **Expo Router** | Sistema de navegação baseado em arquivos |
| **Stack** | Navegação em pilha (empilha telas) |
| **Tabs** | Navegação com abas na parte inferior |
| **Safe Area** | Área da tela livre de obstruções (notch, etc.) |

---

**Próximo passo:** Fase 4 — Trabalhando com Dados

*Nessa fase, você vai aprender a buscar dados de APIs e conectar seu app a um backend!*

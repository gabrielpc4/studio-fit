# Fase 4: Trabalhando com Dados da Internet

## Introdução

Até agora, todos os dados dos nossos exemplos estavam "escritos no código". Lembra da lista de alunos? Ela estava assim:

```javascript
const alunos = [
    { id: 1, nome: 'Maria Silva' },
    { id: 2, nome: 'João Santos' },
];
```

Mas apps reais não funcionam assim. Os dados vêm de **algum lugar na internet** — um servidor, um banco de dados, algum serviço online.

Nesta fase, você vai aprender a **buscar dados da internet** e mostrar no seu app. Vamos com calma, um conceito de cada vez.

---

# Módulo 1: De Onde Vêm os Dados?

## A Internet Como Uma Grande Biblioteca

Imagine a internet como uma **biblioteca gigante**. Quando você quer um livro:

1. Você vai até o balcão
2. Pede o livro que quer
3. O bibliotecário vai buscar
4. Ele volta com o livro
5. Você lê o livro

Apps funcionam igual:

1. O app quer mostrar uma lista de pokémons
2. O app **pede** essa lista para um servidor na internet
3. O servidor busca os dados
4. O servidor **responde** com os dados
5. O app mostra na tela

```
┌─────────────┐         "Me dá a lista         ┌─────────────┐
│             │         de pokémons"           │             │
│   Seu App   │  ─────────────────────────►    │  Servidor   │
│             │                                │  (Internet) │
│             │  ◄─────────────────────────    │             │
│             │         Lista de               │             │
└─────────────┘         pokémons               └─────────────┘
```

## O Que É uma API?

Você já ouviu falar de **API**. Parece complicado, mas é simples.

**API** é como o **cardápio de um restaurante**. O cardápio te diz:
- O que você pode pedir
- Como pedir (nome do prato)
- O que você vai receber

Uma API te diz:
- Quais dados você pode pedir
- Como pedir (qual endereço usar)
- O que você vai receber de volta

Por exemplo, existe uma API pública e gratuita de Pokémons. Ela te diz:

> "Se você acessar o endereço `https://pokeapi.co/api/v2/pokemon`, eu te dou uma lista de pokémons."

Você não precisa criar nada. A API já existe, é de graça, e qualquer pessoa pode usar.

## APIs Públicas: Dados de Graça

Existem muitas APIs públicas que qualquer pessoa pode usar sem pagar e sem precisar de senha:

- **PokeAPI** — Dados de Pokémons
- **JSONPlaceholder** — Dados fictícios para testes
- **Dog API** — Fotos aleatórias de cachorros
- **Cat Facts** — Fatos curiosos sobre gatos

Nesta fase, vamos usar essas APIs para praticar.

---

# Módulo 2: O Problema da Espera

Antes de buscar dados, precisamos entender um conceito muito importante.

## Quando Você Pede Uma Pizza...

Imagine que você ligou para pedir uma pizza. O que acontece?

1. Você faz o pedido
2. **Você espera** (pode demorar 30 minutos!)
3. A pizza chega

Enquanto espera, você **não fica parado olhando para a porta**. Você faz outras coisas — assiste TV, mexe no celular, arruma a casa.

## O Computador Também Precisa Esperar

Quando seu app pede dados da internet, **a resposta não vem instantaneamente**. Pode demorar um pouquinho — meio segundo, um segundo, às vezes mais.

Se o app ficasse **travado esperando**, seria horrível:

```
Usuário clica em "Ver Pokémons"
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
App mostra os dados
```

O usuário ia achar que o app travou!

## A Solução: Fazer Outras Coisas Enquanto Espera

A solução é: enquanto espera a resposta, o app **continua funcionando**:

```
Usuário clica em "Ver Pokémons"
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
App mostra os dados
```

Isso se chama código **assíncrono** — código que sabe esperar sem travar.

---

# Módulo 3: Async e Await — Esperando Sem Travar

## As Duas Palavras Mágicas

Para fazer o app esperar sem travar, usamos duas palavras especiais:

- **async** — Marca uma função que vai ter espera
- **await** — Marca o ponto onde o app deve esperar

Parece complicado, mas veja:

```javascript
// Uma função NORMAL (sem espera)
function somar(a, b) {
    return a + b;
}

// Uma função que ESPERA dados da internet
async function buscarPokemons() {
    let resposta = await pedirDadosDaInternet();
    return resposta;
}
```

A diferença:
- `somar` roda instantaneamente
- `buscarPokemons` precisa esperar, então marcamos com `async` e `await`

## Analogia: O Garçom do Restaurante

Pense em um garçom. Quando você faz um pedido:

1. O garçom anota seu pedido
2. Leva para a cozinha
3. **Enquanto a comida é preparada**, ele atende outras mesas
4. Quando a comida fica pronta, ele traz para você

O garçom não fica parado esperando sua comida ficar pronta. Ele continua trabalhando.

`await` é como dizer: "espere isso ficar pronto, mas continue fazendo outras coisas enquanto isso".

## Regra Importante

**`await` só pode ser usado dentro de funções marcadas com `async`.**

```javascript
// ❌ ERRADO — await fora de função async
let dados = await buscarDados();

// ✅ CORRETO — await dentro de função async
async function carregarTela() {
    let dados = await buscarDados();
    console.log(dados);
}
```

Pense assim: você só pode "esperar" se avisou antes que ia ter espera (usando `async`).

---

# Módulo 4: Instalando e Usando Axios

## O Que É Axios?

**Axios** é uma ferramenta que facilita pedir dados da internet. É como ter um assistente que faz os pedidos para você.

Sem Axios, você teria que fazer muitas coisas manualmente. Com Axios, fica simples.

## Instalando o Axios

No terminal, dentro da pasta do seu projeto:

```bash
npm install axios
```

Pronto! Agora você pode usar o Axios no seu código.

## Seu Primeiro Pedido com Axios

Vamos buscar dados de uma API pública. A mais simples é a **JSONPlaceholder**, que tem dados fictícios para testes.

```javascript
import axios from 'axios';

async function buscarUsuarios() {
    let resposta = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(resposta.data);
}
```

Vamos entender cada parte:

```javascript
import axios from 'axios';
// ↑ Traz o axios para podermos usar

async function buscarUsuarios() {
// ↑ Marca que essa função vai ter espera

    let resposta = await axios.get('https://...');
    //             ↑ Espera a resposta chegar
    //                   ↑ Faz um pedido GET para esse endereço

    console.log(resposta.data);
    //                   ↑ Os dados que vieram ficam em .data
}
```

## O Que É GET?

`GET` significa "pegar" ou "buscar". Quando você quer **obter** dados, usa GET.

```javascript
axios.get('endereço')   // Busca dados desse endereço
```

Existem outros tipos de pedido (POST, PUT, DELETE), mas por enquanto só precisamos do GET.

---

# Módulo 5: Tratando Erros — E Se Der Problema?

## Coisas Podem Dar Errado

Quando você pede dados da internet, várias coisas podem dar errado:

- O celular pode estar sem internet
- O servidor pode estar fora do ar
- O endereço pode estar errado
- A conexão pode ser muito lenta

Se não tratarmos esses problemas, o app pode travar ou mostrar uma tela branca.

## Try e Catch: Tentando e Pegando Erros

JavaScript tem uma forma de lidar com erros: **try** e **catch**.

- **try** = "tente fazer isso"
- **catch** = "se der erro, faça isso outro"

```javascript
async function buscarDados() {
    try {
        // Tenta fazer o pedido
        let resposta = await axios.get('https://...');
        console.log('Deu certo!', resposta.data);

    } catch (erro) {
        // Se der qualquer problema, cai aqui
        console.log('Deu erro!', erro.message);
    }
}
```

## Analogia: O Plano B

Pense assim: você tenta ligar para alguém.

```
TRY (tente):
    Ligar para a pessoa

CATCH (se não conseguir):
    Mandar mensagem de texto
```

No código:

```javascript
try {
    // Tenta buscar da internet
    let resposta = await axios.get('https://...');
    mostrarDados(resposta.data);

} catch (erro) {
    // Se não conseguir, mostra mensagem de erro
    mostrarMensagem('Não foi possível carregar. Verifique sua internet.');
}
```

## Sempre Use Try/Catch com Axios

Toda vez que você fizer um pedido para a internet, coloque dentro de try/catch:

```javascript
async function buscarPokemons() {
    try {
        let resposta = await axios.get('https://pokeapi.co/api/v2/pokemon');
        return resposta.data;

    } catch (erro) {
        console.log('Erro ao buscar pokémons:', erro.message);
        return null;  // Retorna null para indicar que falhou
    }
}
```

---

# Módulo 6: Usando Dados no React Native

Agora vamos juntar tudo: buscar dados e mostrar na tela do app.

## O Hook useEffect: Quando Buscar os Dados?

Precisamos decidir **quando** buscar os dados. O momento mais comum é: **quando a tela abre**.

Para isso, usamos o hook `useEffect`:

```javascript
import { useEffect } from 'react';

useEffect(() => {
    // Código aqui roda quando a tela abre
    console.log('A tela abriu!');
}, []);
```

O `[]` no final (array vazio) significa: "rode isso **uma vez**, quando a tela abrir".

## Exemplo Simples: Buscando e Mostrando

```tsx
import { useState, useEffect } from 'react';
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
    nome: {
        fontSize: 16,
        marginBottom: 10,
    },
});
```

### Explicando Passo a Passo

1. **useState** guarda a lista de usuários (começa vazia)
2. **useEffect** roda quando a tela abre
3. **buscarUsuarios** pede os dados para a API
4. Quando os dados chegam, **setUsuarios** atualiza a lista
5. O componente re-renderiza mostrando os usuários

## Mostrando "Carregando..."

É importante mostrar algo enquanto os dados não chegaram:

```tsx
import { useState, useEffect } from 'react';
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    centralizado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoCarregando: {
        marginTop: 10,
        color: '#666',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    nome: {
        fontSize: 16,
        marginBottom: 10,
    },
});
```

### O Fluxo Completo

```
1. Tela abre
   └─► carregando = true
   └─► Mostra "Carregando..."

2. useEffect roda
   └─► Chama buscarUsuarios()

3. buscarUsuarios pede dados
   └─► Espera resposta...

4. Resposta chega
   └─► setUsuarios(dados)
   └─► setCarregando(false)

5. Componente atualiza
   └─► carregando = false
   └─► Mostra lista de usuários
```

---

# Módulo 7: Usando FlatList com Dados da Internet

Para listas maiores, é melhor usar `FlatList` em vez de `.map()`:

```tsx
import { useState, useEffect } from 'react';
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
}

const styles = StyleSheet.create({
    centralizado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        marginTop: 10,
        color: '#666',
    },
    textoErro: {
        color: 'red',
        fontSize: 16,
    },
    lista: {
        padding: 10,
    },
    card: {
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
    },
    nome: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
});
```

### O Bloco "finally"

Você viu um novo bloco: `finally`. Ele **sempre roda**, dando erro ou não:

```javascript
try {
    // Tenta fazer algo
} catch (erro) {
    // Se der erro, faz isso
} finally {
    // SEMPRE faz isso, no final
}
```

Usamos `finally` para garantir que `setCarregando(false)` rode mesmo se der erro.

---

# Módulo 8: Projeto Prático — Lista e Detalhe de Pokémons

Vamos criar um mini-app que:
1. Mostra uma lista de pokémons
2. Ao clicar em um, mostra os detalhes

## Estrutura de Arquivos

```
app/
├── (tabs)/
│   └── index.tsx       ← Lista de Pokémons
└── pokemon/
    └── [nome].tsx      ← Detalhe do Pokémon
```

## Tela 1: Lista de Pokémons

**app/(tabs)/index.tsx:**

```tsx
import { useState, useEffect } from 'react';
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
                    <Link href={`/pokemon/${item.name}`} asChild>
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    centralizado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    textoCarregando: {
        marginTop: 15,
        fontSize: 16,
        color: '#666',
    },
    textoErro: {
        fontSize: 16,
        color: '#cc0000',
        textAlign: 'center',
        marginBottom: 20,
    },
    botaoTentar: {
        backgroundColor: '#ee1515',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    textoBotao: {
        color: 'white',
        fontWeight: 'bold',
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 20,
        backgroundColor: '#ee1515',
        color: 'white',
    },
    lista: {
        padding: 15,
    },
    card: {
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    numero: {
        fontSize: 14,
        color: '#999',
        width: 40,
    },
    nome: {
        fontSize: 18,
        fontWeight: '600',
        flex: 1,
    },
    seta: {
        fontSize: 18,
        color: '#ccc',
    },
});
```

## Tela 2: Detalhe do Pokémon

**app/pokemon/[nome].tsx:**

```tsx
import { useState, useEffect } from 'react';
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

            let resposta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nome}`);
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    centralizado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoCarregando: {
        marginTop: 10,
        color: '#666',
    },
    textoErro: {
        color: '#cc0000',
        fontSize: 16,
    },
    imagemContainer: {
        backgroundColor: '#ee1515',
        alignItems: 'center',
        paddingVertical: 20,
    },
    imagem: {
        width: 200,
        height: 200,
    },
    numero: {
        textAlign: 'center',
        fontSize: 16,
        color: '#999',
        marginTop: 15,
    },
    nome: {
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    tipos: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 20,
    },
    tipoBadge: {
        backgroundColor: '#30a7d7',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 15,
    },
    tipoTexto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    infoItem: {
        alignItems: 'center',
    },
    infoValor: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    infoLabel: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    secaoTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginBottom: 10,
    },
    habilidades: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        padding: 15,
        borderRadius: 10,
        marginBottom: 30,
    },
    habilidade: {
        fontSize: 16,
        marginBottom: 5,
        textTransform: 'capitalize',
    },
});
```

---

# Exercícios da Fase 4

### Exercício 4.1: Explicando com Suas Palavras

Responda as perguntas abaixo como se estivesse explicando para um amigo:

a) O que significa "assíncrono"?

b) Para que serve o `async` antes de uma função?

c) Para que serve o `await`?

d) Por que usamos try/catch?

**✅ Respostas esperadas (em palavras simples):**

a) "Assíncrono" significa que o código sabe esperar sem travar. É como pedir uma pizza e fazer outras coisas enquanto espera, em vez de ficar parado olhando para a porta.

b) O `async` avisa que essa função vai ter que esperar algo. É como dizer "essa tarefa vai demorar um pouco".

c) O `await` marca o ponto exato onde o código deve esperar. É como dizer "espera aqui até isso terminar, depois continua".

d) O try/catch é nosso plano B. Se algo der errado (sem internet, servidor fora do ar), o catch pega o erro e podemos mostrar uma mensagem amigável para o usuário em vez de o app travar.

---

### Exercício 4.2: Encontrando o Erro

O código abaixo tem erros. Encontre e explique o que está errado:

```javascript
function buscarDados() {
    let resposta = await axios.get('https://api.exemplo.com/dados');
    return resposta.data;
}
```

**✅ Resposta:**

O erro é que `await` está sendo usado dentro de uma função que **não tem** `async`.

Correção:

```javascript
async function buscarDados() {  // Adicionou async
    let resposta = await axios.get('https://api.exemplo.com/dados');
    return resposta.data;
}
```

---

### Exercício 4.3: Completando o Código

Complete o código abaixo para buscar uma lista de posts da API:

URL: `https://jsonplaceholder.typicode.com/posts`

```javascript
import axios from 'axios';

_____ function buscarPosts() {
    _____ {
        let resposta = _____ axios.get('https://jsonplaceholder.typicode.com/posts');
        return resposta.data;

    } _____ (erro) {
        console.log('Deu erro:', erro.message);
        return [];
    }
}
```

**✅ Resposta:**

```javascript
import axios from 'axios';

async function buscarPosts() {
    try {
        let resposta = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return resposta.data;

    } catch (erro) {
        console.log('Deu erro:', erro.message);
        return [];
    }
}
```

---

### Exercício 4.4: Criando um Componente

Crie um componente que:
1. Busca uma lista de fotos da API: `https://jsonplaceholder.typicode.com/photos?_limit=10`
2. Mostra "Carregando..." enquanto busca
3. Mostra as fotos quando chegarem (título e imagem)

**✅ Resposta:**

```tsx
import { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

export default function GaleriaFotos() {
    const [fotos, setFotos] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        carregarFotos();
    }, []);

    async function carregarFotos() {
        try {
            let resposta = await axios.get(
                'https://jsonplaceholder.typicode.com/photos?_limit=10'
            );
            setFotos(resposta.data);

        } catch (erro) {
            console.log('Erro:', erro.message);

        } finally {
            setCarregando(false);
        }
    }

    if (carregando) {
        return (
            <View style={styles.centralizado}>
                <ActivityIndicator size="large" color="#007AFF" />
                <Text>Carregando...</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={fotos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Image source={{ uri: item.thumbnailUrl }} style={styles.imagem} />
                    <Text style={styles.titulo} numberOfLines={2}>
                        {item.title}
                    </Text>
                </View>
            )}
            contentContainerStyle={styles.lista}
        />
    );
}

const styles = StyleSheet.create({
    centralizado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lista: {
        padding: 10,
    },
    card: {
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    imagem: {
        width: '100%',
        height: 150,
    },
    titulo: {
        padding: 10,
        fontSize: 14,
    },
});
```

---

# Checklist de Conclusão da Fase 4

Antes de ir para a Fase 5, confirme que você consegue:

**Conceitos:**
- [ ] Explicar de onde vêm os dados de um app (internet/servidor)
- [ ] Explicar o que é uma API com suas próprias palavras
- [ ] Explicar por que código assíncrono é necessário
- [ ] Explicar o que fazem `async` e `await`
- [ ] Explicar para que serve try/catch

**Prática:**
- [ ] Instalar e importar o Axios
- [ ] Fazer uma requisição GET com Axios
- [ ] Usar try/catch para tratar erros
- [ ] Usar useEffect para carregar dados quando a tela abre
- [ ] Mostrar "Carregando..." enquanto busca dados
- [ ] Mostrar mensagem de erro quando falha
- [ ] Mostrar os dados quando chegam

**Completou tudo? Parabéns! 🎉**

Você agora sabe buscar dados da internet! Na Fase 5, vamos aprender a encontrar e resolver problemas no código.

---

# Glossário da Fase 4

| Termo | Significado |
|-------|-------------|
| **API** | "Cardápio" de dados que um servidor oferece |
| **Servidor** | Computador na internet que fornece dados |
| **Requisição** | Pedido de dados para um servidor |
| **Resposta** | Dados que o servidor envia de volta |
| **GET** | Tipo de pedido para buscar/obter dados |
| **Assíncrono** | Código que sabe esperar sem travar |
| **async** | Marca função que vai ter espera |
| **await** | Marca ponto onde deve esperar |
| **try** | "Tente fazer isso" |
| **catch** | "Se der erro, faça isso" |
| **finally** | "Sempre faça isso no final" |
| **Axios** | Ferramenta para fazer requisições |
| **useEffect** | Hook que roda código em momentos específicos |

---

**Próximo passo:** Fase 5 — Debugging e Resolução de Problemas

*Nessa fase, você vai aprender a encontrar e corrigir erros no código!*

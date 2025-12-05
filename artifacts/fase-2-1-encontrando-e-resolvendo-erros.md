# Fase 2.1: Encontrando e Resolvendo Erros

## Introdução

Você vai errar. **Muito.**

E isso é completamente normal! Todo programador — do iniciante ao mais experiente — comete erros todos os dias. A diferença é que programadores experientes **sabem encontrar e corrigir erros rapidamente**.

Nesta fase, você vai aprender:
- Por que erros não são motivo de pânico
- Como ler mensagens de erro
- Como investigar problemas no código
- Como pesquisar soluções na internet
- Os erros mais comuns e como evitá-los

Essa é uma das habilidades mais importantes que você vai desenvolver!

---

# Módulo 1: Erros São Seus Amigos

## Mudando a Mentalidade

Quando você vê uma mensagem de erro vermelha na tela, qual é sua primeira reação?

Se for pânico, medo ou frustração — isso é normal no começo. Mas vamos mudar isso.

**Erros não são punição. São informação.**

Pense assim: imagine que você está cozinhando e a comida fica salgada demais. O que você faz?

❌ Entra em pânico e joga tudo fora
✅ Pensa: "Coloquei sal demais. Na próxima, coloco menos."

Com código é igual. O erro está te dizendo **o que deu errado** e muitas vezes **onde está o problema**.

## O Computador Está Tentando te Ajudar

Mensagens de erro parecem assustadoras, mas são o computador tentando te ajudar:

```
"Ei, você escreveu 'consle.log' mas acho que você quis dizer 'console.log'.
O erro está na linha 5 do arquivo app.js."
```

É como um professor corrigindo sua prova e mostrando onde você errou, em vez de só dar nota zero sem explicação.

## Tipos de Erro

Existem basicamente três tipos de erro:

### 1. Erros de Sintaxe (o código está escrito errado)

Como erros de português — faltou uma vírgula, uma palavra está escrita errada.

```javascript
// Faltou fechar o parêntese
console.log("Olá"

// Escreveu errado
consle.log("Olá");
```

O código nem roda. O computador para e diz: "Não entendi isso aqui."

### 2. Erros de Execução (o código roda mas quebra no meio)

O código está escrito certo, mas algo dá errado quando roda.

```javascript
let alunos = null;
console.log(alunos.length);  // ERRO! null não tem .length
```

É como uma receita que diz "bata as claras" mas você não tem ovos.

### 3. Erros de Lógica (o código roda mas faz a coisa errada)

O código roda sem erros, mas o resultado está errado.

```javascript
// Queria somar, mas multiplicou
function calcularTotal(preco, quantidade) {
    return preco * quantidade * quantidade;  // Ops! quantidade duas vezes
}
```

Esse é o mais difícil de encontrar porque o computador não reclama.

---

# Módulo 2: Lendo Mensagens de Erro

## Anatomia de Uma Mensagem de Erro

Mensagens de erro têm uma estrutura. Vamos aprender a ler:

```
ReferenceError: nme is not defined
    at calcularIdade (app.js:15:17)
    at main (app.js:8:5)
```

Parece confuso, mas tem informações valiosas:

```
ReferenceError: nme is not defined
└─────┬──────┘  └────────┬────────┘
      │                  │
   Tipo do erro     O que aconteceu

    at calcularIdade (app.js:15:17)
       └─────┬─────┘  └──┬──┘└┬┘└┬┘
             │           │   │  │
        Função onde   Arquivo │  │
        aconteceu             │  │
                           Linha │
                               Coluna
```

Traduzindo: "Erro de Referência: 'nme' não existe. Aconteceu na função calcularIdade, no arquivo app.js, linha 15, coluna 17."

## Os Tipos de Erro Mais Comuns

### SyntaxError (Erro de Sintaxe)

Você escreveu algo que o JavaScript não entende.

```
SyntaxError: Unexpected token ')'
```

Significa: "Encontrei um ')' onde não deveria ter."

Causas comuns:
- Faltou abrir ou fechar parênteses, chaves, colchetes
- Faltou vírgula ou ponto e vírgula
- Aspas não fechadas

### ReferenceError (Erro de Referência)

Você tentou usar algo que não existe.

```
ReferenceError: nme is not defined
```

Significa: "Você usou 'nme' mas isso não existe."

Causas comuns:
- Escreveu o nome da variável errado (nme em vez de nome)
- Usou uma variável antes de criar ela
- Esqueceu de importar algo

### TypeError (Erro de Tipo)

Você tentou fazer algo impossível com um tipo de dado.

```
TypeError: Cannot read property 'nome' of undefined
```

Significa: "Você tentou acessar .nome de algo que é undefined."

Causas comuns:
- A variável é undefined ou null
- Tentou usar um método que não existe para aquele tipo

## Exercício: Traduzindo Erros

Tente "traduzir" esses erros para português simples:

**Erro 1:**
```
SyntaxError: Unexpected end of input
    at app.js:10
```

**Tradução:** O arquivo terminou de forma inesperada. Provavelmente faltou fechar algo (chave, parêntese, aspas) antes da linha 10.

---

**Erro 2:**
```
ReferenceError: calcularIdad is not defined
    at main (app.js:5:1)
```

**Tradução:** Na linha 5 de app.js, você tentou usar 'calcularIdad', mas isso não existe. Provavelmente você quis escrever 'calcularIdade'.

---

**Erro 3:**
```
TypeError: alunos.map is not a function
    at listarAlunos (app.js:12:18)
```

**Tradução:** Na linha 12 de app.js, você tentou usar .map() em 'alunos', mas 'alunos' não é um array (ou é null/undefined).

---

# Módulo 3: console.log — Sua Ferramenta de Investigação

## O Detetive do Código

Quando algo não funciona e você não sabe por quê, `console.log` é seu melhor amigo.

É como ser um detetive: você coloca "câmeras" no código para ver o que está acontecendo em cada passo.

```javascript
function calcularDesconto(preco, percentual) {
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
console.log("resultado:", resultado);
```

Saída:
```
Entrou na função
preco: 100
percentual: 20
desconto calculado: 20
precoFinal: 80
resultado: 80
```

Agora você VÊ exatamente o que está acontecendo em cada passo!

## Quando Usar console.log

Use console.log para descobrir:

1. **Se o código está chegando naquele ponto:**
```javascript
function minhaFuncao() {
    console.log(">>> Entrou em minhaFuncao");
    // resto do código
}
```

2. **Qual é o valor de uma variável:**
```javascript
console.log("O valor de x é:", x);
```

3. **Que tipo de dado é uma variável:**
```javascript
console.log("Tipo de alunos:", typeof alunos);
console.log("alunos é array?", Array.isArray(alunos));
```

4. **O que está dentro de um objeto ou array:**
```javascript
console.log("Conteúdo completo:", alunos);
```

## Técnica: Isolando o Problema

Imagine que sua função não está funcionando. Você tem 10 linhas de código. Onde está o erro?

**Técnica:** Coloque console.log entre cada passo.

```javascript
function processarAluno(aluno) {
    console.log("1. Recebeu aluno:", aluno);

    let nome = aluno.nome;
    console.log("2. Nome extraído:", nome);

    let idade = calcularIdade(aluno.nascimento);
    console.log("3. Idade calculada:", idade);

    let status = idade >= 18 ? "adulto" : "menor";
    console.log("4. Status definido:", status);

    return { nome, idade, status };
}
```

Se a saída for:
```
1. Recebeu aluno: { nome: "Maria", nascimento: "2000-05-15" }
2. Nome extraído: Maria
3. Idade calculada: undefined
```

Aha! O problema está na função `calcularIdade` — ela está retornando undefined.

## Limpando Depois

Depois de resolver o problema, **remova os console.log** ou eles vão poluir seu código.

Uma boa prática é usar comentários enquanto debuga:

```javascript
// DEBUG: remover depois
console.log("valor:", valor);
```

Assim você encontra e remove facilmente depois.

---

# Módulo 4: Pesquisando Soluções

## Você Não Está Sozinho

Toda mensagem de erro que você vê, milhares de outras pessoas já viram antes. E muitas delas perguntaram na internet e receberam respostas.

**Pesquisar é parte do trabalho de programador.** Não é trapacear!

## Como Pesquisar Bem

### Passo 1: Copie a mensagem de erro principal

```
TypeError: Cannot read property 'map' of undefined
```

Cole isso no Google. Simples assim.

### Passo 2: Adicione contexto se necessário

Se a busca for muito genérica, adicione:
- A linguagem: "JavaScript"
- A ferramenta: "React Native"
- O que você estava tentando fazer

Exemplo:
```
"TypeError: Cannot read property 'map' of undefined" JavaScript array
```

### Passo 3: Olhe os primeiros resultados

Os melhores lugares para encontrar respostas:

1. **Stack Overflow** — Perguntas e respostas de programadores
2. **GitHub Issues** — Problemas relatados em projetos
3. **Documentação oficial** — Às vezes o erro é explicado lá

## Lendo Respostas no Stack Overflow

Stack Overflow é um site de perguntas e respostas. Quando você entra:

1. **Leia a pergunta** — Veja se é parecida com seu problema
2. **Olhe a resposta com mais votos** — Geralmente é a melhor
3. **Leia os comentários** — Às vezes tem informação importante
4. **Não copie cegamente** — Entenda o que a solução faz

Exemplo de boa resposta:
```
"Esse erro acontece quando você tenta usar .map() em algo que é undefined.

Verifique se sua variável foi inicializada:

// Errado:
let alunos;
alunos.map(...)  // Erro! alunos é undefined

// Certo:
let alunos = [];
alunos.map(...)  // Funciona! alunos é um array vazio"
```

## O Que NÃO Fazer

❌ Copiar código sem entender o que faz
❌ Usar a primeira solução sem ler direito
❌ Ficar frustrado e desistir depois de 5 minutos
❌ Ter vergonha de pesquisar

✅ Entender POR QUE a solução funciona
✅ Ler várias respostas para entender melhor
✅ Tentar algumas soluções diferentes
✅ Pesquisar é normal e esperado!

---

# Módulo 5: Erros Comuns em JavaScript

## 1. Erro de Digitação em Nomes

O erro mais comum de todos!

```javascript
// Declarou assim
let nomeDoAluno = "Maria";

// Mas usou assim
console.log(nomeDoaluno);  // ERRO! 'a' minúsculo

// Ou assim
console.log(nomedoaluno);  // ERRO! tudo minúsculo

// Ou assim
console.log(nome_do_aluno);  // ERRO! com underline
```

**Dica:** JavaScript diferencia maiúsculas de minúsculas. `nome`, `Nome` e `NOME` são três coisas diferentes.

## 2. Esquecer de Fechar Coisas

```javascript
// Faltou fechar parêntese
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
                     // ^ faltou ]
```

**Dica:** Use um editor que mostra pares de parênteses/chaves coloridos.

## 3. Usar = em vez de == ou ===

```javascript
let idade = 18;

// ERRADO: isso ATRIBUI valor, não compara
if (idade = 20) {
    console.log("Tem 20 anos");
}

// CERTO: isso COMPARA valores
if (idade === 20) {
    console.log("Tem 20 anos");
}
```

**Dica:** Para comparar, use `===` (três iguais). Um `=` sozinho é para atribuir valor.

## 4. Acessar Propriedade de undefined/null

```javascript
let aluno = null;
console.log(aluno.nome);  // ERRO! null não tem .nome

let aluno2;  // undefined
console.log(aluno2.nome);  // ERRO! undefined não tem .nome

let aluno3 = {};  // objeto vazio
console.log(aluno3.nome);  // Não dá erro, mas retorna undefined
```

**Dica:** Sempre verifique se a variável existe antes de acessar propriedades.

```javascript
if (aluno) {
    console.log(aluno.nome);
}
```

## 5. Esquecer o return

```javascript
// ERRADO: esqueceu o return
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
}
```

## 6. Confundir Índice com Valor em Arrays

```javascript
let frutas = ["maçã", "banana", "laranja"];

// Índices são: 0, 1, 2
// Valores são: "maçã", "banana", "laranja"

console.log(frutas[1]);     // "banana" (índice 1)
console.log(frutas.length); // 3 (quantidade de itens)
console.log(frutas[3]);     // undefined (não existe índice 3!)
```

**Dica:** Arrays começam no índice 0, não no 1.

## 7. Modificar Array/Objeto Errado

```javascript
let original = { nome: "Maria" };
let copia = original;  // Isso NÃO copia, só cria referência!

copia.nome = "João";

console.log(original.nome);  // "João" — original também mudou!
```

Para copiar de verdade:
```javascript
let copia = { ...original };  // Spread operator faz cópia
```

---

# Módulo 6: Estratégias de Debug

## 1. Leia o Erro Com Calma

Não entre em pânico. Respire. Leia a mensagem de erro devagar.

Pergunte:
- **O que** o erro diz que aconteceu?
- **Onde** (arquivo, linha) aconteceu?
- Tem alguma **dica** de como resolver?

## 2. Reproduza o Erro

Antes de tentar resolver, tenha certeza de que consegue fazer o erro acontecer de novo. Se não consegue reproduzir, fica difícil saber se resolveu.

## 3. Isole o Problema

Se tem muito código, tente descobrir qual parte está causando o erro.

Técnica: **Comente metade do código** e veja se o erro continua.
- Se continuar → o erro está na metade que ficou
- Se parar → o erro está na metade que você comentou

Repita até encontrar a linha problemática.

## 4. Verifique Suas Suposições

Muitas vezes o erro acontece porque você ACHA que uma variável tem um valor, mas na verdade tem outro.

```javascript
// Você ACHA que alunos é um array com dados
// Mas na verdade é undefined

console.log("alunos é:", alunos);  // Mostra o valor real
console.log("tipo:", typeof alunos);  // Mostra o tipo
```

## 5. Explique o Problema em Voz Alta

Isso se chama "Rubber Duck Debugging" (Debug do Patinho de Borracha).

A ideia: explique o problema em voz alta, como se estivesse explicando para alguém (ou para um patinho de borracha).

Muitas vezes, ao explicar o problema, você percebe a solução!

"Então, eu tenho essa função que recebe um aluno e... espera... eu nunca passo o aluno para a função! Era isso!"

## 6. Faça Uma Pausa

Se você está travado há mais de 30 minutos no mesmo erro:

1. **Levante** e faça outra coisa por 10 minutos
2. **Beba água**, vá ao banheiro
3. **Volte** com a mente fresca

Muitos bugs são resolvidos depois de uma pausa, quando você volta e vê algo que não tinha visto antes.

---

# Exercícios da Fase 2.1

### Exercício 2.1.1: Traduzindo Mensagens de Erro

Para cada erro abaixo, explique em português simples o que aconteceu e onde:

**a)**
```
SyntaxError: Unexpected token ';'
    at app.js:7:15
```

**b)**
```
ReferenceError: resultado is not defined
    at calcular (calculadora.js:12:5)
```

**c)**
```
TypeError: usuarios.filter is not a function
    at filtrarAtivos (usuarios.js:8:20)
```

**✅ Respostas:**

a) Erro de sintaxe na linha 7, coluna 15 do arquivo app.js. Tem um ponto e vírgula em lugar inesperado. Provavelmente sobrou um `;` ou está faltando algo antes dele.

b) Na linha 12 do arquivo calculadora.js, dentro da função `calcular`, você tentou usar uma variável chamada `resultado` que não existe. Verifique se declarou ela antes de usar, ou se escreveu o nome certo.

c) Na linha 8 do arquivo usuarios.js, você tentou usar `.filter()` em `usuarios`, mas `usuarios` não é um array (pode ser undefined, null, ou outro tipo). Verifique se `usuarios` foi inicializado como array.

---

### Exercício 2.1.2: Encontre os Erros

Cada código abaixo tem um erro. Encontre e corrija:

**a)**
```javascript
function calcularMedia(nota1, nota2) {
    let soma = nota1 + nota2;
    let media = soma / 2;
}

let resultado = calcularMedia(8, 6);
console.log("Média:", resultado);
```

**b)**
```javascript
let alunos = ["Maria", "João", "Ana"];
console.log("Terceiro aluno:", alunos[3]);
```

**c)**
```javascript
let preco = 100;

if (preco = 100) {
    console.log("O preço é 100");
}
```

**d)**
```javascript
function saudar(nome) {
    console.log("Olá, " + nome);
}

saudar(Nome);
```

**✅ Respostas:**

a) **Faltou o return.** A função calcula a média mas não retorna nada.
```javascript
function calcularMedia(nota1, nota2) {
    let soma = nota1 + nota2;
    let media = soma / 2;
    return media;  // Adicionou return
}
```

b) **Índice errado.** Array de 3 elementos tem índices 0, 1, 2. Índice 3 não existe.
```javascript
console.log("Terceiro aluno:", alunos[2]);  // Índice 2, não 3
```

c) **Usou = em vez de ===.** Um `=` atribui valor, `===` compara.
```javascript
if (preco === 100) {  // Três iguais para comparar
    console.log("O preço é 100");
}
```

d) **Nome da variável errado.** JavaScript diferencia maiúsculas/minúsculas.
```javascript
let nome = "Maria";
saudar(nome);  // 'nome' com n minúsculo
```

---

### Exercício 2.1.3: Debug com console.log

O código abaixo deveria calcular o total de uma compra com desconto, mas está retornando o valor errado. Use console.log para descobrir onde está o problema:

```javascript
function calcularTotal(itens, desconto) {
    let soma = 0;

    for (let i = 0; i <= itens.length; i++) {
        soma = soma + itens[i].preco;
    }

    let totalComDesconto = soma - desconto;
    return totalComDesconto;
}

let carrinho = [
    { nome: "Camiseta", preco: 50 },
    { nome: "Calça", preco: 100 },
    { nome: "Tênis", preco: 200 }
];

let total = calcularTotal(carrinho, 10);
console.log("Total:", total);  // Deveria ser 340, mas dá NaN
```

**✅ Resposta:**

Adicionando console.log para investigar:

```javascript
function calcularTotal(itens, desconto) {
    let soma = 0;

    console.log("Quantidade de itens:", itens.length);

    for (let i = 0; i <= itens.length; i++) {
        console.log("Índice:", i);
        console.log("Item:", itens[i]);
        console.log("Preço:", itens[i]?.preco);

        soma = soma + itens[i].preco;
        console.log("Soma parcial:", soma);
    }

    let totalComDesconto = soma - desconto;
    return totalComDesconto;
}
```

A saída mostra:
```
Quantidade de itens: 3
Índice: 0
Item: { nome: "Camiseta", preco: 50 }
Preço: 50
Soma parcial: 50
Índice: 1
Item: { nome: "Calça", preco: 100 }
Preço: 100
Soma parcial: 150
Índice: 2
Item: { nome: "Tênis", preco: 200 }
Preço: 200
Soma parcial: 350
Índice: 3
Item: undefined     ← PROBLEMA AQUI!
```

**O erro:** A condição do for é `i <= itens.length`, mas deveria ser `i < itens.length`. Quando i=3, não existe `itens[3]`, então dá undefined.

**Correção:**
```javascript
for (let i = 0; i < itens.length; i++) {  // < em vez de <=
```

---

### Exercício 2.1.4: Pesquisando Solução

Imagine que você recebeu este erro:

```
TypeError: Cannot read properties of undefined (reading 'nome')
```

**a)** O que você pesquisaria no Google?

**b)** O que esse erro provavelmente significa?

**c)** Como você verificaria se é isso mesmo?

**✅ Respostas:**

a) Pesquisaria: `TypeError Cannot read properties of undefined JavaScript`

b) Significa que você tentou acessar `.nome` de algo que é undefined. Por exemplo:
```javascript
let aluno;  // undefined
console.log(aluno.nome);  // Erro!
```

c) Usaria console.log para verificar o valor da variável antes de acessar .nome:
```javascript
console.log("aluno é:", aluno);
console.log("tipo de aluno:", typeof aluno);

// Só então tenta acessar
if (aluno) {
    console.log(aluno.nome);
}
```

---

# Checklist de Conclusão da Fase 2.1

Antes de ir para a Fase 3, confirme que você consegue:

**Mentalidade:**
- [ ] Entender que erros são normais e não motivo de pânico
- [ ] Ver mensagens de erro como informação útil, não punição

**Leitura de Erros:**
- [ ] Identificar o tipo de erro (SyntaxError, ReferenceError, TypeError)
- [ ] Encontrar em qual arquivo e linha o erro aconteceu
- [ ] Traduzir a mensagem de erro para português simples

**Investigação:**
- [ ] Usar console.log para ver valores de variáveis
- [ ] Usar console.log para verificar se o código está chegando em certo ponto
- [ ] Isolar o problema comentando partes do código

**Pesquisa:**
- [ ] Saber pesquisar mensagens de erro no Google
- [ ] Ler respostas no Stack Overflow
- [ ] Entender a solução antes de aplicar (não copiar cegamente)

**Erros Comuns:**
- [ ] Identificar erros de digitação em nomes de variáveis
- [ ] Verificar se parênteses/chaves/aspas estão fechados
- [ ] Diferenciar = (atribuição) de === (comparação)
- [ ] Verificar se variável existe antes de acessar propriedades
- [ ] Lembrar que arrays começam no índice 0

**Completou tudo? Parabéns! 🎉**

Você agora tem as ferramentas para resolver problemas no código. Essa habilidade vai te acompanhar por toda sua jornada como programador!

---

# Glossário da Fase 2.1

| Termo | Significado |
|-------|-------------|
| **Bug** | Erro no código que causa comportamento inesperado |
| **Debug** | Processo de encontrar e corrigir bugs |
| **console.log** | Comando para imprimir mensagens no console |
| **SyntaxError** | Erro de sintaxe — código escrito de forma errada |
| **ReferenceError** | Erro de referência — usou algo que não existe |
| **TypeError** | Erro de tipo — operação inválida para aquele tipo |
| **undefined** | Valor especial que significa "não definido" |
| **null** | Valor especial que significa "vazio/nulo" |
| **Stack trace** | Lista de funções que mostra onde o erro aconteceu |
| **Stack Overflow** | Site de perguntas e respostas para programadores |

---

# Resumo: Quando Algo Der Errado

```
┌─────────────────────────────────────────────────────┐
│         ALGO DEU ERRADO — O QUE FAZER?              │
├─────────────────────────────────────────────────────┤
│                                                     │
│  1. CALMA — respire, não entre em pânico           │
│                                                     │
│  2. LEIA O ERRO                                     │
│     • Qual é o tipo? (Syntax, Reference, Type)     │
│     • Em qual arquivo e linha?                      │
│     • O que a mensagem diz?                         │
│                                                     │
│  3. INVESTIGUE com console.log                      │
│     • Qual é o valor das variáveis?                │
│     • O código está chegando naquele ponto?        │
│                                                     │
│  4. PESQUISE                                        │
│     • Copie o erro no Google                        │
│     • Olhe resultados do Stack Overflow             │
│     • Entenda a solução antes de aplicar            │
│                                                     │
│  5. TENTE soluções                                  │
│     • Uma de cada vez                               │
│     • Teste após cada mudança                       │
│                                                     │
│  6. PAUSA se ficar travado muito tempo              │
│     • 10 minutos fazendo outra coisa                │
│     • Volte com a mente fresca                      │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

**Próximo passo:** Fase 3 — Introdução ao React Native

*Agora que você sabe resolver problemas, vamos criar seu primeiro app!*

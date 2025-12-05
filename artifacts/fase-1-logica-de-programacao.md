# Fase 1: Lógica de Programação com JavaScript

## Introdução

Agora começa a parte prática! Nesta fase, você vai aprender os **blocos fundamentais** da programação:

- **Variáveis:** Como guardar informações
- **Tipos de dados:** Que tipos de informação existem
- **Condições:** Como fazer o programa tomar decisões
- **Repetições:** Como fazer algo várias vezes
- **Funções:** Como organizar código em blocos reutilizáveis
- **Objetos:** Como agrupar informações relacionadas

Ao final desta fase, você será capaz de ler código JavaScript simples e entender o que está acontecendo. Isso é **muito mais importante** do que saber escrever do zero — lembre-se, a IA vai te ajudar a escrever, mas você precisa entender!

---

# Semana 1: Variáveis e Tipos de Dados

## O Que São Variáveis?

Uma variável é como uma **caixa com etiqueta** onde você guarda alguma coisa.

```
┌─────────────────┐
│                 │
│     "Maria"     │   ← conteúdo (valor)
│                 │
└─────────────────┘
   nomeDoAluno        ← etiqueta (nome da variável)
```

Em JavaScript, criamos variáveis assim:

```javascript
let nomeDoAluno = "Maria";
```

Vamos destrinchar:

- `let` → Palavra-chave que diz "vou criar uma variável"
- `nomeDoAluno` → O nome que você escolhe para a caixa (a etiqueta)
- `=` → Significa "recebe" ou "guarda" (não é "igual" como na matemática!)
- `"Maria"` → O valor que você está guardando
- `;` → Ponto e vírgula que finaliza a instrução

## Regras Para Nomes de Variáveis

Você pode escolher quase qualquer nome, mas existem regras:

✅ **Pode:**
- Começar com letra: `nome`, `idade`, `valor`
- Usar números (mas não no início): `aluno1`, `turma2023`
- Usar underline: `nome_completo`
- Usar camelCase (muito comum): `nomeCompleto`, `dataNascimento`

❌ **Não pode:**
- Começar com número: ~~`1aluno`~~
- Ter espaços: ~~`nome completo`~~
- Usar palavras reservadas: ~~`let`~~, ~~`if`~~, ~~`function`~~

💡 **Dica de ouro:** Use nomes que explicam o que está guardado!

```javascript
// Ruim (o que é x? o que é n?)
let x = 25;
let n = "Carlos";

// Bom (fica claro o que cada variável guarda)
let idadeDoAluno = 25;
let nomeDoAluno = "Carlos";
```

## let, const, e var

Existem três formas de criar variáveis em JavaScript:

```javascript
let idade = 25;        // Pode mudar depois
const cpf = "123456";  // NÃO pode mudar (constante)
var nome = "Ana";      // Forma antiga (evite usar)
```

**Quando usar cada um:**

- `let` → Quando o valor pode mudar (ex: pontuação, contador)
- `const` → Quando o valor nunca muda (ex: CPF, data de nascimento)
- `var` → Não use! É antigo e pode causar problemas

```javascript
let pontos = 0;
pontos = 10;  // OK! Pode mudar porque usamos let

const dataNascimento = "1995-03-15";
dataNascimento = "1996-01-01";  // ERRO! Não pode mudar const
```

## Os Tipos de Dados

Em JavaScript, existem diferentes tipos de informação que você pode guardar:

### 1. String (Texto)

Qualquer texto, sempre entre aspas:

```javascript
let nome = "João Silva";
let endereco = "Rua das Flores, 123";
let telefone = "11999887766";  // Mesmo sendo números, é texto!
```

Aspas duplas `"texto"` ou simples `'texto'` funcionam igual.

### 2. Number (Número)

Números inteiros ou decimais, SEM aspas:

```javascript
let idade = 28;
let peso = 75.5;
let altura = 1.82;
let temperatura = -5;
let saldo = 1500.00;
```

⚠️ **Cuidado:** `"28"` (com aspas) é texto, não número!

### 3. Boolean (Verdadeiro ou Falso)

Só tem dois valores possíveis: `true` ou `false`

```javascript
let alunoAtivo = true;
let mensalidadeAtrasada = false;
let maiorDeIdade = true;
```

Muito usado para condições e verificações (você vai ver bastante na Semana 2).

### 4. null e undefined

Representam "ausência de valor":

```javascript
let telefoneComercial = null;       // Propositalmente vazio (o aluno não tem)
let endereco;                        // undefined - foi criada mas não recebeu valor
console.log(endereco);               // Mostra: undefined
```

A diferença:
- `null` → Você decidiu que não tem valor
- `undefined` → A variável existe mas ninguém colocou nada ainda

## Operações com Strings

Você pode juntar textos (concatenar):

```javascript
let primeiroNome = "Maria";
let sobrenome = "Santos";

// Usando o +
let nomeCompleto = primeiroNome + " " + sobrenome;
console.log(nomeCompleto);  // Maria Santos

// Usando template literals (mais moderno e prático)
let mensagem = `Olá, ${primeiroNome}! Bem-vinda ao sistema.`;
console.log(mensagem);  // Olá, Maria! Bem-vinda ao sistema.
```

**Template literals** usam crase `` ` `` e permitem colocar variáveis dentro com `${variavel}`. É muito mais fácil de ler!

## Operações com Números

As operações matemáticas básicas:

```javascript
let a = 10;
let b = 3;

console.log(a + b);   // Soma: 13
console.log(a - b);   // Subtração: 7
console.log(a * b);   // Multiplicação: 30
console.log(a / b);   // Divisão: 3.333...
console.log(a % b);   // Resto da divisão: 1
console.log(a ** b);  // Potência (10³): 1000
```

### Exemplo Prático: Calculando IMC

```javascript
let peso = 75;
let altura = 1.80;

let imc = peso / (altura * altura);
console.log(`Seu IMC é: ${imc}`);  // Seu IMC é: 23.148...
```

## console.log: Sua Ferramenta de Debug

`console.log()` mostra coisas na tela. É sua principal ferramenta para entender o que está acontecendo no código:

```javascript
let nome = "Carlos";
let idade = 30;

console.log(nome);                    // Carlos
console.log(idade);                   // 30
console.log(nome, idade);             // Carlos 30
console.log("A idade é:", idade);     // A idade é: 30
console.log(`${nome} tem ${idade} anos`);  // Carlos tem 30 anos
```

**Use e abuse do console.log!** Quando não entender o que está acontecendo, coloque console.log para ver os valores.

---

## Exercícios da Semana 1

### Exercício 1.1: Criando Variáveis

Crie um arquivo chamado `exercicio-1-1.js` e declare variáveis para guardar as seguintes informações de um aluno de academia:

- Nome completo
- Idade
- Peso (em kg)
- Altura (em metros)
- Se está com a mensalidade em dia (sim ou não)
- Plano contratado (mensal, trimestral ou anual)

Depois, mostre todas as informações no console.

**✅ Resposta:**

```javascript
// Informações do aluno
let nomeCompleto = "Ricardo Oliveira";
let idade = 32;
let peso = 78.5;
let altura = 1.75;
let mensalidadeEmDia = true;
let planoContratado = "trimestral";

// Mostrando as informações
console.log("=== Dados do Aluno ===");
console.log(`Nome: ${nomeCompleto}`);
console.log(`Idade: ${idade} anos`);
console.log(`Peso: ${peso} kg`);
console.log(`Altura: ${altura} m`);
console.log(`Mensalidade em dia: ${mensalidadeEmDia}`);
console.log(`Plano: ${planoContratado}`);
```

Para rodar: `node exercicio-1-1.js`

---

### Exercício 1.2: Calculando IMC

Usando as variáveis de peso e altura do exercício anterior, calcule o IMC do aluno e mostre o resultado formatado.

Fórmula: IMC = peso / (altura × altura)

**✅ Resposta:**

```javascript
let peso = 78.5;
let altura = 1.75;

let imc = peso / (altura * altura);

console.log(`Peso: ${peso} kg`);
console.log(`Altura: ${altura} m`);
console.log(`IMC calculado: ${imc}`);

// Para mostrar com apenas 2 casas decimais:
console.log(`IMC formatado: ${imc.toFixed(2)}`);
```

Saída:
```
Peso: 78.5 kg
Altura: 1.75 m
IMC calculado: 25.632653061224488
IMC formatado: 25.63
```

**Nota:** `.toFixed(2)` formata o número para mostrar apenas 2 casas decimais.

---

### Exercício 1.3: Montando uma Mensagem

Crie variáveis para nome da academia, horário de funcionamento, e telefone. Depois, monte uma mensagem de boas-vindas usando template literals.

**✅ Resposta:**

```javascript
const nomeAcademia = "Studio Fit";
const horarioFuncionamento = "6h às 22h";
const telefone = "(11) 99999-8888";

let mensagemBoasVindas = `
========================================
Bem-vindo ao ${nomeAcademia}!

Funcionamos de segunda a sábado
Horário: ${horarioFuncionamento}

Dúvidas? Entre em contato:
${telefone}
========================================
`;

console.log(mensagemBoasVindas);
```

**Nota:** Template literals permitem quebras de linha naturais, o que facilita criar textos formatados.

---

# Semana 2: Estruturas de Decisão

## Fazendo o Programa Tomar Decisões

Até agora, nosso código executa linha por linha, sempre igual. Mas e se quisermos que ele faça coisas diferentes dependendo da situação?

Por exemplo:
- Se o aluno está com mensalidade em dia, libera a catraca
- Se não está, mostra mensagem de pendência

Para isso, usamos **estruturas de decisão**.

## if: A Estrutura Básica

```javascript
if (condição) {
    // código que roda SE a condição for verdadeira
}
```

Exemplo:

```javascript
let mensalidadeEmDia = true;

if (mensalidadeEmDia) {
    console.log("Entrada liberada! Bom treino!");
}
```

A condição dentro dos parênteses é avaliada. Se for `true`, o código dentro das chaves executa. Se for `false`, pula.

## if...else: Duas Opções

```javascript
let mensalidadeEmDia = false;

if (mensalidadeEmDia) {
    console.log("Entrada liberada! Bom treino!");
} else {
    console.log("Mensalidade pendente. Procure a recepção.");
}
```

- Se a condição for `true` → executa o primeiro bloco
- Se for `false` → executa o bloco do `else`

## Operadores de Comparação

Para criar condições, usamos operadores de comparação:

| Operador | Significado | Exemplo | Resultado |
|----------|-------------|---------|-----------|
| `===` | Igual a | `5 === 5` | true |
| `!==` | Diferente de | `5 !== 3` | true |
| `>` | Maior que | `10 > 5` | true |
| `<` | Menor que | `3 < 8` | true |
| `>=` | Maior ou igual | `5 >= 5` | true |
| `<=` | Menor ou igual | `4 <= 3` | false |

⚠️ **Importante:** Use `===` (três iguais), não `==` (dois iguais). O de três iguais é mais seguro.

### Exemplos:

```javascript
let idade = 17;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
// Resultado: "Menor de idade"

let temperatura = 38.5;

if (temperatura > 37.5) {
    console.log("Aluno com febre. Não deve treinar.");
}
```

## if...else if...else: Múltiplas Opções

Quando você tem mais de duas possibilidades:

```javascript
let imc = 26.5;

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc < 25) {
    console.log("Peso normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}
// Resultado: "Sobrepeso"
```

O programa verifica cada condição na ordem. Quando encontra uma verdadeira, executa aquele bloco e pula o resto.

## Operadores Lógicos: Combinando Condições

Às vezes você precisa verificar mais de uma coisa:

### && (E): Ambas precisam ser verdadeiras

```javascript
let idade = 25;
let mensalidadeEmDia = true;

if (idade >= 18 && mensalidadeEmDia) {
    console.log("Acesso liberado");
}
// Só libera se tiver 18+ E mensalidade em dia
```

### || (OU): Pelo menos uma precisa ser verdadeira

```javascript
let plano = "premium";

if (plano === "premium" || plano === "vip") {
    console.log("Acesso à área exclusiva liberado");
}
// Libera se for premium OU vip
```

### ! (NÃO): Inverte o valor

```javascript
let alunoAtivo = false;

if (!alunoAtivo) {
    console.log("Aluno inativo no sistema");
}
// !false vira true, então entra no if
```

## Tabela Verdade (Referência)

**&& (E):**
| A | B | A && B |
|---|---|--------|
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |

**|| (OU):**
| A | B | A \|\| B |
|---|---|---------|
| true | true | true |
| true | false | true |
| false | true | true |
| false | false | false |

## Guard Clauses: Um Padrão Útil

Em vez de aninhar muitos if/else, podemos usar "guard clauses" (cláusulas de guarda) que saem cedo quando algo está errado:

```javascript
// Com if/else aninhado (mais difícil de ler)
function verificarAcesso(idade, mensalidadeEmDia, avaliacaoFeita) {
    if (idade >= 16) {
        if (mensalidadeEmDia) {
            if (avaliacaoFeita) {
                console.log("Acesso liberado");
            } else {
                console.log("Faça a avaliação física primeiro");
            }
        } else {
            console.log("Regularize a mensalidade");
        }
    } else {
        console.log("Idade mínima: 16 anos");
    }
}

// Com guard clauses (mais fácil de ler)
function verificarAcesso(idade, mensalidadeEmDia, avaliacaoFeita) {
    if (idade < 16) {
        console.log("Idade mínima: 16 anos");
        return;
    }

    if (!mensalidadeEmDia) {
        console.log("Regularize a mensalidade");
        return;
    }

    if (!avaliacaoFeita) {
        console.log("Faça a avaliação física primeiro");
        return;
    }

    console.log("Acesso liberado");
}
```

O segundo estilo é mais fácil de ler porque você vê cada verificação separadamente.

---

## Exercícios da Semana 2

### Exercício 2.1: Verificação de Idade

Crie um programa que recebe uma idade e mostra:
- "Criança" se menor que 12
- "Adolescente" se entre 12 e 17
- "Adulto" se entre 18 e 59
- "Idoso" se 60 ou mais

**✅ Resposta:**

```javascript
let idade = 35;

if (idade < 12) {
    console.log("Criança");
} else if (idade <= 17) {
    console.log("Adolescente");
} else if (idade <= 59) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}

// Teste com diferentes valores:
// idade = 8   → "Criança"
// idade = 15  → "Adolescente"
// idade = 35  → "Adulto"
// idade = 65  → "Idoso"
```

---

### Exercício 2.2: Classificação de IMC

Crie um programa que calcula o IMC e mostra a classificação:
- Abaixo de 18.5: "Abaixo do peso"
- 18.5 a 24.9: "Peso normal"
- 25 a 29.9: "Sobrepeso"
- 30 ou mais: "Obesidade"

**✅ Resposta:**

```javascript
let peso = 85;
let altura = 1.75;

let imc = peso / (altura * altura);
console.log(`IMC: ${imc.toFixed(2)}`);

if (imc < 18.5) {
    console.log("Classificação: Abaixo do peso");
} else if (imc < 25) {
    console.log("Classificação: Peso normal");
} else if (imc < 30) {
    console.log("Classificação: Sobrepeso");
} else {
    console.log("Classificação: Obesidade");
}

// Com peso=85 e altura=1.75:
// IMC: 27.76
// Classificação: Sobrepeso
```

---

### Exercício 2.3: Sistema de Acesso

Crie um programa que verifica se um aluno pode acessar a academia. As regras são:
- Deve ter 16 anos ou mais
- Deve estar com mensalidade em dia
- Deve ter feito avaliação física

Se todas as condições forem atendidas, mostra "Acesso liberado". Caso contrário, mostra qual requisito está faltando.

**✅ Resposta:**

```javascript
let idade = 17;
let mensalidadeEmDia = true;
let avaliacaoFisicaFeita = false;

console.log("=== Verificação de Acesso ===");
console.log(`Idade: ${idade}`);
console.log(`Mensalidade em dia: ${mensalidadeEmDia}`);
console.log(`Avaliação física: ${avaliacaoFisicaFeita}`);
console.log("---");

// Usando guard clauses
if (idade < 16) {
    console.log("❌ Acesso negado: idade mínima é 16 anos");
} else if (!mensalidadeEmDia) {
    console.log("❌ Acesso negado: mensalidade pendente");
} else if (!avaliacaoFisicaFeita) {
    console.log("❌ Acesso negado: avaliação física pendente");
} else {
    console.log("✅ Acesso liberado! Bom treino!");
}

// Alternativa verificando tudo de uma vez:
// if (idade >= 16 && mensalidadeEmDia && avaliacaoFisicaFeita) {
//     console.log("✅ Acesso liberado! Bom treino!");
// } else {
//     console.log("❌ Acesso negado");
// }
```

---

### Exercício 2.4: Desconto por Plano

Crie um programa que calcula o valor com desconto baseado no plano:
- Plano mensal: sem desconto
- Plano trimestral: 10% de desconto
- Plano semestral: 15% de desconto
- Plano anual: 25% de desconto

Valor base da mensalidade: R$ 150,00

**✅ Resposta:**

```javascript
const valorBase = 150;
let plano = "semestral";

let desconto = 0;
let valorFinal = 0;

if (plano === "mensal") {
    desconto = 0;
} else if (plano === "trimestral") {
    desconto = 0.10;
} else if (plano === "semestral") {
    desconto = 0.15;
} else if (plano === "anual") {
    desconto = 0.25;
} else {
    console.log("Plano inválido!");
}

valorFinal = valorBase - (valorBase * desconto);

console.log(`Plano escolhido: ${plano}`);
console.log(`Valor base: R$ ${valorBase.toFixed(2)}`);
console.log(`Desconto: ${desconto * 100}%`);
console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);

// Com plano "semestral":
// Plano escolhido: semestral
// Valor base: R$ 150.00
// Desconto: 15%
// Valor final: R$ 127.50
```

---

# Semana 3: Repetição e Listas

## O Problema: Fazer Algo Muitas Vezes

Imagine que você precisa mostrar os nomes de 5 alunos:

```javascript
console.log("Maria");
console.log("João");
console.log("Ana");
console.log("Carlos");
console.log("Pedro");
```

Funciona, mas e se forem 500 alunos? E se a lista mudar?

Para isso, usamos **arrays** (listas) e **loops** (repetições).

## Arrays: Listas de Coisas

Um array é uma lista ordenada de valores:

```javascript
let alunos = ["Maria", "João", "Ana", "Carlos", "Pedro"];
```

Visualizando:

```
Índice:    0        1       2        3         4
        ┌───────┬───────┬───────┬─────────┬────────┐
alunos: │"Maria"│"João" │ "Ana" │"Carlos" │"Pedro" │
        └───────┴───────┴───────┴─────────┴────────┘
```

⚠️ **Importante:** Os índices começam em 0, não em 1!

### Acessando Elementos

```javascript
let alunos = ["Maria", "João", "Ana", "Carlos", "Pedro"];

console.log(alunos[0]);  // Maria (primeiro)
console.log(alunos[1]);  // João (segundo)
console.log(alunos[4]);  // Pedro (último)
console.log(alunos[5]);  // undefined (não existe)
```

### Propriedades e Métodos Úteis

```javascript
let alunos = ["Maria", "João", "Ana"];

// Quantos elementos tem?
console.log(alunos.length);  // 3

// Adicionar no final
alunos.push("Carlos");
console.log(alunos);  // ["Maria", "João", "Ana", "Carlos"]

// Remover do final
let removido = alunos.pop();
console.log(removido);  // "Carlos"
console.log(alunos);    // ["Maria", "João", "Ana"]

// Verificar se existe
console.log(alunos.includes("Maria"));  // true
console.log(alunos.includes("Pedro"));  // false

// Encontrar o índice
console.log(alunos.indexOf("Ana"));  // 2
```

### Arrays com Diferentes Tipos

Arrays podem guardar qualquer coisa:

```javascript
let numeros = [10, 20, 30, 40];
let misturado = ["texto", 42, true, null];
let presencas = [true, true, false, true, false];
```

## for: O Loop Clássico

O loop `for` repete um bloco de código um número específico de vezes:

```javascript
for (let i = 0; i < 5; i++) {
    console.log(`Número: ${i}`);
}
// Número: 0
// Número: 1
// Número: 2
// Número: 3
// Número: 4
```

Vamos destrinchar:

```javascript
for (let i = 0; i < 5; i++) {
//   ─────────  ─────  ───
//      │         │     │
//      │         │     └── Incremento: o que fazer após cada repetição
//      │         └── Condição: continuar enquanto isso for true
//      └── Inicialização: onde começar
```

### Percorrendo um Array com for

```javascript
let alunos = ["Maria", "João", "Ana", "Carlos", "Pedro"];

for (let i = 0; i < alunos.length; i++) {
    console.log(`${i + 1}. ${alunos[i]}`);
}
// 1. Maria
// 2. João
// 3. Ana
// 4. Carlos
// 5. Pedro
```

## for...of: Forma Mais Simples

Quando você só quer percorrer os elementos (sem precisar do índice):

```javascript
let alunos = ["Maria", "João", "Ana", "Carlos", "Pedro"];

for (let aluno of alunos) {
    console.log(`Olá, ${aluno}!`);
}
// Olá, Maria!
// Olá, João!
// Olá, Ana!
// Olá, Carlos!
// Olá, Pedro!
```

Mais limpo e fácil de ler!

## forEach: Executando Função para Cada Item

Outra forma comum:

```javascript
let alunos = ["Maria", "João", "Ana", "Carlos", "Pedro"];

alunos.forEach(function(aluno) {
    console.log(`Bem-vindo(a), ${aluno}!`);
});
```

Ou com arrow function (forma mais moderna):

```javascript
alunos.forEach((aluno) => {
    console.log(`Bem-vindo(a), ${aluno}!`);
});
```

Se precisar do índice:

```javascript
alunos.forEach((aluno, indice) => {
    console.log(`${indice + 1}. ${aluno}`);
});
```

## while: Repetir Enquanto Condição For Verdadeira

```javascript
let contador = 0;

while (contador < 5) {
    console.log(`Contador: ${contador}`);
    contador++;
}
// Contador: 0
// Contador: 1
// Contador: 2
// Contador: 3
// Contador: 4
```

⚠️ **Cuidado:** Se a condição nunca ficar false, o loop roda para sempre (loop infinito)!

## map: Transformando Arrays

O `map` cria um novo array transformando cada elemento:

```javascript
let numeros = [1, 2, 3, 4, 5];

let dobrados = numeros.map((numero) => {
    return numero * 2;
});

console.log(dobrados);  // [2, 4, 6, 8, 10]
```

Exemplo prático — extrair só os nomes:

```javascript
let alunos = [
    { nome: "Maria", idade: 25 },
    { nome: "João", idade: 30 },
    { nome: "Ana", idade: 22 }
];

let nomes = alunos.map((aluno) => {
    return aluno.nome;
});

console.log(nomes);  // ["Maria", "João", "Ana"]
```

## filter: Filtrando Arrays

O `filter` cria um novo array apenas com elementos que passam em um teste:

```javascript
let idades = [15, 22, 17, 30, 16, 25];

let maioresDeIdade = idades.filter((idade) => {
    return idade >= 18;
});

console.log(maioresDeIdade);  // [22, 30, 25]
```

Exemplo prático — alunos com mensalidade em dia:

```javascript
let alunos = [
    { nome: "Maria", mensalidadeEmDia: true },
    { nome: "João", mensalidadeEmDia: false },
    { nome: "Ana", mensalidadeEmDia: true }
];

let alunosEmDia = alunos.filter((aluno) => {
    return aluno.mensalidadeEmDia;
});

console.log(alunosEmDia);
// [{ nome: "Maria", mensalidadeEmDia: true }, { nome: "Ana", mensalidadeEmDia: true }]
```

## find: Encontrando Um Elemento

O `find` retorna o primeiro elemento que passa no teste:

```javascript
let alunos = [
    { nome: "Maria", cpf: "111" },
    { nome: "João", cpf: "222" },
    { nome: "Ana", cpf: "333" }
];

let encontrado = alunos.find((aluno) => {
    return aluno.cpf === "222";
});

console.log(encontrado);  // { nome: "João", cpf: "222" }
```

---

## Exercícios da Semana 3

### Exercício 3.1: Lista de Chamada

Crie um array com 5 nomes de alunos. Depois, use um loop para mostrar a lista numerada.

**✅ Resposta:**

```javascript
let alunos = ["Maria Silva", "João Santos", "Ana Costa", "Carlos Oliveira", "Pedro Lima"];

console.log("=== Lista de Chamada ===");

// Usando for tradicional
for (let i = 0; i < alunos.length; i++) {
    console.log(`${i + 1}. ${alunos[i]}`);
}

// Alternativa com forEach
console.log("\n=== Usando forEach ===");
alunos.forEach((aluno, indice) => {
    console.log(`${indice + 1}. ${aluno}`);
});
```

---

### Exercício 3.2: Contando Presenças

Dado um array de presenças (true = presente, false = falta), conte quantas presenças e quantas faltas.

```javascript
let presencas = [true, true, false, true, false, true, true, false, true, true];
```

**✅ Resposta:**

```javascript
let presencas = [true, true, false, true, false, true, true, false, true, true];

let quantidadePresencas = 0;
let quantidadeFaltas = 0;

for (let presenca of presencas) {
    if (presenca) {
        quantidadePresencas++;
    } else {
        quantidadeFaltas++;
    }
}

console.log(`Total de aulas: ${presencas.length}`);
console.log(`Presenças: ${quantidadePresencas}`);
console.log(`Faltas: ${quantidadeFaltas}`);
console.log(`Frequência: ${((quantidadePresencas / presencas.length) * 100).toFixed(1)}%`);

// Saída:
// Total de aulas: 10
// Presenças: 7
// Faltas: 3
// Frequência: 70.0%
```

---

### Exercício 3.3: Filtrando Alunos

Dado um array de alunos com nome e idade, crie um novo array apenas com os alunos maiores de idade (18+).

```javascript
let alunos = [
    { nome: "Maria", idade: 25 },
    { nome: "João", idade: 16 },
    { nome: "Ana", idade: 19 },
    { nome: "Carlos", idade: 17 },
    { nome: "Pedro", idade: 22 }
];
```

**✅ Resposta:**

```javascript
let alunos = [
    { nome: "Maria", idade: 25 },
    { nome: "João", idade: 16 },
    { nome: "Ana", idade: 19 },
    { nome: "Carlos", idade: 17 },
    { nome: "Pedro", idade: 22 }
];

// Usando filter
let alunosMaioresDeIdade = alunos.filter((aluno) => {
    return aluno.idade >= 18;
});

console.log("=== Alunos Maiores de Idade ===");
alunosMaioresDeIdade.forEach((aluno) => {
    console.log(`${aluno.nome} - ${aluno.idade} anos`);
});

// Saída:
// === Alunos Maiores de Idade ===
// Maria - 25 anos
// Ana - 19 anos
// Pedro - 22 anos

// Mostrando também os menores
let alunosMenoresDeIdade = alunos.filter((aluno) => {
    return aluno.idade < 18;
});

console.log("\n=== Alunos Menores de Idade ===");
alunosMenoresDeIdade.forEach((aluno) => {
    console.log(`${aluno.nome} - ${aluno.idade} anos`);
});
```

---

### Exercício 3.4: Buscando Aluno

Usando o mesmo array de alunos, encontre o aluno chamado "Ana" e mostre suas informações.

**✅ Resposta:**

```javascript
let alunos = [
    { nome: "Maria", idade: 25 },
    { nome: "João", idade: 16 },
    { nome: "Ana", idade: 19 },
    { nome: "Carlos", idade: 17 },
    { nome: "Pedro", idade: 22 }
];

let alunoEncontrado = alunos.find((aluno) => {
    return aluno.nome === "Ana";
});

if (alunoEncontrado) {
    console.log("Aluno encontrado!");
    console.log(`Nome: ${alunoEncontrado.nome}`);
    console.log(`Idade: ${alunoEncontrado.idade} anos`);
} else {
    console.log("Aluno não encontrado.");
}

// Saída:
// Aluno encontrado!
// Nome: Ana
// Idade: 19 anos
```

---

### Exercício 3.5: Calculando Média de Idades

Calcule a média de idades de todos os alunos.

**✅ Resposta:**

```javascript
let alunos = [
    { nome: "Maria", idade: 25 },
    { nome: "João", idade: 16 },
    { nome: "Ana", idade: 19 },
    { nome: "Carlos", idade: 17 },
    { nome: "Pedro", idade: 22 }
];

// Somando todas as idades
let somaIdades = 0;

for (let aluno of alunos) {
    somaIdades = somaIdades + aluno.idade;
}

let mediaIdades = somaIdades / alunos.length;

console.log(`Total de alunos: ${alunos.length}`);
console.log(`Soma das idades: ${somaIdades}`);
console.log(`Média de idades: ${mediaIdades.toFixed(1)} anos`);

// Saída:
// Total de alunos: 5
// Soma das idades: 99
// Média de idades: 19.8 anos

// Alternativa mais avançada usando reduce:
// let soma = alunos.reduce((total, aluno) => total + aluno.idade, 0);
// let media = soma / alunos.length;
```

---

# Semana 4: Funções e Objetos

## O Que São Funções?

Uma função é um **bloco de código reutilizável** que faz uma tarefa específica.

Analogia: Pense numa receita. Em vez de reescrever todos os passos toda vez que quer fazer um bolo, você guarda a receita e só diz "faça o bolo".

### Criando uma Função

```javascript
function dizerOla() {
    console.log("Olá!");
}

// A função existe, mas ainda não fez nada...

// Para executar (chamar) a função:
dizerOla();  // Olá!
dizerOla();  // Olá!
dizerOla();  // Olá!
```

### Funções com Parâmetros

Funções podem receber informações:

```javascript
function dizerOlaPara(nome) {
    console.log(`Olá, ${nome}!`);
}

dizerOlaPara("Maria");   // Olá, Maria!
dizerOlaPara("João");    // Olá, João!
dizerOlaPara("Carlos");  // Olá, Carlos!
```

Múltiplos parâmetros:

```javascript
function apresentar(nome, idade, cidade) {
    console.log(`${nome} tem ${idade} anos e mora em ${cidade}.`);
}

apresentar("Maria", 25, "São Paulo");
// Maria tem 25 anos e mora em São Paulo.
```

### Funções que Retornam Valores

Funções podem calcular algo e devolver o resultado:

```javascript
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

let meuIMC = calcularIMC(75, 1.80);
console.log(`Meu IMC: ${meuIMC.toFixed(2)}`);  // Meu IMC: 23.15

let imcDoJoao = calcularIMC(90, 1.75);
console.log(`IMC do João: ${imcDoJoao.toFixed(2)}`);  // IMC do João: 29.39
```

O `return` faz duas coisas:
1. Devolve o valor
2. Encerra a função (código após return não executa)

### Arrow Functions (Funções Flecha)

Uma forma mais curta de escrever funções:

```javascript
// Função tradicional
function dobrar(numero) {
    return numero * 2;
}

// Arrow function (faz a mesma coisa)
const dobrar = (numero) => {
    return numero * 2;
};

// Arrow function simplificada (quando tem só uma linha)
const dobrar = (numero) => numero * 2;
```

As três fazem a mesma coisa! Arrow functions são muito usadas com map, filter, forEach.

## O Que São Objetos?

Um objeto agrupa informações relacionadas em uma única "coisa":

```javascript
let aluno = {
    nome: "Maria Silva",
    idade: 25,
    peso: 65,
    altura: 1.68,
    mensalidadeEmDia: true,
    plano: "trimestral"
};
```

É como uma ficha cadastral: várias informações sobre a mesma pessoa.

### Acessando Propriedades

```javascript
let aluno = {
    nome: "Maria Silva",
    idade: 25,
    plano: "trimestral"
};

// Notação de ponto (mais comum)
console.log(aluno.nome);   // Maria Silva
console.log(aluno.idade);  // 25

// Notação de colchetes (útil quando o nome vem de uma variável)
console.log(aluno["plano"]);  // trimestral

let campo = "idade";
console.log(aluno[campo]);  // 25
```

### Modificando Propriedades

```javascript
let aluno = {
    nome: "Maria Silva",
    idade: 25
};

// Modificar valor existente
aluno.idade = 26;

// Adicionar nova propriedade
aluno.telefone = "11999998888";

console.log(aluno);
// { nome: "Maria Silva", idade: 26, telefone: "11999998888" }
```

### Objetos Dentro de Arrays

A combinação mais comum em aplicativos reais:

```javascript
let alunos = [
    { nome: "Maria", idade: 25, mensalidadeEmDia: true },
    { nome: "João", idade: 30, mensalidadeEmDia: false },
    { nome: "Ana", idade: 22, mensalidadeEmDia: true }
];

// Acessando o primeiro aluno
console.log(alunos[0].nome);  // Maria

// Percorrendo todos
for (let aluno of alunos) {
    console.log(`${aluno.nome} - ${aluno.idade} anos`);
}
```

### Desestruturação (Destructuring)

Uma forma prática de extrair valores de objetos:

```javascript
let aluno = {
    nome: "Maria Silva",
    idade: 25,
    plano: "trimestral"
};

// Sem desestruturação
let nome = aluno.nome;
let idade = aluno.idade;

// Com desestruturação (faz a mesma coisa, mais limpo)
let { nome, idade, plano } = aluno;

console.log(nome);   // Maria Silva
console.log(idade);  // 25
console.log(plano);  // trimestral
```

Muito útil em parâmetros de função:

```javascript
function mostrarAluno({ nome, idade }) {
    console.log(`${nome} tem ${idade} anos`);
}

mostrarAluno({ nome: "João", idade: 30, plano: "anual" });
// João tem 30 anos
```

## Combinando Funções e Objetos

Vamos criar um mini sistema de academia:

```javascript
// ========================================
// Dados
// ========================================
let alunos = [
    { id: 1, nome: "Maria Silva", idade: 25, mensalidadeEmDia: true },
    { id: 2, nome: "João Santos", idade: 30, mensalidadeEmDia: false },
    { id: 3, nome: "Ana Costa", idade: 22, mensalidadeEmDia: true },
    { id: 4, nome: "Carlos Lima", idade: 17, mensalidadeEmDia: true }
];

// ========================================
// Funções
// ========================================

// Busca um aluno pelo ID
function buscarAlunoPorId(id) {
    let alunoEncontrado = alunos.find((aluno) => {
        return aluno.id === id;
    });
    return alunoEncontrado;
}

// Retorna apenas alunos com mensalidade em dia
function buscarAlunosEmDia() {
    let alunosEmDia = alunos.filter((aluno) => {
        return aluno.mensalidadeEmDia;
    });
    return alunosEmDia;
}

// Verifica se o aluno pode acessar a academia
function verificarAcesso(id) {
    let aluno = buscarAlunoPorId(id);

    if (!aluno) {
        return { liberado: false, motivo: "Aluno não encontrado" };
    }

    if (aluno.idade < 16) {
        return { liberado: false, motivo: "Idade mínima: 16 anos" };
    }

    if (!aluno.mensalidadeEmDia) {
        return { liberado: false, motivo: "Mensalidade pendente" };
    }

    return { liberado: true, motivo: "Acesso liberado" };
}

// ========================================
// Usando as funções
// ========================================

console.log("=== Teste: Buscar Aluno ===");
let aluno = buscarAlunoPorId(2);
console.log(aluno);
// { id: 2, nome: "João Santos", idade: 30, mensalidadeEmDia: false }

console.log("\n=== Teste: Alunos em Dia ===");
let emDia = buscarAlunosEmDia();
emDia.forEach((a) => console.log(a.nome));
// Maria Silva
// Ana Costa
// Carlos Lima

console.log("\n=== Teste: Verificar Acesso ===");
console.log(verificarAcesso(1));  // { liberado: true, motivo: "Acesso liberado" }
console.log(verificarAcesso(2));  // { liberado: false, motivo: "Mensalidade pendente" }
console.log(verificarAcesso(4));  // { liberado: false, motivo: "Idade mínima: 16 anos" }
console.log(verificarAcesso(99)); // { liberado: false, motivo: "Aluno não encontrado" }
```

---

## Exercícios da Semana 4

### Exercício 4.1: Função de Cálculo de IMC

Crie uma função `calcularIMC` que recebe peso e altura e retorna o IMC. Crie outra função `classificarIMC` que recebe um IMC e retorna a classificação ("Abaixo do peso", "Normal", "Sobrepeso", "Obesidade").

**✅ Resposta:**

```javascript
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 25) {
        return "Peso normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

// Testando
let imc1 = calcularIMC(70, 1.75);
console.log(`IMC: ${imc1.toFixed(2)} - ${classificarIMC(imc1)}`);
// IMC: 22.86 - Peso normal

let imc2 = calcularIMC(95, 1.70);
console.log(`IMC: ${imc2.toFixed(2)} - ${classificarIMC(imc2)}`);
// IMC: 32.87 - Obesidade

// Podemos combinar as duas:
function analisarPeso(peso, altura) {
    let imc = calcularIMC(peso, altura);
    let classificacao = classificarIMC(imc);

    return {
        peso: peso,
        altura: altura,
        imc: imc.toFixed(2),
        classificacao: classificacao
    };
}

console.log(analisarPeso(65, 1.68));
// { peso: 65, altura: 1.68, imc: "23.03", classificacao: "Peso normal" }
```

---

### Exercício 4.2: Objeto Aluno Completo

Crie um objeto representando um aluno com: nome, idade, email, telefone, plano, data de matrícula, e um array de presenças (true/false). Depois, crie uma função que recebe esse aluno e retorna a porcentagem de frequência.

**✅ Resposta:**

```javascript
let aluno = {
    nome: "Ricardo Oliveira",
    idade: 28,
    email: "ricardo@email.com",
    telefone: "11988887777",
    plano: "trimestral",
    dataMatricula: "2024-01-15",
    presencas: [true, true, true, false, true, true, false, true, true, true]
};

function calcularFrequencia(alunoParam) {
    let totalAulas = alunoParam.presencas.length;

    if (totalAulas === 0) {
        return 0;
    }

    let presencasContadas = 0;

    for (let presenca of alunoParam.presencas) {
        if (presenca) {
            presencasContadas++;
        }
    }

    let frequencia = (presencasContadas / totalAulas) * 100;
    return frequencia;
}

// Testando
let frequencia = calcularFrequencia(aluno);

console.log(`Aluno: ${aluno.nome}`);
console.log(`Total de aulas: ${aluno.presencas.length}`);
console.log(`Frequência: ${frequencia.toFixed(1)}%`);

// Saída:
// Aluno: Ricardo Oliveira
// Total de aulas: 10
// Frequência: 80.0%
```

---

### Exercício 4.3: Sistema de Busca

Crie um array de alunos (pelo menos 5) e implemente as seguintes funções:
- `buscarPorNome(nome)` - retorna o aluno com aquele nome
- `buscarPorPlano(plano)` - retorna todos os alunos daquele plano
- `listarNomes()` - retorna um array apenas com os nomes

**✅ Resposta:**

```javascript
let alunos = [
    { id: 1, nome: "Maria Silva", idade: 25, plano: "mensal" },
    { id: 2, nome: "João Santos", idade: 30, plano: "anual" },
    { id: 3, nome: "Ana Costa", idade: 22, plano: "trimestral" },
    { id: 4, nome: "Carlos Lima", idade: 35, plano: "anual" },
    { id: 5, nome: "Pedro Souza", idade: 28, plano: "mensal" }
];

function buscarPorNome(nome) {
    let alunoEncontrado = alunos.find((aluno) => {
        return aluno.nome === nome;
    });
    return alunoEncontrado;
}

function buscarPorPlano(plano) {
    let alunosDoPlano = alunos.filter((aluno) => {
        return aluno.plano === plano;
    });
    return alunosDoPlano;
}

function listarNomes() {
    let nomes = alunos.map((aluno) => {
        return aluno.nome;
    });
    return nomes;
}

// Testando buscarPorNome
console.log("=== Buscar por Nome ===");
let maria = buscarPorNome("Maria Silva");
console.log(maria);
// { id: 1, nome: "Maria Silva", idade: 25, plano: "mensal" }

let inexistente = buscarPorNome("Fulano");
console.log(inexistente);
// undefined

// Testando buscarPorPlano
console.log("\n=== Buscar por Plano (anual) ===");
let alunosAnuais = buscarPorPlano("anual");
alunosAnuais.forEach((aluno) => {
    console.log(`${aluno.nome} - ${aluno.plano}`);
});
// João Santos - anual
// Carlos Lima - anual

// Testando listarNomes
console.log("\n=== Lista de Nomes ===");
let todosNomes = listarNomes();
console.log(todosNomes);
// ["Maria Silva", "João Santos", "Ana Costa", "Carlos Lima", "Pedro Souza"]
```

---

### Exercício 4.4: Relatório de Turma

Crie uma função `gerarRelatorio` que recebe um array de alunos e retorna um objeto com:
- Total de alunos
- Média de idades
- Quantidade por plano (mensal, trimestral, anual)

**✅ Resposta:**

```javascript
let alunos = [
    { nome: "Maria", idade: 25, plano: "mensal" },
    { nome: "João", idade: 30, plano: "anual" },
    { nome: "Ana", idade: 22, plano: "trimestral" },
    { nome: "Carlos", idade: 35, plano: "anual" },
    { nome: "Pedro", idade: 28, plano: "mensal" },
    { nome: "Julia", idade: 24, plano: "trimestral" },
    { nome: "Lucas", idade: 31, plano: "anual" }
];

function gerarRelatorio(listaAlunos) {
    // Total de alunos
    let totalAlunos = listaAlunos.length;

    // Média de idades
    let somaIdades = 0;
    for (let aluno of listaAlunos) {
        somaIdades = somaIdades + aluno.idade;
    }
    let mediaIdades = somaIdades / totalAlunos;

    // Contagem por plano
    let quantidadeMensal = 0;
    let quantidadeTrimestral = 0;
    let quantidadeAnual = 0;

    for (let aluno of listaAlunos) {
        if (aluno.plano === "mensal") {
            quantidadeMensal++;
        } else if (aluno.plano === "trimestral") {
            quantidadeTrimestral++;
        } else if (aluno.plano === "anual") {
            quantidadeAnual++;
        }
    }

    // Montando o objeto de retorno
    let relatorio = {
        totalAlunos: totalAlunos,
        mediaIdades: mediaIdades.toFixed(1),
        porPlano: {
            mensal: quantidadeMensal,
            trimestral: quantidadeTrimestral,
            anual: quantidadeAnual
        }
    };

    return relatorio;
}

// Testando
let relatorio = gerarRelatorio(alunos);

console.log("=== Relatório da Turma ===");
console.log(`Total de alunos: ${relatorio.totalAlunos}`);
console.log(`Média de idades: ${relatorio.mediaIdades} anos`);
console.log(`Plano Mensal: ${relatorio.porPlano.mensal} alunos`);
console.log(`Plano Trimestral: ${relatorio.porPlano.trimestral} alunos`);
console.log(`Plano Anual: ${relatorio.porPlano.anual} alunos`);

// Saída:
// === Relatório da Turma ===
// Total de alunos: 7
// Média de idades: 27.9 anos
// Plano Mensal: 2 alunos
// Plano Trimestral: 2 alunos
// Plano Anual: 3 alunos
```

---

# Projeto Final da Fase 1: Mini Sistema de Academia

Agora você vai juntar tudo o que aprendeu em um projeto!

## O Desafio

Crie um arquivo `sistema-academia.js` que tenha:

1. Um array de alunos (pelo menos 5) com: id, nome, idade, peso, altura, plano, mensalidadeEmDia, e presencas (array de booleans)

2. As seguintes funções:
   - `listarTodosAlunos()` - mostra todos os alunos
   - `buscarAluno(id)` - encontra um aluno pelo ID
   - `calcularIMCAluno(id)` - calcula e retorna o IMC de um aluno
   - `calcularFrequenciaAluno(id)` - calcula a frequência em %
   - `verificarAcessoAluno(id)` - verifica se pode entrar (16+, mensalidade em dia)
   - `gerarRelatorioGeral()` - estatísticas gerais da academia

3. Um "menu" no final que demonstra cada função funcionando

## Dica

Comece simples! Faça uma função de cada vez, teste, e só depois passe para a próxima.

---

**✅ Resposta Completa:**

```javascript
// ============================================================
// MINI SISTEMA DE ACADEMIA - Projeto Final Fase 1
// ============================================================

// ============================================================
// DADOS
// ============================================================

let alunos = [
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
    {
        id: 2,
        nome: "João Santos",
        idade: 30,
        peso: 85,
        altura: 1.78,
        plano: "anual",
        mensalidadeEmDia: false,
        presencas: [true, false, true, true, false, true, false, true, true, false]
    },
    {
        id: 3,
        nome: "Ana Costa",
        idade: 22,
        peso: 58,
        altura: 1.62,
        plano: "mensal",
        mensalidadeEmDia: true,
        presencas: [true, true, true, true, true, true, true, true, false, true]
    },
    {
        id: 4,
        nome: "Carlos Lima",
        idade: 15,
        peso: 70,
        altura: 1.72,
        plano: "mensal",
        mensalidadeEmDia: true,
        presencas: [true, true, false, true, true]
    },
    {
        id: 5,
        nome: "Pedro Souza",
        idade: 35,
        peso: 92,
        altura: 1.80,
        plano: "anual",
        mensalidadeEmDia: true,
        presencas: [true, true, true, true, true, true, true, true, true, true]
    }
];

// ============================================================
// FUNÇÕES
// ============================================================

// Lista todos os alunos de forma formatada
function listarTodosAlunos() {
    console.log("=== Lista de Alunos ===");

    for (let aluno of alunos) {
        let statusMensalidade = aluno.mensalidadeEmDia ? "Em dia" : "Pendente";
        console.log(`[${aluno.id}] ${aluno.nome} - ${aluno.plano} - ${statusMensalidade}`);
    }

    console.log(`\nTotal: ${alunos.length} alunos`);
}

// Busca um aluno pelo ID
function buscarAluno(id) {
    let alunoEncontrado = alunos.find((aluno) => {
        return aluno.id === id;
    });
    return alunoEncontrado;
}

// Calcula o IMC de um aluno
function calcularIMCAluno(id) {
    let aluno = buscarAluno(id);

    if (!aluno) {
        return { erro: "Aluno não encontrado" };
    }

    let imc = aluno.peso / (aluno.altura * aluno.altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    return {
        nome: aluno.nome,
        peso: aluno.peso,
        altura: aluno.altura,
        imc: imc.toFixed(2),
        classificacao: classificacao
    };
}

// Calcula a frequência de um aluno
function calcularFrequenciaAluno(id) {
    let aluno = buscarAluno(id);

    if (!aluno) {
        return { erro: "Aluno não encontrado" };
    }

    let totalAulas = aluno.presencas.length;
    let presencasContadas = 0;

    for (let presenca of aluno.presencas) {
        if (presenca) {
            presencasContadas++;
        }
    }

    let frequencia = (presencasContadas / totalAulas) * 100;

    return {
        nome: aluno.nome,
        totalAulas: totalAulas,
        presencas: presencasContadas,
        faltas: totalAulas - presencasContadas,
        frequencia: frequencia.toFixed(1)
    };
}

// Verifica se o aluno pode acessar a academia
function verificarAcessoAluno(id) {
    let aluno = buscarAluno(id);

    if (!aluno) {
        return { liberado: false, motivo: "Aluno não encontrado" };
    }

    if (aluno.idade < 16) {
        return { liberado: false, motivo: "Idade mínima: 16 anos", aluno: aluno.nome };
    }

    if (!aluno.mensalidadeEmDia) {
        return { liberado: false, motivo: "Mensalidade pendente", aluno: aluno.nome };
    }

    return { liberado: true, motivo: "Acesso liberado", aluno: aluno.nome };
}

// Gera relatório geral da academia
function gerarRelatorioGeral() {
    let totalAlunos = alunos.length;

    // Média de idades
    let somaIdades = 0;
    for (let aluno of alunos) {
        somaIdades = somaIdades + aluno.idade;
    }
    let mediaIdades = somaIdades / totalAlunos;

    // Contagem de mensalidades
    let mensalidadesEmDia = 0;
    let mensalidadesPendentes = 0;

    for (let aluno of alunos) {
        if (aluno.mensalidadeEmDia) {
            mensalidadesEmDia++;
        } else {
            mensalidadesPendentes++;
        }
    }

    // Contagem por plano
    let quantidadeMensal = 0;
    let quantidadeTrimestral = 0;
    let quantidadeAnual = 0;

    for (let aluno of alunos) {
        if (aluno.plano === "mensal") {
            quantidadeMensal++;
        } else if (aluno.plano === "trimestral") {
            quantidadeTrimestral++;
        } else if (aluno.plano === "anual") {
            quantidadeAnual++;
        }
    }

    return {
        totalAlunos: totalAlunos,
        mediaIdades: mediaIdades.toFixed(1),
        mensalidades: {
            emDia: mensalidadesEmDia,
            pendentes: mensalidadesPendentes
        },
        planos: {
            mensal: quantidadeMensal,
            trimestral: quantidadeTrimestral,
            anual: quantidadeAnual
        }
    };
}

// ============================================================
// DEMONSTRAÇÃO
// ============================================================

console.log("╔════════════════════════════════════════════════════╗");
console.log("║     MINI SISTEMA DE ACADEMIA - Demonstração        ║");
console.log("╚════════════════════════════════════════════════════╝\n");

// 1. Listar todos os alunos
listarTodosAlunos();

// 2. Buscar um aluno específico
console.log("\n=== Buscar Aluno (ID: 3) ===");
let alunoBuscado = buscarAluno(3);
console.log(alunoBuscado);

// 3. Calcular IMC
console.log("\n=== IMC do Aluno (ID: 1) ===");
let resultadoIMC = calcularIMCAluno(1);
console.log(`Nome: ${resultadoIMC.nome}`);
console.log(`Peso: ${resultadoIMC.peso}kg | Altura: ${resultadoIMC.altura}m`);
console.log(`IMC: ${resultadoIMC.imc} - ${resultadoIMC.classificacao}`);

// 4. Calcular Frequência
console.log("\n=== Frequência do Aluno (ID: 2) ===");
let resultadoFrequencia = calcularFrequenciaAluno(2);
console.log(`Nome: ${resultadoFrequencia.nome}`);
console.log(`Aulas: ${resultadoFrequencia.totalAulas} | Presenças: ${resultadoFrequencia.presencas} | Faltas: ${resultadoFrequencia.faltas}`);
console.log(`Frequência: ${resultadoFrequencia.frequencia}%`);

// 5. Verificar Acesso
console.log("\n=== Verificação de Acesso ===");
console.log("Aluno ID 1:", verificarAcessoAluno(1));
console.log("Aluno ID 2:", verificarAcessoAluno(2));
console.log("Aluno ID 4:", verificarAcessoAluno(4));

// 6. Relatório Geral
console.log("\n=== Relatório Geral ===");
let relatorio = gerarRelatorioGeral();
console.log(`Total de alunos: ${relatorio.totalAlunos}`);
console.log(`Média de idades: ${relatorio.mediaIdades} anos`);
console.log(`Mensalidades em dia: ${relatorio.mensalidades.emDia}`);
console.log(`Mensalidades pendentes: ${relatorio.mensalidades.pendentes}`);
console.log(`Plano Mensal: ${relatorio.planos.mensal}`);
console.log(`Plano Trimestral: ${relatorio.planos.trimestral}`);
console.log(`Plano Anual: ${relatorio.planos.anual}`);

console.log("\n╔════════════════════════════════════════════════════╗");
console.log("║              Fim da Demonstração                   ║");
console.log("╚════════════════════════════════════════════════════╝");
```

---

# Checklist de Conclusão da Fase 1

Antes de ir para a Fase 2, confirme que você consegue:

**Variáveis e Tipos:**
- [ ] Criar variáveis com let e const
- [ ] Diferenciar string, number, boolean
- [ ] Usar template literals para montar textos

**Condições:**
- [ ] Usar if, else if, else
- [ ] Usar operadores de comparação (===, !==, >, <, >=, <=)
- [ ] Combinar condições com && e ||

**Repetições e Listas:**
- [ ] Criar e manipular arrays
- [ ] Percorrer arrays com for, for...of, forEach
- [ ] Usar filter, map, find

**Funções e Objetos:**
- [ ] Criar funções que recebem parâmetros
- [ ] Criar funções que retornam valores
- [ ] Criar e acessar propriedades de objetos
- [ ] Trabalhar com arrays de objetos

**Geral:**
- [ ] Ler código e explicar o que faz
- [ ] Usar console.log para debug
- [ ] Identificar erros básicos

**Completou tudo? Parabéns! 🎉**

Você agora tem a base de lógica de programação. Na Fase 2, vamos entender como projetos reais são organizados!

---

# Glossário da Fase 1

| Termo | Significado |
|-------|-------------|
| **Variável** | Espaço nomeado para guardar dados |
| **let** | Declara variável que pode mudar |
| **const** | Declara variável que não muda (constante) |
| **String** | Tipo de dado: texto |
| **Number** | Tipo de dado: número |
| **Boolean** | Tipo de dado: true ou false |
| **Array** | Lista ordenada de valores |
| **Objeto** | Coleção de propriedades (chave: valor) |
| **Função** | Bloco de código reutilizável |
| **Parâmetro** | Valor que a função recebe |
| **Retorno** | Valor que a função devolve |
| **Loop** | Estrutura que repete código |
| **Condição** | Teste que resulta em true ou false |
| **Índice** | Posição de um elemento no array (começa em 0) |
| **Concatenar** | Juntar strings |
| **Template literal** | String com crase que permite ${variável} |

---

**Próximo passo:** Fase 2 — Entendendo Estrutura de Projetos

*Nessa fase, você vai aprender como projetos reais são organizados e como navegar neles!*

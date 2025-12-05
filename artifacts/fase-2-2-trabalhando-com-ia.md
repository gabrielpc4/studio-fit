# Fase 2.2: Trabalhando com IA de Forma Eficiente

## Introdução

Você vai usar IA para programar. **Muito.**

E isso não é trapacear — é ser inteligente. Programadores profissionais usam IA todos os dias para:
- Escrever código mais rápido
- Entender código que não conhecem
- Resolver problemas complexos
- Aprender coisas novas

Mas existe um jeito **certo** e um jeito **errado** de usar IA.

O jeito errado: pedir código, copiar e colar sem entender, e ficar perdido quando não funciona.

O jeito certo: **conduzir** a IA como um assistente, entender o que ela propõe, e saber quando ela está errada.

Nesta fase, você vai aprender a ser o **piloto**, não o passageiro.

---

# Módulo 1: Conhecendo o Cursor

## O Que É o Cursor?

**Cursor** é um editor de código (como o VS Code) que tem IA integrada. Em vez de ficar alternando entre o editor e o ChatGPT, você conversa com a IA diretamente no editor, enquanto programa.

É como ter um colega programador sentado do seu lado, disponível 24 horas.

## Instalando o Cursor

1. Acesse: https://cursor.com
2. Baixe a versão para seu sistema (Windows, Mac ou Linux)
3. Instale normalmente
4. Abra o Cursor

Se você já usou VS Code, vai se sentir em casa — a interface é praticamente igual.

## As Formas de Usar IA no Cursor

O Cursor tem três formas principais de interagir com a IA:

### 1. Chat (Cmd+L ou Ctrl+L)

Abre uma conversa na lateral. Você pode:
- Fazer perguntas
- Pedir explicações
- Discutir ideias
- Pedir código

É como conversar com o ChatGPT, mas dentro do editor.

### 2. Composer (Cmd+I ou Ctrl+I)

Abre uma janela para fazer mudanças no código. Você descreve o que quer, e a IA:
- Cria arquivos novos
- Modifica arquivos existentes
- Mostra as mudanças antes de aplicar

Você revisa e aceita (ou rejeita) as mudanças.

### 3. Tab (Autocomplete Inteligente)

Enquanto você digita, a IA sugere completar o código. Aperte Tab para aceitar.

É sutil mas poderoso — a IA "lê" o que você está fazendo e sugere o próximo passo.

## Primeiro Teste: Conversa Simples

Abra o Cursor, crie um arquivo `teste.js`, e aperte **Cmd+L** (ou Ctrl+L) para abrir o chat.

Digite:

```
O que é uma variável em JavaScript? Explique de forma simples.
```

A IA vai responder. Leia a resposta. Faça outra pergunta se não entender algo.

Esse vai ser seu fluxo: **perguntar → ler → entender → perguntar mais se precisar**.

---

# Módulo 2: A Arte de Fazer Boas Perguntas

## Por Que a Pergunta Importa?

A qualidade da resposta da IA depende diretamente da qualidade da sua pergunta.

Pergunta vaga → Resposta genérica
Pergunta específica → Resposta útil

Veja a diferença:

**Pergunta ruim:**
```
Como faço um array?
```

**Pergunta boa:**
```
Tenho uma lista de nomes de alunos em JavaScript. 
Quero criar um array com esses nomes e depois percorrer 
a lista mostrando cada nome no console. 
Como faço isso?
```

A segunda pergunta dá contexto: o que você tem, o que quer fazer, e qual o objetivo.

## Os 4 Elementos de Uma Boa Pergunta

### 1. Contexto: O Que Você Está Fazendo

Diga em que você está trabalhando:

```
Estou criando um sistema de cadastro de alunos para uma academia.
```

### 2. Situação Atual: O Que Você Tem

Mostre o código que já existe:

```
Tenho esse código que guarda os alunos:

let alunos = [
    { nome: "Maria", idade: 25 },
    { nome: "João", idade: 30 }
];
```

### 3. Objetivo: O Que Você Quer

Seja específico sobre o resultado desejado:

```
Quero criar uma função que encontra um aluno pelo nome 
e retorna os dados dele.
```

### 4. Restrições: Como Quer Que Seja

Mencione preferências ou limitações:

```
Quero que retorne null se não encontrar o aluno.
Prefiro usar um for tradicional em vez de métodos como find().
```

## Exemplo Completo: Pergunta Bem Feita

```
Estou criando um sistema de cadastro de alunos para uma academia.

Tenho esse código:

let alunos = [
    { nome: "Maria", idade: 25, plano: "mensal" },
    { nome: "João", idade: 30, plano: "anual" }
];

Quero criar uma função que recebe o nome de um aluno e retorna 
os dados dele. Se não encontrar, deve retornar null.

Prefiro usar um loop for tradicional para eu entender melhor 
o que está acontecendo.
```

Essa pergunta vai gerar uma resposta muito mais útil do que "como acho algo num array?".

## Dica: Use o @ Para Referenciar Arquivos

No Cursor, você pode usar **@** para incluir arquivos na conversa:

```
Olha o arquivo @alunos.js e me explica o que a função 
calcularMensalidade faz.
```

A IA vai ler o arquivo e responder com base no código real.

---

# Módulo 3: Mostrando Código e Erros

## Sempre Mostre o Código Relevante

Quando algo não funciona, a IA precisa ver o código para ajudar.

**Ruim:**
```
Meu código não funciona. O que faço?
```

**Bom:**
```
Esse código deveria somar os preços, mas está retornando NaN:

function calcularTotal(itens) {
    let total = 0;
    for (let i = 0; i <= itens.length; i++) {
        total = total + itens[i].preco;
    }
    return total;
}

let produtos = [
    { nome: "Camiseta", preco: 50 },
    { nome: "Calça", preco: 100 }
];

console.log(calcularTotal(produtos)); // NaN
```

## Descreva: Esperado vs. Aconteceu

Sempre diga:
1. O que você **esperava** que acontecesse
2. O que **realmente** aconteceu

```
Esperado: Deveria mostrar 150 (soma de 50 + 100)
Aconteceu: Mostra NaN
```

Isso ajuda a IA a entender exatamente o problema.

## Inclua a Mensagem de Erro Completa

Se tem erro no console, copie a mensagem inteira:

```
Estou recebendo esse erro:

TypeError: Cannot read properties of undefined (reading 'preco')
    at calcularTotal (app.js:4:34)

Esse é o código:

[código aqui]
```

A mensagem de erro dá pistas valiosas que a IA pode usar.

## Selecionando Código no Cursor

No Cursor, você pode selecionar um trecho de código e apertar **Cmd+L** para perguntar sobre ele:

1. Selecione o código com o mouse
2. Aperte Cmd+L (ou Ctrl+L)
3. O código já aparece na conversa
4. Faça sua pergunta

Isso é mais rápido do que copiar e colar manualmente.

---

# Módulo 4: Validando Respostas da IA

## A IA Pode Errar

Isso é **muito importante**: a IA não é perfeita. Ela pode:

- Dar código que não funciona
- Usar sintaxe desatualizada
- Inventar funções que não existem
- Resolver o problema errado
- Dar uma solução complicada demais

**Você é o piloto. A IA é o copiloto.**

Você precisa verificar o que ela sugere antes de usar.

## Passo 1: Leia o Código Antes de Usar

Nunca copie código sem ler. Sempre pergunte:

- Entendo o que cada linha faz?
- Faz sentido para o meu problema?
- Parece razoável ou muito complicado?

Se não entender algo, pergunte:

```
Pode explicar o que essa parte faz?

itens.filter(item => item.ativo).map(item => item.nome)
```

## Passo 2: Teste em Partes Pequenas

Não aplique tudo de uma vez. Teste aos poucos:

1. Aplica uma parte do código
2. Testa se funciona
3. Só então adiciona a próxima parte

Se algo quebrar, você sabe exatamente o que causou.

## Passo 3: Use console.log Para Verificar

Lembra do que aprendeu na Fase 2.1? Use console.log para ver se o código está fazendo o que deveria:

```javascript
function encontrarAluno(nome) {
    console.log("Buscando aluno:", nome);  // Verificação

    for (let i = 0; i < alunos.length; i++) {
        console.log("Comparando com:", alunos[i].nome);  // Verificação

        if (alunos[i].nome === nome) {
            console.log("Encontrou!");  // Verificação
            return alunos[i];
        }
    }

    console.log("Não encontrou");  // Verificação
    return null;
}
```

## Sinais de Alerta: Quando Desconfiar

🚩 **Código muito complicado para um problema simples**
Se você pediu algo simples e veio 50 linhas, desconfie.

🚩 **Usa coisas que você nunca viu**
Se aparecem conceitos muito avançados, peça uma versão mais simples.

🚩 **Nomes de funções/métodos estranhos**
Se a IA menciona uma função que você nunca ouviu falar, pesquise se existe.

🚩 **Resolve um problema diferente**
Às vezes a IA entende errado. Verifique se é isso mesmo que você pediu.

---

# Módulo 5: Quando a IA Erra

## Tipos de Erros da IA

### 1. Código Com Bug

O código roda mas faz a coisa errada ou dá erro.

**O que fazer:**
- Mostre o erro para a IA
- Explique o que esperava
- Peça para corrigir

```
Esse código que você sugeriu está dando erro:

[código]

Erro: TypeError: Cannot read properties of undefined

Pode corrigir?
```

### 2. Entendeu o Problema Errado

A IA resolveu outra coisa, não o que você pediu.

**O que fazer:**
- Reformule a pergunta
- Seja mais específico
- Dê um exemplo do resultado esperado

```
Acho que não fui claro. Deixa eu explicar melhor:

Eu tenho uma lista de alunos. Quero filtrar só os que têm 
plano "anual". O resultado deveria ser assim:

Entrada: [{ nome: "Maria", plano: "anual" }, { nome: "João", plano: "mensal" }]
Saída: [{ nome: "Maria", plano: "anual" }]
```

### 3. Solução Complicada Demais

A IA deu uma solução que funciona, mas você não entende.

**O que fazer:**
- Peça uma versão mais simples
- Peça explicação passo a passo

```
Essa solução funciona, mas é complicada pra mim.
Pode fazer uma versão mais simples, usando só for e if?
Sou iniciante e quero entender cada linha.
```

### 4. Informação Desatualizada

A IA pode usar sintaxe antiga ou mencionar coisas que mudaram.

**O que fazer:**
- Se desconfiar, pesquise na documentação oficial
- Pergunte qual versão a IA está considerando

```
Isso ainda funciona em 2025? 
Quero ter certeza que é a forma atual de fazer.
```

## Corrigindo o Rumo da Conversa

Se a IA foi por um caminho errado, você pode redirecioná-la:

```
Para, essa abordagem não é o que eu quero.

Vamos por outro caminho: quero fazer X usando Y.
Esquece o que falamos antes sobre Z.
```

Não tenha medo de interromper e recomeçar.

---

# Módulo 6: Fluxo de Trabalho Com IA

## O Processo Ideal

```
┌────────────────────────────────────────────────────────────┐
│                   FLUXO DE TRABALHO COM IA                 │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  1. PLANEJE primeiro (sem IA)                              │
│     • O que você quer fazer?                               │
│     • Quais são as partes do problema?                     │
│                                                            │
│  2. PEÇA em partes pequenas                                │
│     • Uma funcionalidade de cada vez                       │
│     • Não peça o sistema inteiro de uma vez                │
│                                                            │
│  3. ENTENDA antes de aplicar                               │
│     • Leia o código sugerido                               │
│     • Pergunte se não entender                             │
│                                                            │
│  4. TESTE cada parte                                       │
│     • Aplique e teste                                      │
│     • Só prossiga quando funcionar                         │
│                                                            │
│  5. INTEGRE as partes                                      │
│     • Junte tudo                                           │
│     • Teste o conjunto                                     │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

## Exemplo Prático: Sistema de Alunos

Vamos ver como aplicar esse fluxo para criar um sistema de cadastro de alunos.

### Passo 1: Planeje (Sem IA)

Antes de pedir qualquer código, pense:

"Quero um sistema que:
1. Guarda uma lista de alunos
2. Permite adicionar um aluno
3. Permite buscar um aluno pelo nome
4. Permite listar todos os alunos"

Agora você sabe **o que** precisa. Pode pedir **uma parte de cada vez**.

### Passo 2: Peça a Primeira Parte

```
Quero criar um sistema de alunos em JavaScript.

Primeiro, me ajuda a criar a estrutura básica:
- Uma variável para guardar a lista de alunos (array)
- Cada aluno tem: nome, idade, plano

Começa só com isso, com alguns alunos de exemplo.
```

A IA responde. Você lê, entende, testa.

### Passo 3: Peça a Segunda Parte

```
Funcionou! Agora quero criar uma função para adicionar 
um novo aluno na lista.

A função recebe nome, idade e plano, e adiciona no array.
```

Lê, entende, testa.

### Passo 4: Continue Parte por Parte

```
Ótimo! Agora preciso de uma função para buscar um aluno 
pelo nome. Deve retornar o aluno encontrado ou null se 
não existir.
```

E assim por diante, uma funcionalidade de cada vez.

### Passo 5: Integre e Teste Tudo

No final, você tem várias funções. Teste todas juntas:

```javascript
// Adiciona alguns alunos
adicionarAluno("Maria", 25, "anual");
adicionarAluno("João", 30, "mensal");

// Busca um aluno
let aluno = buscarAluno("Maria");
console.log("Encontrado:", aluno);

// Lista todos
listarAlunos();
```

## O Que NÃO Fazer

❌ **Pedir o sistema inteiro de uma vez**
```
Faz um sistema completo de academia com cadastro de alunos, 
planos, pagamentos, presenças, relatórios...
```

Isso gera código demais, difícil de entender e cheio de problemas.

❌ **Copiar sem ler**
Você não vai aprender nada e não vai saber resolver quando quebrar.

❌ **Desistir no primeiro erro**
Erros são normais. Mostre o erro para a IA e peça para corrigir.

---

# Módulo 7: Praticando Com Exemplos Reais

## Exemplo 1: Pedindo Ajuda Com Erro

Você está com esse código que não funciona:

```javascript
let alunos = ["Maria", "João", "Ana"];

for (let i = 1; i <= alunos.length; i++) {
    console.log(alunos[i]);
}
```

Saída:
```
João
Ana
undefined
```

**Como pedir ajuda:**

```
Esse código deveria mostrar todos os nomes do array, mas está 
pulando "Maria" no começo e mostrando "undefined" no final:

let alunos = ["Maria", "João", "Ana"];

for (let i = 1; i <= alunos.length; i++) {
    console.log(alunos[i]);
}

Saída atual:
João
Ana
undefined

Esperado:
Maria
João
Ana

O que está errado?
```

A IA vai explicar que:
- O índice começa em 0, não em 1
- A condição deveria ser `<` em vez de `<=`

## Exemplo 2: Pedindo Para Explicar Código

Você encontrou esse código e não entende:

```javascript
let ativos = alunos.filter(a => a.ativo).map(a => a.nome);
```

**Como pedir explicação:**

```
Pode explicar esse código linha por linha?
Sou iniciante, então explica o que cada parte faz:

let ativos = alunos.filter(a => a.ativo).map(a => a.nome);

O que é filter? O que é map? O que significa a => a.ativo?
```

## Exemplo 3: Pedindo Versão Mais Simples

A IA sugeriu isso:

```javascript
const encontrarAluno = (nome) => alunos.find(a => a.nome === nome) ?? null;
```

Mas você não entende arrow functions nem o operador `??`.

**Como pedir versão simples:**

```
Essa solução funciona, mas não entendo a sintaxe.
Pode reescrever usando:
- function normal (não arrow function)
- if/else em vez de ??
- for loop se precisar percorrer

Sou iniciante e quero entender cada linha.
```

A IA pode reescrever assim:

```javascript
function encontrarAluno(nome) {
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nome === nome) {
            return alunos[i];
        }
    }
    return null;
}
```

Muito mais fácil de entender!

## Exemplo 4: Criando do Zero em Partes

**Prompt 1:**
```
Quero criar uma função que calcula a média de notas.
Recebe um array de números e retorna a média.
Usa for loop tradicional.

Exemplo:
calcularMedia([8, 7, 9]) deve retornar 8
```

**Prompt 2 (depois de testar o primeiro):**
```
Funcionou! Agora quero que, se o array estiver vazio, 
retorne 0 em vez de dar erro.
```

**Prompt 3:**
```
Ótimo! Agora quero que ignore notas negativas 
(se alguém passar nota negativa por engano).
```

Viu como foi evoluindo aos poucos?

---

# Módulo 8: Usando o Composer do Cursor

## O Que É o Composer?

O **Composer** (Cmd+I ou Ctrl+I) é diferente do Chat. Enquanto o Chat é para conversar, o Composer é para **fazer mudanças no código**.

Quando você usa o Composer:
1. Você descreve o que quer
2. A IA mostra as mudanças que faria
3. Você revisa as mudanças
4. Aceita ou rejeita

## Quando Usar Chat vs. Composer

| Use o Chat quando... | Use o Composer quando... |
|---------------------|-------------------------|
| Quer entender algo | Quer criar código novo |
| Tem uma dúvida | Quer modificar código existente |
| Quer discutir opções | Sabe o que quer e quer que faça |
| Quer explicações | Quer refatorar ou corrigir |

## Exemplo de Uso do Composer

Você tem esse código e quer adicionar uma funcionalidade:

```javascript
let alunos = [
    { nome: "Maria", idade: 25 },
    { nome: "João", idade: 30 }
];

function listarAlunos() {
    for (let i = 0; i < alunos.length; i++) {
        console.log(alunos[i].nome);
    }
}
```

**Abre o Composer (Cmd+I) e digita:**

```
Adiciona uma função para buscar aluno pelo nome.
Se encontrar, retorna o aluno. Se não, retorna null.
```

O Composer vai mostrar o código que seria adicionado, destacando em verde (adições) e vermelho (remoções).

Você revisa e clica em "Accept" se estiver bom.

## Dica: Seja Específico no Composer

O Composer funciona melhor com instruções claras:

**Vago:**
```
Melhora esse código
```

**Específico:**
```
Adiciona validação na função adicionarAluno:
- Nome não pode ser vazio
- Idade deve ser maior que 0
- Se inválido, mostra mensagem de erro e não adiciona
```

---

# Exercícios da Fase 2.2

### Exercício 2.2.1: Melhorando uma Pergunta

Transforme essas perguntas ruins em perguntas boas:

**a) Pergunta ruim:**
```
Como faz um loop?
```

**b) Pergunta ruim:**
```
Meu código não funciona
```

**c) Pergunta ruim:**
```
Explica arrays
```

**✅ Respostas possíveis:**

**a)**
```
Tenho um array com nomes de alunos:
let alunos = ["Maria", "João", "Ana"];

Quero mostrar cada nome no console, um por linha.
Como faço um loop for para percorrer esse array?
```

**b)**
```
Esse código deveria mostrar a soma dos números, mas está 
mostrando undefined:

function somar(a, b) {
    let resultado = a + b;
}
console.log(somar(5, 3));

Esperado: 8
Aconteceu: undefined

O que está errado?
```

**c)**
```
Sou iniciante em JavaScript. Pode me explicar:
- O que é um array e para que serve?
- Como criar um array com alguns valores?
- Como acessar um valor específico?
- Como saber quantos itens tem?

Se puder dar exemplos simples com nomes de pessoas, fica 
mais fácil de entender.
```

---

### Exercício 2.2.2: Identificando Problemas na Resposta da IA

A IA sugeriu esse código para buscar um aluno:

```javascript
const buscarAluno = (nome) => alunos.find(x => x.nome.toLowerCase() === nome.toLowerCase()) || undefined;
```

Supondo que você é iniciante e só conhece for, if, e funções normais:

**a)** O que você diria para a IA?

**b)** Como você pediria uma versão mais simples?

**✅ Respostas:**

**a)** "Essa solução usa arrow function (=>) e o método .find() que eu ainda não conheço. Também não entendo o que || undefined faz no final."

**b)**
```
Pode reescrever essa função usando:
- function normal (não arrow function)
- loop for para percorrer o array
- if para comparar os nomes

Sou iniciante e preciso entender cada linha do código.
```

---

### Exercício 2.2.3: Planejando Antes de Pedir

Você quer criar um sistema que controla a lista de presença dos alunos.

**Antes de pedir qualquer código**, responda:

a) Quais dados você precisa guardar?
b) Quais funcionalidades o sistema precisa ter?
c) Qual seria a primeira parte que você pediria para a IA?

**✅ Respostas possíveis:**

**a) Dados necessários:**
- Lista de alunos (nome, id)
- Lista de presenças (qual aluno, qual data)

**b) Funcionalidades:**
- Registrar presença de um aluno
- Ver todas as presenças de um aluno
- Ver quem veio em uma data específica
- Contar total de presenças de um aluno

**c) Primeira parte a pedir:**
```
Quero criar um sistema de lista de presença.
Primeiro, me ajuda a criar a estrutura de dados:
- Um array para guardar os alunos (cada um com id e nome)
- Um array para guardar as presenças (cada uma com id do aluno e data)

Coloca alguns dados de exemplo.
```

---

### Exercício 2.2.4: Conduzindo a IA

Você pediu para a IA criar uma função que conta quantos alunos têm plano "anual".

A IA respondeu:
```javascript
const contarAnuais = () => alunos.filter(a => a.plano === "anual").length;
```

O código funciona, mas você quer entender melhor. Escreva 3 mensagens de acompanhamento que você poderia enviar:

**✅ Respostas possíveis:**

**1. Pedindo explicação:**
```
Pode explicar o que cada parte desse código faz?
Especialmente o .filter() e o que significa a => a.plano === "anual"
```

**2. Pedindo versão simples:**
```
Pode reescrever usando for e if normais?
Quero uma versão que eu consiga ler linha por linha e entender.
```

**3. Pedindo para expandir:**
```
Funcionou! Agora quero que a função receba o tipo de plano 
como parâmetro, para eu poder contar qualquer plano, não só "anual".

Exemplo: contarPorPlano("mensal") retorna quantos têm plano mensal.
```

---

# Checklist de Conclusão da Fase 2.2

Antes de ir para a Fase 3, confirme que você consegue:

**Cursor:**
- [ ] Abrir o Chat com Cmd+L (ou Ctrl+L)
- [ ] Abrir o Composer com Cmd+I (ou Ctrl+I)
- [ ] Usar @ para referenciar arquivos
- [ ] Selecionar código e perguntar sobre ele

**Fazendo Boas Perguntas:**
- [ ] Dar contexto sobre o que está fazendo
- [ ] Mostrar o código relevante
- [ ] Descrever o que esperava vs. o que aconteceu
- [ ] Incluir mensagens de erro completas

**Validando Respostas:**
- [ ] Ler o código antes de aplicar
- [ ] Pedir explicação quando não entender
- [ ] Testar em partes pequenas
- [ ] Usar console.log para verificar

**Quando a IA Erra:**
- [ ] Identificar quando a solução está errada ou complicada demais
- [ ] Pedir versão mais simples
- [ ] Redirecionar a conversa quando necessário

**Fluxo de Trabalho:**
- [ ] Planejar antes de pedir código
- [ ] Pedir uma parte de cada vez
- [ ] Entender antes de aplicar
- [ ] Testar e integrar incrementalmente

**Completou tudo? Parabéns! 🎉**

Você agora sabe usar IA como ferramenta de verdade — como piloto, não passageiro!

---

# Glossário da Fase 2.2

| Termo | Significado |
|-------|-------------|
| **Cursor** | Editor de código com IA integrada |
| **Chat** | Conversa com a IA (Cmd+L) |
| **Composer** | Ferramenta para fazer mudanças no código (Cmd+I) |
| **Prompt** | A mensagem/pergunta que você envia para a IA |
| **Contexto** | Informação de fundo sobre o que você está fazendo |
| **Validar** | Verificar se a resposta está correta |
| **Conduzir** | Guiar a IA para a solução que você quer |

---

# Resumo: Trabalhando Com IA

```
┌─────────────────────────────────────────────────────────┐
│              VOCÊ É O PILOTO, IA É COPILOTO             │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ANTES DE PERGUNTAR                                     │
│  • Pense no que você quer                               │
│  • Divida em partes pequenas                            │
│                                                         │
│  AO PERGUNTAR                                           │
│  • Dê contexto (o que está fazendo)                     │
│  • Mostre código relevante                              │
│  • Seja específico no objetivo                          │
│  • Descreva esperado vs. acontecido                     │
│                                                         │
│  AO RECEBER RESPOSTA                                    │
│  • Leia o código (não copie cegamente)                  │
│  • Pergunte se não entender                             │
│  • Peça versão mais simples se necessário               │
│  • Desconfie se for muito complicado                    │
│                                                         │
│  AO APLICAR                                             │
│  • Teste em partes pequenas                             │
│  • Use console.log para verificar                       │
│  • Se der erro, mostre para a IA                        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

**Próximo passo:** Fase 3 — Introdução ao React Native

*Com a mentalidade certa para trabalhar com IA, você está pronto para criar seu primeiro app!*

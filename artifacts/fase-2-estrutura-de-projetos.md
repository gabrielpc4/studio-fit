# Fase 2: Entendendo Estrutura de Projetos

## Introdução

Na Fase 1, você aprendeu a programar em arquivos isolados. Mas projetos reais têm **dezenas ou centenas de arquivos** organizados em pastas.

Nesta fase, você vai aprender:

- **Por que** dividimos código em vários arquivos
- **Como** os arquivos se conectam entre si
- **O que** são as dependências de um projeto
- **Como** navegar em um projeto sem se perder

Ao final desta fase, você será capaz de abrir qualquer projeto React Native e entender sua estrutura geral — mesmo sem entender cada linha de código.

---

# Módulo 1: Por Que Dividir o Código?

## O Problema do Arquivo Gigante

Imagine que todo o código do aplicativo da academia ficasse em um único arquivo:

```javascript
// app.js - 50.000 linhas de código

// Linhas 1-500: Configurações
// Linhas 501-2000: Funções de alunos
// Linhas 2001-3500: Funções de pagamentos
// Linhas 3501-5000: Funções de agendamento
// Linhas 5001-8000: Telas do aplicativo
// Linhas 8001-12000: Conexão com banco de dados
// ... e assim por diante
```

Problemas:

1. **Difícil de encontrar coisas** — Onde está a função de calcular IMC? Boa sorte procurando em 50.000 linhas.

2. **Difícil de trabalhar em equipe** — Se você e um colega editam o mesmo arquivo ao mesmo tempo, vai dar conflito.

3. **Difícil de entender** — Você precisa rolar por milhares de linhas para entender o que o projeto faz.

4. **Difícil de reutilizar** — Se quiser usar a função de calcular IMC em outro projeto, precisa copiar manualmente.

## A Solução: Separar Responsabilidades

Em vez de um arquivo gigante, dividimos o código em **módulos** — arquivos menores, cada um com uma responsabilidade específica:

```
academia-app/
├── config/
│   └── database.js         ← Configurações do banco
├── services/
│   ├── alunoService.js     ← Lógica de alunos
│   ├── pagamentoService.js ← Lógica de pagamentos
│   └── agendaService.js    ← Lógica de agendamento
├── screens/
│   ├── HomeScreen.js       ← Tela inicial
│   ├── AlunosScreen.js     ← Tela de alunos
│   └── PerfilScreen.js     ← Tela de perfil
├── utils/
│   └── calculadora.js      ← Funções utilitárias (IMC, etc.)
└── App.js                  ← Arquivo principal
```

Agora:
- Quer achar a função de IMC? Está em `utils/calculadora.js`
- Quer mudar a tela de alunos? Está em `screens/AlunosScreen.js`
- Cada arquivo tem poucas centenas de linhas, fácil de entender

## Analogia: O Armário Organizado

Pense em como você organiza um armário:

❌ **Armário bagunçado:** Tudo jogado junto — camisetas, calças, meias, documentos, ferramentas...

✅ **Armário organizado:** Gavetas separadas — uma para camisetas, uma para calças, uma para documentos...

Código é igual. Separamos por "gavetas" (pastas) e "itens" (arquivos) para encontrar as coisas rapidamente.

---

# Módulo 2: Estrutura de Pastas Comum

## Estrutura Típica de um Projeto React Native

Quando você cria ou abre um projeto React Native, vai ver algo assim:

```
meu-app/
├── node_modules/          ← Bibliotecas externas (NÃO MEXA!)
├── src/                   ← Seu código fica aqui
│   ├── components/        ← Componentes reutilizáveis
│   ├── screens/           ← Telas do app
│   ├── services/          ← Lógica de negócio e APIs
│   ├── utils/             ← Funções auxiliares
│   └── assets/            ← Imagens, fontes, etc.
├── App.js                 ← Ponto de entrada do app
├── package.json           ← Configurações e dependências
├── package-lock.json      ← Versões exatas das dependências
└── README.md              ← Documentação do projeto
```

Vamos entender cada parte:

### node_modules/

Esta pasta contém todas as **bibliotecas externas** que o projeto usa.

⚠️ **NUNCA edite arquivos dentro de node_modules!**

- Ela é gerada automaticamente pelo comando `npm install`
- Pode ter milhares de arquivos (é normal!)
- Se deletar, basta rodar `npm install` novamente

### src/ (ou app/)

Aqui fica **o código que você escreve**. A organização interna pode variar, mas geralmente inclui:

**components/** — Peças reutilizáveis da interface:
```
components/
├── Button.js           ← Botão personalizado
├── Card.js             ← Card de informações
├── Header.js           ← Cabeçalho
└── AlunoListItem.js    ← Item da lista de alunos
```

**screens/** — Telas completas do aplicativo:
```
screens/
├── HomeScreen.js       ← Tela inicial
├── LoginScreen.js      ← Tela de login
├── AlunosScreen.js     ← Lista de alunos
└── AlunoDetailScreen.js ← Detalhes de um aluno
```

**services/** — Lógica de negócio e comunicação com APIs:
```
services/
├── api.js              ← Configuração de conexão
├── alunoService.js     ← Operações com alunos
└── authService.js      ← Autenticação
```

**utils/** — Funções auxiliares genéricas:
```
utils/
├── formatters.js       ← Formatar datas, números, etc.
├── validators.js       ← Validar email, CPF, etc.
└── calculators.js      ← Cálculos (IMC, etc.)
```

**assets/** — Arquivos estáticos:
```
assets/
├── images/
│   ├── logo.png
│   └── background.jpg
└── fonts/
    └── Roboto.ttf
```

### App.js

O **ponto de entrada** do aplicativo. É o primeiro arquivo que roda quando o app abre. Geralmente configura navegação e tema.

### package.json

O "documento de identidade" do projeto. Contém:
- Nome do projeto
- Versão
- Lista de dependências (bibliotecas usadas)
- Scripts para rodar o projeto

Vamos estudar esse arquivo em detalhes no Módulo 4.

### README.md

Documentação do projeto. Explica:
- O que o projeto faz
- Como instalar e rodar
- Como contribuir

---

# Módulo 3: Imports e Exports — Conectando Arquivos

## O Conceito

Quando dividimos código em vários arquivos, precisamos de uma forma de um arquivo **usar código de outro arquivo**.

É como peças de LEGO: cada peça é independente, mas elas se conectam para formar algo maior.

Em JavaScript, fazemos isso com **export** (disponibilizar) e **import** (buscar).

## Export: Disponibilizando Código

Quando você quer que algo de um arquivo possa ser usado em outros arquivos, você **exporta**.

### Export Nomeado (Named Export)

Você pode exportar várias coisas do mesmo arquivo:

```javascript
// utils/calculators.js

// Exportando uma função
export function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Exportando outra função
export function calcularIdade(anoNascimento) {
    let anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}

// Exportando uma constante
export const IDADE_MINIMA = 16;
```

### Export Default (Export Padrão)

Quando um arquivo tem uma "coisa principal" para exportar:

```javascript
// components/Button.js

function Button({ texto, onPress }) {
    // ... código do componente
}

export default Button;
```

Cada arquivo só pode ter **um** export default.

### Diferença na Prática

```javascript
// utils/calculators.js — múltiplos exports nomeados
export function calcularIMC(peso, altura) { ... }
export function calcularIdade(anoNascimento) { ... }
export const IDADE_MINIMA = 16;

// components/Button.js — um export default
function Button({ texto }) { ... }
export default Button;
```

## Import: Buscando Código de Outro Arquivo

### Importando Named Exports

Use chaves `{ }` e o nome exato:

```javascript
// screens/AlunoScreen.js

import { calcularIMC, calcularIdade } from '../utils/calculators';
import { IDADE_MINIMA } from '../utils/calculators';

// Ou tudo junto:
import { calcularIMC, calcularIdade, IDADE_MINIMA } from '../utils/calculators';
```

### Importando Default Export

Sem chaves, e você pode dar o nome que quiser:

```javascript
// screens/HomeScreen.js

import Button from '../components/Button';

// Poderia ser qualquer nome:
import MeuBotao from '../components/Button';  // Funciona igual!
```

### Importando os Dois Tipos

```javascript
// Se um arquivo tem default E named exports:
import Button, { cores, tamanhos } from '../components/Button';
```

## Caminhos de Importação

### Caminhos Relativos

Usam `./` (mesma pasta) ou `../` (pasta acima):

```javascript
// Estou em: src/screens/AlunoScreen.js
// Quero importar: src/utils/calculators.js

import { calcularIMC } from '../utils/calculators';
//                         ↑
//                         Sobe uma pasta (sai de screens/)
//                         depois entra em utils/
```

Visualizando:
```
src/
├── screens/
│   └── AlunoScreen.js    ← Você está aqui
└── utils/
    └── calculators.js    ← Quer importar isso

Para ir de AlunoScreen.js até calculators.js:
1. Sair de screens/ → ../
2. Entrar em utils/ → ../utils/
3. Pegar o arquivo → ../utils/calculators
```

### Caminhos Absolutos (Bibliotecas)

Quando importamos de `node_modules`, usamos só o nome:

```javascript
// Importando do React (biblioteca externa)
import React from 'react';
import { View, Text, Button } from 'react-native';

// Não precisa de ./ ou ../
// O JavaScript sabe que está em node_modules
```

## Exemplo Completo

Vamos ver um exemplo real de como os arquivos se conectam:

**Arquivo 1: utils/calculators.js**
```javascript
// Funções utilitárias que podem ser usadas em qualquer lugar

export function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

export function classificarIMC(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidade";
}

export const PESO_MINIMO = 30;
export const PESO_MAXIMO = 300;
```

**Arquivo 2: services/alunoService.js**
```javascript
// Lógica relacionada a alunos
// Importa as funções de cálculo

import { calcularIMC, classificarIMC } from '../utils/calculators';

let alunos = [];

export function cadastrarAluno(nome, peso, altura) {
    let imc = calcularIMC(peso, altura);
    let classificacao = classificarIMC(imc);

    let novoAluno = {
        id: alunos.length + 1,
        nome: nome,
        peso: peso,
        altura: altura,
        imc: imc.toFixed(2),
        classificacao: classificacao
    };

    alunos.push(novoAluno);
    return novoAluno;
}

export function listarAlunos() {
    return alunos;
}
```

**Arquivo 3: screens/CadastroScreen.js**
```javascript
// Tela de cadastro
// Importa o serviço de alunos

import { cadastrarAluno } from '../services/alunoService';

function CadastroScreen() {
    function handleCadastrar() {
        let aluno = cadastrarAluno("Maria", 65, 1.68);
        console.log("Aluno cadastrado:", aluno);
    }

    // ... resto da tela
}

export default CadastroScreen;
```

**Fluxo de dependências:**
```
┌─────────────────────┐
│  CadastroScreen.js  │
│  (tela)             │
└──────────┬──────────┘
           │ importa
           ▼
┌─────────────────────┐
│  alunoService.js    │
│  (lógica)           │
└──────────┬──────────┘
           │ importa
           ▼
┌─────────────────────┐
│  calculators.js     │
│  (utilitários)      │
└─────────────────────┘
```

---

# Módulo 4: O Arquivo package.json

## O Que É

O `package.json` é o **documento de identidade** do projeto. Ele contém:

- Informações básicas (nome, versão, descrição)
- Lista de dependências (bibliotecas que o projeto usa)
- Scripts (comandos para rodar, testar, etc.)

## Anatomia de um package.json

```json
{
  "name": "academia-app",
  "version": "1.0.0",
  "description": "Aplicativo de gestão para academias",
  "main": "index.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "test": "jest"
  },
  "dependencies": {
    "react": "18.2.0",
    "react-native": "0.72.6",
    "expo": "~49.0.15",
    "@react-navigation/native": "^6.1.9"
  },
  "devDependencies": {
    "jest": "^29.7.0",
    "@babel/core": "^7.20.0"
  }
}
```

Vamos destrinchar cada parte:

### Informações Básicas

```json
{
  "name": "academia-app",        // Nome do projeto (sem espaços)
  "version": "1.0.0",            // Versão atual
  "description": "Aplicativo..." // Descrição curta
}
```

### Scripts

Comandos que você pode rodar com `npm run <nome>`:

```json
{
  "scripts": {
    "start": "expo start",       // npm run start → inicia o app
    "android": "expo start --android",
    "ios": "expo start --ios",
    "test": "jest"               // npm run test → roda os testes
  }
}
```

Para rodar:
```bash
npm run start    # ou apenas: npm start
npm run android
npm run test
```

### Dependencies

Bibliotecas que o projeto **precisa para funcionar**:

```json
{
  "dependencies": {
    "react": "18.2.0",
    "react-native": "0.72.6",
    "expo": "~49.0.15",
    "@react-navigation/native": "^6.1.9"
  }
}
```

Quando você roda `npm install`, todas essas bibliotecas são baixadas para `node_modules/`.

### DevDependencies

Bibliotecas usadas apenas durante o **desenvolvimento** (não vão para o app final):

```json
{
  "devDependencies": {
    "jest": "^29.7.0",           // Para rodar testes
    "@babel/core": "^7.20.0"     // Para transformar código
  }
}
```

### Versionamento de Dependências

Os símbolos antes da versão significam:

| Símbolo | Significado | Exemplo |
|---------|-------------|---------|
| Sem símbolo | Exatamente esta versão | `"react": "18.2.0"` → só 18.2.0 |
| `^` | Versão compatível | `"jest": "^29.7.0"` → 29.7.0 ou maior (até 30.0.0) |
| `~` | Versão similar | `"expo": "~49.0.15"` → 49.0.15 até 49.0.x |
| `*` | Qualquer versão | `"lodash": "*"` → a mais recente |

## Comandos Essenciais do npm

### npm install

Instala todas as dependências listadas no package.json:

```bash
npm install
# ou a forma curta:
npm i
```

Isso cria/atualiza a pasta `node_modules/`.

### npm install <pacote>

Adiciona uma nova biblioteca ao projeto:

```bash
# Adiciona como dependência normal
npm install axios

# Adiciona como devDependency
npm install jest --save-dev
```

O package.json é atualizado automaticamente.

### npm run <script>

Roda um script definido no package.json:

```bash
npm run start
npm run test
npm run build
```

### npm update

Atualiza as dependências para as versões mais recentes permitidas:

```bash
npm update
```

## O Arquivo package-lock.json

Este arquivo é gerado automaticamente e registra as **versões exatas** de todas as dependências (e suas dependências).

- ✅ **Mantenha no projeto** — Garante que todos usem as mesmas versões
- ❌ **Nunca edite manualmente** — É gerenciado pelo npm

---

# Módulo 5: Git Básico — Versionamento de Código

## O Problema Que o Git Resolve

Você já fez isso?

```
projeto/
├── app.js
├── app_backup.js
├── app_v2.js
├── app_v2_final.js
├── app_v2_final_FINAL.js
└── app_v2_final_FINAL_agora_vai.js
```

Ou pior: fez uma mudança que quebrou tudo e não consegue voltar atrás?

**Git** resolve isso. É um sistema de **controle de versão** — ele guarda o histórico completo de todas as mudanças do projeto.

## Conceitos Fundamentais

### Repositório (repo)

Um projeto gerenciado pelo Git. Contém todo o código e seu histórico.

### Commit

Um "ponto de salvamento". Cada commit guarda:
- O estado de todos os arquivos naquele momento
- Uma mensagem descrevendo o que mudou
- Quando foi feito e por quem

```
Histórico de commits:
────────────────────────────────────────────────────►
    │           │           │           │
    ▼           ▼           ▼           ▼
 Commit 1   Commit 2   Commit 3   Commit 4
 "Início    "Adiciona  "Corrige   "Adiciona
  do        tela de    bug no     tela de
  projeto"  login"     login"     alunos"
```

Você pode **voltar para qualquer commit anterior** a qualquer momento!

### Branch (Ramificação)

Uma "linha do tempo alternativa". Permite trabalhar em features novas sem afetar o código principal.

```
                    ┌─ Commit ─ Commit (feature-login)
                    │
main: ─ Commit ─ Commit ─ Commit ─ Commit ─►
                              │
                              └─ Commit ─ Commit (feature-pagamento)
```

Depois, você pode **juntar (merge)** a branch de volta na principal.

## Fluxo Básico de Trabalho

### 1. Verificar Status

```bash
git status
```

Mostra:
- Arquivos modificados
- Arquivos novos
- O que está pronto para commit

### 2. Adicionar Arquivos

```bash
# Adicionar um arquivo específico
git add App.js

# Adicionar todos os arquivos modificados
git add .
```

Isso coloca os arquivos na "área de staging" — prontos para o commit.

### 3. Fazer Commit

```bash
git commit -m "Adiciona tela de cadastro de alunos"
```

A mensagem (`-m`) deve ser clara e descrever o que foi feito.

**Boas mensagens de commit:**
- ✅ "Adiciona validação de CPF no cadastro"
- ✅ "Corrige bug de cálculo de IMC"
- ✅ "Remove função duplicada de login"

**Mensagens ruins:**
- ❌ "Mudanças"
- ❌ "WIP"
- ❌ "asdfasdf"

### 4. Ver Histórico

```bash
git log
```

Mostra todos os commits, do mais recente ao mais antigo.

```bash
git log --oneline
```

Mostra uma versão resumida (uma linha por commit).

## Por Que Você Não Precisa Ter Medo

Com Git, você tem **superpoderes**:

**Voltar no tempo:**
```bash
git checkout <commit-id>  # Visita um commit antigo
git revert <commit-id>    # Desfaz um commit específico
```

**Descartar mudanças:**
```bash
git checkout -- arquivo.js  # Descarta mudanças não commitadas
```

**Ver o que mudou:**
```bash
git diff  # Mostra as mudanças desde o último commit
```

Então, pode experimentar à vontade! Se quebrar, você volta atrás.

## Git na Prática com IA

Na maioria das vezes, você vai usar apenas:

```bash
git status        # Ver o que mudou
git add .         # Adicionar tudo
git commit -m "Mensagem"  # Salvar ponto
git push          # Enviar para o servidor (GitHub)
git pull          # Baixar mudanças do servidor
```

Se algo complicado acontecer, a IA pode ajudar:
- "O git está mostrando um conflito, o que eu faço?"
- "Como faço para desfazer o último commit?"
- "Quero voltar o arquivo X para como estava antes"

---

# Módulo 6: Navegando em um Projeto Real

## Estratégia de Exploração

Quando você abre um projeto novo, siga esses passos:

### Passo 1: Leia o README.md

Se existir, começa por aqui. Geralmente explica:
- O que o projeto faz
- Como instalar
- Como rodar

### Passo 2: Olhe o package.json

Identifique:
- Quais bibliotecas são usadas
- Quais scripts estão disponíveis

### Passo 3: Encontre o Ponto de Entrada

Geralmente é:
- `App.js` ou `App.tsx`
- `index.js`
- `src/index.js`

Este é o arquivo que "começa tudo".

### Passo 4: Siga as Importações

A partir do ponto de entrada, veja o que é importado e vá seguindo o rastro:

```javascript
// App.js
import HomeScreen from './src/screens/HomeScreen';  // → Vá ver esse arquivo
import { AuthProvider } from './src/context/AuthContext';  // → E esse também
```

### Passo 5: Entenda a Estrutura de Pastas

Mapeie mentalmente:
- Onde ficam as telas?
- Onde fica a lógica de negócio?
- Onde ficam os componentes?

## Exercício Prático: Explorando um Projeto

Vamos simular a exploração de um projeto de academia:

**Estrutura do projeto:**

```
academia-app/
├── node_modules/
├── src/
│   ├── components/
│   │   ├── Button.js
│   │   ├── Card.js
│   │   └── AlunoItem.js
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── AlunosScreen.js
│   │   ├── AlunoDetailScreen.js
│   │   └── CadastroScreen.js
│   ├── services/
│   │   ├── api.js
│   │   └── alunoService.js
│   ├── utils/
│   │   └── calculators.js
│   └── navigation/
│       └── AppNavigator.js
├── App.js
├── package.json
└── README.md
```

**Perguntas de navegação:**

**Pergunta 1:** Onde você iria para mudar o visual de um botão em todo o app?

**✅ Resposta:** `src/components/Button.js` — Componentes são peças visuais reutilizáveis. Mudar aqui afeta todos os lugares que usam esse botão.

---

**Pergunta 2:** A tela de lista de alunos está mostrando os dados errados. Onde você procuraria?

**✅ Resposta:** Primeiro em `src/screens/AlunosScreen.js` (a tela em si). Se a tela parece correta, o problema pode estar em `src/services/alunoService.js` (de onde vêm os dados).

---

**Pergunta 3:** Você precisa mudar a fórmula de cálculo de IMC. Onde provavelmente está?

**✅ Resposta:** `src/utils/calculators.js` — Funções utilitárias de cálculo geralmente ficam na pasta utils.

---

**Pergunta 4:** O app precisa se conectar a uma nova API. Onde você configuraria?

**✅ Resposta:** `src/services/api.js` — A pasta services geralmente contém a lógica de comunicação externa.

---

**Pergunta 5:** Você quer adicionar uma nova tela de "Relatórios". Onde criaria o arquivo?

**✅ Resposta:** `src/screens/RelatoriosScreen.js` — Seguindo o padrão de nomenclatura das outras telas.

---

# Exercícios da Fase 2

### Exercício 2.1: Organizando Arquivos

Você tem o seguinte código todo em um arquivo só. Como você dividiria em arquivos separados?

```javascript
// tudo.js

const IDADE_MINIMA = 16;

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidade";
}

let alunos = [];

function cadastrarAluno(nome, peso, altura) {
    let imc = calcularIMC(peso, altura);
    alunos.push({ nome, peso, altura, imc });
}

function listarAlunos() {
    return alunos;
}

function buscarAluno(nome) {
    return alunos.find(a => a.nome === nome);
}

// ... código da tela de cadastro
// ... código da tela de listagem
```

**✅ Resposta:**

```
src/
├── utils/
│   └── calculators.js      ← calcularIMC, classificarIMC, IDADE_MINIMA
├── services/
│   └── alunoService.js     ← cadastrarAluno, listarAlunos, buscarAluno, array alunos
└── screens/
    ├── CadastroScreen.js   ← código da tela de cadastro
    └── ListagemScreen.js   ← código da tela de listagem
```

**calculators.js:**
```javascript
export const IDADE_MINIMA = 16;

export function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

export function classificarIMC(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidade";
}
```

**alunoService.js:**
```javascript
import { calcularIMC } from '../utils/calculators';

let alunos = [];

export function cadastrarAluno(nome, peso, altura) {
    let imc = calcularIMC(peso, altura);
    alunos.push({ nome, peso, altura, imc });
}

export function listarAlunos() {
    return alunos;
}

export function buscarAluno(nome) {
    return alunos.find(a => a.nome === nome);
}
```

---

### Exercício 2.2: Corrigindo Imports

Os imports abaixo têm erros. Corrija-os.

```javascript
// Arquivo: src/screens/HomeScreen.js

// Erro 1: Importando default export com chaves
import { Button } from '../components/Button';

// Erro 2: Importando named export sem chaves
import calcularIMC from '../utils/calculators';

// Erro 3: Caminho errado (está em screens/, quer ir para services/)
import { listarAlunos } from './services/alunoService';
```

Considere que:
- Button.js tem `export default Button`
- calculators.js tem `export function calcularIMC`
- A estrutura de pastas é: `src/screens/`, `src/services/`, `src/utils/`, `src/components/`

**✅ Resposta:**

```javascript
// Arquivo: src/screens/HomeScreen.js

// Correção 1: Default export não usa chaves
import Button from '../components/Button';

// Correção 2: Named export precisa de chaves
import { calcularIMC } from '../utils/calculators';

// Correção 3: Precisa subir uma pasta antes de entrar em services
import { listarAlunos } from '../services/alunoService';
```

---

### Exercício 2.3: Lendo package.json

Dado o package.json abaixo, responda às perguntas:

```json
{
  "name": "fitness-tracker",
  "version": "2.1.0",
  "scripts": {
    "start": "expo start",
    "test": "jest",
    "lint": "eslint ."
  },
  "dependencies": {
    "react": "18.2.0",
    "react-native": "0.72.6",
    "axios": "^1.6.0",
    "@react-navigation/native": "^6.1.9"
  },
  "devDependencies": {
    "jest": "^29.7.0",
    "eslint": "^8.50.0"
  }
}
```

a) Qual o nome e versão do projeto?

b) Como você iniciaria o projeto?

c) Quais bibliotecas são usadas para fazer requisições HTTP?

d) Qual biblioteca é usada para testes?

e) Se você rodar `npm install`, o que acontece?

**✅ Resposta:**

a) Nome: `fitness-tracker`, Versão: `2.1.0`

b) `npm run start` ou `npm start`

c) `axios` — é uma biblioteca popular para fazer requisições HTTP

d) `jest` — está em devDependencies porque só é usada durante desenvolvimento

e) Todas as bibliotecas listadas em `dependencies` e `devDependencies` são baixadas para a pasta `node_modules/`

---

### Exercício 2.4: Simulando Git

Descreva o que cada sequência de comandos faz:

**Sequência A:**
```bash
git status
git add .
git commit -m "Adiciona validação de email"
```

**Sequência B:**
```bash
git pull
git status
git add src/screens/LoginScreen.js
git commit -m "Corrige bug no login"
git push
```

**✅ Resposta:**

**Sequência A:**
1. `git status` — Verifica quais arquivos foram modificados
2. `git add .` — Adiciona todos os arquivos modificados para staging
3. `git commit -m "..."` — Cria um ponto de salvamento com a mensagem "Adiciona validação de email"

**Sequência B:**
1. `git pull` — Baixa as últimas alterações do servidor (GitHub)
2. `git status` — Verifica o que mudou localmente
3. `git add src/screens/LoginScreen.js` — Adiciona apenas esse arquivo específico para staging
4. `git commit -m "..."` — Salva com a mensagem "Corrige bug no login"
5. `git push` — Envia o commit para o servidor (GitHub)

---

# Projeto Prático: Criando uma Estrutura de Projeto

Crie a estrutura de pastas para um aplicativo de academia, criando os arquivos com conteúdo básico.

**Requisitos:**
- Pastas para components, screens, services e utils
- Um componente Button
- Duas telas: Home e Alunos
- Um service para alunos
- Funções de cálculo no utils

**✅ Resposta:**

**Estrutura final:**
```
academia-app/
├── src/
│   ├── components/
│   │   └── Button.js
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   └── AlunosScreen.js
│   ├── services/
│   │   └── alunoService.js
│   └── utils/
│       └── calculators.js
├── App.js
└── package.json
```

**src/utils/calculators.js:**
```javascript
export function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

export function classificarIMC(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidade";
}
```

**src/services/alunoService.js:**
```javascript
import { calcularIMC, classificarIMC } from '../utils/calculators';

let alunos = [];

export function cadastrarAluno(nome, peso, altura) {
    let imc = calcularIMC(peso, altura);
    let classificacao = classificarIMC(imc);

    let novoAluno = {
        id: alunos.length + 1,
        nome,
        peso,
        altura,
        imc: imc.toFixed(2),
        classificacao
    };

    alunos.push(novoAluno);
    return novoAluno;
}

export function listarAlunos() {
    return alunos;
}

export function buscarAlunoPorId(id) {
    return alunos.find(aluno => aluno.id === id);
}
```

**src/components/Button.js:**
```javascript
// Componente de botão (simplificado, sem React ainda)

function Button(texto, onPress) {
    console.log(`[Botão: ${texto}]`);
    // Em React Native, isso seria um componente visual
}

export default Button;
```

**src/screens/HomeScreen.js:**
```javascript
import { listarAlunos } from '../services/alunoService';

function HomeScreen() {
    console.log("=== Tela Inicial ===");

    let alunos = listarAlunos();
    console.log(`Total de alunos: ${alunos.length}`);
}

export default HomeScreen;
```

**src/screens/AlunosScreen.js:**
```javascript
import { listarAlunos, cadastrarAluno } from '../services/alunoService';

function AlunosScreen() {
    console.log("=== Tela de Alunos ===");

    let alunos = listarAlunos();

    for (let aluno of alunos) {
        console.log(`${aluno.nome} - IMC: ${aluno.imc}`);
    }
}

export default AlunosScreen;
```

**App.js:**
```javascript
import HomeScreen from './src/screens/HomeScreen';
import AlunosScreen from './src/screens/AlunosScreen';
import { cadastrarAluno } from './src/services/alunoService';

console.log("=== Academia App ===\n");

// Cadastrando alguns alunos para teste
cadastrarAluno("Maria Silva", 65, 1.68);
cadastrarAluno("João Santos", 80, 1.75);
cadastrarAluno("Ana Costa", 55, 1.60);

// Mostrando as telas
HomeScreen();
console.log("");
AlunosScreen();
```

---

# Checklist de Conclusão da Fase 2

Antes de ir para a Fase 3, confirme que você consegue:

**Estrutura de Projetos:**
- [ ] Explicar por que dividimos código em vários arquivos
- [ ] Identificar o propósito de cada pasta comum (components, screens, services, utils)
- [ ] Encontrar o ponto de entrada de um projeto (App.js)

**Imports e Exports:**
- [ ] Diferenciar export default e export nomeado
- [ ] Escrever imports corretos para cada tipo de export
- [ ] Entender caminhos relativos (../, ./)

**package.json:**
- [ ] Identificar as dependências de um projeto
- [ ] Rodar scripts com npm run
- [ ] Usar npm install para instalar dependências

**Git (conceitual):**
- [ ] Explicar o que é um commit
- [ ] Entender o fluxo básico: add → commit → push
- [ ] Saber que pode voltar atrás se algo der errado

**Completou tudo? Parabéns! 🎉**

Você agora sabe navegar em projetos reais. Na Fase 3, vamos entrar no React Native!

---

# Glossário da Fase 2

| Termo | Significado |
|-------|-------------|
| **Módulo** | Arquivo JavaScript que pode exportar/importar código |
| **Export** | Disponibilizar código para outros arquivos usarem |
| **Import** | Trazer código de outro arquivo |
| **Export Default** | Export principal de um arquivo (só pode ter um) |
| **Named Export** | Export nomeado (pode ter vários por arquivo) |
| **node_modules** | Pasta com bibliotecas externas instaladas |
| **package.json** | Arquivo com configurações e dependências do projeto |
| **Dependência** | Biblioteca externa que o projeto usa |
| **npm** | Gerenciador de pacotes do Node.js |
| **npm install** | Comando para instalar dependências |
| **Git** | Sistema de controle de versão |
| **Repositório** | Projeto gerenciado pelo Git |
| **Commit** | Ponto de salvamento no histórico |
| **Branch** | Linha de desenvolvimento paralela |
| **Push** | Enviar commits para o servidor |
| **Pull** | Baixar commits do servidor |

---

**Próximo passo:** Fase 3 — Introdução ao React Native

*Nessa fase, você vai aprender a criar interfaces visuais com componentes!*

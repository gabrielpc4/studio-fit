# Fase 0: Fundamentos Mentais

## Bem-vindo à sua jornada na programação!

Antes de escrever uma única linha de código, precisamos construir uma base sólida. Esta fase é sobre **entender como computadores e programas funcionam** — não na teoria complexa, mas de um jeito que faça sentido intuitivo.

Pense assim: antes de treinar um aluno na academia, você precisa explicar como o corpo funciona, certo? Por que o músculo cresce, como a respiração afeta o treino, o que acontece quando descansamos. Sem esse entendimento, o aluno só copia movimentos sem saber o porquê.

Com programação é igual. Vamos entender o "porquê" antes do "como".

---

# Módulo 1: O Que É Um Programa?

## A Analogia da Receita de Bolo

Imagine que você vai ensinar alguém a fazer um bolo de chocolate. Você escreveria algo assim:

```
1. Separe os ingredientes: 3 ovos, 2 xícaras de farinha, 1 xícara de açúcar...
2. Pré-aqueça o forno a 180 graus
3. Misture os ovos com o açúcar até ficar homogêneo
4. Adicione a farinha aos poucos, mexendo sempre
5. Despeje na forma untada
6. Leve ao forno por 40 minutos
7. Espere esfriar antes de desenformar
```

**Isso é um programa.**

Um programa é simplesmente uma **lista de instruções** que alguém (ou algo) deve seguir para realizar uma tarefa.

A diferença é que, em vez de ensinar uma pessoa a fazer bolo, você está ensinando um **computador** a fazer alguma coisa — pode ser mostrar uma lista de alunos, calcular uma conta, enviar uma mensagem, ou qualquer outra tarefa.

## O Modelo: Entrada → Processamento → Saída

Todo programa segue esse fluxo básico:

```
┌─────────────┐      ┌────────────────────┐      ┌─────────────┐
│   ENTRADA   │  →   │   PROCESSAMENTO    │  →   │    SAÍDA    │
│  (dados)    │      │   (instruções)     │      │ (resultado) │
└─────────────┘      └────────────────────┘      └─────────────┘
```

### Exemplo 1: Calculadora

- **Entrada:** Você digita `5 + 3`
- **Processamento:** O programa soma os números
- **Saída:** Aparece `8` na tela

### Exemplo 2: Lista de Presença (seu futuro app!)

- **Entrada:** Professor clica no nome "João Silva"
- **Processamento:** O programa registra que João está presente hoje
- **Saída:** Aparece um ✓ verde do lado do nome do João

### Exemplo 3: Instagram

- **Entrada:** Você abre o app
- **Processamento:** O programa busca as últimas postagens das pessoas que você segue
- **Saída:** Aparece o feed com fotos e vídeos

**Percebeu o padrão?** Todo aplicativo, site, ou programa que você já usou segue essa lógica. Sempre tem algo entrando, algo sendo processado, e algo saindo.

## Exercício Mental 1

Pense em 3 aplicativos que você usa no dia a dia. Para cada um, identifique:
- O que é a ENTRADA (o que você faz/informa)
- O que é o PROCESSAMENTO (o que o app faz com isso)
- O que é a SAÍDA (o que aparece pra você)

Exemplos para você completar:

**WhatsApp - Enviar mensagem:**
- Entrada: _______________
- Processamento: _______________
- Saída: _______________

**Google Maps - Buscar rota:**
- Entrada: _______________
- Processamento: _______________
- Saída: _______________

**Spotify - Tocar música:**
- Entrada: _______________
- Processamento: _______________
- Saída: _______________

*(Não se preocupe em acertar tecnicamente — o importante é começar a pensar assim)*

---

# Módulo 2: Como o Computador "Pensa"

## Spoiler: Ele Não Pensa

Essa é talvez a coisa mais importante para entender: **o computador é extremamente burro**.

Sério. Ele não entende contexto, não interpreta, não adivinha. Ele faz EXATAMENTE o que você manda, nem mais, nem menos.

### A História do Robô Literal

Imagine que você tem um robô assistente e pede:

> "Robô, faça um café."

Um humano entenderia: pegar o pó, colocar água, ligar a cafeteira, esperar, servir numa xícara.

O robô? Ele não sabe o que é "café". Ele não sabe o que é "fazer". Você precisaria dizer:

```
1. Vá até a cozinha
2. Abra o armário da esquerda
3. Pegue o pacote vermelho escrito "Café"
4. Coloque o pacote no balcão
5. Abra a gaveta abaixo do balcão
6. Pegue a colher grande
7. Abra o pacote de café
8. ... (mais 50 instruções)
```

**Programar é isso:** dar instruções tão detalhadas que até um "robô burro" consegue seguir.

## Tudo É Dado

Para o computador, tudo é informação que pode ser guardada e manipulada:

| O que você vê | O que o computador vê |
|---------------|----------------------|
| Seu nome: "Maria" | Um texto (sequência de letras) |
| Sua idade: 28 | Um número |
| Foto do seu cachorro | Milhões de pontinhos coloridos (pixels) |
| Música no Spotify | Milhões de números representando ondas sonoras |
| Vídeo no YouTube | Milhares de fotos + áudio combinados |

Quando você programa, você trabalha com esses dados: guarda eles, modifica eles, combina eles, mostra eles.

## O Computador É Burro, Mas Rápido

Aqui está o superpoder: o computador faz bilhões de operações por segundo.

Imagina uma tarefa chata: verificar a presença de 500 alunos e calcular quantos vieram em cada dia do mês. 

Para um humano: horas de trabalho tedioso.

Para um computador: menos de 1 segundo.

**Seu trabalho como programador** não é fazer o trabalho — é ensinar o computador a fazer o trabalho. Uma vez que você ensina (escreve o programa), ele faz quantas vezes você quiser, sempre igual, sem cansar, sem errar.

## O Computador Faz Exatamente O Que Você Manda

Isso é bênção e maldição ao mesmo tempo:

✅ **Bênção:** Se você mandar certo, funciona perfeitamente, sempre.

❌ **Maldição:** Se você mandar errado, ele faz errado, sempre. E não avisa "ei, acho que você quis dizer outra coisa".

### Exemplo Clássico

Você quer que o programa diga "Bom dia" de manhã e "Boa noite" à noite.

Se você programar:
```
Se a hora for menor que 12, diga "Bom dia"
Caso contrário, diga "Boa noite"
```

Funciona? Quase. Mas às 15h (3 da tarde), ele vai dizer "Boa noite". 

Você esqueceu do "Boa tarde"! O computador não vai "perceber" isso. Ele segue as instruções que recebeu.

**Lição:** Bugs (erros) geralmente são instruções incompletas ou incorretas, não o computador "fazendo coisa errada".

## Exercício Mental 2

Você quer ensinar o computador a verificar se um aluno pode entrar numa aula. As regras são:
- Tem que ter mais de 16 anos
- Tem que estar com a mensalidade em dia
- Tem que ter feito a avaliação física

Escreva as instruções em português, como se estivesse explicando para alguém muito literal:

```
Se _________________ E _________________ E _________________
    então: permitir entrada
    caso contrário: não permitir entrada
```

*(Esse tipo de "programação em português" se chama pseudocódigo, e é muito usado para planejar antes de escrever código de verdade)*

---

# Módulo 3: O Que É Código?

## Código = Texto Que Vira Instruções

Lembra da receita de bolo? E do robô literal? 

**Código** é simplesmente um texto especial que o computador consegue entender e transformar em ações.

Aqui está um código de verdade em JavaScript (a linguagem que você vai aprender):

```javascript
let nomeDoAluno = "Carlos Silva";
let idade = 25;
let mensalidadeEmDia = true;

if (idade >= 16 && mensalidadeEmDia) {
    console.log("Bem-vindo, " + nomeDoAluno + "!");
} else {
    console.log("Entrada não permitida.");
}
```

Não se preocupe em entender cada detalhe agora. Mas olha só:

- `let nomeDoAluno = "Carlos Silva"` → Guarda o nome numa "caixinha" chamada nomeDoAluno
- `let idade = 25` → Guarda a idade
- `if (idade >= 16 && mensalidadeEmDia)` → SE idade for maior ou igual a 16 E mensalidade estiver em dia
- `console.log(...)` → Mostra uma mensagem

**Conseguiu ler mais ou menos o que está acontecendo?** Esse é o objetivo: código bem escrito é quase legível como português!

## Linguagens de Programação

Assim como existem vários idiomas humanos (português, inglês, espanhol), existem várias **linguagens de programação**.

Algumas linguagens famosas:

| Linguagem | Geralmente usada para |
|-----------|----------------------|
| JavaScript | Sites, aplicativos mobile (React Native) |
| Python | Ciência de dados, automação, IA |
| Swift | Apps para iPhone |
| Kotlin | Apps para Android |
| C | Sistemas operacionais, jogos |

### Por que tantas linguagens?

Cada linguagem foi criada com um propósito. Algumas são melhores para certas tarefas.

É como ferramentas: você pode até usar um alicate para pregar um prego, mas um martelo é feito para isso.

### Qual você vai aprender?

**JavaScript** — porque é a linguagem do React Native, que é a tecnologia usada para criar aplicativos que funcionam tanto no iPhone quanto no Android.

Depois que você aprende uma linguagem bem, aprender outras fica muito mais fácil. Os conceitos são os mesmos, só muda a "gramática".

## A Sintaxe: As Regras Gramaticais do Código

Cada linguagem tem suas regras. Em JavaScript:

- Texto vai entre aspas: `"Carlos Silva"`
- Números vão sem aspas: `25`
- Comandos geralmente terminam com ponto e vírgula: `;`
- Blocos de código ficam entre chaves: `{ }`

Se você errar a sintaxe, o computador não entende e dá erro:

```javascript
// Correto:
let nome = "Maria";

// Errado (esqueceu as aspas):
let nome = Maria;

// Errado (esqueceu o ponto e vírgula - às vezes funciona, mas pode causar problemas):
let nome = "Maria"
```

**Não se assuste com erros de sintaxe!** Todo mundo comete, o tempo todo. O próprio computador avisa onde está o erro, e a IA pode ajudar a corrigir.

---

# Módulo 4: Ambiente de Desenvolvimento

Agora vamos sair da teoria e preparar as ferramentas que você vai usar.

## O Editor de Código: Visual Studio Code

**O que é:** Um programa para escrever código. É como o Word, mas para programadores.

**Por que usar:** 
- É gratuito
- É o mais popular do mundo
- Tem recursos que ajudam muito (autocomplete, avisos de erro, etc.)
- Funciona para qualquer linguagem

### Instalação

1. Acesse: https://code.visualstudio.com/
2. Baixe a versão para seu sistema (Windows, Mac, ou Linux)
3. Instale normalmente

### Primeiros Passos no VS Code

Quando abrir o VS Code pela primeira vez:

```
┌─────────────────────────────────────────────────────────────────┐
│  Arquivo  Editar  Ver  ...                              🔲 ─ ✕  │
├────────────────┬────────────────────────────────────────────────┤
│                │                                                │
│   EXPLORER     │                                                │
│                │           Área principal                       │
│   📁 Pastas    │           (onde você escreve código)           │
│   📄 Arquivos  │                                                │
│                │                                                │
├────────────────┴────────────────────────────────────────────────┤
│  TERMINAL (área de comandos)                                    │
└─────────────────────────────────────────────────────────────────┘
```

**Áreas principais:**
- **Explorer (esquerda):** Mostra suas pastas e arquivos
- **Área central:** Onde você escreve o código
- **Terminal (embaixo):** Onde você digita comandos

### Criando Seu Primeiro Arquivo

1. Abra o VS Code
2. Vá em `Arquivo` → `Nova Pasta de Trabalho` (ou `File` → `Open Folder`)
3. Crie uma pasta chamada `meus-estudos` em algum lugar fácil de achar
4. Clique com botão direito no Explorer → `Novo Arquivo`
5. Nomeie como `primeiro-codigo.js`
6. Digite isso no arquivo:

```javascript
console.log("Olá! Meu primeiro código!");
```

7. Salve (Ctrl+S ou Cmd+S no Mac)

**Pronto!** Você acabou de escrever seu primeiro código. Ainda não rodamos ele, mas ele existe!

## O Terminal: Conversando com o Computador por Texto

O terminal é uma forma de dar comandos ao computador digitando texto, em vez de clicar em coisas.

Parece coisa de hacker de filme, mas é uma ferramenta do dia a dia de programadores.

### Abrindo o Terminal no VS Code

- Vá em `Ver` → `Terminal` (ou pressione Ctrl+` )
- Uma área aparece embaixo

### Comandos Básicos

No terminal, você sempre está "dentro" de uma pasta. Os comandos são para navegar e fazer coisas.

**Navegar entre pastas:**

```bash
# Ver em qual pasta você está
pwd

# Listar arquivos e pastas aqui
ls

# Entrar numa pasta
cd nome-da-pasta

# Voltar uma pasta
cd ..

# Ir para uma pasta específica
cd /caminho/completo/da/pasta
```

**Criar coisas:**

```bash
# Criar uma pasta
mkdir minha-nova-pasta

# Criar um arquivo vazio
touch meu-arquivo.txt
```

**Outros úteis:**

```bash
# Limpar a tela do terminal
clear

# Ver o conteúdo de um arquivo
cat nome-do-arquivo.txt
```

### Exercício Prático: Navegação

Abra o terminal e tente:

1. Digite `pwd` e pressione Enter — veja onde você está
2. Digite `ls` — veja o que tem nessa pasta
3. Digite `mkdir teste` — crie uma pasta chamada "teste"
4. Digite `ls` novamente — agora a pasta "teste" deve aparecer
5. Digite `cd teste` — entre na pasta
6. Digite `pwd` — confirme que você está dentro de "teste"
7. Digite `cd ..` — volte para a pasta anterior

**Não tenha medo do terminal!** Você não vai quebrar nada digitando esses comandos básicos.

## Node.js: Para Rodar JavaScript

JavaScript nasceu para rodar em navegadores (Chrome, Firefox). Mas para desenvolver, precisamos rodar JavaScript no computador. É aí que entra o **Node.js**.

### Instalação

1. Acesse: https://nodejs.org/
2. Baixe a versão LTS (Long Term Support — a mais estável)
3. Instale normalmente

### Verificando a Instalação

No terminal, digite:

```bash
node --version
```

Deve aparecer algo como `v20.10.0` (a versão). Se apareceu, deu certo!

### Rodando Seu Primeiro Código!

Lembra do arquivo `primeiro-codigo.js` que criamos? Vamos rodar ele!

1. No terminal, vá até a pasta onde está o arquivo:
   ```bash
   cd caminho/para/meus-estudos
   ```

2. Rode o arquivo:
   ```bash
   node primeiro-codigo.js
   ```

3. Deve aparecer:
   ```
   Olá! Meu primeiro código!
   ```

**🎉 Parabéns! Você acabou de rodar seu primeiro programa!**

---

# Módulo 5: Juntando Tudo

## O Ciclo de Trabalho do Programador

Agora você entende o ciclo básico:

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   1. ESCREVER         2. SALVAR          3. RODAR           │
│   (no VS Code)    →   (Ctrl+S)      →   (no terminal)       │
│                                                              │
│                           ↓                                  │
│                                                              │
│   4. VER RESULTADO     5. ENCONTRAR      6. CORRIGIR        │
│   (funcionou?)     ←   PROBLEMAS     ←   E MELHORAR         │
│                           ↑                                  │
│                           │                                  │
│                    (repetir até funcionar)                   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

Esse ciclo você vai fazer milhares de vezes. É normal. Faz parte.

## Exercício Final da Fase 0

Vamos garantir que você consegue fazer o básico sozinho.

### Missão:

1. Crie uma pasta chamada `academia` no seu computador
2. Abra essa pasta no VS Code
3. Crie um arquivo chamado `bem-vindo.js`
4. Escreva este código:

```javascript
let nomeDaAcademia = "Studio Fit";
let quantidadeDeAlunos = 150;

console.log("=================================");
console.log("Bem-vindo ao sistema do " + nomeDaAcademia);
console.log("Total de alunos cadastrados: " + quantidadeDeAlunos);
console.log("=================================");
```

5. Salve o arquivo
6. Abra o terminal
7. Rode o arquivo com `node bem-vindo.js`
8. Observe a saída

### Desafio Extra:

Modifique o código para:
- Mudar o nome da academia para outro nome
- Mudar a quantidade de alunos
- Adicionar mais uma linha mostrando o horário de funcionamento

---

# Checklist de Conclusão da Fase 0

Antes de ir para a Fase 1, confirme que você consegue:

- [ ] Explicar o que é um programa com suas próprias palavras
- [ ] Identificar Entrada, Processamento e Saída em apps do dia a dia
- [ ] Entender que o computador faz exatamente o que mandamos
- [ ] Abrir o VS Code e criar um arquivo novo
- [ ] Navegar pelo terminal (cd, ls, pwd)
- [ ] Rodar um arquivo JavaScript com Node.js
- [ ] Não ter medo de errar!

**Completou tudo? Parabéns! 🎉**

Você tem agora o modelo mental correto e as ferramentas instaladas. Na Fase 1, vamos realmente começar a programar!

---

# Glossário da Fase 0

| Termo | Significado |
|-------|-------------|
| **Programa** | Lista de instruções que o computador segue |
| **Código** | Texto escrito numa linguagem de programação |
| **Linguagem de programação** | "Idioma" que usamos para escrever instruções |
| **JavaScript** | A linguagem que vamos usar (abreviada: JS) |
| **VS Code** | Editor de código que vamos usar |
| **Terminal** | Interface de texto para dar comandos ao computador |
| **Node.js** | Programa que permite rodar JavaScript no computador |
| **Bug** | Erro no código |
| **Sintaxe** | As regras gramaticais de uma linguagem |
| **Rodar/Executar** | Fazer o computador seguir as instruções do código |

---

# Anotações Pessoais

Use este espaço para escrever suas próprias anotações, dúvidas, ou observações:

```
_________________________________________________________________

_________________________________________________________________

_________________________________________________________________

_________________________________________________________________

_________________________________________________________________
```

---

**Próximo passo:** Fase 1 — Lógica de Programação com JavaScript

*Nessa fase, você vai aprender variáveis, condições, loops, e criar pequenos programas funcionais!*

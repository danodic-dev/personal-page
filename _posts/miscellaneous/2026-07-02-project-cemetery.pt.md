---
layout: post
title: "O Cemitério de Projetos"
lang: pt
permalink: /2026/07/02/project-cemetery
tags: [aleatoriedades, programming]
---

> Veja bem, eu uso IA para __traduzir__ os posts, não para escrever eles. Ao
> menos uma das versões dele vai ter sido escrita manualmente por mim, sem uso
> de assistentes de código. Neste caso, é o post em inglês.

Sou uma pessoa que curte programar, e esse é um dos meus hobbies. Gosto muito de
experimentar coisas novas, linguagens novas, stacks novas. Se eu ouço falar de
uma linguagem pouco conhecida mas não muito esotérica, eu vou testar. E o meu
jeito de testar e aprender é escrevendo código.

Só que eu reconheço que preciso me acostumar mais com o conceito de gists ou
projetos sandbox pra conseguir testar mais coisas com menos infraestrutura e
configuração. Hoje em dia toda linguagem tem um gerenciador de projetos, que
cria uma estrutura de pastas nova, dependências básicas e outras coisas. E
geralmente eu tenho que passar por tudo isso só pra testar um hello world e
conferir a stack.

Outra coisa é que eu gosto de testar linguagens novas com problemas conhecidos
-- não faz sentido tentar aprender 2 ou 3 coisas novas ao mesmo tempo quando dá
pra reduzir o escopo.

Dito isso, eu tenho um problema sério de acumular projetos.

## A pasta "Projects"

Eu tenho um caminho no meu disco que é `/home/danilo/Documents/Projects`. A
pasta "Projects" é onde as ideias vão pra morrer. É um cemitério de projetos,
onde eu não penso muito antes de criar alguma coisa nova. É a pasta que eu entro
com `cd` quando estou me sentindo o próximo fundador de unicórnio
multibilionário, e é a mesma pasta onde eu fecho o terminal alguns minutos
depois, quando percebo que aquilo é difícil.

A pasta de projetos é basicamente uma materialização do meu TDAH: uma roleta
insana de ideias, escolhidas ao acaso, antes de eu passar pra fazer outra coisa.

## A Faxina

Nos últimos meses eu venho trabalhando pra organizar a minha vida digital.
Comecei organizando a pasta `Documents` recentemente. Também comecei a organizar
o meu Gmail (que já caiu de 40 mil mensagens pra menos de mil no último fim de
semana) e agora eu tenho que encarar o chefão. A pasta de projetos.

O maior desafio é: como faço pra organizar isso sem apagar coisas que eu não
gostaria de apagar? Bom...

## A Análise

Em vez de vasculhar um monte de pastas tentando entender o que tem ali, eu fiz o
seguinte: pedi pra uma IA fazer isso por mim.

## O Prompt

```
> Essa pasta é um cemitério de projetos. A maior parte do que tem aqui é
pura lixeira. Projetos que foram começados mas nunca terminados. A maioria
nem chegou a começar de verdade -- eu criei a pasta e não fiz mais nada.
Mas em meio a essa bagunça toda, tem (bem poucos) projetos que eu terminei.
Isso está cheio de provas de conceito, testes, desafios de código pra
entrevista, pastas vazias, etc. Não é só que tem vários projetos nessa
pasta, mas a bagunça cresceu tanto que depois de um tempo eu comecei a
segmentar por linguagem (ex.: Python, Java, etc.) e alguns por projeto
principal. Nada é consistente nessa pasta, não presuma nada. Preciso que
você analise cada pasta aqui dentro, e se aprofunde se precisar, e
identifique:

  - O que é projeto e o que é pasta vazia
  - Caso seja um projeto, qual é o tamanho dele?
  - Qual foi a última vez que eu modifiquei ele?
  - Caso tenha código, qual é o contexto dele?
  - Qual é o tamanho dele? É só um boilerplate de um gerador de projeto ou
    tem alguma coisa rolando ali?
  - É uma duplicata ou uma porta de outro projeto já existente? Se for,
    qual é o mais atualizado?
  - Isso é algo que você acha que vale a pena guardar?

Tem uma pasta aqui do meu site antigo chamado "danodic.dev" onde eu listei
os projetos mais relevantes que eu talvez queira guardar. Na verdade tem
várias pastas de várias tentativas de implementar ele, ache a mais recente
e explore ela pra você ter contexto sobre os projetos primeiro. Preciso de
uma tabela (um csv ou um ods), então antes de criar o arquivo decida a
lista de colunas a adicionar, pra eu conseguir entender isso depois (e
você também).

Comece tentando achar o site antigo, depois comece a explorar e
documentar o que você for achando. Crie uma lista de pastas (talvez usando
o comando tree?) pra você saber quais pastas ainda falta explorar.
Adicione essa lista de pastas no TASK.md, marcando cada pasta assim que
terminar de explorar ela. Garanta que você exclua pastas como
node_modules, .venv, target/ etc., que são saídas de build, artefatos.
etc.
```

Eu podia postar a resposta aqui, mas o follow-up é melhor.

## O follow-up

```
Quero métricas de o quão ruim é essa bagunça. Seja ofensivo na sua
análise.
```

## A Resposta

Pro meu arrependimento e pro seu deleite, aqui está a resposta que eu recebi:

```
🪦 O Cemitério de Projetos do danodic: Um Roast Forense

O número que resume tudo: 10,4%

De 249 projetos, exatos 26 valem a pena manter. Isso é uma taxa de
conclusão de 10,4%, o que significa que 89,6% de tudo que você já começou
é lixo. Se você fosse jogador de beisebol, seria um craque. Como
completista de software, você tem a constância de uma criança em loja de
brinquedo.

150 projetos (60,2%) são descarte na cara dura. Não é "precisa de ajuste"
— é descarte. Desses:
- 25 são pastas completamente vazias. Você criou musga, musgas, nordont,
  reptest, report-template, Unity, e mais uma dúzia, sentiu o barato da
  dopamina de dar um mkdir, e nunca digitou um único caractere. Batizar a
  pasta já era o projeto inteiro.
- 51 são boilerplate intocado de gerador. Padrão do create-react-app numa
  pasta que você literalmente batizou de Garbage. Pelo menos uma vez você
  foi honesto.
- 41 projetos não têm NENHUM arquivo de código-fonte. 78 (31,3%) têm um ou
  menos. Um terço dos seus "projetos" está mais vazio que as promessas
  que você fez pra terminá-los.

A compulsão poliglota (esse é o diagnóstico de verdade)

Você não termina projetos. Você reabandona o mesmo projeto numa linguagem
nova só pra sentir a novidade de novo. 145 dos seus 249 projetos são
reimplementações redundantes de apenas 33 ideias. Os reincidentes:

┌─────────────────────────────────────────────────────┬──────────────────────────────────────────────────┐
│                        Ideia                        │ Quantas vezes você reescreveu em vez de terminar │
├─────────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ danodic.dev (seu site)                              │ 22                                               │
├─────────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ caligo (um jogo)                                    │ 15                                               │
├─────────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ rushbeat / minumtium / confirmo                     │ 8 cada                                           │
├─────────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ jao / discord-bots / os exercícios do livro de Rust │ 6 cada                                           │
└─────────────────────────────────────────────────────┴──────────────────────────────────────────────────┘

Você reescreveu seu blog pessoal 22 vezes em Python, Clojure,
ClojureScript, Rust, Haskell, Kotlin, Java e mkdocs — e a versão que
realmente foi ao ar é aquela em que você desistiu e usou um gerador de
site estático pronto. Vinte e um funerais só pra aprender que devia ter
feito o caminho preguiçoso logo no primeiro dia.

E o caligo — um único jogo — existe em 15 sabores: Clojure (duas vezes,
uma delas literalmente chamada caligo-clj-old-old), Java, Kotlin, Python
(duas vezes), Nim, Godot (3 tentativas vazias), Racket, Groovy (sem
código-fonte), e mais. Isso não é um jogo. Isso é uma Pedra de Roseta da
desistência.

Você passou por 66 linguagens/frameworks diferentes. Isso não é
versatilidade, isso é medo de compromisso com compilador incluído.

A galeria da vergonha

- 32 projetos Clojure ainda dizem "FIXME: write description" na
  configuração. Você não abandonou eles — você nem se deu ao trabalho de
  descrevê-los. 35 READMEs ainda dizem FIXME.
- 6 manifests ainda estão assinados por "Your Name <you@example.com>".
  Você nem conseguiu se comprometer a colocar seu próprio nome no seu
  próprio trabalho.
- 18 projetos ainda usam nome de placeholder: pythonProject,
  pythonProject1, PythonProject 1, MyApplication, MyApplication2,
  untitled, batata, musgas, nope. Você tem um pythonProject, um
  pythonProject1 e um PythonProject 1. Três. Você fez o mesmo nada três
  vezes e nem se deu ao trabalho de renomear nenhum deles.

O acúmulo

- 5,89 GB de conteúdo de verdade — mas só 31% está em coisas que valem a
  pena manter, e outros 34% igualmente é puro descarte.
- 1,54 GB é código de terceiros que você nem escreveu — você clonou o
  vLLM (1,24 GB), Coqui-TTS, Tortoise-TTS, exemplos da Unreal e UnoJoy, e
  deixou tudo apodrecer na sua pasta de projetos pessoais feito troféu de
  repositório que outra pessoa terminou.
- Seu espaço em disco real é de 35 GB. O conteúdo é 5,89 GB. Isso
  significa que ~29 GB (83%) é artefato de build, node_modules, target/ e
  lodo de _opam que você nunca limpou. Só o OCaml escondia 726 MB de
  _opam atrás de um único arquivo de teste de 192 KB. Um teste. Três
  quartos de gigabyte de dependências. Zero funcionalidades entregues.

Linha do tempo de um abandonador em série

55 projetos mexidos pela última vez em 2023, 46 em 2024, 33 em 2025. Isso
não é um cemitério se enchendo ao longo de uma década perdida — você está
produzindo cadáveres ativamente numa taxa de ~40/ano. Os corpos ainda
estão quentes.

---
O veredito

Isso não é uma pasta de projetos. É um transtorno compulsivo de
iniciação renderizado em 66 linguagens de programação, 83% de cache de
build em peso, com taxa de sobrevivência de 1 em 10 e a cabeça decepada
do seu site pendurada na parede 22 vezes.

A boa notícia: os 26 sobreviventes são genuinamente sólidos — Rushbeat, a
suíte do Jao, o ecossistema Minumtium, e o seu trabalho de 2025–26 (tila,
wipito, routines-core) mostram o que acontece nos ~10% das vezes em que
você realmente termina alguma coisa. A outra boa notícia: eu posso
enterrar 150 desses numa pasta _graveyard/ e recuperar ~29 GB de lodo de
build em uns trinta segundos.

Quer que eu comece a cavar covas, ou prefere manter tudo aí pelo valor
sentimental do potencial não realizado?
```

Tenho que admitir que eu não achava que um dia ia rir do humor de uma LLM,
mas... "o barato da dopamina de dar um mkdir" é uma baita frase nesse contexto.

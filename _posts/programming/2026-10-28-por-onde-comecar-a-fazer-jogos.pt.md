---
layout: post
title: "Por Onde Começar a Fazer Jogos"
lang: pt
permalink: /2026/10/28/por-onde-comecar-a-fazer-jogos/
tags: [gamedev, programming]
---

Um amigo me perguntou como começar no desenvolvimento de jogos: o que estudar,
qual ferramenta usar, por onde ir. Em vez de responder numa mensagem enorme que
ia se perder no meio do chat, resolvi escrever aqui qual é a minha visão sobre o
assunto.

Antes de qualquer coisa, um aviso: eu não sou um desenvolvedor de jogos
profissional. Nunca lancei nada comercialmente. Mas eu fiz alguns jogos ao longo
da vida, e aprendi algumas coisas no caminho -- geralmente da forma mais
difícil.

## O cemitério de protótipos

A primeira coisa que eu aprendi é que, entre todas as demos, testes e projetos
que você vai começar, _um_ vai virar jogo. O resto vai morrer esquecido numa
pasta qualquer. Eu inclusive já escrevi sobre o
[meu cemitério de projetos](/2026/07/02/project-cemetery), e ele não é bonito.

Mas os poucos projetos que sobreviveram têm algumas coisas em comum, e a
principal delas é que existia uma _ideia sólida_ por trás. E o que eu quero
dizer com ideia sólida? Que eu sabia quais mecânicas queria implementar, que eu
tinha um entendimento claro do que tornava aquele jogo divertido, e que eu tinha
uma noção -- nem que fosse mais ou menos -- da tecnologia necessária para
fazer ele.

E tenho que admitir: em 90% das vezes, não é o conhecimento técnico que vai te
levar para frente. É ter a ideia do jogo muito bem definida na cabeça.

## Comece pela ideia

Vou usar dois projetos meus como exemplo, porque acho que foram os que tiveram
um sucesso razoável.

O primeiro é o **Rushbeat**, um jogo de música baseado no
[_Beatmania IIDX_](https://en.wikipedia.org/wiki/Beatmania_IIDX). O
segundo é o **Rushflag**, um jogo de adivinhar bandeiras que roda em live no
YouTube e interage com o chat. Tenho outros projetos que nunca cheguei nem a
mostrar, mas esses dois servem bem para explicar o raciocínio.

### Rushbeat

> <p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/iVOMaDSx6Us" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
>
> _O Rushbeat._

O objetivo de gameplay do Rushbeat é criar aquele loop viciante, que prende o
jogador, puxa o hiperfoco e dá vontade de jogar _só mais uma vez_. Esse loop
nasce da relação entre a música e o reflexo de apertar as teclas: conforme o
jogador vai ficando bom, a música passa a tocar do jeito que ela deveria tocar.
É ele que está tocando a música. E isso é extremamente satisfatório.

Com o tempo, o jogador consegue encarar músicas mais difíceis e tocar trechos
cada vez maiores sem errar, o que traz uma sensação de recompensa. No final da
partida ele recebe um julgamento dizendo o quão bem foi, e isso vira uma forma
de medir a própria performance e correr atrás de pontuações melhores.

É um mecanismo bem simples, que basicamente todo jogo de música explora. Nada
disso foi inventado para o Rushbeat -- ele é um clone de um jogo que já existe
e segue exatamente os mesmos conceitos.

Mas o que prende o jogador não é só o loop de gameplay: é a possibilidade de
colocar conteúdo novo. O jogo foi pensado para aceitar músicas customizadas e
até customizar a aparência dele. São esses detalhes menores que vão tornando a
experiência mais completa.

O Rushbeat foi feito para rodar no computador e nunca foi pensado para ser
lançado em loja nenhuma, até por questões de direito autoral. Mas foi um projeto
_divertido de fazer_, e isso é um detalhe muito importante: o projeto precisa
ser divertido para você também. Se desenvolver aquele jogo não for divertido,
principalmente num projeto de hobby, talvez ele não faça muito sentido. Vou
voltar nesse assunto mais adiante.

### Rushflag

O Rushflag surgiu numa madrugada em que o YouTube me capturou. Eu estava no
meio de uma sessão de _doom scrolling_ e esbarrei numa daquelas lives com
bandeirinhas dentro de um círculo, batendo umas nas outras, enquanto o chat
aposta em qual delas vai ganhar. Fiquei uns bons dez minutos encarando aquilo,
completamente sem noção do tempo.

Mas aquilo ficou na minha cabeça. O jogo era bem rústico, bem simples, e eu
pensei: _e se a gente fizesse algo com uma mecânica parecida, mas bem mais
acabado, com cara de jogo de verdade?_ Felizmente eu já tinha experiência com o
que fiz no Rushbeat e em outros projetos, então sei mais ou menos como fazer
algo visualmente interessante. E hoje em dia, com IA, isso fica ainda mais
rápido.

Juntei isso com um canal que vinha aparecendo bastante no meu feed, o
_YourTutorBrad_, que tem alguns personagens recorrentes. Um dos que eu mais
gosto de assistir é o Isaac, que é o mestre de adivinhar bandeiras. Tem até um
molequinho de uns seis ou sete anos que também decorou todas. E eu pensei: _e
se qualquer pessoa no chat pudesse viver essa experiência? E se um dia o próprio
Isaac entrasse no chat para jogar?_

Eu poderia ter feito um aplicativo de celular, mas achei mais interessante
deixar o jogo rolando no YouTube: a pessoa esbarra no vídeo, entra e joga. Outro
ponto que pesou foi a monetização. Esse é um jogo que eu fiz já pensando em, se
possível, monetizar no futuro, e o YouTube é uma plataforma que funciona para
isso.

> <p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FVqtmvXJoTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
>
> _O Rushflag rodando em live. Entra lá e chuta uma bandeira no chat._

### As três perguntas

Olhando para essas duas ideias, dá para tirar três coisas que eu considero
importantes antes de começar qualquer jogo a sério:

1. **Qual é a mecânica principal?** Apertar as teclas no ritmo para tocar a
   música; adivinhar a bandeira pelo chat.
2. **Qual é o mecanismo de recompensa?** No Rushbeat, é ficar bom, tocar a
   música sem falhas e receber uma boa avaliação. No Rushflag, é acertar a
   bandeira antes dos outros jogadores, ver o próprio nome na tela e subir no
   ranking.
3. **Qual é o formato?** O Rushbeat é um jogo de desktop. O Rushflag é uma
   aplicação que transmite para o YouTube.

## Comece pelo que você não sabe

Em qualquer projeto que eu começo, eu sigo o mesmo processo: _ataco primeiro
aquilo que eu não sei como vai ser feito_.

Se você é uma pessoa que entende de design, deixe os gráficos por último e
comece pensando em como vai fazer a programação. Depois que você passa pela
parte que não sabe fazer, fazer o que você sabe é rápido.

No Rushflag, por exemplo, a última coisa que eu fiz foram as músicas. Música eu
sei fazer. Agora, transmitir o vídeo para o YouTube era algo que eu nunca tinha
feito, e foi aí que eu ataquei primeiro.

Fazer o que a gente não sabe sempre vai ser a parte mais difícil de um projeto,
_mesmo que seja a parte mais simples dele_. O código do Rushflag não é
complexo; os gráficos e a música são muito mais trabalhosos. Mas uma parte dos
gráficos era incerta para mim, e a outra incerteza era como fazer o vídeo chegar
no YouTube.

Sobre os gráficos: eu precisava de mais de 200 bandeiras desenhadas, e
desenhadas _em camadas_. Eu não ia fazer isso na mão. Então tive que descobrir
como automatizar o processo. Dá para fazer isso com IA hoje? Dá, mas eu tive que
iterar por algumas diferentes. O [Gemini](https://gemini.google.com) não gerava as bandeiras direito.
Com o [Claude](https://claude.ai) eu tentei de algumas formas diferentes, até
chegar à conclusão de que gerar as bandeiras pelo
[Blender](https://www.blender.org) funcionava bem. A partir daí eu montei um
pipeline, um método de trabalho para resolver aquele problema.

Depois veio a transmissão. Fui estudar, entender como funcionava (com IA,
obviamente) e resolvi. A partir desse ponto, o resto foi muito rápido: gráfico,
tela, interface, tudo isso é coisa que eu já tenho experiência.

O Rushbeat é um exemplo ainda melhor, porque foi muito mais difícil -- até
porque, quando eu comecei, lá por 2017, não existia IA para ajudar. A primeira
coisa que eu fiz foi um protótipo que só tocava as músicas. Para mim, essa era a
parte mais incerta: como funcionava o formato de arquivo, como carregar, como
fazer o playback ficar direitinho. As primeiras versões do Rushbeat não tinham
gráfico nenhum, era só um player tocando música.

> <p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/p9412C9s5No" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
>
> _O protótipo em Python, a primeira vez tocando uma música e mostrando as notas._

Com o tempo isso foi evoluindo,
virou uma aplicação gráfica com uma interface rudimentar, e o jogo foi crescendo
a partir dali.

### O protótipo não precisa ser o jogo final

E isso é um detalhe muito importante: muitas vezes a primeira versão do jogo nem
vai ser feita na ferramenta final, nem na base de código final.

O Rushbeat foi prototipado em Python. Não porque era a melhor linguagem para
isso -- eu sabia que ele não ia ficar em Python -- mas porque era a linguagem em
que eu conseguiria programar e iterar mais rápido. Quando chegou o ponto em que
Python já não era mais uma boa ideia, fui explorar alternativas. Passei um tempo
na Unity, aprendi coisas, resolvi outros desafios, e no final decidi ficar no
Java.

### Falhe rápido

Essa abordagem tende a funcionar porque tira do caminho a coisa mais difícil
logo de cara. Se você sabe que existe um desafio muito grande no projeto, é
melhor peitar ele primeiro do que passar meses fazendo gráfico, música e um
monte de coisa em volta, para no fim não usar nada disso porque você desistiu
quando chegou na parte difícil.

É o famoso _fail fast_: se não for funcionar, você descobre logo, desiste de uma
vez e parte para a próxima ideia.

## Escolhendo as ferramentas

Hoje em dia, o ecossistema de ferramentas de desenvolvimento de jogos é uma
bagunça gigantesca. Tem uma infinidade de motores, uma infinidade de
ferramentas, cada uma querendo a sua atenção e querendo que você trabalhe de um
jeito diferente. Muita coisa é gratuita, com usos e abordagens diferentes. Então
escolher é difícil.

O que eu diria para quem está começando é: _vá pelo mainstream_. Use as
ferramentas mais conhecidas, porque o resultado provavelmente vai ser melhor.

### Não faça o seu próprio motor

É muito legal quando você ouve falar daquele cara que programou o próprio motor
de jogo do zero, com física, colisão e tudo mais. Eu gostaria de ser esse cara?
Gostaria. Já fiz isso, inclusive. Mas a real é que isso tem um preço, e o preço
é caro: atrasa muito o desenvolvimento.

E tem um ponto mais importante. Quando questões técnicas começam a ficar no seu
caminho, fica cada vez mais difícil transpor o que está na sua cabeça para o que
está na tela. Jogo é trabalho criativo, assim como design, modelagem 3D ou
música, e todo processo criativo se beneficia de _timing_ e de hiperfoco. Quanto
mais rápido for o caminho entre a ideia e a tela, melhor. Senão, você acaba
esquecendo o que estava fazendo no meio do caminho.

Isso não significa que a ferramenta que você escolher vai ser a definitiva. Num
projeto real, você talvez troque de ferramenta duas ou três vezes. Acontece,
porque tem muita coisa a ser levada em consideração.

### O que define o motor

Antes de recomendar qualquer coisa, é preciso entender o escopo do jogo.

**Plataforma:** é um jogo para rodar no navegador? No desktop? Você pretende um
dia lançar para console? Algumas ferramentas, como a Unity e a Defold, têm
suporte oficial a console (desde que você seja aprovado pela fabricante);
outras, como a Godot, [dependem de empresas terceirizadas](https://godotengine.org/consoles/)
para fazer o port. Para quem está começando, isso é pouco relevante.

**2D ou 3D:** se o jogo é 2D, dá para usar motores mais simples, como o
[GameMaker](https://gamemaker.io) (que agora é gratuito para uso não comercial)
ou o [Construct](https://www.construct.net). Os dois permitem programar sem
escrever código -- o GameMaker com blocos visuais e o Construct com folhas de
eventos --, então para quem só quer fazer um jogo e não quer necessariamente
aprender a programar, eles são muito mais simples. Unity e Godot também fazem
jogos 2D e funcionam bem para 2D em alta resolução, mas pixel art com precisão
perfeita dá trabalho. A Godot até tem
[opções para isso](https://docs.godotengine.org/en/stable/tutorials/rendering/multiple_resolutions.html),
mas na Unity, como vou contar mais adiante, eu sofri.

Para 3D, as opções ficam mais curtas. A [Unreal](https://www.unrealengine.com)
é poderosa, mas eu não recomendaria para quem está começando: os projetos ficam
pesados e travados muito fácil. A [Unity](https://unity.com) também é uma
opção, mas eu não iria nela por causa da segurança jurídica. Se o seu jogo der
certo na Unity, você fica na mão de uma empresa com um histórico de
licenciamento muito ruim -- vale pesquisar sobre a
[_runtime fee_ de 2023](https://en.wikipedia.org/wiki/Unity_Technologies), que
gerou uma revolta generalizada até ser cancelada.

A alternativa que eu recomendo é a **[Godot](https://godotengine.org)**:
gratuita, de código aberto e, acima de tudo, com uma licença que te dá
segurança. Hoje ela já é um motor consolidado, com bastante documentação e
tutorial disponível.

Também gosto muito da **[Defold](https://defold.com)**, que eu acho muito
subestimada. Ela é focada principalmente em 2D, mas também suporta 3D. E se
você quer algo mais parecido com a Unity, mas gratuito e de código aberto, vale
olhar o **[Stride](https://www.stride3d.net)**, que inclusive usa C# para a
programação.

### Assets

Seja 2D ou 3D, você vai precisar de um pipeline de produção de assets. Asset é
qualquer recurso do jogo: um sprite, uma imagem, um modelo 3D, uma música. Você
precisa saber quais ferramentas vai usar, que processo vai seguir, se vai fazer
você mesmo ou chamar outra pessoa. E mesmo para o desenvolvimento básico, você
vai precisar ao menos de gráficos e sons de placeholder até ter as versões
finais.

Algumas ferramentas que eu recomendo:

- **Gráficos 2D e interfaces:** no Windows e no Mac, o
  [Affinity](https://www.affinity.studio) é a melhor ferramenta gratuita que
  existe -- desde o final de 2025, quando a Canva tornou ele gratuito. Não é
  open source nem livre, mas é a melhor. No Linux, por via de regra, a gente
  ainda se vira com [Inkscape](https://inkscape.org) e
  [GIMP](https://www.gimp.org).
- **Sprites:** para um trabalho mais detalhado, o
  [Aseprite](https://www.aseprite.org) é muito bom. Ele é pago, mas barato, e o
  código-fonte está disponível para quem quiser compilar.
- **3D:** o [Blender](https://www.blender.org) é praticamente um _no-brainer_.
  Os padrões da indústria hoje são
  [Maya](https://www.autodesk.com/products/maya),
  [Houdini](https://www.sidefx.com) e Blender, e o Blender é gratuito e open
  source. A não ser que você seja muito especializado em modelagem, ele
  provavelmente é a ferramenta ideal.
- **Música:** aí já é outro mundo. Eu gosto do
  [FL Studio](https://www.image-line.com/fl-studio/), mas tem
  [Renoise](https://www.renoise.com), [Ableton](https://www.ableton.com) e
  muitos outros -- falei mais sobre isso no post de
  [música no Linux](/2026/07/05/musica-no-linux/).

Mas o que eu realmente recomendo é começar com placeholders muito simples. Se
for 3D, use cubos, esferas e retângulos para representar as coisas enquanto
prototipa, e pense nos gráficos depois. Se for 2D, faça um gráfico bem
rudimentar e não se preocupe com acabamento ainda.

Se puder reaproveitar assets prontos, aproveite. A Unity tem uma [loja de assets](https://assetstore.unity.com),
e sites como o [Kenney](https://kenney.nl) têm um monte de asset gratuito,
inclusive 3D, que dá para usar para prototipar. Eu começaria com assets prontos
e só depois pensaria em criar os próprios ou chamar alguém para fazer. Lembrando
que asset próprio traz personalidade para o jogo, coisa que reaproveitar não
traz.

Para música, eu recomendaria usar música licenciada ou gratuita -- a não ser que
você seja músico e queira dar ênfase a isso.

E aqui vai um lembrete importante: até o jogo mais simples vai levar anos se
você decidir fazer tudo sozinho. Foi o caso do Rushbeat. Eu fiz absolutamente
tudo nele, e passei cinco anos fazendo um jogo que, com um escopo menor, teria
levado um.

## Escopo

E isso me leva ao maior problema dos projetos pessoais, principalmente de jogos:
o [_scope creep_](https://en.wikipedia.org/wiki/Scope_creep). A gente vai fazendo, vai tendo ideias, vai colocando mais
coisa. Cada coisa nova aumenta o trabalho, e cada vez que o trabalho aumenta, o
fim fica mais longe. Até que a gente nunca termina.

Jogos são especialmente vulneráveis a isso porque o escopo cresce de forma
orgânica. Dá para definir uma mecânica fundamental muito rápido, mas logo a gente
percebe que, para essa mecânica ser divertida, ela precisa de muito conteúdo em
volta: muitas fases, muitos inimigos, muitas coisas. E o projeto vai inchando.

Algumas coisas que ajudam:

- **Planeje antes de começar.** Faça uma lista de tudo que o jogo precisa ter e
  fazer, e vá marcando conforme avança. Esse checklist vai ser o seu guia para
  saber a hora de parar.
- **Mire numa demo, não num jogo completo.** Lance uma versão inicial, veja se o
  retorno é bom, e só depois trabalhe na versão completa.
- **Cuidado com os side projects.** Começar um monte de projetos ao mesmo tempo
  não ajuda em nada.

E lembre-se: _jogo não se termina, jogo se abandona_. Você vai continuar achando
bugs e coisinhas para ajustar para sempre. Em algum momento você precisa largar
aquilo e considerar pronto.

## Qual é o seu objetivo?

Parte da escolha das ferramentas tem que ser guiada por _qual habilidade você
quer desenvolver_.

Se a sua intenção não é lançar um jogo, mas aprender a programar, obviamente não
faz sentido pegar um motor em que não se escreve código. Mas eu também não
indicaria começar do zero com uma biblioteca que seja 100% código. O Rushbeat e
o Rushflag não foram feitos numa Unity ou Godot da vida: o Rushflag usa OpenGL
direto, e o Rushbeat foi feito em Java com a [libGDX](https://libgdx.com),
que é uma biblioteca e não um motor completo -- o motor fui eu que fiz. Mesmo para quem quer aprender a
programar, eu recomendaria pegar um motor e ir escrevendo os scripts ali dentro.

E aqui a recomendação volta a ser a Defold. Ela usa
[Lua](https://www.lua.org/about.html), uma linguagem brasileira criada na
PUC-Rio, muito simples e amigável para quem está começando. A Defold não tem
programação visual: toda a lógica do jogo
[é escrita em Lua](https://defold.com/manuals/writing-code/). Mas o editor
cuida de muita coisa visualmente -- cenas, interface, atlas de sprites,
tilemaps, partículas --, então o código fica concentrado no comportamento do
jogo. É uma introdução muito mais gentil à programação do que tentar fazer um
jogo do zero no código.

Hoje dá para programar com IA, claro, mas a IA não enxerga o que está
acontecendo na tela. Saber mexer no código vai te ajudar a fazer ajustes e
otimizar coisas quando ela não acertar.

Se o seu objetivo é aprender gráficos, modelagem 3D e afins, use uma Godot ou
uma Defold e deixe a IA cuidar do código. Seu foco não é programar, então tudo
bem.

E se o seu objetivo é aprender a fazer música... não faça um jogo. Vá fazer
música.

## O que eu não faria no primeiro jogo

### Começar por um projeto grande

Comece pequeno, de preferência com um clone de um jogo existente: um Tetris, um
Pac-Man, o jogo da cobrinha. Esse conhecimento vai se somando.

Um projeto grande não é só uma questão técnica -- é uma questão de disciplina,
de persistência. Quando o projeto fica difícil de executar, a gente começa a
procrastinar. Quanto mais bagagem técnica você tiver antes de encarar algo
grande, melhor, porque aí a única coisa que pode te fazer procrastinar é falta
de vontade, e não a falta de saber como fazer.

Isso aconteceu comigo no Rushbeat. Fiquei seis meses sem tocar no jogo porque
precisava implementar uma parte bem complexa -- se não me engano, a mudança de
BPM no meio da música. Para as minhas habilidades da época, era um negócio muito
chato de fazer, e eu simplesmente fugi dele por meio ano.

### Subestimar o tamanho do escopo

Muita gente me diz que quer fazer um RPG. Fazer um jogo com 40, 50 horas de
gameplay é um trabalho hercúleo, mesmo que seja um RPG muito simples, mesmo
usando o [RPG Maker](https://www.rpgmakerweb.com). A história, por si só, já é complexa, extensa e um trabalho
enorme.

Eu começaria por jogos sem história, ou com uma história simples, mais clichê,
que foquem em mecânica e gameplay. Depois que a parte técnica estiver dominada,
aí sim vale gastar tempo escrevendo. Escrever história para jogo é uma
disciplina inteira, que também precisa ser estudada.

### Começar pelo 3D

Comece pelo 2D. Depois que você entender bem como as coisas funcionam em duas
dimensões, passar para o 3D é muito mais fácil -- é, no fim das contas, um eixo
a mais.

### Começar pela arte final

Não faça assets próprios logo de cara, ou, se fizer, que sejam provisórios. Use
assets disponíveis na internet, como os do Kenney, algum gerador de assets, ou
peça para uma IA gerar. Pode desenhar seus conceitos e ideias, mas não comece
pela arte final.

### Começar pelo jogo dos sonhos

Esse é o conselho mais importante de todos. O nosso jogo dos sonhos sempre vai
ter um padrão altíssimo de qualidade e de exigência, e a gente nunca vai
terminar ele -- ao menos não enquanto não souber fazer jogos de forma
eficiente.

Comece com um jogo simples, sem tanto amor, sem tanta paixão envolvida. O jogo
dos sonhos pode esperar.

## O que eu usei, e o que achei

Para fechar, um pouco sobre as tecnologias que usei nos meus jogos e o que deu
certo ou errado.

### Rushbeat

O Rushbeat começou em **Python**, uma linguagem conhecida por não ter uma
performance muito adequada para jogos. Hoje, com a experiência que eu tenho, sei
que daria para fazer aquele jogo em Python e ele funcionaria. Mas na época eu
não era tão bom programador, acabei esbarrando em limitações de performance e
decidi mudar.

Mesmo assim, Python não foi uma escolha ruim. Não era a linguagem ideal para o
jogo, mas foi ótima para o protótipo. E para quem já programa, as linguagens são
todas meio parecidas, então mudar de uma para outra normalmente não é tão
difícil.

Depois fui para a **Unity**, e essa _não_ foi uma boa escolha. O jogo é 2D e eu
queria precisão de pixel na tela, e a Unity não lida bem com isso. Tem até um
script velho no meu GitHub que eu fiz só para alinhar as coisas aos pixels. Era
gambiarra atrás de gambiarra.

> <p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/HaKcW__Akj4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
>
> _O último registro do Rushbeat na Unity._

Mas o que me fez sair da Unity nem foi isso, porque ela estava funcionando. Foi o
receio de ficar preso num motor proprietário e, do nada, decidirem mudar a
licença e eu ficar refém de uma ferramenta com termos esquisitos. Alguns meses
depois foi exatamente o que aconteceu. Ainda bem que eu saí antes.

Fui então para **Java com a libGDX**. Java é uma linguagem que eu já dominava --
diferente de C#, que é o que a Unity usa -- e o desenvolvimento rendeu. E mais:
cumpriu um dos objetivos que eu tinha com o Rushbeat, que era me tornar um
programador melhor. Eu reescrevi o jogo umas quatro vezes: em Python, em C# na
Unity, em Java, e de novo em Java quando fui estudar design patterns e coisas
mais específicas de programação. Não me arrependo, serviu ao propósito.

Para os gráficos usei o Affinity (na época, com licença paga), e para as músicas
o FL Studio -- tanto para as músicas de teste do jogo quanto para as do menu. O
sistema de animação também fui eu que fiz, em Java com a libGDX, para poder
criar as animações e as skins do jogo.

### Rushflag

Com o Rushflag a história é diferente. Ele não é o projeto dos meus sonhos, não
é algo pelo qual eu sou apaixonado. Então a primeira decisão foi que ele seria
_vibe codado_ com IA. Sem medo, sem remorso e sem esconder de ninguém. A ideia era
justamente desenvolver rápido e colocar o jogo no ar logo.

A ferramenta principal para a codificação foi o Claude. A stack ficou assim:

- **Backend:** Java com [Spring](https://spring.io)
- **Frontend:** Python com [OpenGL](https://www.opengl.org) e
  [GStreamer](https://gstreamer.freedesktop.org) (acho que tem
  [Pillow](https://python-pillow.github.io) por baixo, mas, sinceramente, não me
  importo muito -- ele é vibe codado mesmo)
- **Banco de dados:** [Postgres](https://www.postgresql.org)

No pipeline, o Claude foi usado junto com o Blender para gerar as bandeiras, e o
[Claude Design](https://www.anthropic.com/news/claude-design-anthropic-labs)
para desenhar a interface. E não, eu não aceitei qualquer coisa
que ele cuspiu: foram muitas iterações até a interface ficar do jeito que eu
queria.

A única coisa que eu fiz questão de fazer na mão foram, curiosamente, as
músicas. Usei o Renoise e fiz tudo eu mesmo.

## Então, por onde começar?

Para o meu amigo que pediu o conselho, a minha recomendação é: pegue a **Defold
com Lua**, ou a **Godot com
[GDScript](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html)**
(a linguagem própria dela, parecida com Python). Baixe uns assets temporários no Kenney, ou desenhe qualquer coisa, e
faça uns projetos de teste.

Se você quer aprender a programar, estude Lua ou GDScript. Se não tem interesse
em programar e só quer se divertir fazendo jogos, as duas funcionam -- só saiba
que, nas duas, a lógica do jogo vai ser código de qualquer jeito. Mas ambas
guardam os scripts em disco como texto, e você consegue colocar o Claude, o
[Codex](https://openai.com/codex/) ou qualquer outra ferramenta para codificar.

No fim das contas, o que mais importa não é a habilidade técnica. É como o jogo
está estruturado, se a sua ideia é boa e, acima de tudo, se o jogo é
_divertido_. Ele tem que ser divertido ao menos para você jogar. Se você achar
divertido, já está ótimo.

Então comece por um protótipo. Plugue o controle no computador, teste e veja se é
divertido. Se não for, não passe do protótipo: repense a ideia e vá ajustando as
mecânicas até ficar divertido. Porque, no final das contas, a gente joga para se
divertir.

Um abraço, e até a próxima.

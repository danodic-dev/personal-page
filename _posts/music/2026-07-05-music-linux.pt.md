---
layout: post
title: "Música no Linux"
lang: pt
permalink: /2026/07/05/musica-no-linux/
tags: [music, music-production, linux]
---

Faz alguns anos que voltei a usar Linux 100% do tempo no meu computador pessoal,
e um dos motivos pelos quais eu havia parado de fazer isso há quase 20 anos eram
os meus softwares de produção musical.

> Veja bem, eu uso IA para __traduzir__ os posts, não para escrever eles. Ao
> menos uma das versões dele vai ter sido escrita manualmente por mim, sem uso
> de assistentes de código. Neste caso, é o post em português mesmo.

## Softwares

Eu utilizava muitos softwares proprietários que funcionam nativamente apenas em
Windows ou MacOS como [FL Studio](https://www.image-line.com/fl-studio/),
[Maschine](https://www.native-instruments.com/en/products/komplete/drums/maschine/),
[Ableton Live](https://www.ableton.com/en/live/) e vários plugins
[VST](https://www.steinberg.net/technologies/vst/) que são feitos apenas para
Windows e MacOS.

O meu software principal é o FL Studio, e é sabido que este em especial até
consegue funcionar no Linux utilizando [Wine](https://www.winehq.org/). Porém,
uma característica comum de softwares de produção musical é o fato de que eles
têm interfaces elaboradas e que utilizam muita aceleração gráfica. A maior parte
deles depende fortemente de DirectX, efeitos de composição, etc.

Quando eu executo o FL Studio no Linux, a experiência é sub-ótima: alguns
travamentos aleatórios, interface quebrando em pontos específicos e outros
pormenores que não são vistos à primeira vista, resultando em relatos de
"funciona 100% bem", mas que quebram completamente o fluxo de trabalho quando
fazendo algo mais sério.

## Buscando Alternativas

Eu preciso de alternativas para o seguinte:

- DAW - É o FL Studio, Ableton Live, etc.
- Plugins de Síntese de Som - São os plugins VST para geração de som (
  sintetizadores) como
  [Massive](https://www.native-instruments.com/en/products/komplete/synths/massive/),
  [Sytrus](https://www.image-line.com/plugins/Synths/Sytrus/),
  [Serum](https://www.xferrecords.com/products/serum-2), etc.
- Plugins de Tratamento de áudio - plugins para:
  - Equalizador de n bandas
  - Delay
  - Reverb
  - Compressor multi-banda
  - Limiter
  - Entre outros.
- Editor de Áudio - [Edison](https://www.image-line.com/plugins/Tools/Edison/),
  [Sound Forge](https://www.magix.com/us/music/sound-forge/),
  [Audacity](https://www.audacityteam.org/), etc.

99% do que eu preciso era provido pelo combo FL Studio + Maschine, sendo que a
maior parte dos plugins built-in do FL Studio resolvem _bem_ o problema.

Eu preciso não apenas de uma alternativa, mas de algo _bom_. Um exemplo é o
editor de áudio, em que eu poderia simplesmente já estar usando o Audacity no
Windows. Porém, o Edison que vem no FL Studio é _muito_ superior em termos de
performance, workflow e funcionalidade para produção musical, além de ser
integrado ao FL Studio.

Felizmente, hoje em dia existe uma plenitude de softwares que cobrem este escopo
E que estão disponíveis para Linux. E não apenas software Open Source, porém
softwares comerciais equivalentes em funcionalidade e qualidade aos softwares
mencionados anteriormente. Alguns exemplos:

- DAW -> [Bitwig Studio](https://www.bitwig.com/),
  [Renoise](https://www.renoise.com/),
  [Waveform](https://www.tracktion.com/products/waveform-free), etc.
- Plugins VST:
  - [Vital](https://vital.audio/)
  - plugins [u-He](https://u-he.com/)
  - Suites inteiras de plugins FOSS que vou mencionar mais tarde.

No momento é mais uma questão de escolher um software, aprender a configurar
tudo e gastar um tempinho aprendendo como usar a coisa toda.

## A DAW: Renoise

Decidi pelo Renoise como DAW. Não sei se isso é algo do qual vou me arrepender
mais tarde, pois ele muda completamente a abordagem de edição.

O FL Studio é um editor no estilo _Sequencer_, onde a gente visualiza as faixas
na tela, com os clipes de som, midi, etc. em um timeline normalmente horizontal.
É o modelo mais comum, e as alternativas comerciais mais próximas disso são o
Bitwig Studio e o Waveform.

Já o Renoise é uma DAW no estilo _Tracker_, sendo uma das poucas opções
comerciais e _full featured_ para isso. Um tracker é bem diferente, ele dispõe
as faixas da música de forma vertical e você digita diretamente o valor das
notas e dos efeitos na matriz. É uma abordagem baseada em softwares que eram
usados antigamente principalmente no Amiga, como o
[FastTracker II](https://en.wikipedia.org/wiki/FastTracker_2).

Existem ports de Trackers antigos como o FastTracker para Linux, como o
[MilkyTracker](https://milkytracker.org/) que inclusive é free, mas eu quero
algo que funcione como uma DAW moderna com o estilo de tracker mais antigo.

Eu não tenho experiência com trackers, mas estou disposto a aprender.

## Plugins de Efeitos

Acabei decidindo por pegar o
[DAW Essentials Collection](https://www.tracktion.com/products/daw-essentials-collection)
da Tracktion devido a alguns motivos:

- Um pacote de plugins coesos, com interface similar e funcionamento similar.
- A Tracktion é uma empresa conhecida e que desenvolve produtos de qualidade (
  apesar de eu não gostar da DAW deles, mas é uma questão de preferência).
- O site estava com 40% de desconto em tudo, o que fez os plugins sairem mais
  barato do que uma ida à churrascaria.

Existem pacotes de plugins FOSS que cumprem um papel similar (os plugins da
[SocaLabs](https://socalabs.com/), por exemplo), mas eu prefiro um produto
consolidado de mercado e que vá me trazer estabilidade.

Depois que eu estiver afinado com o setup novo, posso testar mais os plugins
open source e decidir se é viável substituir os plugins comerciais.

## Plugins de Síntese de Som

Aqui é onde a coisa fica __cara__. O que eu acabei decidindo fazer é:

- Abraçar plugins FOSS na medida do possível.
- Utilizar plugins free.
- Utilizar soluções como o [Cardinal](https://github.com/DISTRHO/Cardinal) para
  criar sintetizadores ad-hoc.

Um plugin como Massive ou Serum custa na casa das centenas de dólares, e eu
tinha definido um budget curto de não gastar mais de 300 Reais nesta brincadeira
toda de plugins. Eu já possuía a licença do Renoise, então ele não conta neste
limite, mas os plugins da Tracktion custaram cerca de 200 reais.

O que eu preciso é o seguinte:

- Um plugin de síntese aditiva simples, com capacidades similares ao 3xOsc do FL
  Studio. Sim, um plugin desses é bem útil e pode ser pareado com os efeitos do
  DAW Essentials para gerar sons mais simples porém bem acabados.
- Um plugin de síntese FM ou um híbrido. Eu costumava usar principalmente Sytrus
  e Massive para isso.

Por esse motivo acabei adotando o seguinte:

- Vital como um dos plugins principais, pois tem uma versão free e os upgrades
  têm preços razoáveis ($25 para o tier Plus).
- Cardinal como um dos plugins para quando eu quiser fazer coisas mais
  esquisitas/elaboradas.
- Eventualmente comprar o
  [Zyn-Fusion](https://zynaddsubfx.sourceforge.io/zyn-fusion.html), que tem um
  valor razoável (começa em $45) e é um sintetizador lendário do mundo Open
  Source (ZynAddSubFx) porém com uma interface melhor.


### Usando Plugins de Windows

Além de usar o Vital e o Cardinal, eu também quero ver como que funciona o uso
do [yabridge](https://github.com/robbert-vdh/yabridge) para executar plugins
como o Massive e o Sytrus. Eu tenho licenças stand-alone de ambos os plugins,
além de mais alguns da
[Native Instruments](https://www.native-instruments.com/).

A ideia do yabridge é executar plugins de Windows no Linux, de forma a funcionar
com hosts VST Linux.

Neste texto não vou cobrir a minha experiência com isso pois é algo que ainda
tenho que entender como fazer funcionar (ex.: eu preciso da porcaria do
[Native Access](https://www.native-instruments.com/en/specials/native-access/)
para conseguir _baixar_ o Massive). Quando chegar a uma conclusão eu escrevo um
post aqui.

### Opções Open Source

Quando eu comecei no mundo da música, eu usei _muito_ plugin free e open source
de desenvolvedores como o daedalus. Eu ainda quero voltar a explorar estes
plugins, pois tem coisas bem específicas que só eles fazem (como emular
determinados chipsets de computadores antigos). Mas no momento eu sei bem o que
quero produzir, e é algo que eu preciso de capacidades de síntese mais gerais e
samples.


## Setup

Antes de começar a usar o software, é necessário fazer algumas configurações no
sistema. No meu caso, eu uso Ubuntu onde o servidor de áudio padrão é o
[pipewire](https://pipewire.org/). Softwares como o Renoise esperam utilizar o
[ALSA](https://www.alsa-project.org/) ou o [Jack](https://jackaudio.org/) como
servidores de áudio, devido a questões de buffering e latência. Eu tenho uma
interface de Áudio que é compatível com o Linux
([Komplete Audio 6](https://www.native-instruments.com/en/pricing/komplete-audio-6/)
MK1), portanto é só uma questão de configurar as coisas para os softwares
utilizarem ela da forma correta.

### Pipewire-Jack

No mundo do Linux, o Jack é meio que o equivalente ao ASIO. Com ele, a gente
consegue utilizar a interface de áudio com latência mais baixa. Porém, com o
Pipewire apenas instalar o `jackd` não funciona. Precisamos instalar o
`pw-jack`:

```bash
sudo apt install pipewire-jack qjackctl
```

No comando acima também está sendo instalado o
[qjackctl](https://qjackctl.sourceforge.io/), que é a melhor interface para
controlar e configurar o roteamento do Jack.

Existe um problema: quando o Renoise inicia, ele tenta rodar em um servidor Jack
que esteja rodando no sistema, e caso não consiga ele vai tentar subir um novo.
Porém, ele tenta subir o `jackd` e não o `pw-jack`, que é um daemon jack
conectado ao pipewire.

Para que isso aconteça, precisamos iniciar as aplicações no terminal utilizando
o comando `pw-jack` na frente do nome da aplicação:

```bash
pw-jack renoise
```

Isso é inconveniente pois precisamos ficar abrindo o terminal para disparar as
aplicações. Não apenas isso, precisamos usar o terminal para cada aplicação que
formos iniciar.

A solução mais simples é fazer um link a nível de sistema, substituindo o
`jackd` (que vai ser instalado como dependência do `qjackctl`) pelo `pw-jack`:

```bash
sudo cp /usr/share/doc/pipewire/examples/ld.so.conf.d/pipewire-jack-*.conf /etc/ld.so.conf.d/
sudo ldconfig
```

Isso vai fazer com que toda vez que um software tente usar o `jackd` padrão, ele
use o `pw-jack`.

> Uma coisa BEM importante e meio chata: para o sistema "transicionar" para o
> modo de áudio em tempo real, não pode ter nenhum aplicativo tocando som. A
> princípio isso não é um problema caso você seja uma pessoa focada e que faz
> música em silêncio. Não é meu caso, eu ouço YouTube e faço música ao mesmo
> tempo, e o meu YouTube faz com que o Renoise não funcione direito. A solução é
> simples: pausar o YouTube, ir nas configurações -> áudio -> reinitialize e só
> depois dar play no YouTube novamente.

### VSTs

Os plugins VSTs precisam ficar em uma pasta que seja escaneada pelo software que
você vai utilizar. No Renoise, esse caminho é definido pelas variáveis de
ambiente `VST_PATH` e `VST3_PATH`. Além disso, algumas pastas são padrão, como
`~/.vst3`. Neste caso o que eu achei melhor fazer foi criar uma pasta VSTs na
minha pasta de documentos e substituir o `~/.vst` e `~/.vst3` por links.

Minha pasta Documentos é sincronizada na nuvem, o que significa que caso eu
reinstale a máquina ou venha a perder o meu disco, eu consigo reproduzir o setup
com facilidade depois de configurar a máquina novamente.

> Isso é algo bem importante, pois os projetos dependem dos plugins carregados e
> funcionando para que toquem da maneira esperada. É um _porre_ ficar
> reinstalando e reconfigurando VSTs toda vez que acontece alguma coisa no
> sistema, mesmo em um ambiente Windows em que a maioria das coisas funciona com
> instalador. Eu já passei muito por isso, portanto já estou me precavendo.

```bash
rm -rf ~/.vst
rm -rf ~/.vst3
ln -s ~/.Documents/musica/vst/vst2/ ~/.vst
ln -s ~/.Documents/musica/vst/vst3/ ~/.vst3
```

Alguns VSTs vão instalar direto nas pastas de VST, pois são distribuídos como
pacotes `.deb`. Outros precisam ser descompactados em uma pasta, e estes links
ajudam justamente com os que precisam ser descompactados na mão.

## O que vem por aí

Depois de tudo configurado, o Renoise consegue carregar os VSTs e eu consigo
começar a brincar nele.

![Renoise](/assets/posts/musica/1/renoise.png)

Agora começa a parte divertida: experimentação, hiperfoco e barulho. Devo
começar a usar os plugins que comprei, testar plugins novos e começar a postar o
que vou descobrindo (e fazendo) por aqui.

Até a próxima. 👀

---
layout: post
title: "Compondo Música com IA"
lang: pt
permalink: /2026/10/29/compondo-musica-com-ia/
tags: [music, music-production, ia]
---

> Esse post foi escrito a partir de um áudio que eu gravei e transcrevi usando o
> [Buzz](https://github.com/chidiwilliams/buzz), um software de STT (fala para
> texto). Como toda transcrição automática, o resultado bruto vem cheio de
> repetições, hesitações e palavras entendidas erradas, então usei um LLM para
> organizar esse material em um texto corrido e arrumar esses probleminhas — o
> que explica por que algumas partes podem soar um pouco "IA" demais. As ideias
> e opiniões, porém, são todas minhas.

Nos últimos dias eu andei fazendo uma coisa que eu nunca imaginei que fosse
fazer: música com inteligência artificial. Antes que alguém me jogue pedra, eu
quero explicar o contexto -- porque, via de regra, _não é algo que eu faria_.

Mantendo a tradição, segue a música do post:

<p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/jcTRQnLRPnQ?start=529" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>

## Por que eu normalmente não faria isso

Quando eu quero dar personalidade para um projeto, colocar o meu toque nele, a
música é algo que eu prefiro fazer por conta própria.

Gráficos eu já deixo a IA fazer tranquilamente. A direção visual geralmente é
minha, mas design é algo em que eu estou muito enferrujado -- e, sendo honesto,
nunca fui muito bom e não tem sido algo que me diverte muito ultimamente.
Programação eu gosto, mas abro mão sem muito drama quando preciso entregar algo
mais rápido.

Música é outra história. Fazer música, para mim, é relaxante. É um hobby _sem
compromisso_: se no final do dia não sair música nenhuma, está tudo certo.
Abrir um instrumento e ficar batucando, fazendo barulho, já faz o tempo passar e
me deixa feliz.

Além disso, eu acho que a música traz caráter para um projeto, e não gosto da
ideia de fazer algo em que não exista absolutamente nada feito à mão. Veja bem,
eu não estou dizendo que a minha música seria melhor do que uma música feita
por IA. Estou dizendo que, boa ou ruim, eu prefiro fazer ela eu mesmo, porque o
que me interessa é o processo.

Isso é uma premissa dos meus projetos. Mas a gente também precisa saber quando
comprar essas batalhas, e o quanto esse purismo realmente vai trazer algum
benefício.

## O problema

Eu estou trabalhando em um projeto que precisa de uma trilha sonora inteira:
dezenas de músicas, coesas entre si, cobrindo situações bem diferentes. Eu não
estou particularmente inspirado no momento, não estou com vontade de compor
tudo isso do zero e preciso que fique pronto rápido.

Então resolvi tentar com IA. Mas não do jeito que você está imaginando.

## Primeiro o processo, depois a ferramenta

Antes de sair fazendo qualquer coisa, eu gosto de pensar no pipeline. Se o
processo de criação for consistente, ele escala: fica elástico, e eu consigo
gerar mais coisas de forma procedural sem perder a coerência.

E o que constrói uma música? Ela precisa de _ritmo_, de algum tipo. Precisa de
um _humor_ -- ela pode ser feliz, triste, nostálgica, tensa, assustadora. E esse
humor se sustenta em duas coisas: os [_timbres_](https://pt.wikipedia.org/wiki/Timbre), ou seja, quais sons vão ser
usados, e a [_escala_](https://pt.wikipedia.org/wiki/Escala_(m%C3%BAsica)) e a _tônica_. Organizando isso de forma racional, dá para
chegar num processo consistente.

### Os humores

O primeiro passo com o modelo de linguagem foi listar todos os humores de que a
trilha precisava. Ela tinha que ir de um momento feliz até um momento
nostálgico, triste, tenso ou assustador, e precisava ficar razoavelmente óbvio o
que cada música estava tentando passar.

### O estilo

Neste projeto a música não é o foco. Ela está lá para criar atmosfera, criar
tensão e acompanhar a história que está sendo contada. A solução, então, foi
fazer [_música ambiente_](https://pt.wikipedia.org/wiki/M%C3%BAsica_ambiente).

Música ambiente tem poucos elementos percussivos, e isso ajudava bastante. Eu já
imaginava que não ia sair nada que prestasse se pedisse para a IA trabalhar com
samples: a IA não tem ouvido. Ela não consegue olhar para a forma de onda de um
sample e entender direito que som é aquele. O caminho era [_síntese_](https://pt.wikipedia.org/wiki/S%C3%ADntese_sonora).

E música ambiente com sintetizador funciona muito bem. É um dos estilos mais
fáceis de fazer: você precisa acertar os acordes e as escalas, mas o arranjo é
simples, e os timbres também são simples de sintetizar.

### O plano

Com o estilo e os humores definidos, trabalhei com a IA para escolher as escalas
e tonalidades de cada caso. Isso virou o plano de construção da trilha sonora.

Isso funcionou bem porque eu conseguia dar pitaco logo de cara: "essa escala
não combina com isso, usa outra", ou "pesquisa na internet qual escala
costuma ser usada para esse tipo de situação". Fomos trabalhando em par até
fechar um plano com umas 50 músicas.

Nessa etapa eu também já fui dando a direção artística. Coisas como: usa
filtros [passa-baixa](https://pt.wikipedia.org/wiki/Filtro_passa-baixa) e
[passa-alta](https://pt.wikipedia.org/wiki/Filtro_passa-alta), usa
[reverb](https://pt.wikipedia.org/wiki/Reverbera%C3%A7%C3%A3o) e
[delay](https://en.wikipedia.org/wiki/Delay_(audio_effect)), e sempre que fizer
um _pad_ coloca uníssono -- nada de som cru de sintetizador, que fica robótico.
Bastante reverb para misturar tudo e deixar o som meio embaçado.

## O ferramental

Compor, para um modelo de linguagem, é relativamente fácil. A música tem uma
estrutura bem definida, que é a teoria musical: escala, notas e compasso já
desenham mais ou menos como a música vai ser. Mas é o ferramental que define
como ela vai _soar_.

Eu tinha dois requisitos. O primeiro: precisava ser gratuito, de preferência
open source. Isso já descartava o [FL Studio](https://www.image-line.com/) e o
[Renoise](https://www.renoise.com/). Tem outras pessoas no projeto, e eu quero
que elas também consigam gerar e mexer na trilha.

O segundo: precisava ser possível fazer o agente _programar_ a música. E opção
para isso não falta: [Strudel](https://strudel.cc/),
[Orca](https://hundredrabbits.itch.io/orca),
[Sonic Pi](https://sonic-pi.net/) (aquele que usa Ruby), entre outros. Cheguei a
cogitar o Renoise de novo -- que é a DAW que eu uso, como contei em
[Música no Linux](/2026/07/05/musica-no-linux/) -- por causa do
[scripting em Lua](https://www.renoise.com/tools), mas, além de ser
proprietário, o formato de arquivo dele não é bem documentado.

A primeira escolha acabou sendo o
[SuperCollider](https://supercollider.github.io/).

## SuperCollider

O SuperCollider é uma linguagem de programação para controlar um motor de som
que funciona como um sintetizador. Dá para sintetizar praticamente qualquer
som, tocar a música, e ele suporta extensões e efeitos. Ou seja: é fácil fazer o
agente criar sons de forma programática e, ainda assim, previsível. Para música
ambiente, sem muita percussão, parecia ideal.

E para esboçar as músicas ele funcionou muito bem. A sintaxe é limpa, conhecida
e, acima de tudo, bem documentada. E ele renderiza _muito_ rápido -- no
[modo não-realtime](https://doc.sccode.org/Guides/Non-Realtime-Synthesis.html)
ele não precisa tocar a música para gerar o áudio: em uma tarde
eu tinha os renders das 40, 50 músicas do plano.

O problema é que o SuperCollider exige que você monte o seu próprio motor de
sequenciamento em cima dele. O agente começou a fazer coisas muito específicas,
os scripts foram ficando difíceis de entender, e aí começou a dar ruim.

### Mixagem

Alguns sons ficaram muito mais altos que outros. E mixar via agente -- "baixa um
pouco esse volume, aumenta aquele" -- é horrível. Primeiro porque é lento.
Segundo porque, como qualquer pessoa que já mixou uma música sabe, mixar é um
processo iterativo: você fica ouvindo e ajustando, ouvindo e ajustando. Por
chat isso não funciona.

### Tempo

Em um momento, ao aplicar delay em um instrumento, ele considerou a cauda
inteira do delay como parte da duração da nota, e só tocava a próxima nota
depois que o delay acabava. As notas foram ficando completamente fora do tempo.
Quando eu reclamei, ele disse que precisava "arrumar o motor" e escreveu um
monte de código. Eventualmente arrumou, mas, putz: eu não quero ter que explicar
que a música precisa estar no tempo e que o compasso precisa ser respeitado.

### Timbres

As formas de onda padrão eram cruas demais. Os sons ficavam estridentes,
difíceis de ouvir, tudo embolado.

### Visualização

Eu não tinha uma forma fácil de ver a música, entender o que estava acontecendo
e editar alguma coisa se eu quisesse.

## O que é preciso para automatizar algo com IA

Antes de chegar na solução, vale um desvio: o que é preciso para automatizar um
processo com IA? No caso, o de fazer música. Para mim, são três coisas.

A primeira é conseguir _expressar a ideia em texto_. Com música isso é
tranquilo: notas, tempos, compassos, partitura e outras notações.

A segunda é conseguir _transformar esse texto em ações dentro de um software_.
No SuperCollider isso é natural, porque tudo é script: eu escrevo um script e o
script gera a música, sem nunca sair do texto. Outro jeito é entender o formato
de arquivo de um software e gerar esse arquivo diretamente. A IA é muito boa
com texto -- se o formato é XML, ela gera XML; se é código, gera código.

A terceira é dar para a IA _formas de avaliar o que ela gerou_. Isso passa por
critérios -- o que é bom, o que é ruim, o que você espera da saída -- e por
ferramentas para medir essa saída. Com o SuperCollider, por exemplo, eu podia
pedir para renderizar cada canal separado e analisar os decibéis e os picos,
para ver se algum estava muito mais alto que os outros.

### Saber fazer música ainda importa

E aqui entra o ponto que eu acho mais importante: no final das contas, isso não
é sobre saber usar IA. Também não é sobre saber operar um software ou tocar um
instrumento. É sobre _entender de música_.

O problema dos timbres crus só foi resolvido porque eu dei instruções explícitas
de síntese: para esse tipo de som, usa uma onda senoidal, ou triangular; ajusta
o [envelope](https://en.wikipedia.org/wiki/Envelope_(music)) -- ataque, _decay_,
_release_ -- de tal jeito; coloca reverb, delay, uníssono.

Eu deixei de ser o operador do software, mas continuei dizendo _como_ as coisas
tinham que ser feitas. É isso que separa o resultado de uma porcaria aleatória
de IA.

## SunVox

E o que acabou funcionando melhor? Por incrível que pareça, um software que eu
conheço há muito tempo e com o qual já mexi bastante, inclusive no Android: o
[SunVox](https://warmplace.ru/soft/sunvox/).

Pouca gente conhece. Ele é feito pelo Alexander Zolotov
([NightRadio](https://warmplace.ru/)), lá da Rússia, que tem uma série de
softwares bem interessantes de som. O SunVox é um estúdio modular: tem uma
interface de [_tracker_](https://en.wikipedia.org/wiki/Music_tracker) para
sequenciar os sons, uma timeline para arranjar a música, e os módulos você
arrasta e conecta. É leve e muito legal -- mas não é exatamente fácil de usar.

Para a minha sorte, existe uma biblioteca em Python, a
[Radiant Voices](https://github.com/metrasynth/radiant-voices), que gera
projetos do SunVox direto do código. E o próprio SunVox tem uma biblioteca
gratuita para desenvolvedores, que dá para usar do Python com o
[sunvox-dll-python](https://github.com/metrasynth/sunvox-dll-python) para
renderizar a música.

E o SuperCollider não foi para o lixo: ele continua sendo usado para sintetizar
os sons. Com isso o pipeline ficou assim:

1. O agente pega o plano da música.
2. Sintetiza os instrumentos no SuperCollider e exporta cada um como sample.
3. Escreve um script em Python que monta o projeto do SunVox, carregando esses
   samples.
4. Roda o script, que gera o projeto e renderiza a música.
5. Eu abro o projeto no SunVox e faço os ajustes de mixagem que precisar.

> ![Código de uma das músicas](/assets/posts/musica/2/sunvox.png)
>
> _À esquerda, o ponto de entrada do pipeline; à direita, a definição de uma das
> músicas, em Si dórico a 84 bpm, com as camadas de arpejo, baixo, pad e melodia._

O melhor dos dois mundos: o SuperCollider faz o que ele faz de melhor, que é
sintetizar som, e o SunVox cuida do sequenciamento, do arranjo e da mixagem. E
tudo em cima de software gratuito -- o SunVox não é open source, mas é gratuito
no desktop, é leve e qualquer pessoa consegue rodar.

Pela forma como a música é arranjada no SunVox, o tempo é sempre respeitado: nada de nota saindo do tempo porque alguém aplicou um
efeito. Também consigo pedir coisas mais específicas, como "pega todos os
instrumentos desse tipo e cria um submix, para eu ajustar o volume de todos de
uma vez", ou "coloca um
[compressor](https://pt.wikipedia.org/wiki/Compress%C3%A3o_de_alcance_din%C3%A2mico)
e um ajuste de volume no final da cadeia, para o compressor colar as faixas".

No fim, todo esse processo -- definir a trilha, os humores, os timbres --
virou uma
[_skill_](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview)
reutilizável. Agora eu consigo criar novas trilhas a partir dele, com o
SuperCollider, o SunVox e o agente.

## No final das contas

Fico feliz de não ter apelado para algo como o [Suno](https://suno.com/). Eu
não gosto desse tipo de ferramenta, acho o resultado extremamente genérico. E
não tenho a menor vontade de fazer música autoral com IA.

Mas, para um projeto como este, em que eu preciso de volume, de uma trilha coesa
e consistente, com prazo curto e sem inspiração para compor tudo do zero,
funcionou muito bem.

Tem muita coisa para melhorar, principalmente na saída final. Ainda vou precisar
mexer bastante na mixagem, e tem música com o grave estourado que eu vou ter que
corrigir. Mas eu gostei da consistência do projeto e do resultado como um todo.

Algumas das músicas que saíram desse processo estão nesta playlist:

> <p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLWKExF6iZOqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>
>
> _Músicas compostas com o SunVox._

E, veja bem: _composição_ de música, não _geração_ de música. Eu não usei um
modelo que cuspiu um MP3 pronto. Foi um processo construído junto com a IA,
usando ela mais como assistente do que como o motor principal da coisa.

É isso. Um abraço, e até a próxima.

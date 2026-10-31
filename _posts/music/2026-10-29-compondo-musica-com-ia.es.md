---
layout: post
title: "Componiendo Música con IA"
lang: es
permalink: /2026/10/29/compondo-musica-com-ia/
tags: [music, music-production, ia]
---

> Este post fue escrito a partir de un audio que grabé y transcribí usando
> [Buzz](https://github.com/chidiwilliams/buzz), un software de STT (voz a
> texto). Como toda transcripción automática, el resultado en bruto viene lleno
> de repeticiones, dudas y palabras mal entendidas, así que usé un LLM para
> organizar ese material en un texto corrido y arreglar esos problemitas — lo
> cual explica por qué algunas partes pueden sonar un poco demasiado "IA". Las
> ideas y opiniones, sin embargo, son todas mías.

En los últimos días anduve haciendo algo que nunca me imaginé que iba a hacer:
música con inteligencia artificial. Antes de que alguien me tire piedras,
quiero explicar el contexto -- porque, por regla general, _no es algo que yo
haría_.

Manteniendo la tradición, acá va la canción del post:

<p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/jcTRQnLRPnQ?start=529" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>

## Por qué normalmente no haría esto

Cuando quiero darle personalidad a un proyecto, ponerle mi toque, la música es
algo que prefiero hacer yo mismo.

Los gráficos se los dejo a la IA sin problema. La dirección visual generalmente
es mía, pero el diseño es algo en lo que estoy muy oxidado -- y, siendo
honesto, nunca fui muy bueno y últimamente no es algo que me divierta mucho. La
programación me gusta, pero la largo sin mucho drama cuando necesito entregar
algo más rápido.

La música es otra historia. Hacer música, para mí, es relajante. Es un hobby
_sin compromiso_: si al final del día no sale ninguna canción, está todo bien.
Abrir un instrumento y quedarme golpeteando, haciendo ruido, ya hace que el
tiempo pase y me pone contento.

Además, creo que la música le da carácter a un proyecto, y no me gusta la idea
de hacer algo en lo que no haya absolutamente nada hecho a mano. Ojo, no estoy
diciendo que mi música sería mejor que una música hecha por IA. Estoy diciendo
que, buena o mala, prefiero hacerla yo, porque lo que me interesa es el
proceso.

Esa es una premisa de mis proyectos. Pero también hay que saber cuándo dar esas
batallas, y cuánto beneficio va a traer realmente ese purismo.

## El problema

Estoy trabajando en un proyecto que necesita una banda sonora entera: decenas de
temas, coherentes entre sí, que cubran situaciones muy distintas. No estoy
particularmente inspirado en este momento, no tengo ganas de componer todo eso
desde cero y necesito que esté pronto rápido.

Así que decidí intentarlo con IA. Pero no de la forma que te estás imaginando.

## Primero el proceso, después la herramienta

Antes de salir a hacer cualquier cosa, me gusta pensar en el pipeline. Si el
proceso de creación es consistente, escala: se vuelve elástico, y puedo generar
más cosas de forma procedural sin perder la coherencia.

¿Y qué construye una canción? Necesita _ritmo_, de algún tipo. Necesita un
_humor_ -- puede ser alegre, triste, nostálgica, tensa, aterradora. Y ese humor
se sostiene en dos cosas: los [_timbres_](https://pt.wikipedia.org/wiki/Timbre),
o sea, qué sonidos se van a usar, y la
[_escala_](https://pt.wikipedia.org/wiki/Escala_(m%C3%BAsica)) y la _tónica_.
Organizando eso de forma racional, se puede llegar a un proceso consistente.

### Los humores

El primer paso con el modelo de lenguaje fue listar todos los humores que
necesitaba la banda sonora. Tenía que ir desde un momento alegre hasta uno
nostálgico, triste, tenso o aterrador, y tenía que quedar razonablemente obvio
qué estaba intentando transmitir cada tema.

### El estilo

En este proyecto la música no es el foco. Está ahí para crear atmósfera, crear
tensión y acompañar la historia que se está contando. La solución, entonces,
fue hacer [_música ambient_](https://pt.wikipedia.org/wiki/M%C3%BAsica_ambiente).

La música ambient tiene pocos elementos percusivos, y eso ayudaba bastante. Ya
me imaginaba que no iba a salir nada que sirviera si le pedía a la IA que
trabajara con samples: la IA no tiene oído. No puede mirar la forma de onda de
un sample y entender bien qué sonido es. El camino era la
[_síntesis_](https://pt.wikipedia.org/wiki/S%C3%ADntese_sonora).

Y la música ambient con sintetizador funciona muy bien. Es uno de los estilos
más fáciles de hacer: tenés que acertar los acordes y las escalas, pero el
arreglo es simple, y los timbres también son simples de sintetizar.

### El plan

Con el estilo y los humores definidos, trabajé con la IA para elegir las escalas
y tonalidades de cada caso. Eso se convirtió en el plan de construcción de la
banda sonora.

Eso funcionó bien porque podía meter mi opinión desde el principio: "esa escala
no va con esto, usá otra", o "buscá en internet qué escala se suele usar para
este tipo de situación". Fuimos trabajando en pareja hasta cerrar un plan con
unos 50 temas.

En esta etapa también fui dando la dirección artística. Cosas como: usá filtros
[pasa bajos](https://pt.wikipedia.org/wiki/Filtro_passa-baixa) y
[pasa altos](https://pt.wikipedia.org/wiki/Filtro_passa-alta), usá
[reverb](https://pt.wikipedia.org/wiki/Reverbera%C3%A7%C3%A3o) y
[delay](https://en.wikipedia.org/wiki/Delay_(audio_effect)), y siempre que
hagas un _pad_ poné unísono -- nada de sonido crudo de sintetizador, que queda
robótico. Mucha reverb para mezclar todo y dejar el sonido medio difuso.

## Las herramientas

Componer, para un modelo de lenguaje, es relativamente fácil. La música tiene
una estructura bien definida, que es la teoría musical: escala, notas y compás
ya dibujan más o menos cómo va a ser el tema. Pero son las herramientas las que
definen cómo va a _sonar_.

Tenía dos requisitos. El primero: tenía que ser gratuito, preferentemente open
source. Eso ya descartaba [FL Studio](https://www.image-line.com/) y
[Renoise](https://www.renoise.com/). Hay otras personas en el proyecto, y quiero
que ellas también puedan generar y tocar la banda sonora.

El segundo: tenía que ser posible hacer que el agente _programara_ la música. Y
opciones para eso no faltan: [Strudel](https://strudel.cc/),
[Orca](https://hundredrabbits.itch.io/orca),
[Sonic Pi](https://sonic-pi.net/) (ese que usa Ruby), entre otros. Llegué a
considerar Renoise de nuevo -- que es la DAW que uso, como conté en
[Música en Linux](/2026/07/05/musica-no-linux/) -- por el
[scripting en Lua](https://www.renoise.com/tools), pero, además de ser
propietario, su formato de archivo no está bien documentado.

La primera elección terminó siendo
[SuperCollider](https://supercollider.github.io/).

## SuperCollider

SuperCollider es un lenguaje de programación para controlar un motor de sonido
que funciona como un sintetizador. Se puede sintetizar prácticamente cualquier
sonido, tocar la música, y soporta extensiones y efectos. O sea: es fácil hacer
que el agente cree sonidos de forma programática y, aun así, predecible. Para
música ambient, sin mucha percusión, parecía ideal.

Y para bocetar los temas funcionó muy bien. La sintaxis es limpia, conocida y,
sobre todo, bien documentada. Y renderiza _muy_ rápido -- en
[modo no-realtime](https://doc.sccode.org/Guides/Non-Realtime-Synthesis.html)
no necesita reproducir la música para generar el audio: en una tarde tenía los
renders de los 40, 50 temas del plan.

El problema es que SuperCollider te exige armar tu propio motor de secuenciación
encima. El agente empezó a hacer cosas muy específicas, los scripts se fueron
volviendo difíciles de entender, y ahí se empezó a complicar.

### Mezcla

Algunos sonidos quedaron mucho más fuertes que otros. Y mezclar a través del
agente -- "bajá un poco este volumen, subí aquel" -- es horrible. Primero porque
es lento. Segundo porque, como sabe cualquiera que alguna vez mezcló un tema,
mezclar es un proceso iterativo: te quedás escuchando y ajustando, escuchando y
ajustando. Por chat eso no funciona.

### Tiempo

En un momento, al aplicar delay a un instrumento, consideró la cola entera del
delay como parte de la duración de la nota, y solo tocaba la nota siguiente
cuando el delay terminaba. Las notas se fueron quedando completamente fuera de
tiempo. Cuando me quejé, dijo que tenía que "arreglar el motor" y escribió un
montón de código. Al final lo arregló, pero, uf: no quiero tener que explicar
que la música tiene que estar a tiempo y que hay que respetar el compás.

### Timbres

Las formas de onda por defecto eran demasiado crudas. Los sonidos quedaban
estridentes, difíciles de escuchar, todo embarrado.

### Visualización

No tenía una forma fácil de ver la música, entender qué estaba pasando y editar
algo si quería.

## Qué hace falta para automatizar algo con IA

Antes de llegar a la solución, vale un desvío: ¿qué hace falta para automatizar
un proceso con IA? En este caso, el de hacer música. Para mí, son tres cosas.

La primera es poder _expresar la idea en texto_. Con música eso es sencillo:
notas, tiempos, compases, partitura y otras notaciones.

La segunda es poder _transformar ese texto en acciones dentro de un software_.
En SuperCollider eso es natural, porque todo es script: escribo un script y el
script genera la música, sin salir nunca del texto. Otra forma es entender el
formato de archivo de un software y generar ese archivo directamente. La IA es
muy buena con texto -- si el formato es XML, genera XML; si es código, genera
código.

La tercera es darle a la IA _formas de evaluar lo que generó_. Eso pasa por
criterios -- qué es bueno, qué es malo, qué esperás de la salida -- y por
herramientas para medir esa salida. Con SuperCollider, por ejemplo, podía
pedirle que renderizara cada canal por separado y analizara los decibeles y los
picos, para ver si alguno estaba mucho más fuerte que los demás.

### Saber hacer música todavía importa

Y acá entra el punto que me parece más importante: al final de cuentas, esto no
se trata de saber usar IA. Tampoco se trata de saber operar un software o tocar
un instrumento. Se trata de _entender de música_.

El problema de los timbres crudos solo se resolvió porque di instrucciones
explícitas de síntesis: para este tipo de sonido, usá una onda senoidal, o
triangular; ajustá la
[envolvente](https://en.wikipedia.org/wiki/Envelope_(music)) -- ataque,
_decay_, _release_ -- de tal forma; poné reverb, delay, unísono.

Dejé de ser el operador del software, pero seguí diciendo _cómo_ había que
hacer las cosas. Eso es lo que separa el resultado de una porquería aleatoria
de IA.

## SunVox

¿Y qué terminó funcionando mejor? Aunque parezca increíble, un software que
conozco hace mucho tiempo y con el que ya jugué bastante, incluso en Android:
[SunVox](https://warmplace.ru/soft/sunvox/).

Poca gente lo conoce. Lo hace Alexander Zolotov
([NightRadio](https://warmplace.ru/)), allá en Rusia, que tiene una serie de
softwares de sonido muy interesantes. SunVox es un estudio modular: tiene una
interfaz de [_tracker_](https://en.wikipedia.org/wiki/Music_tracker) para
secuenciar los sonidos, una línea de tiempo para arreglar la música, y los
módulos los arrastrás y los conectás. Es liviano y muy lindo -- pero no es
precisamente fácil de usar.

Por suerte, existe una biblioteca en Python,
[Radiant Voices](https://github.com/metrasynth/radiant-voices), que genera
proyectos de SunVox directo desde código. Y el propio SunVox tiene una
biblioteca gratuita para desarrolladores, que se puede usar desde Python con
[sunvox-dll-python](https://github.com/metrasynth/sunvox-dll-python) para
renderizar la música.

Y SuperCollider no fue a parar a la basura: se sigue usando para sintetizar los
sonidos. Con eso, el pipeline quedó así:

1. El agente toma el plan del tema.
2. Sintetiza los instrumentos en SuperCollider y exporta cada uno como sample.
3. Escribe un script en Python que arma el proyecto de SunVox, cargando esos
   samples.
4. Corre el script, que genera el proyecto y renderiza el tema.
5. Yo abro el proyecto en SunVox y hago los ajustes de mezcla que hagan falta.

> ![Código de uno de los temas](/assets/posts/musica/2/sunvox.png)
>
> _A la izquierda, el punto de entrada del pipeline; a la derecha, la definición
> de uno de los temas, en Si dórico a 84 bpm, con capas de arpegio, bajo, pad y
> melodía._

Lo mejor de los dos mundos: SuperCollider hace lo que mejor sabe hacer, que es
sintetizar sonido, y SunVox se encarga de la secuenciación, el arreglo y la
mezcla. Y todo sobre software gratuito -- SunVox no es open source, pero es
gratuito en desktop, es liviano y cualquiera lo puede correr.

Por la forma en que se arregla la música en SunVox, el tiempo siempre se
respeta: nada de notas fuera de tiempo porque alguien aplicó un efecto. También
puedo pedir cosas más específicas, como "agarrá todos los instrumentos de este
tipo y creá un submix, para que pueda ajustar el volumen de todos a la vez", o
"poné un
[compresor](https://pt.wikipedia.org/wiki/Compress%C3%A3o_de_alcance_din%C3%A2mico)
y un ajuste de volumen al final de la cadena, para que el compresor pegue las
pistas".

Al final, todo este proceso -- definir la banda sonora, los humores, los
timbres -- se convirtió en una
[_skill_](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview)
reutilizable. Ahora puedo crear nuevas bandas sonoras a partir de él, con
SuperCollider, SunVox y el agente.

## Al final de cuentas

Me alegra no haber recurrido a algo como [Suno](https://suno.com/). No me gusta
ese tipo de herramienta; el resultado me parece extremadamente genérico. Y no
tengo la menor gana de hacer música propia con IA.

Pero, para un proyecto como este, en el que necesito volumen, una banda sonora
coherente y consistente, con plazo corto y sin inspiración para componer todo
desde cero, funcionó muy bien.

Hay mucho para mejorar, sobre todo en la salida final. Todavía tengo que meterle
bastante mano a la mezcla, y hay temas con los graves saturados que voy a tener
que corregir. Pero me gustó la consistencia del proyecto y el resultado en
general.

Algunos de los temas que salieron de este proceso están en esta playlist:

> <p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLWKExF6iZOqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>
>
> _Temas compuestos con SunVox._

Y ojo: _composición_ de música, no _generación_ de música. No usé un modelo que
escupiera un MP3 listo. Fue un proceso construido junto con la IA, usándola más
como asistente que como el motor principal de la cosa.

Eso es todo. Un abrazo, y hasta la próxima.

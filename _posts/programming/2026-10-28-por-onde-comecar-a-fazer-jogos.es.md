---
layout: post
title: "Por Dónde Empezar a Hacer Juegos"
lang: es
permalink: /2026/10/28/por-onde-comecar-a-fazer-jogos/
tags: [gamedev, programming]
---

Un amigo me preguntó cómo empezar en el desarrollo de juegos: qué estudiar, qué
herramienta usar, por dónde ir. En vez de contestarle con un mensaje enorme que
se iba a perder en el medio del chat, decidí escribir acá cuál es mi visión
sobre el tema.

Antes que nada, una aclaración: no soy un desarrollador de juegos profesional.
Nunca lancé nada comercialmente. Pero hice algunos juegos a lo largo de la vida,
y aprendí algunas cosas en el camino -- generalmente de la forma más difícil.

## El cementerio de prototipos

Lo primero que aprendí es que, entre todas las demos, pruebas y proyectos que
vas a empezar, _uno_ se va a convertir en juego. El resto se va a morir olvidado
en alguna carpeta. De hecho ya escribí sobre
[mi cementerio de proyectos](/2026/07/02/project-cemetery), y no es lindo.

Pero los pocos proyectos que sobrevivieron tienen algunas cosas en común, y la
principal es que había una _idea sólida_ detrás. ¿Y qué quiero decir con idea
sólida? Que yo sabía qué mecánicas quería implementar, que tenía una comprensión
clara de qué hacía divertido a ese juego, y que tenía una noción -- aunque fuera
más o menos -- de la tecnología necesaria para hacerlo.

Y tengo que admitirlo: el 90% de las veces, no es el conocimiento técnico lo que
te va a llevar para adelante. Es tener la idea del juego muy bien definida en la
cabeza.

## Empezá por la idea

Voy a usar dos proyectos míos como ejemplo, porque creo que fueron los que
tuvieron un éxito razonable.

El primero es **Rushbeat**, un juego de música basado en
[_Beatmania IIDX_](https://en.wikipedia.org/wiki/Beatmania_IIDX). El
segundo es **Rushflag**, un juego de adivinar banderas que corre en vivo en
YouTube e interactúa con el chat. Tengo otros proyectos que nunca llegué ni a
mostrar, pero estos dos sirven bien para explicar el razonamiento.

### Rushbeat

> <p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/iVOMaDSx6Us" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
>
> _Rushbeat._

El objetivo de gameplay de Rushbeat es crear ese loop adictivo, que atrapa al
jugador, lo mete en hiperfoco y le da ganas de jugar _una vez más_. Ese loop
nace de la relación entre la música y el reflejo de apretar las teclas: a medida
que el jugador va mejorando, la música empieza a sonar como tiene que sonar. Es
él quien está tocando la canción. Y eso es extremadamente satisfactorio.

Con el tiempo, el jugador puede encarar canciones más difíciles y tocar partes
cada vez más largas sin errar, lo que da una sensación de recompensa. Al final
de la partida recibe un juicio que le dice qué tan bien le fue, y eso se vuelve
una forma de medir su propio rendimiento y de ir atrás de mejores puntajes.

Es un mecanismo muy simple, que básicamente todo juego de música explota. Nada
de esto se inventó para Rushbeat -- es un clon de un juego que ya existe y sigue
exactamente los mismos conceptos.

Pero lo que engancha al jugador no es solo el loop de gameplay: es la
posibilidad de agregar contenido nuevo. El juego fue pensado para aceptar
canciones personalizadas e incluso personalizar su apariencia. Son esos
detalles más chicos los que van haciendo la experiencia más completa.

Rushbeat se hizo para correr en la computadora y nunca se pensó para lanzarse en
ninguna tienda, entre otras cosas por temas de derechos de autor. Pero fue un
proyecto _divertido de hacer_, y eso es un detalle muy importante: el proyecto
tiene que ser divertido para vos también. Si desarrollar ese juego no es
divertido, sobre todo en un proyecto de hobby, capaz que no tiene mucho sentido.
Voy a volver a este tema más adelante.

### Rushflag

Rushflag surgió una madrugada en la que YouTube me atrapó. Estaba en medio de
una sesión de _doom scrolling_ y me crucé con uno de esos streams con banderitas
dentro de un círculo, chocándose entre sí, mientras el chat apuesta cuál va a
ganar. Me quedé unos buenos diez minutos mirando eso, completamente sin noción
del tiempo.

Pero me quedó dando vueltas en la cabeza. El juego era bien rústico, bien
simple, y pensé: _¿y si hiciéramos algo con una mecánica parecida, pero mucho
más pulido, con cara de juego de verdad?_ Por suerte ya tenía experiencia con lo
que hice en Rushbeat y en otros proyectos, así que sé más o menos cómo hacer
algo visualmente interesante. Y hoy en día, con IA, eso se hace todavía más
rápido.

Lo junté con un canal que me venía apareciendo bastante en el feed,
_YourTutorBrad_, que tiene algunos personajes recurrentes. Uno de los que más me
gusta mirar es Isaac, que es el maestro de adivinar banderas. Hay hasta un gurí
de unos seis o siete años que también se aprendió todas. Y pensé: _¿y si
cualquier persona en el chat pudiera vivir esa experiencia? ¿Y si un día el
propio Isaac entrara al chat a jugar?_

Podría haber hecho una aplicación para el celular, pero me pareció más
interesante dejar el juego corriendo en YouTube: la persona se cruza con el
video, entra y juega. Otra cosa que pesó fue la monetización. Este es un juego
que hice ya pensando en, si se puede, monetizarlo en el futuro, y YouTube es una
plataforma que funciona para eso.

> <p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FVqtmvXJoTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
>
> _Rushflag corriendo en vivo. Entrá y tirá una bandera en el chat._

### Las tres preguntas

Mirando estas dos ideas, se pueden sacar tres cosas que considero importantes
antes de empezar cualquier juego en serio:

1. **¿Cuál es la mecánica principal?** Apretar las teclas al ritmo para tocar la
   canción; adivinar la bandera por el chat.
2. **¿Cuál es el mecanismo de recompensa?** En Rushbeat, es mejorar, tocar la
   canción sin fallas y recibir una buena evaluación. En Rushflag, es acertar la
   bandera antes que los otros jugadores, ver tu propio nombre en pantalla y
   subir en el ranking.
3. **¿Cuál es el formato?** Rushbeat es un juego de escritorio. Rushflag es una
   aplicación que transmite a YouTube.

## Empezá por lo que no sabés

En cualquier proyecto que empiezo, sigo el mismo proceso: _ataco primero lo que
no sé cómo se va a hacer_.

Si sos alguien que sabe de diseño, dejá los gráficos para el final y empezá
pensando cómo vas a hacer la programación. Una vez que pasás la parte que no
sabés hacer, hacer lo que sabés es rápido.

En Rushflag, por ejemplo, lo último que hice fue la música. Música sé hacer. En cambio,
transmitir el video a YouTube era algo que nunca había hecho, y ahí fue donde
ataqué primero.

Hacer lo que no sabemos siempre va a ser la parte más difícil de un proyecto,
_aunque sea la parte más simple_. El código de Rushflag no es complejo; los
gráficos y la música dan mucho más trabajo. Pero una parte de los gráficos era
incierta para mí, y la otra incertidumbre era cómo hacer llegar el video a
YouTube.

Sobre los gráficos: necesitaba más de 200 banderas dibujadas, y dibujadas _en
capas_. No las iba a hacer a mano. Así que tuve que descubrir cómo automatizar
el proceso. ¿Se puede hacer con IA hoy? Se puede, pero tuve que iterar por
varias distintas. [Gemini](https://gemini.google.com) no generaba bien las
banderas. Con [Claude](https://claude.ai) probé de varias formas distintas,
hasta llegar a la conclusión de que generar las banderas con
[Blender](https://www.blender.org) funcionaba bien. A partir de ahí armé un
pipeline, un método de trabajo para resolver ese problema.

Después vino la transmisión. Me puse a estudiar, a entender cómo funcionaba (con
IA, obviamente) y lo resolví. A partir de ese punto, el resto fue muy rápido:
gráficos, pantallas, interfaz, todo eso es algo en lo que ya tengo experiencia.

Rushbeat es un ejemplo todavía mejor, porque fue mucho más difícil -- entre
otras cosas porque, cuando empecé, allá por 2017, no existía IA para ayudar. Lo
primero que hice fue un prototipo que solo reproducía las canciones. Para mí,
esa era la parte más incierta: cómo funcionaba el formato de archivo, cómo
cargarlo, cómo hacer que la reproducción quedara bien. Las primeras versiones de
Rushbeat no tenían ningún gráfico, era solo un reproductor tocando música.

> <p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/p9412C9s5No" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
>
> _El prototipo en Python, la primera vez tocando una canción y mostrando las notas._

Con el tiempo eso fue evolucionando, se convirtió en una aplicación gráfica con
una interfaz rudimentaria, y el juego fue creciendo a partir de ahí.

### El prototipo no tiene que ser el juego final

Y esto es un detalle muy importante: muchas veces la primera versión del juego
ni siquiera se va a hacer en la herramienta final, ni en la base de código
final.

Rushbeat se prototipó en Python. No porque fuera el mejor lenguaje para eso --
yo sabía que no se iba a quedar en Python -- sino porque era el lenguaje en el
que podía programar e iterar más rápido. Cuando llegó el punto en que Python ya
no era buena idea, salí a explorar alternativas. Pasé un tiempo en Unity,
aprendí cosas, resolví otros desafíos, y al final decidí quedarme con Java.

### Fallá rápido

Este enfoque suele funcionar porque saca del camino lo más difícil de entrada.
Si sabés que hay un desafío muy grande en el proyecto, es mejor encararlo
primero que pasarte meses haciendo gráficos, música y un montón de cosas
alrededor, para al final no usar nada de eso porque abandonaste cuando llegaste
a la parte difícil.

Es el famoso _fail fast_: si no va a funcionar, te enterás rápido, abandonás de
una y pasás a la próxima idea.

## Eligiendo las herramientas

Hoy en día, el ecosistema de herramientas de desarrollo de juegos es un
despelote gigantesco. Hay una infinidad de motores, una infinidad de
herramientas, cada una queriendo tu atención y queriendo que trabajes de una
forma distinta. Mucho es gratuito, con usos y enfoques distintos. Así que elegir
es difícil.

Lo que le diría a alguien que está empezando es: _andá por lo mainstream_. Usá
las herramientas más conocidas, porque el resultado probablemente va a ser
mejor.

### No hagas tu propio motor

Está buenísimo cuando escuchás hablar de ese tipo que programó su propio motor
de juego desde cero, con física, colisiones y todo. ¿Me gustaría ser ese tipo?
Me gustaría. De hecho, ya lo hice. Pero la verdad es que eso tiene un precio, y
el precio es caro: atrasa mucho el desarrollo.

Y hay un punto más importante. Cuando los temas técnicos empiezan a meterse en
tu camino, se vuelve cada vez más difícil pasar lo que tenés en la cabeza a lo
que está en la pantalla. Un juego es trabajo creativo, igual que el diseño, el
modelado 3D o la música, y todo proceso creativo se beneficia del _timing_ y del
hiperfoco. Cuanto más rápido sea el camino entre la idea y la pantalla, mejor.
Si no, terminás olvidándote de lo que estabas haciendo a mitad de camino.

Eso no significa que la herramienta que elijas vaya a ser la definitiva. En un
proyecto real, capaz que cambiás de herramienta dos o tres veces. Pasa, porque
hay muchas cosas a tener en cuenta.

### Qué define el motor

Antes de recomendar cualquier cosa, hay que entender el alcance del juego.

**Plataforma:** ¿es un juego para correr en el navegador? ¿En el escritorio?
¿Pensás lanzarlo en consola algún día? Algunas herramientas, como Unity y
Defold, tienen soporte oficial para consolas (siempre que el fabricante te
apruebe); otras, como Godot,
[dependen de empresas tercerizadas](https://godotengine.org/consoles/) para
hacer el port. Para quien está empezando, esto es poco relevante.

**2D o 3D:** si el juego es 2D, podés usar motores más simples, como
[GameMaker](https://gamemaker.io) (que ahora es gratis para uso no comercial) o
[Construct](https://www.construct.net). Los dos permiten programar sin escribir
código -- GameMaker con bloques visuales y Construct con hojas de eventos --, así
que para quien solo quiere hacer un juego y no necesariamente quiere aprender a
programar, son mucho más simples. Unity y Godot también hacen juegos 2D y
funcionan bien para 2D en alta resolución, pero el pixel art con precisión
perfecta da trabajo. Godot incluso tiene
[opciones para eso](https://docs.godotengine.org/en/stable/tutorials/rendering/multiple_resolutions.html),
pero en Unity, como te voy a contar más adelante, sufrí.

Para 3D, las opciones se acortan. [Unreal](https://www.unrealengine.com) es
potente, pero no la recomendaría para quien está empezando: los proyectos se
ponen pesados y trabados muy fácil. [Unity](https://unity.com) también es una
opción, pero yo no iría por ahí por un tema de seguridad jurídica. Si tu juego
pega en Unity, quedás en manos de una empresa con un historial de licencias muy
malo -- vale la pena investigar sobre la
[_runtime fee_ de 2023](https://en.wikipedia.org/wiki/Unity_Technologies), que
generó una revuelta generalizada hasta que la cancelaron.

La alternativa que recomiendo es **[Godot](https://godotengine.org)**: gratuita,
de código abierto y, sobre todo, con una licencia que te da seguridad. Hoy ya es
un motor consolidado, con bastante documentación y tutoriales disponibles.

También me gusta mucho **[Defold](https://defold.com)**, que me parece muy
subestimada. Está enfocada principalmente en 2D, pero también soporta 3D. Y si
querés algo más parecido a Unity, pero gratuito y de código abierto, vale la
pena mirar **[Stride](https://www.stride3d.net)**, que incluso usa C# para la
programación.

### Assets

Sea 2D o 3D, vas a necesitar un pipeline de producción de assets. Un asset es
cualquier recurso del juego: un sprite, una imagen, un modelo 3D, una canción.
Tenés que saber qué herramientas vas a usar, qué proceso vas a seguir, si los
vas a hacer vos o vas a llamar a otra persona. E incluso para el desarrollo
básico, vas a necesitar al menos gráficos y sonidos de placeholder hasta tener
las versiones finales.

Algunas herramientas que recomiendo:

- **Gráficos 2D e interfaces:** en Windows y Mac,
  [Affinity](https://www.affinity.studio) es la mejor herramienta gratuita que
  existe -- desde fines de 2025, cuando Canva la hizo gratis. No es open source
  ni libre, pero es la mejor. En Linux, por regla general, todavía nos la
  arreglamos con [Inkscape](https://inkscape.org) y [GIMP](https://www.gimp.org).
- **Sprites:** para un trabajo más detallado, [Aseprite](https://www.aseprite.org)
  es muy bueno. Es pago, pero barato, y el código fuente está disponible para
  quien lo quiera compilar.
- **3D:** [Blender](https://www.blender.org) es prácticamente un _no-brainer_.
  Los estándares de la industria hoy son
  [Maya](https://www.autodesk.com/products/maya),
  [Houdini](https://www.sidefx.com) y Blender, y Blender es gratuito y open
  source. A no ser que seas muy especializado en modelado, probablemente sea la
  herramienta ideal.
- **Música:** eso ya es otro mundo. A mí me gusta
  [FL Studio](https://www.image-line.com/fl-studio/), pero está
  [Renoise](https://www.renoise.com), [Ableton](https://www.ableton.com) y
  muchos otros -- hablé más de esto en el post de
  [música en Linux](/2026/07/05/musica-no-linux/).

Pero lo que realmente recomiendo es empezar con placeholders muy simples. Si es
3D, usá cubos, esferas y rectángulos para representar las cosas mientras
prototipás, y pensá en los gráficos después. Si es 2D, hacé un gráfico bien
rudimentario y no te preocupes por la terminación todavía.

Si podés reutilizar assets ya hechos, aprovechá. Unity tiene una
[tienda de assets](https://assetstore.unity.com), y sitios como
[Kenney](https://kenney.nl) tienen un montón de assets gratuitos, incluso 3D,
que se pueden usar para prototipar. Yo empezaría con assets ya hechos y solo
después pensaría en crear los propios o llamar a alguien para que los haga.
Acordate de que los assets propios le dan personalidad al juego, cosa que
reutilizar no da.

Para la música, recomendaría usar música licenciada o gratuita -- a no ser que
seas músico y quieras darle énfasis a eso.

Y acá va un recordatorio importante: hasta el juego más simple va a llevar años
si decidís hacer todo solo. Fue el caso de Rushbeat. Hice absolutamente todo en
él, y me pasé cinco años haciendo un juego que, con un alcance menor, me habría
llevado uno.

## Alcance

Y eso me lleva al mayor problema de los proyectos personales, sobre todo de
juegos: el [_scope creep_](https://en.wikipedia.org/wiki/Scope_creep). Uno va
haciendo, va teniendo ideas, va agregando más cosas. Cada cosa nueva aumenta el
trabajo, y cada vez que el trabajo aumenta, el final queda más lejos. Hasta que
nunca terminamos.

Los juegos son especialmente vulnerables a esto porque el alcance crece de forma
orgánica. Se puede definir una mecánica fundamental muy rápido, pero enseguida
te das cuenta de que, para que esa mecánica sea divertida, necesita mucho
contenido alrededor: muchos niveles, muchos enemigos, muchas cosas. Y el
proyecto se va inflando.

Algunas cosas que ayudan:

- **Planificá antes de empezar.** Hacé una lista de todo lo que el juego tiene
  que tener y hacer, y andá marcando a medida que avanzás. Esa checklist va a ser
  tu guía para saber cuándo parar.
- **Apuntá a una demo, no a un juego completo.** Lanzá una versión inicial, fijate
  si la respuesta es buena, y recién después trabajá en la versión completa.
- **Cuidado con los side projects.** Empezar un montón de proyectos al mismo
  tiempo no ayuda en nada.

Y acordate: _un juego no se termina, se abandona_. Vas a seguir encontrando bugs
y cositas para ajustar para siempre. En algún momento tenés que soltarlo y darlo
por terminado.

## ¿Cuál es tu objetivo?

Parte de la elección de las herramientas tiene que estar guiada por _qué
habilidad querés desarrollar_.

Si tu intención no es lanzar un juego, sino aprender a programar, obviamente no
tiene sentido agarrar un motor en el que no se escribe código. Pero tampoco
recomendaría empezar de cero con una biblioteca que sea 100% código. Rushbeat y
Rushflag no se hicieron en Unity ni en Godot ni nada por el estilo: Rushflag usa
OpenGL directo, y Rushbeat se hizo en Java con [libGDX](https://libgdx.com), que
es una biblioteca y no un motor completo -- el motor lo hice yo. Incluso para
quien quiere aprender a programar, recomendaría agarrar un motor e ir
escribiendo los scripts ahí adentro.

Y acá la recomendación vuelve a ser Defold. Usa
[Lua](https://www.lua.org/about.html), un lenguaje brasileño creado en la
PUC-Rio, muy simple y amigable para quien está empezando. Defold no tiene
programación visual: toda la lógica del juego
[se escribe en Lua](https://defold.com/manuals/writing-code/). Pero el editor se
encarga de muchas cosas de forma visual -- escenas, interfaz, atlas de sprites,
tilemaps, partículas --, así que el código queda concentrado en el
comportamiento del juego. Es una introducción mucho más amable a la
programación que intentar hacer un juego desde cero en código.

Hoy se puede programar con IA, claro, pero la IA no ve lo que está pasando en la
pantalla. Saber meterle mano al código te va a ayudar a hacer ajustes y
optimizar cosas cuando no le acierte.

Si tu objetivo es aprender gráficos, modelado 3D y esas cosas, usá Godot o
Defold y dejá que la IA se encargue del código. Tu foco no es programar, así que
está bien.

Y si tu objetivo es aprender a hacer música... no hagas un juego. Andá a hacer
música.

## Lo que yo no haría en el primer juego

### Empezar por un proyecto grande

Empezá chico, preferentemente con un clon de un juego que ya exista: un Tetris,
un Pac-Man, el juego de la viborita. Ese conocimiento se va sumando.

Un proyecto grande no es solo una cuestión técnica -- es una cuestión de
disciplina, de persistencia. Cuando el proyecto se vuelve difícil de ejecutar,
empezamos a procrastinar. Cuanta más base técnica tengas antes de encarar algo
grande, mejor, porque así lo único que te puede hacer procrastinar es la falta
de ganas, y no no saber cómo hacerlo.

Eso me pasó con Rushbeat. Estuve seis meses sin tocar el juego porque tenía que
implementar una parte bastante compleja -- si no me equivoco, el cambio de BPM
en el medio de la canción. Para mis habilidades de esa época, era algo muy
molesto de hacer, y simplemente lo esquivé durante medio año.

### Subestimar el tamaño del alcance

Mucha gente me dice que quiere hacer un RPG. Hacer un juego con 40, 50 horas de
gameplay es un trabajo hercúleo, aunque sea un RPG muy simple, aunque uses
[RPG Maker](https://www.rpgmakerweb.com). La historia, por sí sola, ya es
compleja, extensa y un trabajo enorme.

Yo empezaría por juegos sin historia, o con una historia simple, más cliché, que
se enfoquen en mecánica y gameplay. Una vez que domines la parte técnica, ahí sí
vale la pena dedicarle tiempo a escribir. Escribir historias para juegos es una
disciplina entera, que también hay que estudiar.

### Empezar por el 3D

Empezá por el 2D. Una vez que entiendas bien cómo funcionan las cosas en dos
dimensiones, pasar al 3D es mucho más fácil -- al final de cuentas, es un eje
más.

### Empezar por el arte final

No hagas assets propios de entrada, o, si los hacés, que sean provisorios. Usá
assets disponibles en internet, como los de Kenney, algún generador de assets, o
pedile a una IA que los genere. Podés dibujar tus conceptos e ideas, pero no
empieces por el arte final.

### Empezar por el juego de tus sueños

Este es el consejo más importante de todos. El juego de nuestros sueños siempre
va a tener un estándar altísimo de calidad y de exigencia, y nunca lo vamos a
terminar -- al menos no mientras no sepamos hacer juegos de forma eficiente.

Empezá con un juego simple, sin tanto amor, sin tanta pasión de por medio. El
juego de tus sueños puede esperar.

## Lo que usé, y qué me pareció

Para cerrar, un poco sobre las tecnologías que usé en mis juegos y qué salió
bien o mal.

### Rushbeat

Rushbeat empezó en **Python**, un lenguaje conocido por no tener un rendimiento
muy adecuado para juegos. Hoy, con la experiencia que tengo, sé que se podría
haber hecho ese juego en Python y funcionaría. Pero en esa época yo no era tan
buen programador, terminé chocando con limitaciones de rendimiento y decidí
cambiar.

Aun así, Python no fue una mala elección. No era el lenguaje ideal para el
juego, pero fue excelente para el prototipo. Y para quien ya programa, los
lenguajes son todos medio parecidos, así que pasar de uno a otro normalmente no
es tan difícil.

Después me pasé a **Unity**, y esa _no_ fue una buena elección. El juego es 2D y
yo quería precisión de píxel en pantalla, y Unity no se lleva bien con eso. Hay
hasta un script viejo en mi GitHub que hice solo para alinear las cosas a los
píxeles. Era parche sobre parche.

> <p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/HaKcW__Akj4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
>
> _El último registro de Rushbeat en Unity._

Pero lo que me hizo dejar Unity ni siquiera fue eso, porque funcionaba. Fue el
miedo a quedar atado a un motor propietario y que, de la nada, decidieran
cambiar la licencia y yo quedara rehén de una herramienta con condiciones
raras. Unos meses después pasó exactamente eso. Por suerte me fui antes.

Entonces me pasé a **Java con libGDX**. Java es un lenguaje que ya dominaba --
a diferencia de C#, que es lo que usa Unity -- y el desarrollo rindió. Y además:
cumplió uno de los objetivos que tenía con Rushbeat, que era volverme mejor
programador. Reescribí el juego unas cuatro veces: en Python, en C# en Unity, en
Java, y de nuevo en Java cuando me puse a estudiar design patterns y cosas más
específicas de programación. No me arrepiento, cumplió su propósito.

Para los gráficos usé Affinity (en esa época, con licencia paga), y para la
música FL Studio -- tanto para las canciones de prueba del juego como para las
del menú. El sistema de animación también lo hice yo, en Java con libGDX, para
poder crear las animaciones y las skins del juego.

### Rushflag

Con Rushflag la historia es distinta. No es el proyecto de mis sueños, no es
algo que me apasione. Así que la primera decisión fue que iba a ser _vibe
codeado_ con IA. Sin miedo, sin remordimiento y sin esconderlo de nadie. La idea
era justamente desarrollar rápido y tener el juego al aire cuanto antes.

La herramienta principal para la codificación fue Claude. El stack quedó así:

- **Backend:** Java con [Spring](https://spring.io)
- **Frontend:** Python con [OpenGL](https://www.opengl.org) y
  [GStreamer](https://gstreamer.freedesktop.org) (creo que tiene
  [Pillow](https://python-pillow.github.io) por debajo, pero, sinceramente, no me
  importa mucho -- es vibe codeado igual)
- **Base de datos:** [Postgres](https://www.postgresql.org)

En el pipeline, Claude se usó junto con Blender para generar las banderas, y
[Claude Design](https://www.anthropic.com/news/claude-design-anthropic-labs)
para diseñar la interfaz. Y no, no acepté cualquier cosa que escupió: fueron
muchas iteraciones hasta que la interfaz quedó como yo quería.

Lo único que me empeñé en hacer a mano fue, curiosamente, la música. Usé Renoise
e hice todo yo.

## Entonces, ¿por dónde empezar?

Para mi amigo que me pidió el consejo, mi recomendación es: agarrá **Defold con
Lua**, o **Godot con
[GDScript](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html)**
(su propio lenguaje, parecido a Python). Bajate unos assets temporales de
Kenney, o dibujá cualquier cosa, y hacé unos proyectos de prueba.

Si querés aprender a programar, estudiá Lua o GDScript. Si no te interesa
programar y solo querés divertirte haciendo juegos, los dos funcionan -- solo
tené en cuenta que, en los dos, la lógica del juego va a ser código sí o sí. Pero
los dos guardan los scripts en disco como texto, y podés poner a Claude, a
[Codex](https://openai.com/codex/) o a cualquier otra herramienta a programar.

Al final de cuentas, lo que más importa no es la habilidad técnica. Es cómo está
estructurado el juego, si tu idea es buena y, sobre todo, si el juego es
_divertido_. Tiene que ser divertido al menos para que lo juegues vos. Si a vos
te parece divertido, ya está buenísimo.

Así que empezá por un prototipo. Enchufá el joystick a la computadora, probalo y
fijate si es divertido. Si no lo es, no pases del prototipo: repensá la idea y
andá ajustando las mecánicas hasta que sea divertido. Porque, al final de
cuentas, jugamos para divertirnos.

Un abrazo, y hasta la próxima.

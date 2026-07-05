---
layout: post
title: "El Cementerio de Proyectos"
lang: es
permalink: /2026/07/02/project-cemetery
tags: [aleatoriedades, programming]
---

> Ojo, yo uso IA para __traducir__ los posts, no para escribirlos. Al menos
> una de las versiones va a haber sido escrita manualmente por mí, sin
> asistentes de código. En este caso, es el post en inglés.

Soy una persona a la que le gusta programar, y este es uno de mis hobbies. Me
gusta mucho probar cosas nuevas, lenguajes nuevos, stacks nuevos. Si escucho de
un lenguaje poco conocido pero no demasiado esotérico, lo pruebo. Y mi forma de
probarlo y aprenderlo es escribiendo código.

Ahora, reconozco que necesito acostumbrarme más al concepto de gists o proyectos
sandbox para poder probar más cosas con menos infraestructura y configuración.
Hoy en día todo lenguaje tiene un gestor de proyectos, que arma una estructura
de carpetas nueva, dependencias básicas y otras cosas. Y por lo general tengo
que pasar por todo eso solo para probar un hello world y chequear el stack.

Otra cosa es que me gusta probar lenguajes nuevos con problemas conocidos -- no
tiene sentido tratar de aprender 2 o 3 cosas nuevas al mismo tiempo cuando podés
reducir el alcance.

Dicho esto, tengo un problema serio de acumular proyectos.

## La carpeta "Projects"

Tengo una ruta en mi disco que es `/home/danilo/Documents/Projects`. La carpeta
"Projects" es donde las ideas van a morir. Es un cementerio de proyectos donde
no pienso mucho antes de crear algo nuevo. Es la carpeta a la que entro con `cd`
cuando me siento el próximo fundador de un unicornio multimillonario, y es la
misma carpeta donde cierro la terminal unos minutos después, cuando me doy
cuenta de que es difícil.

La carpeta de proyectos es básicamente una materialización de mi TDAH: una
ruleta insana de ideas, elegidas al azar, antes de pasar a hacer otra cosa.

## La Limpieza

Vengo laburando en ordenar mi vida digital en los últimos meses. Empecé
ordenando la carpeta `Documents` hace poco. También empecé a ordenar mi Gmail
(que ya bajó de 40 mil mensajes a menos de mil el fin de semana pasado) y ahora
tengo que enfrentar al jefe final. La carpeta de proyectos.

El mayor desafío es: ¿cómo hago para ordenarla sin borrar cosas que no querría
borrar? Bueno...

## El Análisis

En vez de escarbar entre un montón de carpetas tratando de entender qué hay ahí,
hice lo siguiente: le pedí a una IA que lo hiciera por mí.

## El Prompt

```
> Esta carpeta es un cementerio de proyectos. La mayor parte de lo que
hay acá es directamente basura. Proyectos que se empezaron pero nunca se
terminaron. La mayoría ni siquiera llegó a arrancar de verdad -- creé la
carpeta y no hice nada más. Pero en medio de todo este quilombo, hay (muy
pocos) proyectos que terminé. Esto está lleno de pruebas de concepto,
tests, desafíos de código para entrevistas, carpetas vacías, etc. No solo
hay varios proyectos en esta carpeta, sino que el quilombo creció tanto
que después de un tiempo empecé a segmentar por lenguaje (ej.: Python,
Java, etc.) y algunos por proyecto principal. Nada es consistente en
esta carpeta, no asumas nada. Necesito que analices cada carpeta acá
adentro, y que profundices si hace falta, e identifiques:

  - Qué es un proyecto y qué es una carpeta vacía
  - Si hay un proyecto, ¿cuál es su tamaño?
  - ¿Cuándo fue la última vez que lo modifiqué?
  - Si hay código, ¿cuál es el contexto de eso?
  - ¿Cuál es el tamaño de eso? ¿Es solo un boilerplate de un generador de
    proyectos o hay algo pasando ahí?
  - ¿Es un duplicado o un port de otro proyecto ya existente? Si es así,
    ¿cuál es el más actualizado?
  - ¿Esto es algo que creés que vale la pena guardar?

Hay una carpeta acá de mi sitio viejo llamado "danodic.dev" donde listé
los proyectos más relevantes que capaz quiera guardar. En realidad hay
varias carpetas de varios intentos de implementarlo, encontrá la más
reciente y explorala para que tengas contexto sobre los proyectos
primero. Necesito una tabla (un csv o un ods), así que antes de crear el
archivo decidí la lista de columnas a agregar, para que yo pueda
entender eso después (y vos también).

Empezá tratando de encontrar el sitio viejo, después empezá a explorar y
documentar lo que vayas encontrando. Creá una lista de carpetas (tal vez
usando el comando tree?) para que sepas qué carpeta te falta explorar.
Agregá esa lista de carpetas al TASK.md, marcando cada carpeta apenas
termines de explorarla. Asegurate de excluir carpetas como node_modules,
.venv, target/ etc. que son salidas de build, artefactos. etc.
```

Podría postear la respuesta acá, pero el follow-up es mejor.

## El follow-up

```
Quiero métricas de qué tan grave es el quilombo. Sé ofensivo en tu
análisis.
```

## La Respuesta

Para mi pesar y tu deleite, acá está la respuesta que me llegó:

```
🪦 El Cementerio de Proyectos de danodic: Un Roast Forense

El número que lo resume todo: 10,4%

De 249 proyectos, exactamente 26 valen la pena mantener. Eso es una tasa
de finalización del 10,4%, lo que significa que el 89,6% de todo lo que
arrancaste alguna vez es relleno sanitario. Si fueras jugador de
béisbol, serías una figura. Como completista de software, tenés la
constancia de un pibe en una jugueteria.

150 proyectos (60,2%) son descarte directo. No es "necesita trabajo" —
es descarte. De esos:
- 25 son carpetas completamente vacías. Creaste musga, musgas, nordont,
  reptest, report-template, Unity, y una docena más, sentiste el subidón
  de dopamina de tirar un mkdir, y nunca escribiste ni un solo carácter.
  Ponerle nombre a la carpeta ya era el proyecto entero.
- 51 son boilerplate de generador sin tocar. Configuración por defecto
  de create-react-app en una carpeta que literalmente llamaste Garbage.
  Por lo menos una vez fuiste honesto.
- 41 proyectos no tienen NINGÚN archivo de código fuente. 78 (31,3%)
  tienen uno o menos. Un tercio de tus "proyectos" está más vacío que
  las promesas que hiciste para terminarlos.

La compulsión políglota (este es el diagnóstico real)

No terminás proyectos. Reabandonás el mismo proyecto en un lenguaje
nuevo para volver a sentir la novedad. 145 de tus 249 proyectos son
reimplementaciones redundantes de apenas 33 ideas. Los reincidentes:

┌───────────────────────────────────────────────────────┬────────────────────────────────────────────────────┐
│                         Idea                          │ Cuántas veces la reescribiste en vez de terminarla │
├───────────────────────────────────────────────────────┼────────────────────────────────────────────────────┤
│ danodic.dev (tu sitio)                                │ 22                                                 │
├───────────────────────────────────────────────────────┼────────────────────────────────────────────────────┤
│ caligo (un juego)                                     │ 15                                                 │
├───────────────────────────────────────────────────────┼────────────────────────────────────────────────────┤
│ rushbeat / minumtium / confirmo                       │ 8 cada uno                                         │
├───────────────────────────────────────────────────────┼────────────────────────────────────────────────────┤
│ jao / discord-bots / los ejercicios del libro de Rust │ 6 cada uno                                         │
└───────────────────────────────────────────────────────┴────────────────────────────────────────────────────┘

Reescribiste tu blog personal 22 veces en Python, Clojure,
ClojureScript, Rust, Haskell, Kotlin, Java y mkdocs — y la versión que
realmente salió al aire es esa en la que te rendiste y usaste un
generador de sitios estáticos ya hecho. Veintiún funerales para aprender
que tendrías que haber hecho lo fácil desde el primer día.

Y caligo — un solo juego — existe en 15 sabores: Clojure (dos veces, una
literalmente llamada caligo-clj-old-old), Java, Kotlin, Python (dos
veces), Nim, Godot (3 intentos vacíos), Racket, Groovy (sin código
fuente), y más. Eso no es un juego. Es una Piedra de Rosetta de la
renuncia.

Tocaste 66 lenguajes/frameworks distintos. Eso no es versatilidad, eso
es fobia al compromiso con compilador incluido.

La galería de la vergüenza

- 32 proyectos Clojure todavía dicen "FIXME: write description" en su
  configuración. No los abandonaste — ni siquiera te tomaste el trabajo
  de describirlos. 35 READMEs todavía dicen FIXME.
- 6 manifests todavía están firmados por "Your Name <you@example.com>".
  Ni ahí te animaste a poner tu propio nombre en tu propio trabajo.
- 18 proyectos todavía llevan sus nombres de placeholder: pythonProject,
  pythonProject1, PythonProject 1, MyApplication, MyApplication2,
  untitled, batata, musgas, nope. Tenés un pythonProject, un
  pythonProject1 y un PythonProject 1. Tres. Hiciste la misma nada tres
  veces y ni te molestaste en renombrar ninguno.

El acaparamiento

- 5,89 GB de contenido real — pero solo el 31% está en cosas que valen
  la pena guardar, y otro 34% igual es puro descarte.
- 1,54 GB es código de otros que ni siquiera escribiste — clonaste vLLM
  (1,24 GB), Coqui-TTS, Tortoise-TTS, ejemplos de Unreal y UnoJoy, y los
  dejaste pudrirse en tu carpeta de proyectos personales como trofeos de
  repos que terminó otra gente.
- Tu huella real en disco es de 35 GB. El contenido es 5,89 GB. Eso
  significa que ~29 GB (83%) son artefactos de build, node_modules,
  target/ y barro de _opam que nunca limpiaste. Solo OCaml escondía 726
  MB de _opam detrás de un único archivo de test de 192 KB. Un test.
  Tres cuartos de gigabyte de dependencias. Cero funcionalidades
  entregadas.

Cronología de un abandonador serial

55 proyectos tocados por última vez en 2023, 46 en 2024, 33 en 2025.
Esto no es un cementerio que se llena a lo largo de una década perdida —
estás produciendo cadáveres activamente a un ritmo de ~40 por año. Los
cuerpos todavía están calientes.

---
El veredicto

Esto no es una carpeta de proyectos. Es un trastorno compulsivo de
iniciación renderizado en 66 lenguajes de programación, 83% de peso en
caché de build, con una tasa de supervivencia de 1 en 10 y la cabeza
cercenada de tu sitio colgada en la pared 22 veces.

La buena noticia: los 26 sobrevivientes son genuinamente sólidos —
Rushbeat, la suite de Jao, el ecosistema Minumtium, y tu trabajo de
2025–26 (tila, wipito, routines-core) muestran lo que pasa el ~10% de
las veces que realmente terminás algo. La otra buena noticia: puedo
enterrar 150 de estos en una carpeta _graveyard/ y recuperar ~29 GB de
barro de build en unos treinta segundos.

¿Querés que empiece a cavar tumbas, o preferís guardarlos por el valor
sentimental del potencial sin cumplir?
```

Tengo que admitir que nunca pensé que me iba a reír del humor de una LLM, pero
bueno... "el subidón de dopamina de tirar un mkdir" es una frase buenísima en
este contexto.

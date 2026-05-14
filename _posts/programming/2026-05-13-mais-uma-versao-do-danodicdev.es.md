---
layout: post
title: "Una versión más de danodic.dev"
lang: es
tags: [programming, ia]
---

Y bueno, estamos en una versión más de este sitio. Cada vez que armo una versión
nueva es más simple que la anterior — dentro de poco voy a linkear un .txt y
listo, eso es el sitio. Mirá, la verdad es que _no me parece una mala idea_.

Manteniendo la tradición, acá va la canción del post:

<p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Vm8JVt2ugEI?si=CqVk1pgnau6QwhRt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>

No me juzgués, simplemente escuchá.

## ¿Por qué una nueva versión?

La primera versión de danodic.dev, que escribí en 2022, tenía el propósito no
solo de ser un sitio personal sino sobre todo de ser una plataforma de
aprendizaje. Era innecesariamente compleja, porque quería estudiar cosas de
programación mientras desarrollaba el sitio. En su momento aprendí bastante,
agarré algunas cosas copadas y después me harté.

Ese sitio, por más simple que pareciera, tenía:

- Un container de backend.
- Un container de frontend.
- Una base de datos.
- El frontend tenía toda la lógica loca para parsear markdown, etc.
- Hosteado en GCP $$$.

Es demasiado para simplemente postear boludeces en internet.

## Cambiando el enfoque

Era muy aburrido de mantener una vez que ya estudiaste lo que querías estudiar
— lo que te queda es solo un sitio tedioso de mantener. Mirá, estos proyectos
personales son cosas que hago _después_ de haber trabajado todo el día. Se
supone que es un pasatiempo, y nueve de cada diez veces no quiero un pasatiempo
que sea igual a lo que estuve haciendo todo el día en el trabajo.

Decidí cambiar el enfoque, y ese nuevo enfoque fue bastante parecido al actual.
Decidí sacar toda la lógica y generar un sitio estático usando __mkdocs__. En
ese momento estaba medio obsesionado con la idea de los Digital Gardens, metido
hasta el cuello en vaults de Obsidian, y quería algo que recordara al Obsidian
Publish. Llegué incluso a publicar un plugin para hacer backlinks en mkdocs que
tuvo cierta repercusión.

> Llegué a hacer una versión usando Obsidian Publish, pero no me gustó el
> servicio y lo abandoné rápido, así que ni voy a explorar ese tema acá.

La generación de sitio estático funcionó bien, pero la parte de crear los temas
y eso es bastante pesada. O te quedás con un tema default de mkdocs o pasás un
tiempo increíble metiendo mano en HTML, CSS y JavaScript (qué asco).

Al final publicué una versión pero la dejé de lado en poco tiempo.

## Limbo

Después de un tiempo, terminé dejando el sitio en el limbo. Cambió bastante en
mi vida, no tenía tiempo para escribir nada relevante y no estaba haciendo nada
que me pareciera lo suficientemente interesante para compartir. Llegué a arrancar
un [canal de YouTube](https://www.youtube.com/@perguicinha) para pasar el tiempo
haciendo algo que no fuera programar o escribir sobre programación.

Y eso fue todo por los últimos... ¿dos años? Creo que sí, unos dos años.

## Nueva Versión

Al final, la vida se acomodó y volví a mi naturaleza de programar en mi tiempo
libre. Cambió mucho en estos dos años, y con la llegada de estos asistentes de
código vi la oportunidad de resolver lo del sitio sin tener que gastar demasiado
tiempo en cuestiones técnicas.

Terminé decidiendo ir con el setup más simple posible y enfocarme en el
contenido. Decidí hacerlo con GitHub Pages usando Jekyll, y le mandé hacer a
Cláudio todo el setup del proyecto.

Terminé gastando algunos días ajustando la apariencia del sitio, pero fueron
sesiones cortas (no más de una hora cada una) haciendo los ajustes. Ya tenía los
assets como el logo del sitio y una idea de cómo quería que quedara el layout,
así que fue razonablemente sencillo.

## Uso de IA

Como mencioné, usé a Cláudio para resolver este problema. Los principales
motivos de haber usado IA para esto son:

- Gastar menos tiempo.
- Jekyll está escrito en Ruby, que no es un lenguaje con el que trabajo y no
  tengo demasiado interés en aprender por ahora.
- Igual quería una apariencia menos genérica, así que iba a tener que meterle
  mano al HTML y al CSS.

Usar IA en el setup también me ayudó a tener algunas otras cosas que quería,
como versiones en portugués, inglés y español de todos los posts.

> Ojo, yo uso IA para __traducir__ los posts, no para escribirlos. Al menos una
> de las versiones va a haber sido escrita manualmente por mí, sin asistentes de
> código. En este caso, es el post en portugués.

## Eficiencia

Con el uso de IA lo pude resolver en tres días, incluyendo el post inicial, la
migración de los posts viejos y la traducción.

Estoy bastante contento con el enfoque actual. Para mí lo más importante de este
blog es poder redactar el contenido en Markdown en un editor de código o en
Obsidian. No quería usar una interfaz web ni nada por el estilo — por eso nunca
tuve ganas de usar un Medium de la vida. Además, me gusta ser dueño de lo mío, y
un repositorio git me permite hacer eso.

## ¿Y por qué ahora?

Si el sitio original siguiera en pie, estaría volviendo a postear ahí ahora. He
vuelto a hacer cosas con programación y he estado estudiando mucho, principalmente
en este mundo de la IA. Esto no va a convertirse en un blog de IA (creo), pero
usar IA me ha posibilitado aprovechar mejor mi tiempo libre y hacer cosas que
antes me llevaban demasiado tiempo (y normalmente abandonaba a mitad de camino).

Creo que he estado haciendo cosas lo suficientemente interesantes como para volver
a compartir lo que estoy haciendo. Y el nuevo setup del sitio debería hacer las
cosas más fáciles de mantener, lo que debería animarme a volver a postear.

## Conclusión

- Tenemos un sitio nuevo.
- Creo que voy a postear acá.
- Si no posteo, al menos no perdí mucho tiempo montando esto.
- No soy vibe-coder (lo juro).
- Pero sí, este sitio fue vibe-codeado. :)

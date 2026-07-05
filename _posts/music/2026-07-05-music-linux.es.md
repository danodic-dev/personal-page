---
layout: post
title: "Música en Linux"
lang: es
permalink: /2026/07/05/musica-no-linux/
tags: [music, music-production, linux]
---

Hace algunos años que volví a usar Linux el 100% del tiempo en mi computadora
personal, y uno de los motivos por los que había dejado de hacerlo hace casi 20
años eran mis programas de producción musical.

> Ojo, yo uso IA para __traducir__ los posts, no para escribirlos. Al menos
> una de las versiones va a haber sido escrita manualmente por mí, sin
> asistentes de código. En este caso, es el post en portugués.

## Software

Usaba muchos programas propietarios que funcionan nativamente solo en Windows o
MacOS, como [FL Studio](https://www.image-line.com/fl-studio/),
[Maschine](https://www.native-instruments.com/en/products/komplete/drums/maschine/),
[Ableton Live](https://www.ableton.com/en/live/) y varios plugins
[VST](https://www.steinberg.net/technologies/vst/) que están hechos únicamente
para Windows y MacOS.

Mi programa principal es FL Studio, y se sabe que este en particular incluso
logra funcionar en Linux usando [Wine](https://www.winehq.org/). Sin embargo,
una característica común de los programas de producción musical es que tienen
interfaces elaboradas y usan mucha aceleración gráfica. La mayoría depende
fuertemente de DirectX, efectos de composición, etc.

Cuando ejecuto FL Studio en Linux, la experiencia es mediocre: algunos cuelgues
aleatorios, la interfaz rompiéndose en puntos específicos y otros detalles que
no se notan a primera vista, lo que termina en comentarios de "funciona 100%
bien", pero que rompen por completo el flujo de trabajo cuando estás haciendo
algo más serio.

## Buscando Alternativas

Necesito alternativas para lo siguiente:

- DAW - Es FL Studio, Ableton Live, etc.
- Plugins de Síntesis de Sonido - Son los plugins VST para generación de sonido
  (sintetizadores) como
  [Massive](https://www.native-instruments.com/en/products/komplete/synths/massive/),
  [Sytrus](https://www.image-line.com/plugins/Synths/Sytrus/),
  [Serum](https://www.xferrecords.com/products/serum-2), etc.
- Plugins de Procesamiento de Audio - plugins para:
  - Ecualizador de n bandas
  - Delay
  - Reverb
  - Compresor multibanda
  - Limiter
  - Entre otros.
- Editor de Audio - [Edison](https://www.image-line.com/plugins/Tools/Edison/),
  [Sound Forge](https://www.magix.com/us/music/sound-forge/),
  [Audacity](https://www.audacityteam.org/), etc.

El 99% de lo que necesito lo cubría el combo FL Studio + Maschine, ya que la
mayoría de los plugins built-in de FL Studio resuelven _bien_ el problema.

Necesito no solo una alternativa, sino algo _bueno_. Un ejemplo es el editor de
audio, donde podría simplemente seguir usando Audacity en Windows. Sin embargo,
el Edison que viene con FL Studio es _mucho_ superior en términos de
rendimiento, flujo de trabajo y funcionalidad para producción musical, además de
venir integrado a FL Studio.

Por suerte, hoy en día existe una infinidad de programas que cubren este
espectro y que están disponibles para Linux. Y no solo software Open Source,
sino programas comerciales equivalentes en funcionalidad y calidad a los
mencionados antes. Algunos ejemplos:

- DAW -> [Bitwig Studio](https://www.bitwig.com/),
  [Renoise](https://www.renoise.com/),
  [Waveform](https://www.tracktion.com/products/waveform-free), etc.
- Plugins VST:
  - [Vital](https://vital.audio/)
  - plugins de [u-He](https://u-he.com/)
  - Suites enteras de plugins FOSS que voy a mencionar más adelante.

Por ahora es más que nada cuestión de elegir un programa, aprender a configurar
todo y gastar un tiempito aprendiendo a usar toda la cosa.

## El DAW: Renoise

Me decidí por Renoise como DAW. No sé si esto es algo de lo que me vaya a
arrepentir más adelante, porque cambia por completo el enfoque de edición.

FL Studio es un editor al estilo _Sequencer_, donde uno ve las pistas en
pantalla, con los clips de sonido, midi, etc. en una línea de tiempo normalmente
horizontal. Es el modelo más común, y las alternativas comerciales más cercanas
son Bitwig Studio y Waveform.

Renoise, en cambio, es una DAW al estilo _Tracker_, siendo una de las pocas
opciones comerciales y _full featured_ para esto. Un tracker es bastante
diferente: dispone las pistas de la canción de forma vertical y vos escribís
directamente el valor de las notas y los efectos en la grilla. Es un enfoque
basado en programas que se usaban antiguamente, sobre todo en la Amiga, como
[FastTracker II](https://en.wikipedia.org/wiki/FastTracker_2).

Existen ports de Trackers antiguos como FastTracker para Linux, como
[MilkyTracker](https://milkytracker.org/), que encima es gratis, pero quiero
algo que funcione como una DAW moderna con el estilo de un tracker más antiguo.

No tengo experiencia con trackers, pero estoy dispuesto a aprender.

## Plugins de Efectos

Terminé decidiendo comprar el
[DAW Essentials Collection](https://www.tracktion.com/products/daw-essentials-collection)
de Tracktion por varios motivos:

- Un paquete de plugins coherentes, con una interfaz y un funcionamiento
  similares.
- Tracktion es una empresa conocida que desarrolla productos de calidad (aunque
  no me gusta su DAW, pero eso ya es cuestión de gustos).
- El sitio tenía 40% de descuento en todo, lo que hizo que los plugins me
  salieran más baratos que un asado.

Existen paquetes de plugins FOSS que cumplen un rol similar (los plugins de
[SocaLabs](https://socalabs.com/), por ejemplo), pero prefiero un producto
consolidado en el mercado que me dé estabilidad.

Después de que esté cómodo con el setup nuevo, puedo probar más los plugins open
source y decidir si vale la pena reemplazar los plugins comerciales.

## Plugins de Síntesis de Sonido

Acá es donde la cosa se pone __cara__. Lo que terminé decidiendo hacer es:

- Apostar por plugins FOSS en la medida de lo posible.
- Usar plugins free.
- Usar soluciones como [Cardinal](https://github.com/DISTRHO/Cardinal) para
  crear sintetizadores ad-hoc.

Un plugin como Massive o Serum cuesta cientos de dólares, y me había puesto un
presupuesto corto de no gastar más de 300 reales en toda esta aventura de
plugins. Ya tenía la licencia de Renoise, así que esa no cuenta dentro de este
límite, pero los plugins de Tracktion me costaron cerca de 200 reales.

Lo que necesito es lo siguiente:

- Un plugin de síntesis aditiva simple, con capacidades similares al 3xOsc de FL
  Studio. Sí, un plugin así es bastante útil y se puede combinar con los efectos
  del DAW Essentials para generar sonidos más simples pero bien terminados.
- Un plugin de síntesis FM o un híbrido. Antes usaba principalmente Sytrus y
  Massive para esto.

Por ese motivo terminé adoptando lo siguiente:

- Vital como uno de los plugins principales, porque tiene una versión free y los
  upgrades tienen precios razonables ($25 por el nivel Plus).
- Cardinal como uno de los plugins para cuando quiera hacer cosas más
  raras/elaboradas.
- Eventualmente comprar
  [Zyn-Fusion](https://zynaddsubfx.sourceforge.io/zyn-fusion.html), que tiene un
  precio razonable (arranca en $45) y es un sintetizador legendario del mundo
  Open Source (ZynAddSubFx) pero con una interfaz mejor.

### Usando Plugins de Windows

Además de usar Vital y Cardinal, también quiero ver cómo funciona usar
[yabridge](https://github.com/robbert-vdh/yabridge) para correr plugins como
Massive y Sytrus. Tengo licencias stand-alone de ambos plugins, más algunas
otras de [Native Instruments](https://www.native-instruments.com/).

La idea de yabridge es correr plugins de Windows en Linux, de forma que
funcionen con hosts VST de Linux.

En este texto no voy a contar mi experiencia con esto porque todavía es algo que
tengo que entender cómo hacer funcionar (ej.: necesito esa porquería de
[Native Access](https://www.native-instruments.com/en/specials/native-access/)
para poder _bajar_ Massive). Cuando llegue a una conclusión, escribo un post
sobre esto.

### Opciones Open Source

Cuando empecé en el mundo de la música, usé _muchos_ plugins free y open source
de desarrolladores como daedalus. Todavía quiero volver a explorar estos
plugins, porque tienen cosas bien específicas que solo ellos hacen (como emular
determinados chipsets de computadoras antiguas). Pero por ahora sé bien qué
quiero producir, y es algo que necesita capacidades de síntesis más generales y
samples.

## Setup

Antes de empezar a usar el programa, hay que hacer algunas configuraciones en el
sistema. En mi caso, uso Ubuntu, donde el servidor de audio por defecto es
[pipewire](https://pipewire.org/). Programas como Renoise esperan usar
[ALSA](https://www.alsa-project.org/) o [Jack](https://jackaudio.org/) como
servidor de audio, por temas de buffering y latencia. Tengo una interfaz de
Audio compatible con Linux
([Komplete Audio 6](https://www.native-instruments.com/en/pricing/komplete-audio-6/)
MK1), así que es solo cuestión de configurar las cosas para que los programas la
usen de la forma correcta.

### Pipewire-Jack

En el mundo de Linux, Jack es como el equivalente a ASIO. Con él, uno puede usar
la interfaz de audio con menor latencia. Sin embargo, con Pipewire, con solo
instalar `jackd` no alcanza. Hay que instalar `pw-jack`:

```bash
sudo apt install pipewire-jack qjackctl
```

Con el comando de arriba también se instala
[qjackctl](https://qjackctl.sourceforge.io/), que es la mejor interfaz para
controlar y configurar el ruteo de Jack.

Hay un problema: cuando Renoise arranca, intenta correr en un servidor Jack que
ya esté corriendo en el sistema, y si no lo logra, intenta levantar uno nuevo.
Pero intenta levantar `jackd` y no `pw-jack`, que es un daemon de jack conectado
a pipewire.

Para que esto pase, hay que iniciar las aplicaciones desde la terminal usando el
comando `pw-jack` antes del nombre de la aplicación:

```bash
pw-jack renoise
```

Esto es incómodo porque hay que andar abriendo la terminal para disparar las
aplicaciones. Y no solo eso, hay que usar la terminal para cada aplicación que
se quiera iniciar.

La solución más simple es hacer un link a nivel de sistema, reemplazando `jackd`
(que se instala como dependencia de `qjackctl`) por `pw-jack`:

```bash
sudo cp /usr/share/doc/pipewire/examples/ld.so.conf.d/pipewire-jack-*.conf /etc/ld.so.conf.d/
sudo ldconfig
```

Esto hace que cada vez que un programa intente usar el `jackd` por defecto, use
`pw-jack` en su lugar.

> Una cosa BIEN importante y medio molesta: para que el sistema "transicione" al
> modo de audio en tiempo real, no puede haber ninguna aplicación reproduciendo
> sonido. En principio esto no es un problema si sos una persona concentrada que
> hace música en silencio. No es mi caso, yo escucho YouTube y hago música al
> mismo tiempo, y mi YouTube hace que Renoise no funcione bien. La solución es
> simple: pausar YouTube, ir a configuración -> audio -> reinitialize y recién
> ahí darle play a YouTube de nuevo.

### VSTs

Los plugins VST tienen que estar en una carpeta que sea escaneada por el
programa que vayas a usar. En Renoise, esta ruta se define con las variables de
entorno `VST_PATH` y `VST3_PATH`. Además, algunas carpetas son las de por
defecto, como `~/.vst3`. En este caso, lo que me pareció mejor fue crear una
carpeta VSTs en mi carpeta de documentos y reemplazar `~/.vst` y `~/.vst3` por
links.

Mi carpeta Documentos está sincronizada en la nube, lo que significa que si
reinstalo la máquina o llego a perder el disco, puedo reproducir el setup
fácilmente después de configurar la máquina de nuevo.

> Esto es algo bastante importante, porque los proyectos dependen de que los
> plugins cargados estén funcionando para que suenen como corresponde. Es un
> _embole_ estar reinstalando y reconfigurando VSTs cada vez que pasa algo en el
> sistema, incluso en un entorno Windows donde la mayoría de las cosas funcionan
> con un instalador. Ya pasé por esto muchas veces, así que ya me estoy
> precaviendo.

```bash
rm -rf ~/.vst
rm -rf ~/.vst3
ln -s ~/.Documents/musica/vst/vst2/ ~/.vst
ln -s ~/.Documents/musica/vst/vst3/ ~/.vst3
```

Algunos VST se instalan directo en las carpetas de VST, porque se distribuyen
como paquetes `.deb`. Otros hay que descomprimirlos en una carpeta, y estos
links ayudan justamente con los que hay que descomprimir a mano.

## Qué viene ahora

Después de tener todo configurado, Renoise puede cargar los VSTs y puedo empezar
a jugar con eso.

Ahora empieza la parte divertida: experimentación, hiperfoco y ruido. Tengo que
empezar a usar los plugins que compré, probar plugins nuevos y empezar a postear
lo que vaya descubriendo (y haciendo) por acá.

Hasta la próxima. 👀

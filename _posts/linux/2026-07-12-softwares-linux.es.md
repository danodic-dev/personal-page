---
layout: post
title: "Lo que uso en Linux (2026)"
lang: es
permalink: /2026/07/12/lo-que-uso-en-linux/
tags: [linux]
---

> Ojo, yo uso IA para __traducir__ los posts, no para escribirlos. Al menos una
> de las versiones va a haber sido escrita manualmente por mí, sin asistentes de
> código. En este caso, es el post en español mismo.

Hoy tenemos un post más simple, pero que es una curiosidad que estaba hablando
acerca de esto con un amigo. Estaábamos hablando acerca de cuáles son los
softwares que utilizamos en nuestros pcs con Linux instalado. No es tan obvio
como puede parecer.

## ¿Cuáles son los Softwares?

### Navegador de Internet: `Firefox`

Lo más obvio, pero una decisión sólida. A mí no me gustan los navegadores con
base [Chromium](https://www.chromium.org/chromium-projects/) y
[Firefox](https://www.mozilla.org/firefox/) funciona bien en Linux (es terrible
en Windows). Las versiones más recientes ganaron algunas mejoras muy necesarias,
como la posibilidad de cambiar perfiles en la UI (sin tener que abrir
`about:profiles`).

Yo no uso las funcionalidades de VPN, sync en línea, etc. Yo hago uso solo de el
navegador y esto es suficiente. Una de las cosas que más me gusta en Firefox son
las pestañas verticales que funcionan muy bien, principalmente cuando combinamos
ellas con los grupos de pesteñas.

Yo uso el navegador para otras cosas que sustituyen softwares locales:

- Emails
- [WhatsApp](https://www.whatsapp.com/)
- Calendario

### Suite Office: `Libre Office`

Yo uso principalmente las hojas de cálculo de [Libre
Office](https://www.libreoffice.org/) y tengo una buena experiencia con ellas.
No es el software más bonito y algunas veces puede parecerse demasiado a Office
2003, pero consigo hacer todo lo que necesito con él.

Otra cosa que es conveniente es el hecho de que la mayoría de las distros vienen
con Libre Office instalado por defecto.

### Editor de Código: `Zed`

Estoy usando [Zed](https://zed.dev/) desde hace algunas semanas y no sé si voy a
dejarlo.

En los últimos 6 años yo usé principalmente las IDEs de
[JetBrains](https://www.jetbrains.com/)
([PyCharm](https://www.jetbrains.com/pycharm/), [IntelliJ
Idea](https://www.jetbrains.com/idea/)) y
[VSCode](https://code.visualstudio.com/). Pero las IDEs de JetBrains han tenido
una degradación en el rendimiento que sentí principalmente en PyCharm, y esto me
llevó a la decisión de cancelar mi suscripción de el All Tool Bundle de
[JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/).

VSCode tiene otro problema: la adición absurda de funciones de IA que no me
interesa. La experiencia de edición no ha mejorado en mucho tiempo y el
ecosistema está lleno de basura vieja que no es más mantenida. La mayoría de las
cosas añadidas en las versiones más recientes són solo para IA, ya no tenemos
muchas mejoras en la experiencia de edición.

En mi búsqueda por otros editores testeé:

- [Emacs](https://www.gnu.org/software/emacs/)
- [Helix](https://helix-editor.com/)
- Zed
- [Sublime Text](https://www.sublimetext.com/)

Zed es el editor que, hasta ahora, me está dando la mejor experiencia de
edición. Sin atajos de teclado extraños, sin edición modal, y con un look & feel
moderno. Es verdad que Zed tiene funciones de IA pero ellas no són invasivas y
es posible usarlo sin tener mensajes que ofrezcan estas funciones de AI todo el
tiempo.

### Sincronismo de Disco: `InSync`

[InSync](https://www.insynchq.com/) es el primer software de Linux que yo compré
en 2022 para hacer el sincronismo automático de mis discos para la internet. El
servicio que utilizo es [Microsoft 365](https://www.microsoft.com/microsoft-365)
porque es el servicio con la mejor relación precio / gb.

Las features de sync de [GNOME](https://www.gnome.org/) no hacen el sync de la
forma que quiero (solo algunas carpetas, con filtros) y InSync hace esta tarea
de forma muy buena. InSync tiene funcionalidades para el sync de
[OneDrive](https://onedrive.live.com/about/) que no están disponibles ni
siquiera en la integración nativa de Windows con OneDrive.

### Virtualización: `VirtualBox`

Solo es el mismo software de virtualización que utilizo hace 20 años. Llegué a
intentar [GNOME Boxes](https://apps.gnome.org/Boxes/), pero en
[Ubuntu](https://ubuntu.com/) es preciso instalar otros paquetes para que
funcione, y yo no tengo la paciencia para esto.

### Containers: `Podman`

Yo utilicé [Docker](https://www.docker.com/) como mi plataforma de contenedores
por casi 10 años, hasta el punto en que [Podman](https://podman.io/) es capaz de
reemplazar a Docker sin mayores problemas.

Algunas veces Podman no trabaja muy bien con la biblioteca
[Testcontainers](https://testcontainers.com/), pero el soporte para Podman en
Testcontainers ha mejorado mucho, y yo no recuerdo cuando fue la última vez que
necesité cambiar Podman por Docker.

### Videojuegos: `Steam`

Yo uso [Steam](https://store.steampowered.com/), como todos los demás que juegan
en Linux hoy en día.

### Editor Pixel: `GIMP` y `Aseprite`

Yo uso [GIMP](https://www.gimp.org/) desde 2001. Yo creo que GIMP no ha tenido
mejoras relevantes en los últimos 10 (?) años, es estable (en Linux) y hace la
mayor parte de lo que necesito.

Para cosas más relacionadas a pixel art, a mí me gusta más utilizar
[Aseprite](https://www.aseprite.org/).

### Editor Vectorial: `Affinity` & `Graphite`

Yo utilicé mucho el [Affinity
Designer](https://affinity.serif.com/en-us/designer/) en Windows. Cuando compré
la licencia en Windows, Affinity era la mejor alternativa a [Adobe
Illustrator](https://www.adobe.com/products/illustrator.html), con un buen
precio y muchas capacidades.

A mí no me gusta el hecho de que [Canva](https://www.canva.com/) ha comprado
Affinity y creado una versión free con funciones de IA de pago. Es algo que
parece bueno en la superficie, pero el producto vá a morir si las funciones de
IA no se vendam.

Desde Affinity 2 (y ahora versión 3) es posible ejecutar Affinity en Linux
utilizando [Wine](https://www.winehq.org/). La experiencia no es muy buena pero
es posible. Yo he utilizado [Graphite](https://graphite.rs/) y planeo migrar
para el así que esté más capaz.

No me gusta [Inkscape](https://inkscape.org/).

### Modelaje 3d: `Blender`

Uso [Blender](https://www.blender.org/) desde 2004 o 2005. Para mí es algo
natural y es un software excelente.

### Edición de Videos: `Blender`

Y yo uso tanto Blender, que es más fácil para mí aprender a utilizar [Blender
VSE](https://www.blender.org/features/video-editing/) que aprender otro
software.

Blender VSE no es perfecto, pero para edición simple de videos es más que
suficiente. Y la mejor cosa de Blender es que el ritmo de mejoras es muy rápido,
y el editor de videos está mejorando significativamente con cada versión.

### CAD: `FreeCAD`

No es una opción. Es el menos malo de todos los que probé para diseño 3d de
partes paramétricas.

No es algo que uso tanto al punto de comprar una licencia de
[BricsCAD](https://www.bricsys.com/en-intl/bricscad/), entonces yo uso
[FreeCAD](https://www.freecad.org/) y me ocupo de sus problemas y dificultades.

### Editor de Audio: `Tenacity` / `Audacity`

También es por la falta de opción mejor.
[Audacity](https://www.audacityteam.org/) es capaz y no es malo, pero yo estaba
acostumbrado a utilizar alternativas mucho más capaces como Edison en [FL
Studio](https://www.image-line.com/fl-studio/).

Audacity necesita un revamp en la UI para que parezca algo hecho después de
2010.

### Workstation de Audio: `Renoise`

Es una buena DAW para los que quieren un Tracker en lugar de un Sequencer. Para
muchos es la única opción com capacidades profesionales Y con un estilo de
Tracker (incluso en Windows).

No es caro por lo que ofrece, y es muy estable.

### Voz a texto: `Buzz`

[Buzz](https://github.com/chidiwilliams/buzz) es un software que utilizo para
convertir grabaciones de audio en texto. Con Buzz yo consigo hacer todo el
proceso de STT local y offline. Como STT es un proceso rápido, yo consigo
utilizar modelos grandes con la CPU y memoria ram, sin la necesidad de memoria
en GPU.

---

Estos son los principales softwares que uso en mi computadora, pero no son los
únicos. Hasta más recientemente, yo vengo intentando probar softwares nuevos que
vengan a atender mejor mis necesidades. Pero los que están citados en este
artículo son los que a mí me gustan más o que uso desde hace más tiempo.

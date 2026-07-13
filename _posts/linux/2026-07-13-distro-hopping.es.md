---
layout: post
title: "Distro Hopping"
lang: es
permalink: /2026/07/13/distro-hopping/
tags: [linux]
---

> Ojo, yo uso IA para __traducir__ los posts, no para escribirlos. Al menos una
> de las versiones va a haber sido escrita manualmente por mí, sin asistentes de
> código. En este caso, es el post en portugués.

## Motivación

Soy usuario de Linux desde hace mucho tiempo, y hace poco hice un poco de distro
hopping. Probé varias distribuciones, como [Fedora](https://fedoraproject.org/),
[openSUSE](https://www.opensuse.org/) y algunos derivados de
[Arch](https://archlinux.org/).

Algunos amigos me pidieron que describiera un poco esa experiencia y diera mi
recomendación sobre lo que terminé decidiendo usar. En los últimos 4 años vengo
usando exclusivamente [Ubuntu](https://ubuntu.com/) LTS. Empecé en la 20.04,
después migré a la 22.04, luego a la 24.04 y ahora estoy en la 26.04. Quiero
aprovechar este espacio para hablar un poco de mi experiencia con Ubuntu LTS,
cuál fue mi opinión sobre las distribuciones que probé, y qué termino
recomendando después de todo este distro hopping.

## Perfil de Usuario

Hablando un poco de mi perfil de usuario: ya no soy el tipo de persona a la que
le gusta estar toqueteando la computadora. Ese era mi perfil hace 15, 20 años,
pero hoy en día ya hace bastante tiempo que tengo un perfil mucho más
pragmático. No quiero andar personalizando el escritorio, no quiero andar
resolviendo problemitas, metiéndome en la terminal para hacer cosas que
esperaría que el sistema ya tuviera resueltas solo. No tengo mucho tiempo para
andar resolviendo problemas frente a la computadora — el tiempo que tengo es
para sentarme y hacer lo que realmente quiero hacer.

Por eso, para mí es muy importante — en realidad, es lo más importante — que,
sea cual sea la distribución que instale en mi máquina, no vaya a perder mucho
tiempo configurando o resolviendo problemas. Eso es crucial, y fue un factor
excluyente para varias de las distribuciones que terminé probando.

Justamente por eso no me importa mucho algunos aspectos, como qué tan libre es
el software que estoy usando, o si un driver es propietario o no. Solo quiero
que las cosas funcionen. Y mi hardware no es el más "estándar" que existe: la
experiencia de usar máquinas con chipset 100% Intel suele ser bastante uniforme,
porque todo — procesador, chipset, gráficos — es Intel, y encaja perfecto. Mi
máquina, en cambio, es una Lenovo Legion 5i, con chipset Intel, pero con video
híbrido entre la Intel Xe Iris y una Nvidia 4060. Ese aspecto híbrido de los
gráficos trae algunos desafíos en cuanto a qué distribuciones puedo usar — no
solo por el tema del gráfico híbrido en sí, sino también por el simple hecho de
que necesito instalar los drivers de Nvidia, algo que no estoy muy dispuesto a
gastar tiempo haciendo.

Estoy acostumbrado a instalar estos drivers desde la época en que bajábamos el
instalador directo del sitio de Nvidia para correrlo en Linux. Hoy en día ya
existen soluciones mejores para eso, pero aun así no quiero perder tiempo con
ese proceso. Ese es un aspecto bastante importante en mi toma de decisión.

## Lo que Es Importante que Funcione

Lo primero que necesito que funcione de entrada, sin mayores dolores de cabeza,
son los codecs de video. En la mayoría de las distribuciones, si uno no instala
los codecs, ni siquiera puede reproducir video en
[YouTube](https://www.youtube.com/). Y lamentablemente YouTube es parte integral
de mi vida y mi rutina — siempre tengo una ventana de YouTube abierta, trabajo
escuchando YouTube, hago mis cosas personales escuchando YouTube, es algo que
siempre está ahí. Normalmente lo primero que hago cuando instalo una
distribución en una máquina nueva es copiar mi perfil del navegador, para que
mis cuentas ya queden logueadas, entrar a YouTube y ponerme a ver algo. Entonces
YouTube es muy importante para mí, y eso impacta directamente en la necesidad de
tener los codecs de video disponibles: sin ellos instalados,
[Firefox](https://www.mozilla.org/firefox/) no puede reproducir la mayoría de
los videos, si no todos.

Lo segundo que necesito que funcione son los drivers de video, por varios
motivos. El primero es que tengo una GPU discreta — pagué más caro esta máquina
por eso, no tiene sentido no configurarla y no usarla. Pero no es solo eso:
también uso una dock station con varias pantallas, y los colores de los
monitores externos se ven raros con el video de Intel. Con el video de Nvidia,
los monitores quedan mucho mejor calibrados, con colores más precisos. Con
Intel, los colores quedan lavados y muy distintos del perfil de color de la
pantalla del notebook, que queda al lado; con Nvidia, queda perfecto. ¿Podría
meterme ahí y hacer ajustes finos en la configuración de las pantallas para
resolver eso? Podría. Pero no quiero perder tiempo con eso — solo quiero
conectar la dock station al puerto USB conectado al chip de Nvidia y que todo
aparezca y funcione como corresponde.

## Qué Es una Distribución Linux

Antes de hablar de lo que observé y probé, es importante dar un poco de contexto
sobre qué define cuál distribución elegimos — y, sobre todo, entender qué es una
distribución y por qué decidimos usar una u otra.

El primer detalle es por qué existen tantas distribuciones de Linux, y el motivo
es incluso más simple de lo que parece. Linux, al ser open source, es de código
abierto: cualquiera puede tomarlo, descargarlo y ejecutarlo. Solo que Linux es
nada más el kernel, el núcleo del sistema — y solo, no hace gran cosa. Necesita
herramientas, ejecutables, etc. En Linux, todo es un programa, todo es un
ejecutable: montar un disco en el kernel, por ejemplo, para poder acceder a los
archivos, se hace a través de una aplicación llamada `mount` — es como si en
Windows fuera un `.exe`. El servidor gráfico es una aplicación, el entorno de
escritorio es una aplicación. Es todo modular, todo bien separado.

Eso significa que cada persona (o grupo de personas) que arma una distribución
puede decidir cómo se va a montar todo esto. Por eso le decimos "distribución":
alguien decidió tomar el kernel de Linux y empaquetarlo junto con un conjunto
específico de herramientas, configuradas de una forma específica, creando un
paquete coherente — la distribución en sí.

Lo que principalmente cambia entre las distribuciones son esas decisiones — son
cuestiones medio filosóficas. La primera y mayor división que existe es la
gestión de paquetes: cómo se instalan los paquetes. Hoy en día existen,
principalmente, tres grandes grupos de distribuciones: el tradicional DEB
(Debian/Ubuntu), el RPM (Fedora/openSUSE), y el modelo de Arch Linux, basado en
PKGBUILD y en pacman.

Las distribuciones basadas en paquetes RPM vienen de atrás, de [Red Hat
Linux](https://en.wikipedia.org/wiki/Red_Hat_Linux). Hoy en día, la más famosa y
más usada es Fedora, pero también tenemos openSUSE, que también usa paquetes
RPM. Y para mostrar un poco esas diferencias: Fedora usa un gestor de paquetes
llamado [DNF](https://dnf.readthedocs.io/) para instalar los archivos RPM,
encargado de buscar en los repositorios, resolver dependencias e instalar todo.
openSUSE, en cambio, tiene su propio gestor de paquetes,
[Zypper](https://en.opensuse.org/Portal:Zypper). Entonces, aunque los dos usan
paquetes RPM y vienen de la misma base, usan herramientas de gestión de paquetes
distintas.

Ya las distribuciones basadas en [Debian](https://www.debian.org/) usan `.deb`,
con la herramienta [APT](https://wiki.debian.org/Apt). Las más tradicionales
usan solo paquetes `.deb`, pero [Canonical](https://canonical.com/), en los
últimos años, viene haciendo una transición de paquetes `.deb` a paquetes
`.snap` — y el propio APT que viene con Ubuntu termina instalando `.snap` en
algunos casos, algo que no pasa en otras distribuciones.

Entonces eso es lo que cambia entre ellas: cómo está configurada cada una,
algunas personalizaciones, cuestiones filosóficas — hay varios aspectos que
influyen en esto. La forma de elegir es probando y entendiendo qué encaja mejor
con tus objetivos. Por eso mencioné antes cuál es mi perfil de usuario y qué
necesito que funcione: cada distribución va a funcionar de una manera distinta,
y eso es lo que va a impactar tu decisión. A veces, por algún motivo, no te
gusta el gestor de paquetes de Debian, el APT, o de ninguna manera querés usar
`.snap` — en ese caso, Ubuntu no es la distribución para vos, y tal vez vayas a
buscar un Fedora, un openSUSE. A veces te gusta ser más de meter mano, y un Arch
Linux va a ser la solución ideal.

Pero todo esto es algo que se puede probar y validar. Hoy en día, la mayoría de
las distribuciones más populares ofrecen lo que se llama Live Discs, que
permiten probar la distribución sin necesidad de instalarla en el disco. Es una
buena alternativa para tener una primera impresión de cómo es la distribución, y
decidir si realmente querés instalar eso en tu máquina — no fue lo que hice yo,
yo de hecho instalé cada una en mi máquina y la usé, pero es una opción válida.

## Disponibilidad de Software

Algo que siempre hay que tener en cuenta al elegir una distribución es la
disponibilidad de software. Algunas personas van a preguntar: "¿cómo que? Linux
es Linux — o el software existe para Linux, o no existe." Y sí, de alguna forma
es así, pero existe todo un mundo de software propietario, software corporativo,
que no solemos ver empaquetado para 5, 6, 10 distribuciones distintas, como pasa
con muchos proyectos open source. Son programas provistos por empresas privadas,
de código cerrado — a veces incluso software corporativo — y hay que entender
qué distribuciones tienen el mayor soporte para ese tipo de software.

No solo eso: mucho software propietario no está probado ni validado en todas las
distribuciones, porque generalmente lo mantiene un equipo más chico y limitado.
Al ser software propietario, no está disponible para que la comunidad
contribuya, y por eso solo se prueba de forma consistente contra algunas de las
distribuciones más comunes. Es un hecho que hoy en día las dos distribuciones
con mejor soporte para software propietario son Fedora y, sobre todo, Ubuntu.
Entonces, si el tema es una estación de trabajo en la que quizás tengas que
instalar esos softwares molestos de VPN corporativa y demás, Ubuntu tiende a ser
la mejor opción — y no solo Ubuntu, sino Ubuntu LTS, que es la opción más
"aburrida" y tradicional que existe. Es la distribución que va a tener soporte
para ese software, que la gente prueba y, sobre todo, la distribución en la que,
si ese software no funciona, vas a poder conseguir soporte.

Pero también existen programas que no son corporativos, pero sí propietarios, y
que terminan siendo probados solo en algunas distribuciones — y muchas veces ni
siquiera te dan un `tar.gz` para instalar donde quieras. Solo ofrecen un `.deb`
y un `.rpm`, y te las arreglás para instalarlo donde lo necesites.

## Entornos de Escritorio

Otro aspecto bien importante en esta decisión es el entorno de escritorio de la
distribución. El mundo de Linux es bastante distinto al mundo de Windows y
macOS, donde, al iniciar sesión en tu máquina, siempre vas a ver la misma
interfaz. Como Linux es abierto y está armado a partir de varios programas
distintos, una de las cosas que existen — y que me parece de lo más lindo de
Linux — es que hay varios entornos de escritorio para elegir. Cuando hablo de
entorno de escritorio, hablo literalmente del shell de la máquina, del menú de
inicio (si va a haber uno o no), de cómo se muestran las ventanas en la
pantalla, cómo se organizan, cómo configurás la máquina — todo eso es
personalizable, y podés elegir qué interfaz gráfica querés usar.

Los dos entornos de escritorio principales que existen en Linux son
[GNOME](https://www.gnome.org/) y [KDE](https://kde.org/). GNOME tiene una
experiencia más simplificada; la intención no es darte muchas opciones de
configuración — todo lo contrario, es más cerrado, pensado como una experiencia
bien definida y clara, sin mucho margen para personalización. La idea de GNOME
es ser ese entorno de escritorio donde te sentás y lo usás. Como filosofía de
experiencia de uso, GNOME tiende a tener un aura un poco más cercana a macOS,
con un lenguaje de diseño parecido en algunos aspectos. Voy a ser bien honesto:
usé GNOME 3 apenas salió — fue una transición enorme respecto a GNOME 2 — pero,
al final de cuentas, hay cosas en macOS que parecen haber sido medio copiadas de
GNOME 3. Entonces GNOME es una cosa aparte: bastante distinto de Windows, un
poco más familiar para quien usa macOS, pero aun así una propuesta bien única e
individual — no intenta copiar ni a macOS ni a Windows, aunque el lenguaje de
diseño tenga algunos puntos parecidos a macOS.

El otro gran entorno de escritorio es KDE, que es prácticamente el extremo
opuesto de GNOME — y es interesante justamente por eso, por ser tan distintos
entre sí, de formas opuestas. KDE se parece más a Windows, trayendo una
experiencia mucho más cercana a la de ese sistema, pero es mucho más
personalizable — se puede hasta hacer que KDE se parezca a macOS más fácilmente
de lo que GNOME se acerca a eso. Permite personalizar temas de la interfaz,
sonidos, colores, posición de los elementos, atajos — es extremadamente
configurable. Entrás al panel de control de KDE y cada cosita se puede ajustar.
Es el extremo opuesto de GNOME, que no te deja configurar mucho — para que te
des una idea, hasta para cambiar el tema de la interfaz de GNOME necesitás bajar
una aplicación aparte, llamada [Tweaks](https://apps.gnome.org/Tweaks/), porque
eso no es una función integrada en la interfaz por defecto. En KDE, en cambio,
todo eso está a la vista: apenas abrís el panel de configuraciones, hay un
montón de cosas para tocar, configurar y personalizar, con un lenguaje de diseño
más parecido al de Windows. Cuando abrís
[Plasma](https://kde.org/plasma-desktop/), que es el escritorio de KDE, lo
primero que ves es algo bastante parecido a una barra de tareas de Windows, un
menú parecido al "Inicio", y una apariencia y comportamiento también parecidos.
Por eso tiende a ser una transición más fácil para quien viene de Windows.

Pero no es solo una cuestión de los entornos de escritorio en sí — también son
las aplicaciones. GNOME tiene su propia suite de aplicaciones y una biblioteca
gráfica llamada [GTK](https://www.gtk.org/), que hace que las apps desarrolladas
con ella se integren a la apariencia del sistema: parece que fue hecha para
correr en GNOME. ¿Puedo correr una aplicación hecha para KDE dentro de GNOME?
Puedo, pero va a quedar con cara de KDE corriendo en GNOME — y lo mismo al
revés. KDE usa una biblioteca llamada [Qt](https://www.qt.io/), junto con una
biblioteca llamada KDE Lib (no tengo la certeza de que ese siga siendo el
nombre, hace tiempo que no toco esto). La idea es la misma: cuando abrís una
aplicación de KDE dentro del entorno KDE, la apariencia es consistente, como si
todo hubiera sido hecho para el mismo entorno. ¿Y puedo abrir una aplicación de
GNOME o GTK dentro de KDE? Puedo — va a quedar medio fea, pero funciona,
generalmente, a menos que sea una aplicación de sistema de GNOME (algo para
configurar el propio GNOME, por ejemplo), ahí no tiene mucho sentido. Lo mismo
vale para KDE. Pero se puede hacer.

Linux también tiene otros entornos de escritorio. Uno de los que más me gusta es
[XFCE](https://www.xfce.org/), que usé bastante hace unos 15, 20 años. Tienden a
ofrecer experiencias bien distintas — XFCE, por ejemplo, es bien personalizable:
se puede hacer que se parezca a versiones antiguas de GNOME, a un Windows 95, o
a su propia cara. Fue creado, allá atrás, para parecerse al
[CDE](https://en.wikipedia.org/wiki/Common_Desktop_Environment), que era un
entorno de escritorio común en sistemas Unix. ¿Cuál es la ventaja de XFCE? Es
muy liviano, consume muchos menos recursos de la máquina. GNOME y KDE son más
pesados; interfaces como XFCE van a ser más simples, con menos funcionalidades —
a veces menos lindas, con menos efectos, animaciones y transiciones —, pero
también mucho más livianas, gastando muchos menos recursos de tu máquina.

La mayoría de las distribuciones vienen con KDE o GNOME por defecto. Sin
embargo, distribuciones grandes como Fedora y Ubuntu también tienen "flavors" o
"spins": versiones de la distribución base con otros entornos de escritorio.
Tanto Ubuntu como Fedora vienen con GNOME por defecto, pero existe una versión
de Ubuntu llamada [Kubuntu](https://kubuntu.org/), que viene con KDE, y otra
llamada [Xubuntu](https://xubuntu.org/), que viene con XFCE. Es el mismo Ubuntu,
la misma base del sistema, pero con un entorno de escritorio por defecto
distinto, y un conjunto de aplicaciones por defecto distinto para ese entorno.

Entonces eso también es algo que se puede elegir. En caso de duda, lo que
siempre recomiendo a quien vaya a probar es: probá usar GNOME, aunque vengas de
Windows. Si te gusta mucho Windows, ahí sí probá KDE — si no, probá GNOME. Si tu
máquina tiene restricciones de recursos y querés usar Linux para conseguir algo
más liviano, también vale la pena probar primero GNOME o KDE — tienden a ser
mucho más livianos que Windows de todas formas. Pero, si eso no termina de
funcionar, probá XFCE, que es una interfaz buena, bastante completa y bien
liviana.

## Vanilla vs. Personalizado

El último detalle importante para entender es la diferencia entre distribuciones
que traen software vanilla y las que traen software personalizado — y qué tan
personalizado está ese software. La mayor referencia hoy en día en cuanto a
software vanilla es Fedora. Es conocida por ofrecer la experiencia del
escritorio GNOME lo más original posible: no hacen ninguna personalización, lo
que ves es exactamente la forma en que GNOME fue pensado por sus propios
desarrolladores. Ubuntu, en cambio, trae personalizaciones en la interfaz de
GNOME que tienden a recordar a
[Unity](https://en.wikipedia.org/wiki/Unity_(user_interface)), la interfaz vieja
de Ubuntu que fue abandonada por Canonical hace algunos años. Esas
personalizaciones a veces son algo que a la gente le gusta, a veces no. En
Fedora, vas a tener el GNOME por defecto, con el tema por defecto, la apariencia
por defecto, los efectos por defecto y los programas por defecto del entorno
GNOME — cuando vayas a tocar el sistema, va a ser exactamente el que te
entregaron. Canonical, por otro lado, hace lo que llaman Ubuntu Desktop: una
personalización de GNOME que modifica el comportamiento del dock de
aplicaciones, la gestión de ventanas y algunas otras cosas menores del
escritorio. Sigue siendo GNOME, pero un GNOME con personalizaciones que
Canonical considera más amigables para el usuario.

También existen distribuciones que hacen personalizaciones más estéticas, menos
funcionales — [Garuda Linux](https://garudalinux.org/), por ejemplo, es una
distribución que se enfoca bastante en dejar el escritorio lindo, tocando temas
y esas cosas, y le gusta a mucha gente (a otros, no tanto). Y existe un tercer
aspecto: algunas distribuciones van más allá de la personalización del propio
escritorio y también personalizan la apariencia de otros programas, para que
quede consistente con el resto del sistema. Algunas de ellas, por ejemplo, traen
un tema de [LibreOffice](https://www.libreoffice.org/) con íconos más cercanos
al tema del resto del sistema, en vez del tema por defecto de LibreOffice.

Entonces son cosas que vale la pena observar. Si te gustan las distribuciones
enfocadas en vanilla, lo ideal es agarrar algo como un Fedora, o incluso un Arch
Linux. Ahora, si te gustan las personalizaciones específicas, necesitás probar
algunas distribuciones distintas para entender cuáles son esas
personalizaciones. Una distribución bien conocida por tener una personalización
fuerte es openSUSE — no toca tanto la apariencia ni la experiencia del software
en sí, solo trae su propio fondo de pantalla, tal vez un tema más verdoso, pero
tiene todo un sistema de gestión de Linux llamado
[YaST](https://yast.opensuse.org/), que es su gran diferencial, y suele ser muy
bueno para quien es administrador de sistemas. Si ya sos administrador de
sistemas, ya usás openSUSE en el trabajo y ya estás acostumbrado a YaST, podés
correrlo en tu máquina y usarlo como escritorio, y YaST va a ser una buena
opción. Sin embargo, a algunas personas no les gusta ese enfoque, porque YaST
termina duplicando cosas que tenés para configurar en dos lugares: uno dentro de
GNOME o KDE, y otro en el propio YaST, permitiendo configurar la misma cosa.

Entonces es una cuestión de preferencia. La mía es por el software vanilla, pero
no del todo — valoro algunas personalizaciones, y me parece que las
personalizaciones del escritorio de Ubuntu son buenas. No me gusta mucho la
experiencia vanilla de GNOME. Y eso ya adelanta un poco cuál va a ser mi
recomendación de distribución después de todo este distro hopping.

## Recomendación: Ubuntu

Y sí, al final de cuentas sigo usando Ubuntu, y recomendando Ubuntu. Y eso es
interesante, porque mucha gente recomienda [Linux Mint](https://linuxmint.com/)
(que está basado en Ubuntu), mucha gente recomienda Fedora, mucha gente
recomienda openSUSE — pero, al final del día, para mí, lo que funciona 100% y
cumple todos los requisitos sigue siendo el bueno y viejo Ubuntu. Voy a explicar
por qué.

**Drivers.** No necesito instalar driver de video. Hasta la versión 24.04
todavía tenía que ir y habilitar los drivers gráficos propietarios, pero era
cuestión de 3 clics. A partir de la 26.04, ni siquiera eso tengo que hacer:
detecta que tengo una placa de video dedicada, ya habilita el driver
propietario, y listo — funciona a la primera, sin que yo tenga que configurar
nada.

**Codecs.** Durante la instalación, ya pregunta si quiero usar los codecs de
video, si quiero descargarlos. De nuevo, es un checkbox que marco y los codecs
ya vienen instalados.

**Disponibilidad de software.** Uso algunos programas propietarios — no soy un
usuario 100% de software libre/open source — y todo lo que uso fue probado y
empaquetado para Ubuntu. Entre ellos, [InSync](https://www.insynchq.com/), que
uso para sincronizar mi disco con [Microsoft
365](https://www.microsoft.com/microsoft-365);
[Renoise](https://www.renoise.com/), el software de música que uso; entre otros,
[Mullvad VPN](https://mullvad.net/). Todo eso fue probado y distribuido para
Ubuntu. Y no es solo eso: cuando sale una versión nueva de Ubuntu LTS, poco
tiempo después ya está todo disponible para el software que necesito. Mi
experiencia con software corporativo más molesto, como
[CrowdStrike](https://www.crowdstrike.com/) o
[GlobalProtect](https://www.paloaltonetworks.com/sase/globalprotect) de Palo
Alto, es que, aunque esos programas no funcionen tan bien en Linux, están
empaquetados básicamente para Ubuntu — algunos hasta tienen un paquetito RPM,
pero ni siquiera es para Fedora, generalmente es para [Red Hat
Enterprise](https://www.redhat.com/). Personalmente, tuve las experiencias menos
malas con este tipo de software en Ubuntu.

**Estabilidad.** Ubuntu no se cuelga, no da problemas. Mi máquina tiene bastante
memoria, y el único motivo por el que Linux se me colgó fue falta de memoria —
no maneja muy bien eso, entra en un swap loco y el sistema simplemente se
congela. Pero mi máquina no tiene una restricción de memoria significativa por
el momento (64 GB), así que, para mí, simplemente funciona — lo cual es muy
bueno.

**Personalizaciones.** Puedo, con bastante facilidad, dejar el escritorio de
Ubuntu como me gusta. Uso Ubuntu Dock, que es una personalización de [Dash to
Dock](https://extensions.gnome.org/extension/307/dash-to-dock/), y es bien fácil
de configurar para dejarlo ahí abajo — termina pareciéndose al dock de macOS.
Para mí, la apariencia no es tan importante como la funcionalidad: tanto en
Windows como en Linux, me gusta tener la lista de aplicaciones siempre visible
ahí abajo, y el comportamiento por defecto de GNOME vanilla no me convence.
Probé usar Dash to Dock directamente, y tampoco me convenció.

**Lo malo: los Snaps.** Los [snaps](https://snapcraft.io/) tienden a no tener el
mismo rendimiento que otros formatos de paquete, porque tienen todo un sistema
de sandboxing. Además, el hecho de que existan los snaps hace que los
[flatpaks](https://flatpak.org/) terminen sin encajar tan bien en el sistema —
Fedora funciona mejor con flatpak. Mucho software propietario que uso ya está
disponible como snap, como las IDEs de [JetBrains](https://www.jetbrains.com/) —
solo hacés clic e instalás, y en ese aspecto está bien. Pero, en otros aspectos,
no me parece tan bueno.

**Lo malo: la Snap Store.** Uno de los problemas para mí no es ni siquiera el
formato del paquete en sí, sino el hecho de que la [Snap
Store](https://snapcraft.io/store) esté centralizada. Sé que hay un motivo para
eso — tener una autoridad de certificación y garantía de autenticidad, ya que,
si hubiera varias Snap Stores, sería básicamente como hacer sideloading de
software Snap en la plataforma, y Canonical trata de garantizar que el software
venga de proveedores certificados. Solo que, hace unos meses, cuando fui a
instalar un programa en Ubuntu 26.04, la Snap Store no funcionó, porque
Canonical estaba sufriendo un ataque de DDoS — dicen que era de Irán, pero no se
sabe muy bien qué estaba pasando. El hecho es que, por eso, la Snap Store quedó
caída, y no pude instalar ningún programa. Ahí es donde se ven los problemas de
la centralización. Para mí, eso es un problema bastante grande.

Aun así, Ubuntu es la distribución con la que tengo la mayor tasa de éxito
simplemente instalando y usando. Y creo que la gente debería recomendarlo más
por eso que por sus personalizaciones. Está Linux Mint, por ejemplo, que es una
personalización de Ubuntu, pero no viene con el mismo escritorio — viene con
otro, que, honestamente, me parece menos atractivo, y a veces eso termina
rompiendo un poco la experiencia del usuario. En general, la experiencia de
Ubuntu es sobre todo bootear el sistema, hacer clic en las cosas y ponerte a
usarlo. Y creo que eso es algo bastante importante.

## Por Qué no los Otros

Ahora hablemos un poco de las otras distribuciones que probé, y por qué no las
estoy recomendando.

**Fedora.** Probablemente fue donde pasé más tiempo tratando de usarlo, y donde
más me frustré. Lo primero que hice después de instalar el sistema fue instalar
los drivers de video — en teoría, deberían instalarse con un par de comandos en
la terminal, bien documentados en la wiki de Fedora, usando
[akmod](https://rpmfusion.org/Howto/NVIDIA). Seguí todas las instrucciones y,
después de reiniciar, el sistema estaba completamente roto: ningún driver
corriendo. Tuve que romperme bastante la cabeza hasta descubrir que, al instalar
el driver de Nvidia, había bajado una versión más nueva del kernel, pero instaló
el driver para la versión anterior — y esa versión más nueva era la que estaba
configurada en [GRUB](https://www.gnu.org/software/grub/) y que el sistema usaba
por defecto al bootear. Solo que esa versión no tenía ningún módulo cargado: no
funcionaba ni el gráfico de Nvidia, ni el wi-fi, ni el bluetooth, nada. Me llevó
un tiempo entender que, después de instalar el driver de Nvidia, hay que correr
un `dnf upgrade` en el sistema, que baja todos los módulos del kernel para la
versión nueva — solo que eso no está documentado en ningún lado. Ese fue mi
primer gran dolor de cabeza.

Después de resolver eso, logré usar el sistema con normalidad, pero no logré
adaptarme a la experiencia vanilla de GNOME, y las cosas en general no venían
muy fluidas — siempre había un detallecito, una cosita. También tuve bastante
dificultad para migrar mi perfil de Firefox: en teoría sería solo copiar la
carpeta de Firefox, pero no funcionó. (Un detalle aparte: esto termina siendo
una ventaja de los snaps — generalmente basta con copiar la carpeta `~/snap` al
home, y todo lo instalado por snap vuelve a funcionar en una instalación nueva.)
Al final de cuentas, el problema del driver gráfico y todo el tiempo que gasté
en él me sacaron la paciencia, y terminé decidiendo no seguir con Fedora.

**Arch Linux, Bazzite, Manjaro y similares.** El Arch Linux estándar hay que
instalarlo a mano, a su manera, y tiene un sistema de paquetes parecido al de
[Gentoo](https://www.gentoo.org/) — no estoy dispuesto a hacer eso. Existen
distribuciones como [Bazzite](https://bazzite.gg/) y
[Manjaro](https://manjaro.org/) que ya traen las cosas más listas y más fáciles
de instalar, pero eso no significa que el uso del sistema en el día a día vaya a
ser más simple. De esas, la única que llegué a probar de verdad fue Manjaro, y
la experiencia fue mala, principalmente por el rolling release, que hace que el
escritorio sea inestable. Y, honestamente, también choca con el tema de la
disponibilidad de software: no tiene la misma disponibilidad que existe para
Ubuntu.

**openSUSE.** Llegué a probarlo, pero el instalador ni siquiera bootó en mi
máquina. Traté de deshabilitar el [Secure
Boot](https://en.wikipedia.org/wiki/UEFI#Secure_Boot) y otras cosas, y no
funcionó.

**Linux Mint y Pop!OS.** No llegué a probar Linux Mint, pero es la opción que
todo el mundo recomienda, junto con [Pop!OS](https://pop.system76.com/).
Sinceramente, si voy a usar algo basado en Ubuntu, prefiero usar el propio
Ubuntu — tiendo a inclinarme más por las distribuciones vanilla, y lo único que
realmente me gusta es el poquito de personalización que ya viene en Ubuntu.

## Conclusión

Entonces, ¿por qué, incluso 20 años después, sigo recomendando Ubuntu como la
distribución para quien quiera probar y aprender Linux? Porque no es la
distribución más "fancy", la que va a traer las funcionalidades más de punta y
demás, pero es la que probablemente va a funcionar de forma más estable en
cualquier hardware, en cualquier máquina que tengas. Es bastante raro ver a
alguien con dificultad para bootear Ubuntu y hacerlo correr — y, muchas veces,
cuando veo relatos de eso en [Reddit](https://www.reddit.com/), en realidad son
personas con problemas con el pendrive de instalación, y no con el sistema en
sí. Sobre todo, Ubuntu tiene una empresa grande detrás garantizando que sea
estable, que esté actualizado, y demás. No es un proyecto de comunidad que
dependa de la buena voluntad de la gente — hay una empresa ahí ganando dinero,
y, les guste o no, el dinero es lo que mueve las cosas. Una empresa ganando
dinero tiende a ayudar a mantener ese tipo de estabilidad y financiamiento para
el proyecto.

Fedora también tiene eso, pero no recomiendo Fedora porque, sinceramente, la
mayoría de las personas que conozco tienen hardware Nvidia en su notebook, y van
a necesitar instalar ese driver — y va a fallar la primera vez. Y digo esto
porque intenté reinstalar Fedora varias veces, y el resultado se repitió todas
las veces — y sí, antes de que pregunten: esperé a que akmod terminara de
compilar el driver, dejé la máquina quieta más de una hora, fui a hacer otra
cosa, volví, reinicié, y tuve el mismo problema de nuevo. Aun así, Fedora es una
buena distribución — si tu hardware es todo Intel, por ejemplo, probablemente va
a funcionar bien. Pero, en términos de facilidad de uso, queda un escalón por
debajo de Ubuntu. Hay cosas que me gustan de él — la tienda de aplicaciones, por
ejemplo, me parece bastante mejor que la de Ubuntu, por estar integrada con
[Flathub](https://flathub.org/) y no con la Snap Store. Por otro lado, tiene esa
cosa de ser un software más vanilla, con algunas funcionalidades más específicas
de seguridad que a veces son medio molestas.

Las otras distribuciones no las recomiendo para quien esté haciendo su primera
prueba. Tal vez existan algunas interesantes, como [elementary
OS](https://elementary.io/), que también se enfoca en la facilidad de uso —
pero, de la misma forma que no quiero ir a una distribución de comunidad muy de
nicho, tampoco quiero una que, además de ser de nicho, tenga todo un conjunto de
software basado en una comunidad de nicho, ya que, por defecto, ni siquiera usa
GNOME ni KDE.

Entonces es eso: creo que la gente debería seguir probando Ubuntu. Es viejo,
pero es estable. Es confiable. Es medio aburrido, pero funciona bien. Existen
flavors de Ubuntu para propósitos distintos — Kubuntu, que viene con KDE en vez
de GNOME; Xubuntu, que viene con XFCE en vez de GNOME; y hasta [Ubuntu
Studio](https://ubuntustudio.org/), que ya viene con varios repositorios y
configuraciones listas para quien trabaja con gráficos y audio, facilitando ese
tipo de uso. Entonces, para mí, Ubuntu o algún flavor de Ubuntu es mi
recomendación final.

Después de probar todo este montón de distribuciones distintas, reinstalé Ubuntu
26.04 en mi máquina, y sigo usándolo. As usual.

---

> Este post fue escrito a partir de notas y fragmentos de audio que grabé y
> transcribí usando [Buzz](https://github.com/chidiwilliams/buzz), un software
> de STT (voz a texto). Como toda transcripción automática, el resultado en
> bruto viene lleno de repeticiones, dudas y palabras mal entendidas, así que
> usé un LLM para organizar ese material en un texto corrido y arreglar esos
> problemitas — lo cual explica por qué algunas partes pueden sonar un poco
> demasiado "IA". Las ideas y opiniones, sin embargo, son todas mías.

---
layout: post
title: "Distro Hopping"
lang: pt
permalink: /2026/07/13/distro-hopping/
tags: [linux]
---

> Veja bem, eu uso IA para __traduzir__ os posts, não para escrever eles. Ao
> menos uma das versões dele vai ter sido escrita manualmente por mim, sem uso
> de assistentes de código. Neste caso, é o post em português mesmo.

## Motivação

Sou usuário de Linux há bastante tempo, e recentemente resolvi fazer um pouco de
distro hopping. Testei várias distribuições, como
[Fedora](https://fedoraproject.org/), [openSUSE](https://www.opensuse.org/) e
alguns derivados de [Arch](https://archlinux.org/).

Alguns amigos me pediram para descrever um pouco dessa experiência e dar minha
recomendação sobre o que acabei decidindo usar no final das contas. Nos últimos
4 anos venho utilizando exclusivamente o [Ubuntu](https://ubuntu.com/) LTS.
Comecei no 20.04, logo depois migrei para o 22.04, depois para o 24.04 e agora
estou no 26.04. Quero aproveitar este espaço para falar um pouco sobre a minha
experiência com o Ubuntu LTS, qual foi minha opinião sobre as distribuições que
testei, e o que acabo recomendando depois de todo esse distro hopping.

## Perfil de Usuário

Falando um pouco sobre o meu perfil de usuário: eu não sou mais o tipo de pessoa
que gosta de ficar fuçando no computador. Esse era o meu perfil há uns 15, 20
anos, mas hoje em dia já faz um bom tempo que tenho um perfil bem mais
pragmático. Não quero ficar customizando o desktop, não quero ficar resolvendo
probleminhas, fuçando no terminal para fazer coisas que eu esperaria que o
sistema já tivesse resolvido sozinho. Não tenho muito tempo para ficar
resolvendo problema na frente do computador — o tempo que eu tenho é para sentar
e fazer o que eu realmente quero fazer.

Por isso, para mim é muito importante — na verdade, é a coisa mais importante —
que, seja qual for a distribuição que eu instale na minha máquina, eu não vá
perder muito tempo configurando ou resolvendo problemas. Isso é crucial, e foi
um fator excludente para várias das distribuições que acabei testando.

Justamente por isso não me importo muito com alguns aspectos, como o quão livre
é o software que estou usando, ou se um driver é proprietário ou não. Eu só
quero que as coisas funcionem. E o meu hardware não é o mais "padrão" que
existe: a experiência ao usar máquinas com chipset 100% Intel costuma ser bem
uniforme, porque tudo — processador, chipset, gráficos — é Intel, e se encaixa
direitinho. Já a máquina que eu uso é um Lenovo Legion 5i, com chipset Intel,
mas com vídeo híbrido entre a Intel Xe Iris e uma Nvidia 4060. Esse aspecto
híbrido dos gráficos traz alguns desafios em relação às distribuições que
consigo usar — não só pela questão do gráfico híbrido em si, mas também pelo
simples fato de eu precisar instalar os drivers da Nvidia, algo que não estou
muito disposto a gastar tempo fazendo.

Estou acostumado a instalar esses drivers desde a época em que baixávamos o
instalador direto do site da Nvidia para rodar no Linux. Hoje em dia já existem
soluções melhores para isso, mas ainda assim não quero perder tempo com esse
processo. Esse é um aspecto bem importante na minha tomada de decisão.

## O que é Importante que Funcione

A primeira coisa que eu preciso que funcione logo de cara, sem maiores dores de
cabeça, são os codecs de vídeo. Na maior parte das distribuições, se a gente não
instala os codecs, nem consegue tocar vídeo no
[YouTube](https://www.youtube.com/). E infelizmente o YouTube é parte integral
da minha vida e da minha rotina — sempre tenho uma janela dele aberta, trabalho
ouvindo YouTube, faço minhas coisas pessoais ouvindo YouTube, é algo que está
sempre ali. Normalmente a primeira coisa que eu faço quando instalo uma
distribuição em uma máquina nova é copiar o meu perfil do navegador, para que
minhas contas já fiquem logadas, entrar no YouTube e começar a assistir alguma
coisa. Então o YouTube é muito importante para mim, e isso impacta diretamente a
necessidade de ter os codecs de vídeo disponíveis: sem eles instalados, o
[Firefox](https://www.mozilla.org/firefox/) não consegue rodar a maioria dos
vídeos, se não todos.

A segunda coisa que eu preciso que funcione são os drivers de vídeo, por alguns
motivos. O primeiro é que tenho uma GPU discreta — paguei mais caro nessa
máquina por causa dela, não faz sentido não configurar e não usar. Mas não é só
isso: eu também uso uma dock station com diversas telas, e as cores dos
monitores externos ficam esquisitas no vídeo da Intel. No vídeo da Nvidia, os
monitores ficam bem mais calibrados, com cores mais acertadas. No da Intel, as
cores ficam lavadas e muito diferentes do perfil de cor da tela do notebook, que
fica do lado; já no da Nvidia, fica perfeito. Eu poderia ir lá e fazer ajustes
finos na configuração das telas para resolver isso? Até poderia. Mas não quero
perder tempo com isso — eu só quero plugar a dock station na USB ligada ao chip
da Nvidia e que tudo apareça e funcione do jeito certo.

## O que é uma Distribuição Linux

Antes de falar sobre o que eu observei e testei, é importante dar um pouco de
contexto sobre o que define qual distribuição a gente escolhe — e, acima de
tudo, entender o que é uma distribuição e por que decidimos usar uma ou outra.

O primeiro detalhe é por que existem tantas distribuições Linux, e o motivo é
até mais simples do que parece. O Linux, por ser open source, é de código
aberto: qualquer pessoa pode pegar, baixar e executar. Só que Linux é só o
kernel, o núcleo do sistema — e sozinho ele não faz muita coisa. Ele precisa de
ferramentas, executáveis, etc. No Linux, tudo é um programa, tudo é um
executável: a montagem de um disco no kernel, por exemplo, para poder acessar os
arquivos, é feita através de um aplicativo chamado `mount` — é como se no
Windows fosse um `.exe`. O servidor gráfico é um aplicativo, o ambiente gráfico
é um aplicativo. É tudo modular, tudo bem separado.

Isso significa que cada pessoa (ou grupo de pessoas) que monta uma distribuição
pode decidir como tudo isso vai ser montado. É por isso que a gente chama de
"distribuição": alguém decidiu pegar o kernel do Linux e empacotar ele junto com
um conjunto específico de ferramentas, configuradas de uma forma específica,
criando um pacote coeso — a distribuição em si.

O que muda principalmente entre as distribuições são essas decisões — são
questões meio filosóficas. A primeira e maior divisão que existe é a gestão de
pacotes: como os pacotes são instalados. Hoje em dia existem, principalmente,
três grandes grupos de distribuições: o tradicional DEB (Debian/Ubuntu), o RPM
(Fedora/openSUSE), e o modelo do Arch Linux, baseado em PKGBUILD e no pacman.

As distribuições baseadas em pacotes RPM derivam lá de trás do [Red Hat
Linux](https://en.wikipedia.org/wiki/Red_Hat_Linux). Hoje em dia, a mais famosa
e mais usada é o Fedora, mas também temos o openSUSE, que também usa pacotes
RPM. E para mostrar um pouco dessas diferenças: o Fedora usa um gestor de
pacotes chamado [DNF](https://dnf.readthedocs.io/) para instalar os arquivos
RPM, responsável por buscar nos repositórios, resolver dependências e instalar
tudo. Já o openSUSE tem o próprio gestor de pacotes deles, o
[Zypper](https://en.opensuse.org/Portal:Zypper). Então, mesmo os dois usando
pacotes RPM e tendo surgido da mesma base, eles usam ferramentas de gestão de
pacotes diferentes.

Já as distribuições baseadas no [Debian](https://www.debian.org/) usam o `.deb`,
com a ferramenta [APT](https://wiki.debian.org/Apt). As mais tradicionais usam
só pacotes `.deb`, mas a [Canonical](https://canonical.com/), nos últimos anos,
vem fazendo uma transição de pacotes `.deb` para pacotes `.snap` — e o próprio
APT que vem no Ubuntu acaba instalando `.snap` em alguns casos, o que não
acontece nas outras distribuições.

Então é isso que muda entre elas: como cada uma é configurada, algumas
customizações, questões filosóficas — tem diversos aspectos que impactam nisso.
A forma de escolher é testando e entendendo o que encaixa melhor nos seus
objetivos. Por isso mencionei antes qual é o meu perfil de usuário e o que eu
preciso que funcione: cada distribuição vai funcionar de um jeito diferente, e é
isso que vai impactar a sua decisão. Às vezes, por algum motivo, você não gosta
do gestor de pacotes do Debian, do APT, ou não quer de jeito nenhum usar `.snap`
— nesse caso, o Ubuntu não é a distribuição para você, e talvez você vá procurar
um Fedora, um openSUSE. Às vezes você gosta de ser mais mão na massa, e um Arch
Linux vai ser a solução ideal.

Mas tudo isso é algo que dá para testar e validar. Hoje em dia, a maior parte
das distribuições mais populares oferece o que a gente chama de Live Discs, que
permitem testar a distribuição sem precisar instalá-la no disco. É uma boa
alternativa para pegar um feeling inicial de como é a distribuição, e decidir se
você quer mesmo instalar aquilo na sua máquina — não foi o que eu fiz, eu de
fato instalei cada uma na minha máquina e usei, mas é uma opção válida.

## Disponibilidade de Software

Uma coisa que a gente sempre precisa ter em mente ao escolher uma distribuição é
a disponibilidade de software. Algumas pessoas vão perguntar: "como assim? Linux
é Linux — ou o software existe para Linux, ou não existe." E sim, de certa forma
é isso mesmo, mas existe todo um mundo de software proprietário, software
corporativo, que a gente não costuma ver empacotado para 5, 6, 10 distribuições
diferentes, como acontece com muitos projetos open source. São softwares
fornecidos por empresas privadas, de código fechado — algumas vezes até software
corporativo — e a gente precisa entender quais distribuições têm o maior suporte
para esse tipo de software.

Não só isso: muito software proprietário não é testado e validado em todas as
distribuições, porque geralmente é mantido por um time menor e limitado. Como é
software proprietário, ele não está disponível para a comunidade contribuir, e
por isso só é testado de forma consistente contra algumas das distribuições mais
comuns. É um fato que hoje em dia as duas distribuições com o melhor suporte
para software proprietário são o Fedora e, principalmente, o Ubuntu. Então, se o
assunto é uma workstation de trabalho em que você talvez precise instalar
aqueles softwares chatos de VPN corporativa e afins, o Ubuntu tende a ser a
melhor opção — e não só o Ubuntu, mas o Ubuntu LTS, que é a opção mais "chata" e
tradicional que existe. É a distribuição que vai ter suporte para esses
softwares, que o pessoal testa e, acima de tudo, a distribuição em que, caso
esses softwares não funcionem, você vai conseguir suporte.

Mas também existem softwares que não são corporativos, mas que são
proprietários, e que acabam sendo testados só em algumas distribuições — e
muitas vezes nem te dão um `tar.gz` para instalar em qualquer lugar. Eles só
disponibilizam um `.deb` e um `.rpm`, e você que se vire para instalar onde
precisar.

## Ambientes Gráficos

Outro aspecto bem importante nessa decisão é o ambiente gráfico da distribuição.
O mundo do Linux é bem diferente do mundo do Windows e do macOS, onde, ao fazer
login na sua máquina, você sempre vai ver a mesma interface. Como o Linux é
aberto e montado a partir de diversos softwares diferentes, uma das coisas que
existem — e que eu acho uma das mais legais do Linux — é que existem vários
ambientes gráficos para escolher. Quando eu falo de ambiente gráfico, estou
falando literalmente do shell da máquina, do menu iniciar (se vai ter um ou
não), de como as janelas são mostradas na tela, como são organizadas, como você
configura a máquina — tudo isso é customizável, e você pode escolher qual
interface gráfica quer usar.

Os dois ambientes gráficos principais que existem no Linux são o
[GNOME](https://www.gnome.org/) e o [KDE](https://kde.org/). O GNOME tem uma
experiência mais simplificada; a intenção dele não é te dar muitas opções de
configuração — muito pelo contrário, ele é mais fechado, pensado como uma
experiência bem definida e clara, sem muita margem para customização. A ideia do
GNOME é ser aquele ambiente gráfico onde você senta na frente e usa. Como
filosofia de experiência de uso, o GNOME tende a ter uma aura um pouco mais
próxima do macOS, com uma linguagem de design parecida em alguns aspectos. Eu
vou ser bem honesto: usei o GNOME 3 assim que ele foi lançado — foi uma
transição muito grande em relação ao GNOME 2 — mas, no final das contas, existem
coisas no macOS que parecem ter sido meio copiadas do GNOME 3. Então o GNOME é
uma coisa só dele: muito diferente do Windows, um pouco mais familiar para quem
usa macOS, mas ainda assim uma proposta bem única e individual — ele não tenta
copiar nem o macOS nem o Windows, mesmo que a linguagem de design tenha alguns
pontos parecidos com o macOS.

O outro grande ambiente gráfico é o KDE, que é praticamente o extremo oposto do
GNOME — e é interessante justamente por isso, por serem tão diferentes um do
outro, de formas opostas. O KDE se parece mais com o Windows, trazendo uma
experiência bem mais próxima da dele, mas é muito mais customizável — dá até
para deixar o KDE parecido com o macOS mais facilmente do que o GNOME chega
perto disso. Ele permite customizar temas da interface, sons, cores,
posicionamento dos elementos, atalhos — é extremamente configurável. Você entra
no painel de controle do KDE e cada coisinha pode ser ajustada. É o extremo
oposto do GNOME, que não deixa configurar muita coisa — para se ter uma ideia,
até para trocar o tema da interface do GNOME você precisa baixar um aplicativo
separado, chamado [Tweaks](https://apps.gnome.org/Tweaks/), porque isso não é
uma funcionalidade embutida na interface padrão. Já no KDE, tudo isso vem
exposto: assim que você abre o painel de configurações, tem um monte de coisa
para mexer, configurar e customizar, com uma linguagem de design mais parecida
com a do Windows. Quando você abre o [Plasma](https://kde.org/plasma-desktop/),
que é o desktop do KDE, a primeira coisa que vê é algo bem parecido com uma
barra de tarefas do Windows, um menu parecido com o "Iniciar", e uma aparência e
comportamento também parecidos. Por isso ele tende a ser uma transição mais
fácil para quem vem do Windows.

Mas não é só uma questão dos ambientes gráficos em si — também são as
aplicações. O GNOME tem uma suíte própria de aplicações e uma biblioteca gráfica
chamada [GTK](https://www.gtk.org/), que faz com que os apps desenvolvidos com
ela se integrem à aparência do sistema: parece que aquilo foi feito para rodar
no GNOME. Dá para rodar uma aplicação feita para o KDE dentro do GNOME? Dá, mas
ela vai ficar com cara de KDE rodando no GNOME — e o mesmo vale ao contrário. O
KDE usa uma biblioteca chamada [Qt](https://www.qt.io/), junto com uma
biblioteca chamada KDE Lib (não tenho certeza se ainda é esse o nome, já faz
tempo que não mexo nisso). A ideia é a mesma: quando você abre uma aplicação KDE
dentro do ambiente KDE, o visual é consistente, como se tudo tivesse sido feito
para o mesmo ambiente. E dá para abrir uma aplicação GNOME ou GTK dentro do KDE?
Dá — vai ficar meio feio, mas funciona, geralmente, a não ser que seja uma
aplicação de sistema do GNOME (algo para configurar o próprio GNOME, por
exemplo), aí não faz muito sentido. O mesmo vale para o KDE. Mas dá para fazer.

O Linux também tem outros ambientes gráficos. Um dos que eu mais gosto é o
[XFCE](https://www.xfce.org/), que eu usei bastante uns 15, 20 anos atrás. Eles
tendem a oferecer experiências bem diferentes — o XFCE, por exemplo, é bem
customizável: dá para fazer ele parecer com versões antigas do GNOME, com um
Windows 95, ou com a cara dele mesmo. Ele foi criado, lá atrás, para se parecer
com o [CDE](https://en.wikipedia.org/wiki/Common_Desktop_Environment), que era
um ambiente desktop comum em sistemas Unix. Qual é a vantagem do XFCE? Ele é
muito leve, consome bem menos recursos da máquina. O GNOME e o KDE são mais
pesados; interfaces como o XFCE vão ser mais simples, com menos funcionalidades
— às vezes menos bonitas, com menos efeitos, animações e transições —, mas
também bem mais leves, gastando bem menos recursos da sua máquina.

A maioria das distribuições vem com KDE ou GNOME por padrão. Porém,
distribuições grandes como Fedora e Ubuntu também têm "flavors" ou "spins":
versões da distribuição base com outros ambientes de desktop. Tanto o Ubuntu
quanto o Fedora vêm com GNOME por padrão, mas existe uma versão do Ubuntu
chamada [Kubuntu](https://kubuntu.org/), que vem com KDE, e outra chamada
[Xubuntu](https://xubuntu.org/), que vem com XFCE. É o mesmo Ubuntu, a mesma
base do sistema, mas com um ambiente gráfico padrão diferente, e um conjunto de
aplicações padrão diferente para aquele ambiente.

Então isso também é algo que dá para escolher. Na dúvida, o que eu sempre
recomendo para quem vai testar é: tente usar o GNOME, mesmo se você vier do
Windows. Se você gosta muito do Windows, aí sim tente o KDE — senão, tente o
GNOME. Se sua máquina tem restrição de recursos e você está querendo usar o
Linux para pegar algo mais leve, também vale tentar o GNOME ou o KDE primeiro —
eles tendem a ser bem mais leves que o Windows de qualquer forma. Mas, se não
der muito certo, tente o XFCE, que é uma interface boa, bem completinha e bem
leve.

## Vanilla x Customizado

O último detalhe importante de entender é a diferença entre distribuições que
trazem software vanilla e as que trazem software customizado — e o quão
customizado esse software é. A maior referência hoje em dia em relação a
software vanilla é o Fedora. Ele é conhecido por trazer a experiência do desktop
GNOME o mais original possível: não fazem nenhuma customização, o que você vê é
exatamente a forma como o GNOME foi pensado pelos próprios desenvolvedores. Já o
Ubuntu traz customizações na interface do GNOME que tendem a lembrar a
[Unity](https://en.wikipedia.org/wiki/Unity_(user_interface)), a interface
antiga do Ubuntu que foi abandonada pela Canonical há alguns anos. Essas
customizações às vezes são algo que a pessoa gosta, às vezes não. No Fedora,
você vai ter o GNOME padrão, com o tema padrão, a aparência padrão, os efeitos
padrão e os softwares padrão do ambiente GNOME — quando você for mexer no
sistema, ele vai ser exatamente aquele que foi entregue. A Canonical, por outro
lado, faz o que chamam de Ubuntu Desktop: uma customização do GNOME que mexe no
comportamento da dock de aplicações, na gestão de janelas e em algumas outras
coisas menores do desktop. Ainda é GNOME, mas um GNOME com customizações que a
Canonical julga mais amigáveis para o usuário.

Existem também distribuições que fazem customizações mais estéticas, menos
funcionais — o [Garuda Linux](https://garudalinux.org/), por exemplo, é uma
distribuição que foca bastante em deixar o desktop bonitinho, mexendo em temas e
afins, e que agrada muita gente (para outras, não tanto). E existe um terceiro
aspecto: algumas distribuições vão além da customização do próprio desktop e
customizam também a aparência de outros softwares, para que fique consistente
com o resto do sistema. Algumas delas, por exemplo, trazem um tema do
[LibreOffice](https://www.libreoffice.org/) com ícones mais próximos do tema do
resto do sistema, em vez do tema padrão do LibreOffice.

Então são coisas que valem a pena observar. Se você gosta de distribuições com
foco em vanilla, o ideal é pegar algo como um Fedora, ou até um Arch Linux.
Agora, se você gosta de customizações específicas, precisa testar algumas
distribuições diferentes para entender quais são essas customizações. Uma
distribuição bem conhecida por ter uma customização forte é o openSUSE — ele não
mexe tanto na aparência ou na experiência do software em si, traz só o papel de
parede próprio, talvez um tema mais esverdeado, mas tem todo um sistema de
gestão do Linux chamado [YaST](https://yast.opensuse.org/), que é o grande
diferencial dele, e costuma ser muito bom para quem é administrador de sistema.
Se você já é administrador de sistema, já usa openSUSE no trabalho e já está
habituado com o YaST, pode rodar ele na sua máquina e usar como desktop, e o
YaST vai ser uma boa opção. Porém, algumas pessoas não gostam dessa abordagem,
porque o YaST acaba duplicando coisas que você tem como configurar em dois
lugares: um dentro do GNOME ou do KDE, e outro no próprio YaST, permitindo
configurar a mesma coisa.

Então é uma questão de preferência. A minha é por software vanilla, mas não
totalmente — algumas customizações eu valorizo, e acho que as customizações do
desktop do Ubuntu são boas. Eu não gosto muito da experiência vanilla do GNOME.
E isso já adianta um pouco qual vai ser a minha recomendação de distribuição
depois de todo esse distro hopping.

## Recomendação: Ubuntu

Pois é, no final das contas eu sigo utilizando o Ubuntu, e indicando o Ubuntu. E
isso é interessante, porque muita gente indica o [Linux
Mint](https://linuxmint.com/) (que é baseado em Ubuntu), muita gente recomenda
Fedora, muita gente recomenda openSUSE — mas, no final do dia, para mim, o que
funciona 100% e cumpre todos os requisitos continua sendo o bom e velho Ubuntu.
Vou explicar o porquê.

**Drivers.** Eu não preciso instalar driver de vídeo. Até a versão 24.04 eu
ainda precisava ir lá e habilitar os drivers gráficos proprietários, mas era
questão de 3 cliques. A partir da 26.04, nem isso mais eu preciso fazer: ele
detecta que eu tenho uma placa de vídeo dedicada, já habilita o driver
proprietário, e pronto — funciona de primeira, sem eu precisar configurar nada.

**Codecs.** Durante a instalação, ele já pergunta se eu quero usar os codecs de
vídeo, se quero baixá-los. De novo, é um checkbox que eu marco e os codecs já
vêm instalados.

**Disponibilidade de software.** Eu uso alguns softwares proprietários — não sou
um usuário 100% de software livre/open source — e todos os que uso foram
testados e empacotados para o Ubuntu. Entre eles, o
[InSync](https://www.insynchq.com/), que uso para sincronizar meu disco com o
[Microsoft 365](https://www.microsoft.com/microsoft-365); o
[Renoise](https://www.renoise.com/), o software de música que eu utilizo; entre
outros, o [Mullvad VPN](https://mullvad.net/). Tudo isso foi testado e
distribuído para o Ubuntu. E não é só isso: quando sai uma versão nova do Ubuntu
LTS, pouco tempo depois já está tudo liberado para os softwares que eu preciso.
Minha experiência com software corporativo mais chato, como o
[CrowdStrike](https://www.crowdstrike.com/) ou o
[GlobalProtect](https://www.paloaltonetworks.com/sase/globalprotect) da Palo
Alto, é que, mesmo que esses softwares não funcionem tão bem assim no Linux,
eles são empacotados basicamente para o Ubuntu — alguns até têm um pacotezinho
RPM, mas nem é para Fedora, geralmente é para [Red Hat
Enterprise](https://www.redhat.com/). Pessoalmente, tive as experiências menos
ruins com esse tipo de software no Ubuntu.

**Estabilidade.** O Ubuntu não trava, não dá problema. Minha máquina tem
bastante memória, e o único motivo pelo qual o Linux já travou para mim foi
falta de memória — ele não lida muito bem com isso, entra numa swap maluca e o
sistema simplesmente congela. Mas minha máquina não tem uma restrição de memória
significativa no momento (64 GB), então, para mim, só funciona — o que é muito
bom.

**Customizações.** Consigo, com bastante facilidade, deixar o desktop do Ubuntu
do jeito que me agrada. Uso o Ubuntu Dock, que é uma customização do [Dash to
Dock](https://extensions.gnome.org/extension/307/dash-to-dock/), e é bem fácil
de configurar para deixá-la ali embaixo — fica parecida com a dock do macOS.
Para mim, a aparência não é tão importante quanto a funcionalidade: tanto no
Windows quanto no Linux, gosto de ter a lista de aplicações sempre visível lá
embaixo, e o comportamento padrão do GNOME vanilla não me agrada. Tentei usar o
Dash to Dock diretamente, e também não me agradou.

**O que é ruim: os Snaps.** Os [snaps](https://snapcraft.io/) tendem a não ter
uma performance igual à dos outros formatos de pacote, porque têm todo um
sistema de sandboxing. Além disso, o fato de existirem os snaps faz com que os
[flatpaks](https://flatpak.org/) acabem não se encaixando tão bem no sistema — o
Fedora funciona melhor com flatpak. Muita coisa proprietária que uso já está
disponível como snap, como as IDEs da [JetBrains](https://www.jetbrains.com/) —
é só clicar e instalar, e nesse aspecto é bom. Mas, em outros aspectos, não acho
muito legal.

**O que é ruim: a Snap Store.** Um dos problemas para mim não é nem o formato do
pacote em si, mas o fato de a [Snap Store](https://snapcraft.io/store) ser
centralizada. Sei que existe um motivo para isso — ter uma autoridade de
certificação e garantia de autenticidade, já que, se existissem várias Snap
Stores, seria basicamente como fazer sideloading de software Snap na plataforma,
e a Canonical tenta garantir que o software venha de provedores certificados. Só
que, uns meses atrás, quando fui instalar um software no Ubuntu 26.04, a Snap
Store não funcionou, porque a Canonical estava sofrendo um ataque de DDoS —
dizem que era do Irã, mas não se sabe ao certo o que estava acontecendo. O fato
é que, por causa disso, a Snap Store ficou fora do ar, e eu não consegui
instalar nenhum software. É aí que a gente vê os problemas da centralização.
Para mim, isso é um problema bem grande.

Ainda assim, o Ubuntu é a distribuição com a qual eu tenho a maior taxa de
sucesso simplesmente instalando e usando. E acho que as pessoas deveriam
recomendá-lo mais por isso do que pelas customizações dele. Tem o Linux Mint,
por exemplo, que é uma customização do Ubuntu, mas não vem com o mesmo desktop —
vem com outro, que eu, honestamente, acho menos atraente, e às vezes isso acaba
quebrando um pouco a experiência do usuário. No geral, a experiência do Ubuntu é
muito de dar boot no sistema, clicar nas coisas e sair usando. E acho que isso é
algo bem importante.

## Por que não os Outros

Agora vamos falar um pouco sobre as outras distribuições que eu testei, e por
que não estou recomendando elas.

**Fedora.** Foi provavelmente onde passei mais tempo tentando usar, e onde mais
me frustrei. A primeira coisa que fiz depois de instalar o sistema foi instalar
os drivers de vídeo — a princípio, deveriam ser instalados com uns dois ou três
comandos no terminal, bem documentados na wiki do Fedora, usando o
[akmod](https://rpmfusion.org/Howto/NVIDIA). Segui todas as instruções e, depois
de reiniciar, o sistema estava completamente quebrado: nenhum driver rodando.
Tive que quebrar bastante a cabeça até descobrir que, ao instalar o driver da
Nvidia, ele baixou uma versão mais nova do kernel, mas instalou o driver para a
versão anterior — e essa versão mais nova era a que estava configurada no
[GRUB](https://www.gnu.org/software/grub/) e que o sistema usava por padrão no
boot. Só que essa versão não tinha nenhum módulo carregado: não funcionava nem o
gráfico da Nvidia, nem o wi-fi, nem o bluetooth, nada. Gastei um tempo até
entender que, depois de instalar o driver da Nvidia, era preciso rodar um `dnf
upgrade` no sistema, que baixa todos os módulos do kernel para a versão nova —
só que isso não estava documentado em lugar nenhum. Essa foi minha primeira
grande dor de cabeça.

Depois de resolver isso, consegui até usar o sistema normalmente, mas não
consegui me adaptar à experiência vanilla do GNOME, e as coisas em geral não
andavam muito lisas — sempre tinha um detalhezinho, uma coisinha. Também tive
bastante dificuldade para migrar meu perfil do Firefox: a princípio seria só
copiar a pasta do Firefox, mas não funcionou. (Um detalhe à parte: essa acaba
sendo uma vantagem dos snaps — geralmente basta copiar a pasta `~/snap` para o
home, e tudo que foi instalado por snap volta a funcionar numa instalação nova.)
No fim das contas, o problema do driver gráfico e todo o tempo que gastei nele
me tiraram a paciência, e acabei decidindo não seguir com o Fedora.

**Arch Linux, Bazzite, Manjaro e afins.** O Arch Linux padrão precisa ser
instalado na mão, do jeito dele, e tem um sistema de pacotes um pouco parecido
com o do [Gentoo](https://www.gentoo.org/) — eu não estou disposto a fazer isso.
Existem distribuições como o [Bazzite](https://bazzite.gg/) e o
[Manjaro](https://manjaro.org/) que já trazem tudo mais pronto e mais fácil de
instalar, mas isso não significa que o uso do sistema no dia a dia vai ser mais
simples. Dessas, a única que cheguei a testar de fato foi o Manjaro, e a
experiência foi ruim, principalmente por causa do rolling release, que deixa o
desktop instável. E, honestamente, também esbarra na questão da disponibilidade
de software: não tem a mesma disponibilidade que existe para o Ubuntu.

**openSUSE.** Cheguei a tentar, mas o instalador nem bootou na minha máquina.
Tentei desabilitar o [Secure
Boot](https://en.wikipedia.org/wiki/UEFI#Secure_Boot) e outras coisas, e não
funcionou.

**Linux Mint e Pop!OS.** Não cheguei a testar o Linux Mint, mas é a opção que
todo mundo indica, junto com o [Pop!OS](https://pop.system76.com/).
Sinceramente, se é para usar algo baseado em Ubuntu, eu prefiro usar o próprio
Ubuntu — eu tendo a pender mais para as distribuições vanilla, e só gosto mesmo
é do pouquinho de customização que já vem no Ubuntu.

## Conclusão

Então, por que, mesmo 20 anos depois, eu continuo recomendando o Ubuntu como a
distribuição para quem quer testar e aprender Linux? Porque ele não é a
distribuição mais "fancy", que vai trazer as funcionalidades mais de ponta e
tudo mais, mas é a que provavelmente vai funcionar de forma mais estável em
qualquer hardware, em qualquer máquina que você tenha. É bem raro ver alguém com
dificuldade para dar boot no Ubuntu e rodar ele — e, muitas vezes, quando vejo
relatos disso no [Reddit](https://www.reddit.com/), na verdade são pessoas tendo
problema com o pendrive de instalação, e não com o sistema em si. Acima de tudo,
o Ubuntu tem uma empresa grande por trás garantindo que ele seja estável, que
esteja atualizado, e tudo mais. Não é um projeto de comunidade que depende da
boa vontade das pessoas — existe uma empresa ali ganhando dinheiro, e, gostando
ou não disso, dinheiro é o que move as coisas. Uma empresa ganhando dinheiro
tende a ajudar a manter esse tipo de estabilidade e funding para o projeto.

O Fedora também tem isso, mas eu não indico o Fedora porque, sinceramente, a
maior parte das pessoas que conheço tem hardware Nvidia no notebook, e vão
precisar instalar esse driver — e vai dar pau na primeira vez. E digo isso
porque tentei reinstalar o Fedora algumas vezes, e o resultado se repetiu todas
elas — e sim, antes que perguntem: esperei o akmod terminar de compilar o
driver, deixei a máquina parada mais de uma hora, fui fazer outra coisa, voltei,
reiniciei, e tive o mesmo problema de novo. Ainda assim, o Fedora é uma
distribuição boa — se seu hardware é todo Intel, por exemplo, provavelmente vai
funcionar bem. Mas, em termos de facilidade de uso, ele fica um passo abaixo do
Ubuntu. Tem coisas que eu gosto nele — a loja de aplicativos, por exemplo, é bem
melhor que a do Ubuntu para mim, por ser integrada com o
[Flathub](https://flathub.org/) e não com a Snap Store. Por outro lado, tem essa
coisa de ser um software mais vanilla, com algumas funcionalidades mais
específicas de segurança que às vezes são meio chatas.

As outras distribuições eu não recomendo para quem está fazendo o primeiro
teste. Talvez existam algumas interessantes, como o [elementary
OS](https://elementary.io/), que também tem foco em facilidade de uso — mas, da
mesma forma que não quero ir para uma distribuição de comunidade muito nichada,
também não quero uma que, além de nichada, tenha todo um conjunto de software
baseado numa comunidade nichada, já que, por padrão, ele nem usa GNOME nem KDE.

Então é isso: acho que as pessoas deveriam continuar tentando usar o Ubuntu. Ele
é velho, mas é estável. É confiável. É meio chato, mas funciona bem. Existem
flavors do Ubuntu para propósitos diferentes — o Kubuntu, que vem com KDE em vez
de GNOME; o Xubuntu, que vem com XFCE em vez de GNOME; e até o [Ubuntu
Studio](https://ubuntustudio.org/), que já vem com vários repositórios e
configurações prontas para quem mexe com gráficos e áudio, facilitando esse tipo
de uso. Então, para mim, o Ubuntu ou algum flavor do Ubuntu é a minha
recomendação final.

Depois de tentar esse monte de distribuições diferentes, reinstalei o Ubuntu
26.04 na minha máquina, e sigo utilizando ele. As usual.

---

> Esse post foi escrito a partir de anotações e trechos de áudio que eu gravei e
> transcrevi usando o [Buzz](https://github.com/chidiwilliams/buzz), um software
> de STT (fala para texto). Como toda transcrição automática, o resultado bruto
> vem cheio de repetições, hesitações e palavras entendidas erradas, então usei
> um LLM para organizar esse material em um texto corrido e arrumar esses
> probleminhas — o que explica por que algumas partes podem soar um pouco "IA"
> demais. As ideias e opiniões, porém, são todas minhas.

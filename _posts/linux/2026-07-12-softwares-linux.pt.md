---
layout: post
title: "O que eu uso no Linux (2026)"
lang: pt
permalink: /2026/07/12/lo-que-uso-en-linux/
tags: [linux]
---

> Veja bem, eu uso IA para __traduzir__ os posts, não para escrever eles. Ao
> menos uma das versões dele vai ter sido escrita manualmente por mim, sem uso
> de assistentes de código. Neste caso, é o post em espanhol.

Hoje temos um post mais simples, mas que é sobre uma curiosidade que eu estava
conversando com um amigo. Estávamos conversando sobre quais softwares usamos nos
nossos PCs com Linux instalado. Não é tão óbvio quanto pode parecer.

## Quais São os Softwares?

### Navegador de Internet: `Firefox`

A escolha mais óbvia, mas uma decisão sólida. Eu não gosto de navegadores
baseados em [Chromium](https://www.chromium.org/chromium-projects/) e o
[Firefox](https://www.mozilla.org/firefox/) funciona bem no Linux (é péssimo no
Windows). As versões mais recentes ganharam algumas melhorias bem necessárias,
como a possibilidade de trocar de perfil pela UI (sem precisar abrir
`about:profiles`).

Eu não uso as funcionalidades de VPN, sincronização online, etc. Eu uso só o
navegador mesmo e isso já é suficiente. Uma das coisas que eu mais gosto no
Firefox são as abas verticais, que funcionam muito bem, principalmente quando
combinamos elas com os grupos de abas.

Eu uso o navegador para outras coisas que substituem softwares locais:

- Emails
- [WhatsApp](https://www.whatsapp.com/)
- Calendário

### Suíte de Escritório: `Libre Office`

Eu uso principalmente as planilhas do [Libre
Office](https://www.libreoffice.org/) e tenho uma boa experiência com elas. Não
é o software mais bonito e às vezes pode parecer demais com o Office 2003, mas
consigo fazer tudo o que preciso com ele.

Outra coisa conveniente é o fato de que a maioria das distros vem com o Libre
Office instalado por padrão.

### Editor de Código: `Zed`

Estou usando o [Zed](https://zed.dev/) já faz algumas semanas e não sei se vou
parar de usar.

Nos últimos 6 anos eu usei principalmente as IDEs da
[JetBrains](https://www.jetbrains.com/)
([PyCharm](https://www.jetbrains.com/pycharm/), [IntelliJ
Idea](https://www.jetbrains.com/idea/)) e o
[VSCode](https://code.visualstudio.com/). Mas as IDEs da JetBrains vêm tendo uma
degradação de desempenho que senti principalmente no PyCharm, e isso me levou a
cancelar minha assinatura do All Tool Bundle do [JetBrains
Toolbox](https://www.jetbrains.com/toolbox-app/).

O VSCode tem outro problema: a adição absurda de funções de IA que não me
interessam. A experiência de edição não melhora há muito tempo e o ecossistema
está cheio de coisa velha que não é mais mantida. A maioria do que é adicionado
nas versões mais recentes é só para IA, já não temos muitas melhorias na
experiência de edição.

Na minha busca por outros editores, eu testei:

- [Emacs](https://www.gnu.org/software/emacs/)
- [Helix](https://helix-editor.com/)
- Zed
- [Sublime Text](https://www.sublimetext.com/)

O Zed é o editor que, até agora, está me dando a melhor experiência de edição.
Sem atalhos de teclado estranhos, sem edição modal, e com um look & feel
moderno. É verdade que o Zed tem funções de IA, mas elas não são invasivas, e é
possível usá-lo sem ficar recebendo mensagens oferecendo essas funções de IA o
tempo todo.

### Sincronismo de Disco: `InSync`

O [InSync](https://www.insynchq.com/) é o primeiro software de Linux que eu
comprei, em 2022, para fazer a sincronização automática dos meus discos com a
internet. O serviço que eu uso é o [Microsoft
365](https://www.microsoft.com/microsoft-365) porque é o que tem a melhor
relação preço / GB.

As funções de sincronização do [GNOME](https://www.gnome.org/) não fazem a
sincronização do jeito que eu quero (só algumas pastas, com filtros), e o InSync
faz muito bem essa tarefa. O InSync tem funcionalidades para sincronização do
[OneDrive](https://onedrive.live.com/about/) que nem estão disponíveis na
integração nativa do Windows com o OneDrive.

### Virtualização: `VirtualBox`

É só o mesmo software de virtualização que eu uso há 20 anos. Cheguei a tentar o
[GNOME Boxes](https://apps.gnome.org/Boxes/), mas no
[Ubuntu](https://ubuntu.com/) é preciso instalar outros pacotes para que
funcione, e eu não tenho paciência para isso.

### Containers: `Podman`

Eu usei o [Docker](https://www.docker.com/) como minha plataforma de containers
por quase 10 anos, até o ponto em que o [Podman](https://podman.io/) é capaz de
substituir o Docker sem grandes problemas.

Às vezes o Podman não funciona muito bem com a biblioteca
[Testcontainers](https://testcontainers.com/), mas o suporte a Podman no
Testcontainers melhorou muito, e eu nem lembro mais a última vez que precisei
trocar o Podman pelo Docker.

### Jogos: `Steam`

Eu uso [Steam](https://store.steampowered.com/), como todo mundo que joga no
Linux hoje em dia.

### Editor de Pixel Art: `GIMP` e `Aseprite`

Eu uso [GIMP](https://www.gimp.org/) desde 2001. Acho que o GIMP não teve
melhorias relevantes nos últimos 10 (?) anos, é estável (no Linux) e faz a maior
parte do que eu preciso.

Para coisas mais relacionadas a pixel art, eu prefiro usar o
[Aseprite](https://www.aseprite.org/).

### Editor Vetorial: `Affinity` & `Graphite`

Eu usei muito o [Affinity Designer](https://affinity.serif.com/en-us/designer/)
no Windows. Quando comprei a licença no Windows, o Affinity era a melhor
alternativa ao [Adobe
Illustrator](https://www.adobe.com/products/illustrator.html), com um bom preço
e muitos recursos.

Eu não gosto do fato de que a [Canva](https://www.canva.com/) comprou a Affinity
e criou uma versão gratuita com funções de IA pagas. É algo que parece bom na
superfície, mas o produto vai morrer se as funções de IA não venderem.

Desde o Affinity 2 (e agora a versão 3) é possível rodar o Affinity no Linux
usando o [Wine](https://www.winehq.org/). A experiência não é muito boa, mas é
possível. Eu usei o [Graphite](https://graphite.rs/) e pretendo migrar para ele
assim que estiver mais capaz.

Eu não gosto do [Inkscape](https://inkscape.org/).

### Modelagem 3D: `Blender`

Uso [Blender](https://www.blender.org/) desde 2004 ou 2005. Para mim é algo
natural e é um software excelente.

### Edição de Vídeos: `Blender`

E eu uso tanto o Blender, que é mais fácil para mim aprender a usar o [Blender
VSE](https://www.blender.org/features/video-editing/) do que aprender outro
software.

O Blender VSE não é perfeito, mas para edição simples de vídeos é mais que
suficiente. E a melhor coisa do Blender é que o ritmo de melhorias é muito
rápido, e o editor de vídeos está melhorando significativamente a cada versão.

### CAD: `FreeCAD`

Não é bem uma opção. É o menos ruim de todos que eu testei para desenho 3D de
peças paramétricas.

Não é algo que eu uso tanto a ponto de comprar uma licença do
[BricsCAD](https://www.bricsys.com/en-intl/bricscad/), então eu uso o
[FreeCAD](https://www.freecad.org/) e lido com os problemas e dificuldades dele.

### Editor de Áudio: `Tenacity` / `Audacity`

Também é por falta de opção melhor. O [Audacity](https://www.audacityteam.org/)
é capaz e não é ruim, mas eu estava acostumado a usar alternativas muito mais
capazes, como o Edison no [FL Studio](https://www.image-line.com/fl-studio/).

O Audacity precisa de uma repaginada na UI para parecer algo feito depois de
2010.

### Estação de Trabalho de Áudio: `Renoise`

É uma boa DAW para quem quer um Tracker em vez de um Sequencer. Para muitos é a
única opção com capacidades profissionais e com um estilo de Tracker (mesmo no
Windows).

Não é caro pelo que oferece, e é muito estável.

### Voz para Texto: `Buzz`

[Buzz](https://github.com/chidiwilliams/buzz) é um software que eu uso para
converter gravações de áudio em texto. Com o Buzz eu consigo fazer todo o
processo de STT local e offline. Como STT é um processo rápido, eu consigo usar
modelos grandes com a CPU e a memória RAM, sem precisar de memória de GPU.

---

Esses são os principais softwares que eu uso no meu computador, mas não são os
únicos. Até bem recentemente, eu venho tentando testar softwares novos que
atendam melhor às minhas necessidades. Mas os que estão citados neste artigo são
os que eu mais gosto ou que uso há mais tempo.

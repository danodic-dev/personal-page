---
layout: post
title: "Mais uma versão do danodic.dev"
tags: [programming, ia]
---

Pois é, estamos em mais uma versão deste site. A cada vez que eu monto uma
versão nova ela é mais simples do que a anterior -- daqui a pouco eu
simplesmente vou linkar um .txt e chamar de site. Veja bem, até que _não me
parece uma má ideia_.

Mantendo a tradição, segue a música do post:

<p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Vm8JVt2ugEI?si=CqVk1pgnau6QwhRt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>

Não me julgue, apenas ouça.

## Por que uma nova versão?

A primeira versão do danodic.dev, que eu escrevi em 2022 tinha o propósito não
apenas de ser um site pessoal mas acima de tudo de ser uma plataforma de
estudos. Ela era desnecessariamente complexa, pois eu queria estudar coisas de
programação enquanto desenvolvia o site. Na época consegui estudar bastante
coisa, aprendi algumas coisas legais e depois fiquei de saco cheio.

Aquele site, por mais simples que parecesse, tinha:

- Um container de backend.
- Um container de frontend.
- Um banco de dados.
- O frontend tinha todas as lógicas malucas para parsear markdown, etc.
- Hosteado no GCP $$$.

Isso é meio que coisa demais para simplesmente postar groselha na internet.

## Mudando a abordagem

Era chato demais de manter e depois que você já estudou o que queria estudar,
o que fica pra trás é só um site chato de manter. Veja bem, estes projetos
pessoais são coisas que eu faço _depois_ de já ter trabalhado o dia inteiro. É
para ser um passatempo, e no final das contas 90% das vezes eu não quero um
passatempo que seja igual ao que eu fazia o dia inteiro no trabalho.

Decidi mudar a abordagem, e essa nova abordagem foi até semelhante à abordagem
atual. Eu decidi remover toda parte de lógica e gerar um site estático usando
__mkdocs__. Na época eu estava meio fixado na ideia de Digital Gardens, estava
mergulhado em vaults do obsidian até o pescoço e queria algo que lembrasse o
obsidian publish. Cheguei inclusive a publicar um plugin para fazer backlinks
no mkdocs que chegou a ter uma certa visibilidade.

> Eu cheguei a fazer uma versão usando o Obsidian Publish, mas não gostei do
> serviço e acabei abandonando rápido, então eu nem vou explorar esse tópico
> aqui.

A geração de site estático funcionou bem, mas a parte de criar os temas e etc.
é meio chata. Ou você fica usando um tema padrão do mkdocs ou passa um tempo
inacreditável mexendo em html, css e javascript (que nojinho).

No final das contas eu cheguei a publicar uma versão mas deixei de lado em
pouco tempo.

## Limbo

Depois de um tempo, eu acabei deixando o site no limbo. Bastante coisa mudou na
minha vida, eu estava sem tempo para escrever nada relevante e não vinha fazendo
nada que achasse muito relevante de compartilhar. Eu cheguei a iniciar um [canal
no youtube](https://www.youtube.com/@perguicinha) para passar o tempo fazendo
outra coisa que não fosse programar ou escrever sobre programação.

E foi isso pelos últimos... dois anos? Acho que é isso, uns dois anos.

## Nova Versão

No final das contas, a vida estabilizou e eu voltei à minha natureza de ficar
programando no meu tempo livre. Muita coisa mudou nos últimos dois anos, e com
a chegada desses assistentes de código eu vi a oportunidade de resolver a
questão do site sem precisar ficar gastando muito tempo em cima de questões
técnicas.

Eu acabei decidindo por pegar o setup mais simples que eu posso, e focar no
conteúdo. Decidi fazer com o GitHub pages usando o Jekyll, e mandei o Cláudio
fazer todo o setup do projeto.

Eu acabei gastando alguns dias ajustando a aparência do site, mas foram sessões
curtas (não mais de 1 hora cada) fazendo os ajustes. Eu já tinha os assets como
o logo do site e uma ideia de como eu queria que o layout ficasse, então foi
razoavelmente simples de fazer.

## Uso de IA

Como eu mencionei, usei o Cláudio para resolver este problema. Os principais
motivos de ter usado IA para isso são:

- Gastar menos tempo.
- O Jekyll é escrito em Ruby, não é uma linguagem que eu trabalho e não estou
  muito interessado em aprender no momento.
- Eu ainda queria uma aparência menos genérica, então ia ter que meter a mão
  em html e css.

O uso de IA no setup ajudou a ter algumas outras coisas que eu queria, como
versões em português, inglês e espanhol de todos os posts.

> Veja bem, eu uso IA para __traduzir__ os posts, não para escrever eles. Ao
> menos uma das versões dele vai ter sido escrita manualmente por mim, sem
> uso de assistentes de código. Neste caso, é o post em português mesmo.

## Eficiência

Com o uso de IA eu consegui desenrolar isso em três dias, incluindo o post
inicial, a migração dos posts antigos e a tradução deles.

Estou razoavelmente contente com a abordagem atual. Para mim o aspecto mais
importante deste blog é conseguir redigir o conteúdo em markdown e um editor
de código ou no Obsidian. Não queria usar uma interface web ou algo do tipo,
motivo pelo qual nunca tive vontade de usar um Medium da vida. Além disso, gosto
de ser dono do meu nariz e um repositório git me permite fazer isso.

## E por que agora?

Se o site original ainda estivesse de pé, eu estaria voltando a postar lá agora.
Eu tenho voltado a fazer coisas com programação e venho estudando muita coisa
nova, principalmente nesse mundo de IA. Isto não vai se tornar um blog de IA (
eu acho), mas o uso de IA tem me possibilitado utilizar melhor o meu tempo
livre e fazer coisas que antes eu demorava demais para fazer (e normalmente
desistia no meio).

Eu acho que eu venho fazendo coisas interessantes o suficiente para voltar a
compartilhar o que estou fazendo. E o novo setup do site deve deixar as coisas
mais simples de manter, me incentivando a voltar a postar.

## Conclusão

- Temos um site novo.
- Eu acho que vou postar aqui.
- Se eu não postar ao menos não perdi muito tempo subindo isso.
- Eu não sou vibe-coder (juro).
- Mas sim, esse site foi vibe-codado. :)

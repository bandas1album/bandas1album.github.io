# Bandas de 1 Álbum

Eternizando bandas que nos deixaram apenas uma pérola.

## Sumário

- [Instalação](#instala%C3%A7%C3%A3o)
- [Como contribuir?](#como-contribuir)

### Instalação

1. Clone o repositório: `git@github.com:bandas1album/bandas1album.github.io.git`
2. Instalar o projeto com `gem install bundler jekyll` e com `npm install`
3. Rode o projeto com `npm start`

### Como contribuir?

1. Crie uma nova branch com o formato `add-{nome-do-album}`
2. Na pasta `_posts` crie um post com o formato `YYYY-MM-DD-nome-do-album.MD`
3. Para a criação do post use o seguinte formato:

```md
---
layout: post

# Infos
title:
artist:
released: YYYY-MM-DD
country:
label:
categories: []

# Links
links:
  amazon: #
  deezer: #
  lastfm: #
  spotify: #
  youtube: #
  wikipedia: #
  download: #
---
```

4. Para a capa do álbum temos dois tamanhos `160x160px` e `640x640px`, essas imagens precisam estar nos formatos `.webp` e `.jpg` renomeadas da mesma forma que o nome do álbum no passo dois, em formato de slug, sem a data. ([ver exemplo na pasta de imagens](/assets/img/albums))

## Licença

[Licensed by MIT](/LICENSE) &copy; [Kevin Oliveira](https://github.com/kvnol)

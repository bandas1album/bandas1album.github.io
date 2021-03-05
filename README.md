# Bandas de 1 Álbum

Eternizando bandas que nos deixaram apenas uma pérola.

### Instalação

1. Clone o repositório: `git@github.com:bandas1album/bandas1album.github.io.git`
2. Instalar o projeto com `gem install bundler jekyll` e com `npm install`
3. Rode o projeto com `npm start`

### Como contribuir?

1. Crie uma nova branch com o formato `add-{nome-do-album}`
2. Na pasta `_posts` crie um post com o formato `YYYY-MM-DD-nome-do-album.MD`
3. Para a criação do post use o seguinte snippet:

```md
---
layout: post

\# Infos
title: __Álbum__
artist: __Artista__
released: YYYY-MM-DD
country: __Emoji Flag__
label: __Gravadora__
categories: ['Hard Rock', 'Blues Rock']
images:
  [
    'https://img.discogs.com/9mejL-Ewu5adAN3lCexB5hGBkas=/fit-in/450x450/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2501404-1287472563.jpeg.jpg',
    'https://img.discogs.com/FVTsLcJLMcBrneReAH0uP5tRMxU=/fit-in/579x571/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2501404-1363027602-6076.jpeg.jpg',
  ]

\# Links
links:
  - title: Amazon
    url: #
  - title: Deezer
    url: #
  - title: Lastfm
    url: #
  - title: Spotify
    url: #
  - title: YouTube
    url: #
  - title: Wikipedia-w
    url: #
---
```

## Licença

[Licensed by MIT](/LICENSE) &copy; [Kevin Oliveira](https://github.com/kvnol)

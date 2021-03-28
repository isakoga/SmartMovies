# Smart Movies  
### Catálogo de filmes e séries  

## Tabela de conteúdos
* [Sobre] (https://github.com/isakoga/SmartMovies#Sobre)
* [Instalação] (https://github.com/isakoga/SmartMovies#Instalação)
* [Como-usar] (https://github.com/isakoga/SmartMovies#Como-usar)
* [Tecnologias] (https://github.com/isakoga/SmartMovies#Tecnologias)

## Sobre
Aplicação que mostra um catálogo de filmes e séries com informações detalhadas e redirecionamento para a página do filme/série escolhido.

## Instalação
#### Pré-requisitos
Certifique-se de ter instalado em sua maquina estas ferramentas: Git, Node.js, e um editor de textos como o VSCode.

#### Rodando a aplicação localmente
1. Clone o repositório
* ``` git clone https://github.com/isakoga/SmartMovies.git ```
2. Entre na pasta do repositório que você acabou de clonar:
* ``` cd SmartMovies ```
3. Instale as dependências:
* ``` npm install ```
4. Inicialize o projeto:
* Inicie o projeto ``` npm start ```
O projeto irá inciar o backend na porta 3000 e em seguida o frontend.    
Por padrão o React procura rodar as aplicações na porta 3000, como o backend já estará rodando nesta porta, ele perguntará se queres rodar a aplicação em outra porta, responda com ``` Y ```.  
Uma página no browser será aberta com a aplicação.  
Divirta-se!!

## Como Usar

Ao iniciar a aplicação o usuário poderá escolher entre filmes ou séries.

Após a seleção abrirá um catálogo com vários cards, clicando no card o usuário pode ter mais informações (Sinopse, nota IMDB, elenco, link de redirecionamento) sobre o filme/série escolhido.

## Tecnologias
Tecnologias utilizadas para construção da aplicação:  
* Node
* React com a biblioteca styled-components

Ferramentas para controle e organização de código:
* ESLint
* Git
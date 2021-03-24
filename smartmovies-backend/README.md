## SmartMovies Backend
Este projeto serve como backend para o projeto de teste SmartMovies, que consiste em criar um frontend para dados da API do The Movies Database ([http://themoviedb.org/](http://themoviedb.org/))

Para utilização do projeto, é necessário ter o NodeJS na versão 12 ou superior instalado.

#### Instruções:
- Clone o projeto
- Use o comando **npm install** para instalar as dependências
- Use o comando **npm start** para iniciar o servidor

O backend estará disponível na porta 3000.

#### APIs
Todas as APIs disponibilizadas utilizam o formato JSON.

##### GET /filmes?page=1
Lista os filmes disponíveis. O parâmetro **page** indica o número da página e é opcional. Para mais detalhes sobre o resultado consulte [https://developers.themoviedb.org/3/discover/movie-discover](https://developers.themoviedb.org/3/discover/movie-discover).

##### GET /filmes/:id
Retorna os detalhes de um filme. O parâmetro **id** é obrigatório e pode ser obtido a partir da listagem de filmes. Para mais detalhes sobre o resultado consulte [https://developers.themoviedb.org/3/movies/get-movie-details](https://developers.themoviedb.org/3/movies/get-movie-details).

##### GET /series?page=1
Lista as séries disponíveis. O parâmetro **page** indica o número da página e é opcional. Para mais detalhes sobre o resultado consulte [https://developers.themoviedb.org/3/discover/tv-discover](https://developers.themoviedb.org/3/discover/tv-discover).

##### GET /series/:id
Retorna os detalhes de uma série. O parâmetro **id** é obrigatório e pode ser obtido a partir da listagem de séries. Para mais detalhes sobre o resultado consulte [https://developers.themoviedb.org/3/tv/get-tv-details](https://developers.themoviedb.org/3/tv/get-tv-details).

#### Front End
Aqui um exemplo de um Front End simples que pode ser desenvolvido utilizando estas APIs:
![Exemplo](https://github.com/Wesley-Alves/smartmovies-backend/blob/master/smartmovies.gif?raw=true)

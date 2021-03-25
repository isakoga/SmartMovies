import axios from 'axios';

export const getMovies = async () => {
  const movies = await axios({
    url: 'http://localhost:3000/filmes',
  }).then((res) => res.data.results)
    .catch(() => {
      console.error('OPS! Nenhum filme foi encontrado');
    });

  return movies;
};

export const getSeries = async () => {
  const series = await axios({
    url: 'http://localhost:3000/series',
  }).then((res) => res.data.results)
    .catch(() => {
      console.error('OPS! Nenhuma série foi encontrado');
    });

  return series;
};

export const getMovieById = async (id) => {
  const movie = await axios({
    url: `http://localhost:3000/filmes/${id}`,
  }).then((res) => res)
    .catch(() => {
      console.error('OPS! Nenhum filme foi encontrado');
    });

  return movie;
};

export const getSerieById = async (id) => {
  const serie = await axios({
    url: `http://localhost:3000/series/${id}`,
  }).then((res) => res)
    .catch(() => {
      console.error('OPS! Nenhuma série foi encontrado');
    });

  return serie;
};
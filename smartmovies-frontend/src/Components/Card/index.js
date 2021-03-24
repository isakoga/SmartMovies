import React from 'react';
import { CardContainer, CardImage, Container } from './style';

const Cards = (data) => {
  const { movies, value } = data;
  if (value === "movie") {
    return (
      <Container>
        {movies.map((movie) => (
          <CardContainer>
            <CardImage>
              <img
                src={ movie.poster_path }
                alt={ movie.title }
              />
            </CardImage>
            <span>{ movie.title }</span>
            <p>{ movie.overview }</p>
          </CardContainer>
        ))}
      </Container>
    );
  } else {
    return (
      <Container>
        {movies.map((serie) => (
          <CardContainer>
            <CardImage>
              <img
                src={ serie.poster_path}
                alt={ serie.name}
              />
            </CardImage>
            <span>{ serie.name }</span>
            <p>{ serie.overview }</p>
          </CardContainer>
        ))}
      </Container>
    );
  }
};

export default Cards;
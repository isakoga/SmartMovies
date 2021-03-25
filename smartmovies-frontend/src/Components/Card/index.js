import React from 'react';
import { Link } from 'react-router-dom';
import { CardContainer, CardImage, Container } from './style';

const Cards = ({ data, value }) => {
  if (value === "movie") {
    return (
      <Container>
        { data && data.map((movie) => (
          <CardContainer>
            <Link to={ `/filmes/${movie.id}` }>
              <CardImage>
                <img
                  src={ movie.poster_path }
                  alt={ movie.title }
                />
              </CardImage>
              <span>{ movie.title }</span>
              <p>{ movie.overview }</p>
            </Link>
          </CardContainer>
        ))}
      </Container>
    );
  } else {
    return (
      <Container>
        {data && data.map((serie) => (
          <CardContainer>
            <Link to={ `/series/${serie.id}` }>
              <CardImage>
                <img
                  src={ serie.poster_path}
                  alt={ serie.name}
                />
              </CardImage>
              <span>{ serie.name }</span>
              <p>{ serie.overview }</p>
              </Link>
          </CardContainer>
        ))}
      </Container>
    );
  }
};

export default Cards;
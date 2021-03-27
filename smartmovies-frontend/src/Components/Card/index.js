import React from 'react';
import { Link } from 'react-router-dom';
import {  CardContainer, Container } from './style';

const Cards = ({ data, value }) => {
  if (value === "movie") {
    return (
      <Container>
        { data && data.map((movie) => (
          <CardContainer>
            <Link to={ `/filmes/${movie.id}` }>
                <img
                  src={ movie.poster_path }
                  alt={ movie.title }
                />
              <div>
                <h3>{ movie.title }</h3>
              </div>
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
                <img
                  src={ serie.poster_path }
                  alt={ serie.name }
                />
                <div>
                  <span>{ serie.name }</span>
                </div>
              </Link>
          </CardContainer>
        ))}
      </Container>
    );
  }
};

export default Cards;
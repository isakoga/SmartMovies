import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CardContainer, Container } from './style';

const Cards = ({ data, value }) => {
  if (value === 'movie') {
    return (
      <Container>
        {data &&
          data.map((movie) => (
            <CardContainer>
              <Link to={`/filmes/${movie.id}`}>
                <img src={movie.poster_path} alt={movie.title} />
                <div>
                  <h3>{movie.title}</h3>
                </div>
              </Link>
            </CardContainer>
          ))}
      </Container>
    );
  }
  return (
    <Container>
      {data &&
        data.map((serie) => (
          <CardContainer>
            <Link to={`/series/${serie.id}`}>
              <img src={serie.poster_path} alt={serie.name} />
              <div>
                <h3>{serie.name}</h3>
              </div>
            </Link>
          </CardContainer>
        ))}
    </Container>
  );
};

export default Cards;

Cards.defaultProps = {
  value: '',
  data: [],
};

Cards.propTypes = {
  value: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  map: PropTypes.func.isRequired,
};

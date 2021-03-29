import React from 'react';
import PropTypes from 'prop-types';
import {
  CastCard,
  CastContainer,
  Container,
  DetailsContainer,
  DetailsLeftContainer,
  DetailsNavigation,
  DetailsRightContainer,
} from './style';

const renderCard = (info, type) => {
  const { data } = info;
  const cast = data.credits.cast
    .filter((castPerson) => castPerson.known_for_department === 'Acting')
    .filter((_, index) => index < 21);

  if (type === 'filmes') {
    return (
      <DetailsContainer>
        <DetailsLeftContainer>
          <img src={data.poster_path} alt={data.title} />
        </DetailsLeftContainer>
        <DetailsRightContainer>
          <div>
            <h2>{data.title}</h2>
            <h2>Nota: {data.vote_average}</h2>
          </div>
          <h4>Sinopse</h4>
          <h6>{data.overview}</h6>
          <h4>Elenco</h4>
          <CastContainer>
            {cast.map((actor) => (
              <CastCard>
                <img src={actor.profile_path} alt={actor.name} />
                <p>{actor.name}</p>
              </CastCard>
            ))}
          </CastContainer>
          <DetailsNavigation>
            <a href={data.homepage}>Ir para o filme</a>
            <a href='/filmes'>Voltar</a>
          </DetailsNavigation>
        </DetailsRightContainer>
      </DetailsContainer>
    );
  }
  return (
    <DetailsContainer>
      <DetailsLeftContainer>
        <img src={data.poster_path} alt={data.name} />
      </DetailsLeftContainer>
      <DetailsRightContainer>
        <div>
          <h2>{data.name}</h2>
          <h2>Nota: {data.vote_average}</h2>
        </div>
        <h4>Sinopse</h4>
        <h6>{data.overview}</h6>
        <h4>Elenco</h4>
        <CastContainer>
          {cast.map((actor) => (
            <CastCard>
              <img src={actor.profile_path} alt={actor.name} />
              <p>{actor.name}</p>
            </CastCard>
          ))}
        </CastContainer>
        <DetailsNavigation>
          <a href={data.homepage}>Ir para a série</a>
          <a href='/series'>Voltar</a>
        </DetailsNavigation>
      </DetailsRightContainer>
    </DetailsContainer>
  );
};

export default function DetailsCard({ info, value }) {
  return <Container> {info && renderCard(info, value)} </Container>;
}

DetailsCard.defaultProps = {
  value: '',
};

DetailsCard.propTypes = {
  value: PropTypes.string,
  info: PropTypes.arrayOf(PropTypes.object).isRequired,
};

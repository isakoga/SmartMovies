import React from 'react';
import { CastCard, CastContainer, DetailsContainer, DetailsLeftContainer, DetailsNavigation, DetailsRightContainer } from './style';

const renderCard = (info, type) => {
  const { data } = info;
  const cast = data.credits.cast.filter((cast) => cast.known_for_department === 'Acting').filter((_, index) => index < 21);

  if (type === 'filmes') {
    return (
      <DetailsContainer>
        <DetailsLeftContainer>
          <img
            src={ data.poster_path }
            alt={ data.title }
          />
        </DetailsLeftContainer>
        <DetailsRightContainer>
          <div>
            <h2>{ data.title }</h2>
            <h2>Nota: { data.vote_average }</h2>
          </div>
          <h4>Sinopse</h4>
          <h6>{ data.overview }</h6>
          <h4>Elenco</h4>
          <CastContainer>
          {cast.map((actor) => (
            <CastCard>
              <img src={ actor.profile_path } alt={ actor.name } />
              <p>{ actor.name }</p>
            </CastCard>
          ))}
          </CastContainer>
          <DetailsNavigation>
            <a href={ data.homepage }>Ir para o filme</a>
            <a href="/filmes">Voltar</a>
          </DetailsNavigation>
        </DetailsRightContainer>
      </DetailsContainer>
    );
  } else {
    return (
      <DetailsContainer>
        <DetailsLeftContainer>
          <img
            src={ data.poster_path }
            alt={ data.name }
          />
        </DetailsLeftContainer>
        <DetailsRightContainer>
          <div>
            <h2>{ data.name }</h2>
            <h2>Nota: { data.vote_average }</h2>
          </div>
          <h4>Sinopse</h4>
          <p>{ data.overview }</p>
          <h4>Elenco</h4>
          <CastContainer>
          {cast.map((actor) => (
            <CastCard>
              <img src={ actor.profile_path } alt={ actor.name } />
              <p>{ actor.name }</p>
            </CastCard>
          ))}
          </CastContainer>
          <DetailsNavigation>
            <a href={ data.homepage }>Ir para a série</a>
            <a href="/series">Voltar</a>
          </DetailsNavigation>
        </DetailsRightContainer>
      </DetailsContainer>
    );
  }
}

export default function DetailsCard({ info, value }) {
  return (
    <div>
      { info && renderCard(info, value) }
    </div>
  )
}
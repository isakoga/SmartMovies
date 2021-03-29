import styled from 'styled-components';

const HomeContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100%;

  @media (max-width: 600px) {
    flex-flow: column wrap;
  }
`;

export default HomeContainer;

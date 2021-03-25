import styled from 'styled-components';

export const NavBarContainer = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;

  @media (max-width: 600px) {
    flex-flow: column wrap;
    align-items: center;
  }
`

export const Tab = styled.div`
  border: none;
  font-size: 14px;
  width: 25%;
  margin: 60px;
  padding: 50px 40px;
  background-color: rgb(239, 239, 239);
  border: 1px solid blue;
  border-radius: 16px;

  text-align: center;
  text-decoration: none;
  color: black;
  cursor: default;
  background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
  font: 400 30px Arial;

  >a {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  &:hover {
    color: white;
    background-color: #42b3f4;
    transition: all 0.5s ease;
  }

  &:active {
    border-bottom:2px solid #42b3f4;
  }

  @media (max-width: 600px) {
    justify-content: center;
    flex-flow: column wrap;
    width: 40%;
  }
`
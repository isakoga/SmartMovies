import styled from 'styled-components';

export const NavBarContainer = styled.div`
  background-color: rgb(239, 239, 239);
  justify-content: center;
  border: 1px solid blue;
  display: flex;
  height: 50px;
  width: 100%;
`

export const Tab = styled.a`
  border: none;
  font-size: 14px;
  width: 30%;

  text-align: center;
  text-decoration: none;
  color: black;
  cursor: default;
  background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
  font: 400 20px Arial;
  padding: 15px;

  &:hover {
    color: white;
    background-color: #42b3f4;
    transition: all 0.5s ease;
  }

  &:active {
    border-bottom:2px solid #42b3f4;
  }
`
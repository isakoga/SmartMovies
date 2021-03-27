import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css` 
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: 20px;
    max-height: 600px;
    flex-wrap: wrap;
    background-color: ${theme.colors.backgroundColor};
    margin-bottom: 30px;
  `}
`

export const CardContainer = styled.div`
  width: 20%;
  max-height: 450px;
  display: inline-block;
  flex-flow: column wrap;
  margin: 10px;
  overflow: hidden;

  h3 {
    font-size: 1.2vw;
    text-align: center;
  }

  p {
    font-size: 0.75vw;
  }

  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    top: -4px;
    background-color: white;
  }

  &:hover:before {
    transform: scale(2.15);
  }

  >a {
    text-decoration: none;
    color: black;

    >img {
      flex: 1;
      width: 100%;
    }

    >div {
      max-height: 150px;
      height: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 5px;
    }
  }
`

export const CardImage = styled.div`
  flex: 1;

  >img {
    width: 100%;
  }
`

import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css` 
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: 20px;
    flex-wrap: wrap;
    background-color: ${theme.body};
    transition: all 0.3s ease-in-out;
  `}
`

export const CardContainer = styled.div`
  ${({ theme }) => css`
    width: 20%;
    max-height: 450px;
    display: inline-block;
    flex-flow: column wrap;
    margin: 10px;
    border: 1px solid ${ theme.border };
    border-radius: 10px;
    overflow: hidden;
    align-items: center;

    h3 {
      font-size: 1.2vw;
      text-align: center;

      @media (max-width: 700px) {
        font-size: 1em;
      }
    }

    &:hover {
      box-shadow: 0px 5px 25px 0px ${theme.homeHover};
      border-radius: 10px;
    }

    &:hover:before {
      transform: scale(2.15);
    }

    >a {
      text-decoration: none;
      color: ${ theme.text };

      >img {
        flex: 1;
        width: 100%;
      }

      >div {
        max-height: 150px;
        height: 15%;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    @media (max-width: 700px) {
      width: 40%;
    }

    @media (max-width: 500px) {
      width: 60%;
    }
  `}
`

export const CardImage = styled.div`
  flex: 1;

  >img {
    width: 100%;
  }
`

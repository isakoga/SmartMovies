  import styled, { css } from 'styled-components';

export const NavBarContainer = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;

  @media (max-width: 600px) {
    flex-flow: column wrap;
    align-items: center;
  }
`

export const HomeLink = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${ theme.border };
    box-shadow: 1px ${ theme.boxShadow };
    font-size: 2em;
    width: 25%;
    margin: 30px;
    padding: 50px 40px;
    background-color: ${ theme.body };
    border-radius: 16px;

    text-align: center;
    text-decoration: none;
    color: ${ theme.text };
    cursor: default;

    transition: box-shadow 0.3s ease-in-out;

    >a {
      color: ${ theme.text };
      text-decoration: none;
      cursor: pointer;
      font-family: 'BebasNeue';
      letter-spacing: 0.6px;
    }

    &:hover {
      box-shadow: 0px 5px 25px 0px ${theme.homeHover}
    }

    @media (max-width: 600px) {
      justify-content: center;
      flex-flow: column wrap;
      width: 62%;
    }
  `}
`
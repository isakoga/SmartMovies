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
    border: 1px solid ${theme.border};
    box-shadow: 1px ${theme.boxShadow};
    font-size: 1.5em;
    width: 25%;
    margin: 30px;
    padding: 50px 40px;
    background-color: ${theme.body};
    border-radius: 16px;

    text-align: center;
    text-decoration: none;
    color: black;
    cursor: default;

    >a {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }

    &:hover {
      color: white;
      background-color: ${theme.homeHover};
      transition: all 0.7s ease;
    }

    @media (max-width: 600px) {
      justify-content: center;
      flex-flow: column wrap;
      width: 40%;
    }
  `}
`
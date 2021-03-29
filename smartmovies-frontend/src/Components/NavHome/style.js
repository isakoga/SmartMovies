import styled, { css } from 'styled-components';

export const NavBarContainer = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;

  @media (max-width: 600px) {
    flex-flow: column wrap;
    align-items: center;
  }
`;

export const HomeLink = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.body};
    border: 1px solid ${theme.border};
    border-radius: 16px;
    box-shadow: 1px ${theme.boxShadow};
    color: ${theme.text};
    font-size: 2em;
    margin: 40px 30px;
    padding: 50px 40px;
    text-align: center;
    text-decoration: none;
    transition: box-shadow 0.3s ease-in-out;
    width: 25%;

    cursor: default;

    &:hover {
      background-color: ${theme.homeHoverBackground};
      box-shadow: 0px 5px 25px 0px ${theme.homeHover};
      transition: 0.3s ease-in-out;
      color: ${theme.homeHoverText};

      > a {
        transition: 0.3s ease-in-out;
        color: ${theme.homeHoverText};
      }
    }

    > a {
      color: ${theme.text};
      text-decoration: none;
      cursor: pointer;
      font-family: 'BebasNeue';
      letter-spacing: 0.6px;
    }

    @media (max-width: 600px) {
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
      width: 62%;
    }
  `}
`;

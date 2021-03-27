import styled, { css } from 'styled-components';

export const HeaderLogo = styled.div`
  ${({ theme }) => css`
    height: 50px;
    width: 100%;
    background-color: ${theme.logoBackground};
    display: flex;
    align-items: center;
    justify-content: space-between;

    >a {
      text-decoration: none;
      color: white;
      font-size: 20px;
      font-family: 'BebasNeue', cursive;
      letter-spacing: 0.5px;
      font-weight: bold;
      margin-left: 15px;
    }
  `}
`

export const ContainerToggle = styled.div`
  ${({ theme }) => css`
  
    display: flex;
    align-items: center;
    width: 70px;
    justify-content: space-around;
    margin-right: 10px;
  `}

`;
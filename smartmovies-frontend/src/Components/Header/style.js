import styled, { css } from 'styled-components';

const HeaderContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.body};
    color: ${theme.text};
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 175px;
    justify-content: center;
    top: 0;
    width: 100%;
    transition: all 0.3s ease-in-out;

    > h1 {
      text-align: center;
      margin: 5px;
    }

    > h3 {
      margin: 5px;
      font-size: 14px;
    }
  `}
`;
export default HeaderContainer;

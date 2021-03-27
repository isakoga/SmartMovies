import styled, { css } from 'styled-components';

export const HeaderContainer = styled.div`
${({ theme }) => css`
  background-color: ${theme.body};
  color: ${theme.colors.text};
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 175px;
  justify-content: center;
  top: 0;
  width: 100%;
  transition: all 0.3s ease-in;

  >h1 {
    text-align: center;
    margin: 5px;
  }

  >h3 {
    margin: 5px;
    font-size: 14px;
  }
`}
`

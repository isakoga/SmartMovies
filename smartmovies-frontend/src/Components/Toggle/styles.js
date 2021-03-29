import styled from 'styled-components';

import Switch from 'react-switch';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleLabel = styled.span``;

export const ToggleSwitch = styled(Switch).attrs(
  () =>
    ({
      width: 30,
      height: 15,
    })
)``;

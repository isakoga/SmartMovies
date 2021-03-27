import React from 'react';
import PropTypes from 'prop-types';

import { Container, ToggleLabel, ToggleSwitch } from './styles';

const Toggle = ({
  labelLeft,
  labelRight,
  checked,
  onChange,
}) => (
  <Container>
    <ToggleLabel>{labelLeft}</ToggleLabel>
    <ToggleSwitch
      checked={ checked }
      uncheckedIcon={ false }
      checkedIcon={ false }
      onChange={ onChange }
    />
    <ToggleLabel>{labelRight}</ToggleLabel>
  </Container>
);

export default Toggle;

Toggle.defaultProps = {
  labelLeft: '',
  labelRight: '',
};

Toggle.propTypes = {
  labelLeft: PropTypes.string,
  labelRight: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

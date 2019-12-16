import React, { forwardRef } from 'react';
import { FontAwesome } from '@expo/vector-icons/';
import PropTypes from 'prop-types';

import { Container, TInput } from './styles';

function Input({ icon, ...rest }, ref) {
  return (
    <Container>
      <TInput ref={ref} {...rest} />
      {icon && (
        <FontAwesome name={icon} size={20} color="rgba(255,255,255,0.6)" />
      )}
    </Container>
  );
}

// Input.propTypes = {
//   icon: PropTypes.string,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
// };

// Input.defaultProps = {
//   icon: null,
//   style: {},
// };

export default forwardRef(Input);

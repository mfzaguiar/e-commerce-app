import React, { forwardRef } from 'react';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome } from '@expo/vector-icons/';
// import PropTypes from 'prop-types';

import { Container, TInput } from './styles';
// import { RectButton } from 'react-native-gesture-handler';

function Input({ value, icon, ...rest }, ref) {
  return (
    <Container>
      <TInput {...rest} ref={ref} />
      {icon === 'clear' ? (
        <FontAwesome name="clear" size={20} color="rgba(255,255,255,0.6)" />
      ) : (
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

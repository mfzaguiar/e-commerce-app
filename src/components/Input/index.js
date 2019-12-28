import React, { forwardRef } from 'react';
import { FontAwesome } from '@expo/vector-icons/';

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

export default forwardRef(Input);

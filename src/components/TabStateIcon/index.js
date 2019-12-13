import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons/';

import { Container, Box, Number } from './styles';

export default function TabIcon({ name, tintColor }) {
  const cartSize = useSelector(state => state.cart.length);

  useEffect(() => {}, [cartSize]);

  return (
    <Container>
      <FontAwesome name={name} size={24} color={tintColor} />

      {cartSize > 0 && (
        <Box>
          <Number>{cartSize}</Number>
        </Box>
      )}
    </Container>
  );
}

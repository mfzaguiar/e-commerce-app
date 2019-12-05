import React from 'react';

import { Container, DiscountText } from './styles';

export default function Discount({ children }) {
  return (
    <Container>
      <DiscountText>{Number(100 - 100 * children)}% off</DiscountText>
    </Container>
  );
}

import React from 'react';
import PropTypes from 'prop-types';

import { Container, DiscountText } from './styles';

export default function Discount({ children }) {
  return (
    <Container>
      <DiscountText>{Number(100 - 100 * children)}% off</DiscountText>
    </Container>
  );
}

Discount.propTypes = {
  children: PropTypes.number.isRequired,
};

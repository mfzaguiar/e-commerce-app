import React from 'react';
import PropTypes from 'prop-types';

import { Button, Text, Icon } from './styles';

export default function BuyButton({ children, ...rest }) {
  return (
    <Button {...rest}>
      <Icon name="shopping-cart" />
      <Text>{children}</Text>
    </Button>
  );
}

BuyButton.propTypes = {
  children: PropTypes.string.isRequired,
};

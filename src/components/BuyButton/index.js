import React from 'react';

import { Button, Text, Icon } from './styles';

export default function BuyButton({ children, ...rest }) {
  return (
    <Button {...rest}>
      <Icon name="shopping-cart" />
      <Text>{children}</Text>
    </Button>
  );
}

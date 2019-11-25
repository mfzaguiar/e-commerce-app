import React from 'react';

import { Button, ButtonText, Icon } from './styles';

export default function BuyButton({ children }) {
  return (
    <Button>
      <Icon name="shopping-cart" />
      <ButtonText>{children}</ButtonText>
    </Button>
  );
}

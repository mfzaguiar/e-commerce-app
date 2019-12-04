import React from 'react';

import { Container, Button, Icon, Title } from './styles';

export default function ProfileButton({ name, children, margin = 0 }) {
  return (
    <Container margin={margin}>
      <Button>
        <Icon name={name} />
        <Title>{children}</Title>
      </Button>
    </Container>
  );
}

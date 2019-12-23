import React from 'react';

import { Container, Icon, Wrapper, Title } from './styles';

export default function ProfileButton({ name, children, margin = 0 }) {
  return (
    <Container margin={margin}>
      <Icon name={name} />
      <Wrapper>
        <Title>{children}</Title>
      </Wrapper>
    </Container>
  );
}

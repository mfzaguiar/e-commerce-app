import React from 'react';

import { Container, StarContainer, Label, StarIcon } from './styles';

export default function Rating() {
  return (
    <Container>
      <Label>Avaliações (10)</Label>
      <StarContainer>
        <StarIcon name="star" size={20} color="#F2C94C" />
        <StarIcon name="star" size={20} color="#F2C94C" />
        <StarIcon name="star" size={20} color="#F2C94C" />
        <StarIcon name="star" size={20} color="#F2C94C" />
        <StarIcon name="star" size={20} color="#F2C94C" />
      </StarContainer>
    </Container>
  );
}

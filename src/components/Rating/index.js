import React from 'react';

import { Container, StarContainer, Label, StarIcon } from './styles';

export default function Rating({ defaultRating = 0, defaultNumRating = 0 }) {
  const defaultValue = defaultRating;
  const arrayStars = [1, 2, 3, 4, 5];

  return (
    <Container>
      <Label>Avaliações ({defaultNumRating})</Label>
      <StarContainer>
        {arrayStars.map((item, index) => (
          <StarIcon
            key={index}
            name="star"
            size={20}
            color={defaultValue <= index ? 'transparent' : '#F2C94C'}
          />
        ))}
      </StarContainer>
    </Container>
  );
}

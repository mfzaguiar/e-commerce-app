import React from 'react';

import { Container, StarContainer, Label, StarIcon } from './styles';

export default function Rating({ defaultRating = 0, defaultNumRating = 0 }) {
  const defaultValue = defaultRating;
  const arrayStars = [1, 2, 3, 4, 5];

  return (
    <Container>
      <Label>avaliações ({defaultNumRating})</Label>
      <StarContainer>
        {arrayStars.map((item, index) => (
          <StarIcon
            key={index}
            name={defaultValue <= index ? 'star-o' : 'star'}
            size={20}
            color={defaultValue <= index ? 'rgba(0,0,0,.3)' : '#F2C94C'}
          />
        ))}
      </StarContainer>
    </Container>
  );
}

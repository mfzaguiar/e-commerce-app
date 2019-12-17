import React from 'react';

import { Container, StarContainer, Label, StarIcon } from './styles';

export default function Rating({
  size = 20,
  fontSize = 12,
  defaultRating = 0,
  defaultNumRating = 0,
}) {
  const defaultValue = defaultRating;
  const arrayStars = [1, 2, 3, 4, 5];

  return (
    <Container>
      <Label fontSize={fontSize}>avaliações ({defaultNumRating})</Label>
      <StarContainer>
        {arrayStars.map((item, index) => (
          <StarIcon
            key={index}
            name={defaultValue <= index ? 'star-o' : 'star'}
            size={size}
            color={defaultValue <= index ? 'rgba(0,0,0,.3)' : '#F2C94C'}
          />
        ))}
      </StarContainer>
    </Container>
  );
}

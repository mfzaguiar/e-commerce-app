import React from 'react';

import { Container, StarContainer, Label, StarIcon } from './styles';

export default function Rating({
  size = 20,
  fontSize = 12,
  defaultRating = 0,
  defaultNumRating = 0,
  Textcolor,
  StarColor,
}) {
  const defaultValue = defaultRating;
  const arrayStars = [1, 2, 3, 4, 5];

  return (
    <Container>
      <Label color={Textcolor} fontSize={fontSize}>
        avaliações ({defaultNumRating})
      </Label>
      <StarContainer>
        {arrayStars.map((item, index) => (
          <StarIcon
            key={index}
            name={defaultValue <= index ? 'star-o' : 'star'}
            size={size}
            color={
              defaultValue <= index
                ? StarColor || 'rgba(255,255,255,.3)'
                : '#F2C94C'
            }
          />
        ))}
      </StarContainer>
    </Container>
  );
}

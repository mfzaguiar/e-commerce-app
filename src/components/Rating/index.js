import React from 'react';
import PropTypes from 'prop-types';

import { Container, StarContainer, Label, StarIcon } from './styles';

export default function Rating({
  size = 20,
  fontSize = 12,
  defaultRating = 0,
  defaultNumRating = 0,
  TextColor,
  ...rest
}) {
  const defaultValue = defaultRating;
  const arrayStars = [1, 2, 3, 4, 5];

  return (
    <Container {...rest}>
      <Label color={TextColor} fontSize={fontSize}>
        avaliações ({defaultNumRating})
      </Label>
      <StarContainer>
        {arrayStars.map((item, index) => (
          <StarIcon
            key={String(index)}
            name={defaultValue <= index ? 'star-o' : 'star'}
            size={size}
            color={defaultValue <= index ? '#F2C94C' : '#F2C94C'}
          />
        ))}
      </StarContainer>
    </Container>
  );
}

Rating.propTypes = {
  size: PropTypes.number,
  fontSize: PropTypes.number,
  defaultRating: PropTypes.number,
  defaultNumRating: PropTypes.number,
  TextColor: PropTypes.string,
};

Rating.defaultProps = {
  size: 20,
  fontSize: 12,
  defaultRating: 0,
  defaultNumRating: 0,
  TextColor: null,
};

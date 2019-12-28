import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons/';

import { Container, Circle, Number } from './styles';

export default function TabIcon({ name, tintColor }) {
  const cartSize = useSelector(state => state.cart.length);
  const favoriteSize = useSelector(state => state.favorite.length);

  useEffect(() => {}, [cartSize]);

  return (
    <Container>
      <FontAwesome name={name} size={24} color={tintColor} />
      {name === 'shopping-cart'
        ? cartSize > 0 && (
            <Circle>
              <Number>{cartSize}</Number>
            </Circle>
          )
        : favoriteSize > 0 && (
            <Circle>
              <Number>{favoriteSize}</Number>
            </Circle>
          )}
    </Container>
  );
}

TabIcon.propTypes = {
  name: PropTypes.string.isRequired,
  tintColor: PropTypes.string.isRequired,
};

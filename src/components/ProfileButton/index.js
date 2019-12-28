import React from 'react';
import PropTypes from 'prop-types';

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

ProfileButton.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  margin: PropTypes.number,
};

ProfileButton.defaultProps = {
  margin: 0,
};

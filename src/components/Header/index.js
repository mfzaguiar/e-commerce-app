import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Logo } from './styles';
import InputSearch from '~/components/InputSearch';
import logo from '~/assets/icons/logo.png';

export default function Header({ handleSearchSubmit }) {
  const [search, setSearch] = useState('');

  return (
    <Container>
      <Logo source={logo} />
      <InputSearch
        placeholder="Nome do produto"
        icon="search"
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="send"
        onSubmitEditing={() => handleSearchSubmit(search)}
        search={search}
        setSearch={setSearch}
      />
    </Container>
  );
}

Header.propTypes = {
  handleSearchSubmit: PropTypes.func.isRequired,
};

import React, { useState } from 'react';

import { Container, Logo } from './styles';
import Input from '~/components/Input';
import logo from '~/assets/icons/logo.png';

export default function Header({ handleSearchSubmit }) {
  const [search, setSearch] = useState('');

  return (
    <Container>
      <Logo source={logo} />
      <Input
        placeholder="Nome do produto"
        icon="search"
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="send"
        onSubmitEditing={() => handleSearchSubmit(search)}
        value={search}
        onChangeText={setSearch}
      />
    </Container>
  );
}

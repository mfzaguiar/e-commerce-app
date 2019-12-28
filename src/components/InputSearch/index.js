import React, { forwardRef } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons/';

import { Container, TInput } from './styles';

function InputSearch(
  { handleClearValue, setSearch, search, icon, ...rest },
  ref
) {
  return (
    <Container>
      <TInput {...rest} ref={ref} onChangeText={setSearch} value={search} />
      {search.length > 0 ? (
        <RectButton
          onPress={() => {
            setSearch('');
          }}
        >
          <FontAwesome name="close" size={18} color="rgba(255,255,255,0.6)" />
        </RectButton>
      ) : (
        <FontAwesome name="search" size={18} color="rgba(255,255,255,0.6)" />
      )}
    </Container>
  );
}

export default forwardRef(InputSearch);

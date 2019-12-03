import React, { forwardRef, useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons/';
// import PropTypes from 'prop-types';

import { Container, TInput } from './styles';
import { RectButton } from 'react-native-gesture-handler';

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

// Input.propTypes = {
//   icon: PropTypes.string,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
// };

// Input.defaultProps = {
//   icon: null,
//   style: {},
// };

export default forwardRef(InputSearch);

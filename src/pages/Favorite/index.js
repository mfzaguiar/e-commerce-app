import React from 'react';
import { Text } from 'react-native';

import { Container, Wrapper, EmptyFavorite } from './styles';
import TabIcon from '~/components/TabIcon';
import colors from '~/styles/colors';
import emptyFavorite from '~/assets/images/empty-favorite.png';

export default function Favorite() {
  return (
    <Container>
      <Wrapper>
        <EmptyFavorite source={emptyFavorite} />
      </Wrapper>
    </Container>
  );
}

Favorite.navigationOptions = {
  tabBarLabel: <Text style={{ fontSize: 12 }}>Favoritos</Text>,
  tabBarIcon: props => <TabIcon name="heart" {...props} />,
  tabBarColor: `${colors.primary}`,
};

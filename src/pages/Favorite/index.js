import React from 'react';
import { useSelector } from 'react-redux';
import { Text, FlatList } from 'react-native';

import { Container, Wrapper, EmptyFavorite } from './styles';
import TabStateIcon from '~/components/TabStateIcon';
import colors from '~/styles/colors';
import emptyFavorite from '~/assets/images/empty-favorite.png';
import ProductItem from '~/components/ProductItem';

export default function Favorite() {
  const FavoriteData = useSelector(state => state.favorite);

  return (
    <Container>
      {FavoriteData.length > 0 ? (
        <FlatList
          numColumns={1}
          data={FavoriteData}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <ProductItem item={item} />}
        />
      ) : (
        <Wrapper>
          <EmptyFavorite source={emptyFavorite} />
        </Wrapper>
      )}
    </Container>
  );
}

Favorite.navigationOptions = {
  tabBarLabel: <Text style={{ fontSize: 12 }}>Favoritos</Text>,
  tabBarIcon: props => <TabStateIcon name="heart" {...props} />,
  tabBarColor: `${colors.primary}`,
};

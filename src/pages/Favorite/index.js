import React from 'react';
import { StatusBar, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { Container, Wrapper, EmptyFavorite } from './styles';
import emptyFavorite from '~/assets/images/empty-favorite.png';
import TabStateIcon from '~/components/TabStateIcon';
import ProductItem from '~/components/ProductItem';
import colors from '~/styles/colors';

export default function Favorite({ navigation }) {
  const FavoriteData = useSelector(state => state.favorite);

  return (
    <Container>
      <StatusBar backgroundColor="#ff6347" />
      {FavoriteData.length > 0 ? (
        <FlatList
          numColumns={1}
          data={FavoriteData}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ProductItem item={item} navigation={navigation} />
          )}
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
  tabBarColor: colors.primary,
  tabBarLabel: <Text style={{ fontSize: 12 }}>Favoritos</Text>,
  tabBarIcon: props => <TabStateIcon name="heart" {...props} />,
};

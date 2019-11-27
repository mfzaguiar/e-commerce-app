import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';
import TabIcon from '~/components/TabIcon';
import colors from '~/styles/colors';

export default function Favorite() {
  return (
    <View>
      <Text>Favoritos</Text>
    </View>
  );
}

Favorite.navigationOptions = {
  tabBarLabel: <Text style={{ fontSize: 11 }}>Favoritos</Text>,
  tabBarIcon: props => <TabIcon name="heart" {...props} />,
  tabBarColor: `${colors.primary}`,
};

import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';
import TabIcon from '~/components/TabIcon';
import colors from '~/styles/colors';

export default function Cart() {
  return (
    <View>
      <Text>Carrinho</Text>
    </View>
  );
}

Cart.navigationOptions = {
  tabBarLabel: <Text style={{ fontSize: 12 }}>Carrinho</Text>,
  tabBarIcon: props => <TabIcon name="shopping-cart" {...props} />,
  tabBarBadge: true,
  tabBarColor: `${colors.primary}`,
};

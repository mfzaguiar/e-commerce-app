import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { Text } from 'react-native';
import TabIcon from '~/components/TabIcon';
import TabStateIcon from '~/components/TabStateIcon';

import Home from '~/pages/Home';
import Deals from '~/pages/Deals';
import Favorite from '~/pages/Favorite';
import Profile from '~/pages/Profile';
import Cart from '~/pages/Cart';
import SignIn from '~/pages/SignIn';
import Product from '~/components/Product';

import colors from '~/styles/colors';

const HomeRoute = createSwitchNavigator(
  {
    Home,
    Product,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      tabBarOnPress: ({ navigation }) => {
        navigation.navigate('Home');
      },
      tabBarColor: colors.primary,
      tabBarLabel: <Text style={{ fontSize: 12 }}>Início</Text>,
      tabBarIcon: props => <TabIcon name="home" {...props} />,
    },
  }
);

const DealsRoute = createSwitchNavigator(
  {
    Deals,
    Product,
  },
  {
    initialRouteName: 'Deals',
    navigationOptions: {
      tabBarOnPress: ({ navigation }) => {
        navigation.navigate('Deals');
      },
      tabBarColor: '#1C1919',
      tabBarLabel: <Text style={{ fontSize: 12 }}>Ofertas</Text>,
      tabBarIcon: props => <TabIcon name="tag" {...props} />,
    },
  }
);

const CartRoute = createSwitchNavigator(
  {
    Cart,
  },
  {
    initialRouteName: 'Cart',
    navigationOptions: {
      tabBarColor: colors.primary,
      tabBarLabel: <Text style={{ fontSize: 12 }}>Carrinho</Text>,
      tabBarIcon: props => <TabStateIcon name="shopping-cart" {...props} />,
    },
  }
);

const BottomRoutes = createMaterialBottomTabNavigator(
  {
    HomeRoute,
    DealsRoute,
    Favorite,
    CartRoute,
    Profile,
  },
  {
    initialRouteName: 'HomeRoute',
    activeColor: '#fff',
    inactiveColor: 'rgba(255,255,255,0.5)',
    labeled: true,
  }
);

const EntryPoint = createSwitchNavigator(
  {
    SignIn,
    BottomRoutes,
  },
  {
    initialRouteName: 'BottomRoutes',
  }
);

// const Routes = createAppContainer(BottomRoutes);
const Routes = createAppContainer(EntryPoint);

export default Routes;

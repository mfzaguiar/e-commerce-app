import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Home from '~/pages/Home';
import Deals from '~/pages/Deals';
import Favorite from '~/pages/Favorite';
import Profile from '~/pages/Profile';
import Cart from '~/pages/Cart';

const BottomRoutes = createMaterialBottomTabNavigator(
  {
    Home,
    Deals,
    Favorite,
    Cart,
    Profile,
  },
  {
    initialRouteName: 'Deals',
    activeColor: '#fff',
    inactiveColor: 'rgba(255,255,255,0.5)',
    labeled: true,
    // barStyle: { backgroundColor: 'black' },
    shifting: true,
  }
);

const Routes = createAppContainer(BottomRoutes);

export default Routes;

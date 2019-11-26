import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Home from '~/pages/Home';
import Department from '~/pages/Department';
import Favorite from '~/pages/Favorite';
import Profile from '~/pages/Profile';
import Cart from '~/pages/Cart';

const BottomRoutes = createMaterialBottomTabNavigator(
  {
    Home,
    Department,
    Favorite,
    Cart,
    Profile,
  },
  {
    initialRouteName: 'Home',
    activeColor: '#fff',
    inactiveColor: 'rgba(255,255,255,0.5)',
    labeled: true,
    barStyle: { backgroundColor: 'tomato' },
  }
);

const Routes = createAppContainer(BottomRoutes);

export default Routes;

import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Home from '~/pages/Home';
import Department from '~/pages/Department';
import Profile from '~/pages/Profile';
import Cart from '~/pages/Cart';

const BottomRoutes = createMaterialBottomTabNavigator(
  {
    Home,
    Department,
    Cart,
    Profile,
  },
  {
    // tabBarOptions: {
    //   inactiveTintColor: 'rgba(255,255,255,0.5)',
    //   activeTintColor: '#7159c1',
    //   style: {
    //     height: 54,
    //     paddingVertical: 5,
    //     backgroundColor: 'green',
    //     borderTopColor: 'rgba(255,255,255,0.4)',
    //   },
    //   labelStyle: {
    //     fontSize: 13,
    //   },
    // },
    initialRouteName: 'Home',
    activeColor: '#fff',
    inactiveColor: 'rgba(255,255,255,0.5)',
    labeled: true,
    barStyle: { backgroundColor: 'tomato' },
  }
);

const Routes = createAppContainer(BottomRoutes);

export default Routes;

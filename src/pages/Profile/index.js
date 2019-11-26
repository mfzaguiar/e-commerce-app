import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

import TabIcon from '~/components/TabIcon';

export default function Profile() {
  return (
    <View>
      <Text>Perfil</Text>
    </View>
  );
}

Profile.navigationOptions = {
  tabBarLabel: <Text style={{ fontSize: 11 }}>Perfil</Text>,
  tabBarIcon: props => <TabIcon name="user" {...props} />,
};

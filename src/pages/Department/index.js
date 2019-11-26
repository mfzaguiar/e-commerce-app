import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

import TabIcon from '~/components/TabIcon';

export default function Department() {
  return (
    <View>
      <Text>Departamento</Text>
    </View>
  );
}

Department.navigationOptions = {
  title: 'Departamentos',
  tabBarIcon: props => <TabIcon name="list-ul" {...props} />,
};

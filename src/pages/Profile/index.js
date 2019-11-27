import React from 'react';
import { Text } from 'react-native';

import { Container, Title } from './styles';

import TabIcon from '~/components/TabIcon';
import colors from '~/styles/colors';

export default function Profile() {
  return (
    <Container>
      <Title>Perfil</Title>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: <Text style={{ fontSize: 11 }}>Perfil</Text>,
  tabBarIcon: props => <TabIcon name="user" {...props} />,
  tabBarColor: `${colors.primary}`,
};

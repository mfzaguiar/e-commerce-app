import React from 'react';
import { Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons/';

import {
  Container,
  HeaderProfile,
  ProfileInfo,
  Name,
  Email,
  ProfileAvatar,
  SingOutButton,
  SignOutText,
} from './styles';

import ProfileButton from '~/components/ProfileButton';
import TabIcon from '~/components/TabIcon';
import colors from '~/styles/colors';

export default function Profile() {
  return (
    <Container>
      <HeaderProfile>
        <ProfileAvatar
          source={{
            uri: 'https://api.adorable.io/avatars/100/abott@adorable.png',
          }}
        />
        <ProfileInfo>
          <Name>Matheus Felipe Zacarias Aguiar</Name>
          <Email>first_mf@hotmail.com</Email>
        </ProfileInfo>
      </HeaderProfile>
      <ProfileButton name="envelope-o" margin={10}>
        Mensagens
      </ProfileButton>
      <ProfileButton name="cube">Pedidos</ProfileButton>
      <ProfileButton name="user">Dados Pessoais</ProfileButton>
      <ProfileButton name="truck">Endereços</ProfileButton>
      <ProfileButton name="credit-card">Cartões de crédito</ProfileButton>
      <ProfileButton name="lock" margin={10}>
        Senha de acesso
      </ProfileButton>
      <SingOutButton>
        <SignOutText>Sair</SignOutText>
        <FontAwesome
          style={{ marginLeft: 20 }}
          name="sign-out"
          color="red"
          size={20}
        />
      </SingOutButton>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: <Text style={{ fontSize: 12 }}>Perfil</Text>,
  tabBarIcon: props => <TabIcon name="user" {...props} />,
  tabBarColor: `${colors.primary}`,
};

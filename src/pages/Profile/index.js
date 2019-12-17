import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons/';

import * as ProfileActions from '~/store/modules/profile/actions';

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

export default function Profile({ navigation }) {
  const dispatch = useDispatch();
  const UserProfile = useSelector(state => state.profile);

  function handleSignOut() {
    dispatch(ProfileActions.SignOut());
    navigation.navigate('SignIn');
  }

  return (
    <Container>
      <HeaderProfile>
        <ProfileAvatar
          source={{
            uri: 'https://api.adorable.io/avatars/100/abott@adorable.png',
          }}
        />
        <ProfileInfo>
          <Name>{UserProfile.name}</Name>
          <Email>{UserProfile.email}</Email>
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
      <SingOutButton onPress={handleSignOut}>
        <SignOutText>Sair</SignOutText>
        <FontAwesome
          style={{ marginLeft: 20 }}
          name="sign-out"
          color="rgba(255, 0, 0, 0.6)"
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

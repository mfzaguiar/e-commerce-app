import styled from 'styled-components/native';
import CustomText from '~/components/CustomText';
import colors from '~/styles/colors';

export const Container = styled.ScrollView.attrs({
  showVerticalScroll: false,
})`
  flex: 1;
`;

export const Name = styled(CustomText).attrs({
  fontFamily: 'roboto-regular',
  color: 'black',
  fontSize: 18,
})``;

export const Email = styled(CustomText).attrs({
  fontFamily: 'roboto-regular',
  color: `${colors.grey}`,
  fontSize: 15,
})``;

export const ProfileAvatar = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 20px;
`;

export const HeaderProfile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background: ${colors.white};
`;

export const ProfileInfo = styled.View`
  flex-direction: column;
  margin-left: 20px;
`;

export const SingOutButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
  padding: 20px;
`;

export const SignOutText = styled(CustomText).attrs({
  fontFamily: 'roboto-regular',
  color: `rgba(255, 0, 0, 0.6)`,
  fontSize: 20,
})``;

import styled from 'styled-components/native';
import CustomText from '~/components/CustomText';
import colors from '~/styles/colors';

export const Container = styled.ScrollView.attrs({
  showVerticalScroll: false,
})`
  flex: 1;
`;

export const Name = styled(CustomText)`
  font-family: 'roboto-regular';
  color: black;
  font-size: 18px;
`;

export const Email = styled(CustomText)`
  font-family: 'roboto-regular';
  color: ${colors.grey};
  font-size: 15px;
`;

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

export const SignOutText = styled(CustomText)`
  font-family: 'roboto-regular';
  color: rgba(255, 0, 0, 0.6);
  font-size: 20px;
`;

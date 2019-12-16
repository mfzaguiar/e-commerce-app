import styled from 'styled-components/native';
import CustomText from '~/components/CustomText';

import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background: ${colors.primary};
`;

export const Wrapper = styled.View`
  margin: 10px 0;
  align-items: flex-start;
`;

export const CustomImage = styled.Image.attrs({})`
  height: 80px;
  margin-bottom: 20px;
`;

export const Label = styled(CustomText).attrs({
  fontFamily: 'roboto-bold',
  fontSize: 16,
  color: `${colors.white}`,
})``;

export const LoginButton = styled.TouchableOpacity`
  height: 50px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  background: rgba(255, 255, 255, 0.3);
  margin-top: 20px;
  border-radius: 4px;
`;

export const ButtonText = styled(CustomText).attrs({
  fontFamily: 'roboto-bold',
  fontSize: 16,
  color: `${colors.white}`,
})``;

import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons/';
import colors from '~/styles/colors';

export const Button = styled.TouchableOpacity`
  min-height: 50px;
  flex-direction: row;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background: tomato;
  flex: 1;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: ${colors.white};
  font-size: 22px;
`;

export const Icon = styled(FontAwesome).attrs({
  size: 22,
})`
  color: ${colors.white};
  margin-right: 20px;
`;

import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons/';
import colors from '~/styles/colors';

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background: tomato;
  border-radius: 4px;
`;

export const Text = styled.Text`
  font-weight: bold;
  color: ${colors.white};
  font-size: 20px;
`;

export const Icon = styled(FontAwesome).attrs({
  size: 22,
})`
  color: ${colors.white};
  margin-right: 20px;
`;

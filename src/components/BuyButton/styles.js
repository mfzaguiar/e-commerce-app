import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons/';

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
  color: #fff;
  font-size: 22px;
`;

export const Icon = styled(FontAwesome).attrs({
  size: 22,
})`
  color: #fff;
  margin-right: 20px;
`;

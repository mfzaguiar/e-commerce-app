import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons/';
import CustomText from '~/components/CustomText';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: ${colors.white};
  margin: ${props => (props.margin !== 0 ? `${props.margin}px 0` : `1px`)};
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(CustomText)`
  font-family: 'roboto-regular';
  font-size: 15px;
  color: ${colors.grey};
`;

export const Icon = styled(FontAwesome).attrs({
  color: colors.grey,
  size: 22,
})`
  margin-right: 20px;
`;

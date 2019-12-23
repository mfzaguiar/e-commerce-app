import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons/';
import CustomText from '~/components/CustomText';
import colors from '~/styles/colors';

export const Container = styled.TouchableOpacity`
  padding: 20px;
  background: ${colors.white};
  margin: ${props => (props.margin !== 0 ? `${props.margin}px 0` : `1px 0px`)};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  width: 25px;
`;

export const Wrapper = styled.View`
  flex: 1;
  align-items: flex-start;
  margin-left: 20px;
`;

import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons/';
import colors from '~/styles/colors';

export const Container = styled.View``;

export const StarContainer = styled.View`
  flex-direction: row;
`;

export const Label = styled.Text`
  font-size: ${props => props.fontSize && `${props.fontSize}px`};
  color: ${props => props.color || colors.grey};
  margin: 0 0 2px 5px;
`;

export const StarIcon = styled(FontAwesome)`
  margin: 0 3px;
`;

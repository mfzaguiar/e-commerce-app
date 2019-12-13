import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  padding: 5px;
  background: ${colors.background};
`;

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyFavorite = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${Dimensions.get('window').width * 1};
`;

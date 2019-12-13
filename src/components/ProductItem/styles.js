import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import BuyButton from '~/components/BuyButton';
import colors from '~/styles/colors';

export const ProductItem = styled.TouchableOpacity`
  height: 150px;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  margin-top: 5px;
  flex-direction: row;
  padding: 5px;
`;

export const LeftContent = styled.View`
  flex: 1;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
  aspectRatio: 1,
})``;

export const RightContent = styled.View`
  flex: 2;
  border-left-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
  margin-left: 4px;
  padding: 0 5px 5px 5px;
  justify-content: space-between;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-weight: bold;
  font-size: 14px;
  color: #737373;
`;

export const Price = styled.Text`
  font-size: 22px;
  color: ${colors.primary};
  font-weight: bold;
  letter-spacing: 1;
`;

export const PriceInfo = styled.Text`
  font-size: 18px;
  font-weight: normal;
  color: ${colors.darkgrey};
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  align-self: stretch;
  align-items: center;
  justify-content: space-between;
`;

export const ProductActions = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const AddButton = styled(BuyButton)`
  height: 50px;
`;

export const FavoriteButton = styled(RectButton)`
  position: absolute;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  top: 0;
  left: 5px;
`;

import styled from 'styled-components/native';
import CustomText from '~/components/CustomText';
import colors from '~/styles/colors';
import { RectButton } from 'react-native-gesture-handler';

export const ProductItem = styled.View`
  height: 200px;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  margin-top: 5px;
`;

export const ProductContent = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 5px;
`;

export const LeftContent = styled.View`
  flex: 1;
  justify-content: space-evenly;
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
  justify-content: space-evenly;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-weight: bold;
  font-size: 14px;
  color: #737373;
`;

export const Price = styled.Text`
  font-size: 20px;
  color: ${colors.primary};
  font-weight: bold;
  letter-spacing: 1;
`;

export const Title = styled.Text`
  font-size: 12px;
  font-weight: normal;
  color: ${colors.grey};
`;

export const Wrapper = styled.View`
  align-self: stretch;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperActions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const ProductActions = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const AmountText = styled(CustomText).attrs({
  fontFamily: 'roboto-bold',
  fontSize: 18,
  color: `${colors.grey}`,
})``;

export const IconButton = styled(RectButton)`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background: ${colors.primary};
  margin: 5px 10px;
`;

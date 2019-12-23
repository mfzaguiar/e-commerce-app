import styled from 'styled-components/native';
import CustomText from '~/components/CustomText';
import BuyButton from '~/components/BuyButton';
import colors from '~/styles/colors';
import { RectButton } from 'react-native-gesture-handler';
import Rating from '~/components/Rating';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: ${colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${colors.white};
  padding: 10px 15px 0 15px;
`;

export const Name = styled(CustomText)`
  font-family: 'roboto-bold';
  font-size: 18px;
  color: ${colors.text};
  letter-spacing: 1;
  padding: 10px;
  text-align: justify;
`;

export const Description = styled(CustomText)`
  font-family: 'roboto-regular';
  line-height: 25;
  letter-spacing: 1.2;
  font-size: 16px;
  color: ${colors.text};
  padding: 10px;
  text-align: justify;
`;

export const PriceOriginal = styled(CustomText)`
  font-family: 'roboto-bold';
  font-size: 22px;
  color: ${colors.white};
  letter-spacing: 2;
`;

export const PriceContainer = styled.View`
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${colors.darkgrey};
  align-self: stretch;
`;

export const Price = styled(CustomText)`
  font-family: 'roboto-regular';
  font-size: 12px;
  color: ${colors.white};
  letter-spacing: 1;
`;

export const PriceDiscount = styled(CustomText)`
  font-family: 'roboto-bold';
  font-size: 22px;
  color: ${colors.primary};
  letter-spacing: 2;
`;

export const ProductInfo = styled.View`
  /* background: #eee; */
`;

export const ProductHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductFinish = styled.View`
  height: 70px;
  flex-direction: row;
  align-self: stretch;
  align-items: center;
  justify-content: space-between;
`;

export const Actions = styled.View`
  flex-direction: row;
  margin-right: 10px;
`;

export const AddButton = styled(BuyButton)`
  flex: 1;
  border-radius: 0;
`;

export const FavoriteButton = styled(RectButton)`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.3);
  align-items: center;
  justify-content: center;
`;

export const CustomRating = styled(Rating)`
  padding: 0px 0 5px 10px;
`;

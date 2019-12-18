import styled from 'styled-components/native';
import CustomText from '~/components/CustomText';
import Button from '~/components/BuyButton';
import colors from '~/styles/colors';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: ${colors.grey};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${colors.darkgrey};
  padding: 10px 15px;
`;

export const Name = styled(CustomText)`
  font-family: 'roboto-bold';
  font-size: 16px;
  color: ${colors.white};
  letter-spacing: 1;
  padding: 10px 10px;
  text-align: center;
`;

export const Description = styled(CustomText)`
  font-family: 'roboto-regular';
  line-height: 25;
  font-size: 18px;
  color: ${colors.white};
  padding: 10px;
  text-align: justify;
`;

export const PriceOriginal = styled(CustomText)`
  font-family: 'roboto-regular';
  font-size: 22px;
  color: ${colors.white};
  letter-spacing: 1;
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
  background: rgba(255, 255, 255, 0.1);
`;

export const ProductHeader = styled.View`
  width: 150px;
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

export const AddButton = styled(Button)`
  flex: 1;
`;

import styled from 'styled-components/native';
import Button from '~/components/BuyButton';
import colors from '~/styles/colors';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: #828282;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  padding: 10px;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 2,
})`
  margin: 0 15px;
  font-size: 20px;
  font-weight: bold;
  color: ${colors.white};
`;

export const Description = styled.Text`
  font-size: 18px;
  color: ${colors.white};
  line-height: 25;
  margin: 10px 15px;
`;

export const PriceOriginal = styled.Text`
  font-size: 22px;
  color: ${colors.white};
  font-weight: normal;
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

export const Price = styled.Text`
  font-size: 12px;
  color: ${colors.white};
  font-weight: normal;
  letter-spacing: 1;
`;

export const PriceDiscount = styled.Text`
  font-size: 22px;
  color: ${colors.primary};
  font-weight: bold;
  letter-spacing: 2;
`;

export const ProductInfo = styled.View`
  /* background: red; */
`;

export const ProductHeader = styled.View`
  flex-direction: row;
  align-self: stretch;
  align-items: center;
  justify-content: space-between;
  background: ${colors.white};
  padding: 5px 10px;
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

import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import CustomText from '~/components/CustomText';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  padding: 5px;
  background: ${colors.background};
`;

export const TotalWrapper = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-end;
  line-height: 0;
  margin: 5px 0;
`;

export const TotalText = styled(CustomText).attrs({
  fontFamily: 'roboto-bold',
  fontSize: 16,
  color: `${colors.grey}`,
})``;

export const TotalPrice = styled(CustomText).attrs({
  fontFamily: 'roboto-bold',
  fontSize: 28,
  color: 'black',
})``;

export const FinishButton = styled(RectButton)`
  background: ${colors.primary};
  border-radius: 4px;
  padding: 12px 20px;
  align-items: center;
  justify-content: center;
`;

export const BuyButton = styled(RectButton)`
  background: ${colors.primary};
  border-radius: 4px;
  padding: 12px 20px;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 200px;
`;

export const ButtonText = styled(CustomText).attrs({
  fontFamily: 'roboto-bold',
  fontSize: 18,
  color: `${colors.white}`,
})``;

export const EmptyCartImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${Dimensions.get('window').width * 1};
`;

import styled from 'styled-components/native';
import CustomText from '~/components/CustomText';
import colors from '~/styles/colors';

export const Container = styled.View`
  padding: 3px;
  background: ${colors.discount};
  max-width: 50px;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  top: -150px;
`;

export const DiscountText = styled(CustomText)`
  font-family: 'roboto-bold';
  font-size: 12px;
  color: #fff;
`;

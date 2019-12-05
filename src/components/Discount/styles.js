import styled from 'styled-components/native';
import CustomText from '~/components/CustomText';

export const Container = styled.View`
  padding: 3px;
  background: rgba(255, 0, 0, 0.6);
  max-width: 50px;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  top: -125px;
`;

export const DiscountText = styled(CustomText).attrs({
  fontFamily: 'roboto-bold',
  fontSize: 10,
  color: '#fff',
})``;

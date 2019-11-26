import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

export const Name = styled.Text`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  margin: 10px 0;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #fff;
  line-height: 25;
  margin: 10px 15px;
`;

export const PriceOriginal = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: normal;
  letter-spacing: 1;
`;

export const PriceContainer = styled.View`
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #4f4f4f;
  align-self: stretch;
`;

export const Price = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: normal;
  letter-spacing: 1;
`;

export const PriceDiscount = styled.Text`
  font-size: 22px;
  color: tomato;
  font-weight: bold;
  letter-spacing: 2;
`;

export const ProductInfo = styled.View`
  flex: 1;
  align-items: center;
  background: #828282;
`;

export const ProductHeader = styled.View`
  flex: 1;
  flex-direction: row;
  align-self: stretch;
  align-items: center;
  justify-content: space-between;
  background: #fff;
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

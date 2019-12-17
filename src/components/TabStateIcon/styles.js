import styled from 'styled-components/native';

export const Container = styled.View``;

export const Circle = styled.View`
  position: absolute;
  height: 16px;
  width: 16px;
  border-radius: 8px;
  background: rgba(255, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  top: -5px;
  left: 15px;
`;

export const Number = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 10px;
`;

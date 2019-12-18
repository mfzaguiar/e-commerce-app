import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  height: 280px;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const ContainerImage = styled.View`
  flex: 1;
  background: transparent;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
  aspectRatio: 1,
})`
  width: 100%;
  height: 100%;
`;

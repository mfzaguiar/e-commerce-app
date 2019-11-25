import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  min-height: 300px;
  align-items: center;
  justify-content: center;
`;

export const ContainerImage = styled.View`
  flex: 1;
  background: white;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  flex: 1;
`;

import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  background: tomato;
  align-items: center;
  padding: 5px 15px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'center',
})`
  max-height: 50px;
  max-width: 70px;
  margin-right: 10px;
`;

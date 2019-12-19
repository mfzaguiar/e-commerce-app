import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  background: tomato;
  align-items: center;
  padding: 8px 15px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'center',
})`
  height: 40px;
  width: 75px;
  margin-right: 10px;
`;

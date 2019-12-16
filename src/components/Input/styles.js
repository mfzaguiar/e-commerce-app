import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 5px;
  padding: 0 15px;
  height: 50px;
  background: rgba(0, 0, 0, 0.6);
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255, 0.8)',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #fff;
`;

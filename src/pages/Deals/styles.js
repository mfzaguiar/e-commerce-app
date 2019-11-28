import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 5px;
`;

export const ContainerGradient = styled(LinearGradient).attrs({
  colors: ['#9e301a', '#4b4949', '#bc4328', '#000000'],
})`
  flex: 1;
`;

export const HeaderImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 300px;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #fff;
`;

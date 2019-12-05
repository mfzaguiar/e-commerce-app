import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 5px;
`;

export const ContainerGradient = styled(LinearGradient).attrs({
  colors: ['#ff6347', '#1c1919', '#ff6347'],
})`
  flex: 1;
`;

export const WrapperCount = styled.View`
  background: rgba(0, 0, 0, 0.1);
  padding: 5px 0;
`;

export const HeaderImage = styled.Image.attrs({
  alignSelf: 'center',
})`
  height: ${Dimensions.get('window').width * 0.5};
  width: ${Dimensions.get('window').width * 0.5};
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  margin-bottom: 5px;
`;

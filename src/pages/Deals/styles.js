import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { ActivityIndicator, Dimensions } from 'react-native';
import { Animated } from 'react-native';

export const Container = styled.View`
  padding: 0 5px;
`;

export const ContainerGradient = styled(LinearGradient).attrs({
  colors: ['#ff6347', '#1c1919', '#ff6347'],
})`
  flex: 1;
`;

export const WrapperCount = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 50px 0;
`;

export const HeaderImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: ${Dimensions.get('window').width * 0.25};
  width: ${Dimensions.get('window').width * 0.25};
`;

export const Title = styled(Animated.Text).attrs({})`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  margin-bottom: 5px;
`;

export const SpinnerLoading = styled(ActivityIndicator).attrs({
  color: 'tomato',
  alignSelf: 'center',
  marginTop: 30,
  size: 'large',
})``;

export const HeaderCountDown = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

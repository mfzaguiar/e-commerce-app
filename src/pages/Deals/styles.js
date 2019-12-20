import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { ActivityIndicator, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

import { Animated } from 'react-native';

export const ContainerGradient = styled(LinearGradient).attrs({
  // colors: ['#ff6347', '#1c1919', '#ff6347'],
  colors: ['#dd092c', '#1c1919', '#dd092c'],
})`
  flex: 1;
`;

export const Container = styled.ScrollView`
  padding: 0 5px;
  margin-bottom: 5px;
  height: ${Dimensions.get('window').height * 0.5};
`;

export const WrapperCount = styled.View`
  align-items: center;
  height: 200px;
`;

export const HeaderImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  flex: 1;
  height: ${Dimensions.get('window').width * 0.25};
  width: ${Dimensions.get('window').width * 1};
`;

export const Title = styled(Animated.Text).attrs({})`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  margin-bottom: 5px;
`;

export const SpinnerLoading = styled(ActivityIndicator).attrs({
  color: '#fff',
  alignSelf: 'center',
  marginTop: 30,
  size: 'large',
})``;

export const HeaderCountDown = styled.View`
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  margin-top: 50px;
  padding: 10px;
  border-radius: 4px;
`;

export const Animation = styled(LottieView).attrs({
  resizeMode: 'cover',
})`
  width: ${Dimensions.get('window').width * 1};
  max-height: ${Dimensions.get('window').width * 1};
`;

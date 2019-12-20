import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import CustomText from '~/components/CustomText';

export const ContainerGradient = styled(LinearGradient).attrs({
  colors: ['#ff6347', '#a40720', '#1c1919'],
})`
  flex: 1;
`;

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const HeaderImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  flex: 1;
  height: ${Dimensions.get('window').width * 0.25};
  width: ${Dimensions.get('window').width * 1};
`;

export const Title = styled(CustomText)`
  font-family: 'roboto-bold';
  font-size: 18px;
  text-align: center;
  color: #fff;
  margin-bottom: 5px;
`;

export const WrapperCount = styled.View`
  align-self: stretch;
  margin: 10px;
`;

export const HeaderCountDown = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
`;

export const WrapperAnimation = styled.View`
  align-self: center;
  justify-content: center;
`;

export const LoadingAnimation = styled(LottieView).attrs({
  resizeMode: 'contain',
})`
  height: 80px;
  width: 80px;
  margin-top: 35px;
`;

import styled from 'styled-components/native';
import StyledText from '~/components/CustomText';
import colors from '~/styles/colors';
import { ActivityIndicator, Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
`;

export const DepartmentContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex-direction: row;
  align-self: center;
  max-height: 100px;
`;

export const DepartmentItem = styled.View`
  flex-direction: column;
  margin: 0 5px;
  align-items: center;
  justify-content: center;
`;

export const DepartmentLogo = styled.TouchableOpacity`
  border-radius: 60px;
  background: ${colors.primary};
  border-width: 3px;
  border-color: ${colors.white};
`;

export const DepartmentImage = styled.Image.attrs({
  resizeMode: 'center',
})`
  height: 60px;
  width: 60px;
`;

export const DepartmentText = styled.Text`
  font-size: 11px;
  font-weight: bold;
  color: #737373;
  margin-top: 5px;
`;

export const SalesContainer = styled.View`
  flex: 1;
  margin: 10px;
`;

export const SalesHeader = styled.View`
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
`;

export const SalesText = styled(StyledText).attrs({
  fontFamily: 'roboto-bold',
  fontSize: 16,
  color: '#737373',
})``;

export const SpinnerLoading = styled(ActivityIndicator).attrs({
  color: 'tomato',
  alignSelf: 'center',
  marginTop: 20,
  size: 'large',
})``;

export const EmptyImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${Dimensions.get('window').width * 1};
`;

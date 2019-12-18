import styled from 'styled-components/native';
import CustomText from '~/components/CustomText';
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
  margin: 0 5px;
`;

export const DepartmentItem = styled.View`
  flex-direction: column;
  margin: 0 5px;
  align-items: center;
  justify-content: center;
`;

export const DepartmentLogo = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: ${colors.primary};
  border-width: 3px;
  border-color: ${colors.white};
  align-items: center;
  justify-content: center;
`;

export const DepartmentImage = styled.Image.attrs({
  resizeMode: 'center',
})`
  flex: 1;
`;

export const DepartmentText = styled(CustomText)`
  font-family: 'roboto-bold';
  font-size: 11px;
  color: #737373;
`;

export const SalesContainer = styled.View`
  flex: 1;
  margin: 10px;
`;

export const SalesHeader = styled.View`
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
`;

export const SalesText = styled(CustomText)`
  font-family: 'roboto-bold';
  font-size: 16px;
  color: #737373;
`;

export const SpinnerLoading = styled(ActivityIndicator).attrs({
  color: 'tomato',
  alignSelf: 'center',
  marginTop: 20,
  size: 'large',
})``;

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${Dimensions.get('window').width * 1};
`;

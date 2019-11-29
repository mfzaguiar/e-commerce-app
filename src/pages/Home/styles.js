import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  background: ${colors.background};
  padding: 10px 0;
`;

export const DepartmentContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex-direction: row;
  align-self: center;
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
  height: 80px;
  width: 80px;
`;

export const DepartmentText = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #8d8d8d;
  margin-top: 5px;
`;

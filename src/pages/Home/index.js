import React from 'react';
import { Text } from 'react-native';

import TabIcon from '~/components/TabIcon';
import colors from '~/styles/colors';

import {
  Container,
  DepartmentContainer,
  DepartmentItem,
  DepartmentLogo,
  DepartmentImage,
  DepartmentText,
} from './styles';

import drone from '~/assets/icons/drone.png';
import tv from '~/assets/icons/tv.png';
import smartphone from '~/assets/icons/smartphone.png';
import videogames from '~/assets/icons/videogames.png';

export default function Home() {
  return (
    <Container>
      <DepartmentContainer>
        <DepartmentItem>
          <DepartmentLogo>
            <DepartmentImage source={drone} />
          </DepartmentLogo>
          <DepartmentText>Drone</DepartmentText>
        </DepartmentItem>
        <DepartmentItem>
          <DepartmentLogo>
            <DepartmentImage source={tv} />
          </DepartmentLogo>
          <DepartmentText>TV</DepartmentText>
        </DepartmentItem>
        <DepartmentItem>
          <DepartmentLogo>
            <DepartmentImage source={videogames} />
          </DepartmentLogo>
          <DepartmentText>Video games</DepartmentText>
        </DepartmentItem>
        <DepartmentItem>
          <DepartmentLogo>
            <DepartmentImage source={smartphone} />
          </DepartmentLogo>
          <DepartmentText>Smarthphone</DepartmentText>
        </DepartmentItem>
      </DepartmentContainer>
    </Container>
  );
}

Home.navigationOptions = {
  tabBarLabel: <Text style={{ fontSize: 12 }}>Início</Text>,
  tabBarIcon: props => <TabIcon name="home" {...props} />,
  tabBarColor: `${colors.primary}`,
};

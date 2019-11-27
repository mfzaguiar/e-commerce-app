import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import Product from '~/components/Product';
import api from '~/services/api';
import TabIcon from '~/components/TabIcon';
import colors from '~/styles/colors';

// import { Container } from './styles';

export default function Home() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadingData() {
      setLoading(true);
      const response = await api.get('/products/3');
      setData(response.data);
      setLoading(false);
    }
    loadingData();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Product product={data} />
    </View>
  );
}

Home.navigationOptions = {
  tabBarLabel: <Text style={{ fontSize: 12 }}>Início</Text>,
  tabBarIcon: props => <TabIcon name="home" {...props} />,
  tabBarColor: `${colors.primary}`,
};

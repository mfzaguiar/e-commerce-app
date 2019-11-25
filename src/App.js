import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { registerRootComponent } from 'expo';
import Constants from 'expo-constants';

import Product from './components/Product';
import api from './services/api';
import './config/ReactotronConfig';

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    height: Constants.statusBarHeight,
  },
});

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadingData() {
      setLoading(true);
      const response = await api.get('/products/1');
      setData(response.data);
      setLoading(false);
    }
    loadingData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.statusBar} />
      <Product product={data} />
    </View>
  );
}

export default registerRootComponent(App);

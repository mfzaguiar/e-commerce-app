import React from 'react';
import { StyleSheet, View } from 'react-native';
import { registerRootComponent } from 'expo';
import Constants from 'expo-constants';
import './config/ReactotronConfig';
import Routes from '~/routes';

const styles = StyleSheet.create({
  statusBar: {
    height: Constants.statusBarHeight,
  },
});

function App() {
  return (
    <>
      <View style={styles.statusBar} />
      <Routes />
    </>
  );
}

export default registerRootComponent(App);

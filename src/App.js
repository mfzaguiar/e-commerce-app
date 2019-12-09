import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { registerRootComponent } from 'expo';
import Constants from 'expo-constants';

import './config/ReactotronConfig';
import Routes from '~/routes';
import store from '~/store';

const styles = StyleSheet.create({
  statusBar: {
    height: Constants.statusBarHeight,
  },
});

function App() {
  return (
    <>
      <Provider store={store}>
        <View style={styles.statusBar} />
        <Routes />
      </Provider>
    </>
  );
}

export default registerRootComponent(App);

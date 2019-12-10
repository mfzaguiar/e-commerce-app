import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';

export default function CustomText({
  children,
  fontFamily = 'roboto-regular',
  fontSize = 20,
  color = '#fff',
}) {
  const [fontLoad, setFontLoad] = useState(false);

  useEffect(() => {
    async function handleFont() {
      await Font.loadAsync({
        'roboto-regular': require('~/assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('~/assets/fonts/Roboto-Bold.ttf'),
      });
      setFontLoad(true);
    }
    handleFont();
  }, []);

  return (
    fontLoad && (
      <Text
        style={{
          fontFamily,
          fontSize,
          color,
        }}
      >
        {children}
      </Text>
    )
  );
}

import React, { useState, useEffect } from 'react';
import { Animated, FlatList } from 'react-native';
import CountDown from 'react-native-countdown-component';

import {
  Container,
  HeaderCountDown,
  ContainerGradient,
  WrapperCount,
  HeaderImage,
  Title,
  SpinnerLoading,
} from './styles';

import ProductItem from '~/components/ProductItem';
import bfImage from '~/assets/images/black-friday.png';
import api from '~/services/api';

const HEADER_MIN_HEIGHT = 50;
const HEADER_MAX_HEIGHT = 200;

export default function Deals({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [products, setProduts] = useState([]);
  const [scrollOffsetY] = useState(new Animated.Value(0));

  const headerHeight = scrollOffsetY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const discountProducts = response.data.filter(p => p.discount > 0);

      setProduts(discountProducts);
      // setProduts(response.data);
      setLoading(false);
    }
    loadProducts();
  }, []);

  return (
    <ContainerGradient>
      <Animated.ScrollView
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollOffsetY } } },
        ])}
      >
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: headerHeight,
          }}
        >
          <WrapperCount>
            <HeaderImage source={bfImage} />

            <HeaderCountDown>
              <Title>Oferta por tempo limitado</Title>
              <CountDown
                until={60 * 10 + 30}
                digitStyle={{ backgroundColor: '#f95428' }}
                digitTxtStyle={{ color: '#fff' }}
                timeLabelStyle={{
                  color: '#fff',
                  fontSize: 10,
                  fontWeight: 'bold',
                }}
                separatorStyle={{ color: '#fff' }}
                timeToShow={['H', 'M', 'S']}
                showSeparator
                size={20}
              />
            </HeaderCountDown>
          </WrapperCount>
        </Animated.View>

        {loading ? (
          <SpinnerLoading />
        ) : (
          <Container>
            <FlatList
              numColumns={1}
              data={products}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <ProductItem item={item} navigation={navigation} />
              )}
            />
          </Container>
        )}
      </Animated.ScrollView>
    </ContainerGradient>
  );
}

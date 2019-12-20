import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import CountDown from 'react-native-countdown-component';

import {
  Container,
  HeaderCountDown,
  ContainerGradient,
  WrapperCount,
  Title,
  WrapperAnimation,
  LoadingAnimation,
} from './styles';

import ProductItem from '~/components/ProductItem';
import loadingAnimation from '~/assets/animations/loading.json';

import api from '~/services/api';

export default function Deals({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [products, setProduts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      const discountProducts = response.data.filter(p => p.discount > 0);
      setProduts(discountProducts);
      setLoading(false);
    }
    loadProducts();
  }, []);

  return (
    <ContainerGradient>
      <WrapperCount>
        <HeaderCountDown>
          <Title>Oferta por tempo limitado</Title>
          <CountDown
            until={60 * 10 + 30}
            digitStyle={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
            digitTxtStyle={{ color: '#fff' }}
            timeLabelStyle={{
              color: '#fff',
              fontSize: 12,
              fontWeight: 'bold',
            }}
            separatorStyle={{ color: '#fff' }}
            timeToShow={['H', 'M', 'S']}
            showSeparator
            size={22}
          />
        </HeaderCountDown>
      </WrapperCount>

      {loading ? (
        <WrapperAnimation>
          <LoadingAnimation autoPlay loop source={loadingAnimation} />
        </WrapperAnimation>
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
    </ContainerGradient>
  );
}

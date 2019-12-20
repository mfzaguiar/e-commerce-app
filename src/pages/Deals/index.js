import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import CountDown from 'react-native-countdown-component';

import {
  Container,
  HeaderCountDown,
  ContainerGradient,
  WrapperCount,
  Title,
  SpinnerLoading,
  Animation,
} from './styles';

import ProductItem from '~/components/ProductItem';
import christmas from '~/assets/animations/merrychristmas.json';

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
        <Animation autoPlay loop source={christmas} />
        <HeaderCountDown>
          <Title>Oferta de Natal por tempo limitado</Title>
          <CountDown
            until={60 * 10 + 30}
            digitStyle={{ backgroundColor: 'rgba(255,255,255,0.8)' }}
            digitTxtStyle={{ color: '#333333' }}
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
    </ContainerGradient>
  );
}

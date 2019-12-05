import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import CountDown from 'react-native-countdown-component';

import {
  Container,
  ContainerGradient,
  WrapperCount,
  HeaderImage,
  Title,
  SpinnerLoading,
} from './styles';

import ProductItem from '~/components/ProductItem';
import bfImage from '~/assets/images/black-friday.png';
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
      <Container>
        <HeaderImage source={bfImage} />
        <WrapperCount>
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
            size={26}
          />
        </WrapperCount>

        {loading ? (
          <SpinnerLoading />
        ) : (
          <FlatList
            contentContainerStyle={{ paddingBottom: 10 }}
            numColumns={1}
            data={products}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <ProductItem item={item} navigation={navigation} />
            )}
          />
        )}
      </Container>
    </ContainerGradient>
  );
}

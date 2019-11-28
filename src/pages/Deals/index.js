import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { Container, ContainerGradient, HeaderImage, Title } from './styles';

import ProductItem from '~/components/ProductItem';
import bfImage from '~/assets/images/headerBlackFriday.png';
import api from '~/services/api';

export default function Deals({ navigation }) {
  const [products, setProduts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      setProduts(response.data);
    }
    loadProducts();
  }, []);

  return (
    <ContainerGradient>
      <HeaderImage source={bfImage} />
      <Container>
        <Title>Ofertas Black Friday</Title>
        <FlatList
          numColumns={1}
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ProductItem item={item} navigation={navigation} />
          )}
        />
      </Container>
    </ContainerGradient>
  );
}

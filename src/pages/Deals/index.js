import React, { useState, useEffect } from 'react';
import { Text, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons/';
import { formatPrice } from '~/util/format';

import {
  Container,
  ContainerGradient,
  HeaderImage,
  Title,
  ProductItem,
  ProductContent,
  LeftContent,
  ProductImage,
  RightContent,
  Description,
  PriceContainer,
  Price,
  PriceInfo,
  AddButton,
} from './styles';

import TabIcon from '~/components/TabIcon';
import bfImage from '~/assets/images/headerBlackFriday.png';
import api from '~/services/api';

export default function Deals() {
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
            <ProductItem>
              <ProductContent>
                <LeftContent>
                  <ProductImage
                    source={{
                      uri: `${item.images[0]}`,
                    }}
                  />
                </LeftContent>
                <RightContent>
                  <Description>{item.title}</Description>
                  <PriceContainer>
                    <Price>
                      {formatPrice(
                        item.price * (item.discount > 0 ? item.discount : 1)
                      )}
                      <PriceInfo> à vista</PriceInfo>
                    </Price>
                    <FontAwesome name="heart" color="#737373" size={20} />
                  </PriceContainer>
                  <AddButton>Adicionar</AddButton>
                </RightContent>
              </ProductContent>
            </ProductItem>
          )}
        />
      </Container>
    </ContainerGradient>
  );
}

Deals.navigationOptions = {
  tabBarLabel: <Text style={{ fontSize: 12 }}>Ofertas</Text>,
  tabBarIcon: props => <TabIcon name="tag" {...props} />,
  tabBarColor: '#1C1919',
};

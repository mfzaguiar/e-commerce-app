import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { formatPrice } from '~/util/format';
import { FontAwesome } from '@expo/vector-icons/';

import {
  Header,
  Container,
  ProductInfo,
  ProductHeader,
  Actions,
  Name,
  PriceOriginal,
  PriceContainer,
  Price,
  PriceDiscount,
  ProductFinish,
  Description,
  AddButton,
} from './styles';

import Rating from '~/components/Rating';
import Carousel from '~/components/Carousel';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Product({ navigation }) {
  const product = navigation.getParam('product');
  const { params } = navigation.state;

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.navigate(params.keyScreen)}>
          <FontAwesome name="arrow-left" color="#fff" size={18} />
        </TouchableOpacity>
        <Name>{product.title}</Name>
      </Header>
      <Carousel
        data={product.images}
        dataSize={Object.keys({ ...product.images }).length}
      />
      <ProductInfo>
        <ProductHeader>
          <Rating
            defaultRating={product.rating}
            defaultNumRating={product.numrating}
          />
          <Actions>
            <FontAwesome name="heart" size={25} color="#EB5757" />
            <FontAwesome
              name="share-alt"
              style={{ marginLeft: 10 }}
              size={25}
              color="#2D9CDB"
            />
          </Actions>
        </ProductHeader>
        <ProductFinish>
          {product.discount ? (
            <PriceContainer>
              <Price>DE {formatPrice(product.price)} POR</Price>
              <PriceDiscount>
                {formatPrice(product.price * product.discount)}
              </PriceDiscount>
            </PriceContainer>
          ) : (
            <PriceContainer>
              <PriceOriginal>{formatPrice(product.price)}</PriceOriginal>
            </PriceContainer>
          )}

          <AddButton>Comprar</AddButton>
        </ProductFinish>
        <Description>{product.description}</Description>
      </ProductInfo>
    </Container>
  );
}

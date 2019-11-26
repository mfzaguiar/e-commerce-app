import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { formatPrice } from '~/util/format';
import { FontAwesome } from '@expo/vector-icons/';

import {
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
} from './styles';

import Rating from '~/components/Rating';
import Button from '~/components/BuyButton';
import Carousel from '~/components/Carousel';

export default function Product({ product }) {
  return (
    <Container>
      <View style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
        <Name>{product.title}</Name>
      </View>
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

          <Button>Comprar</Button>
        </ProductFinish>
        <Description>{product.description}</Description>
      </ProductInfo>
    </Container>
  );
}

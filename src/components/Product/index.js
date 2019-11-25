import React, { useEffect, useState } from 'react';
import { formatPrice } from '~/util/format';
import { FontAwesome } from '@expo/vector-icons/';

import {
  Container,
  ProductImage,
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
      <Name>{product.title}</Name>
      <Carousel
        data={product.images}
        dataSize={Object.keys({ ...product.images }).length}
      />
      <ProductInfo>
        <ProductHeader>
          <Rating />
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

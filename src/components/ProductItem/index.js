import React from 'react';
import { FontAwesome } from '@expo/vector-icons/';

import { formatPrice } from '~/util/format';
import Discount from '~/components/Discount';

import {
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

export default function ProdItem({ navigation, item }) {
  return (
    <ProductItem
      onPress={() =>
        navigation.navigate('Product', {
          product: item,
          keyScreen: navigation.state.key,
        })
      }
    >
      <ProductContent>
        <LeftContent>
          <ProductImage
            source={{
              uri: `${item.images[0]}`,
            }}
          />
          {item.discount > 0 && <Discount>{item.discount}</Discount>}
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
  );
}

import React from 'react';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons/';

import { formatPrice } from '~/util/format';

import {
  ProductItem,
  ProductContent,
  LeftContent,
  ProductImage,
  RightContent,
  Description,
  Wrapper,
  WrapperActions,
  Price,
  Title,
  AmountText,
  IconButton,
} from './styles';

function ProductCart({ item }) {
  const productImage = { ...item.images };

  return (
    <ProductItem>
      <ProductContent>
        <LeftContent>
          <ProductImage
            source={{
              uri: `${productImage[0]}`,
            }}
          />
          <WrapperActions>
            <FontAwesome name="heart" color="#737373" size={20} />
            <FontAwesome name="trash" color="#737373" size={20} />
          </WrapperActions>
        </LeftContent>
        <RightContent>
          <Description>{item.title}</Description>
          <Wrapper>
            <Title>Quantidade</Title>
            <WrapperActions>
              <IconButton>
                <FontAwesome name="minus" color="#fff" size={15} />
              </IconButton>
              <AmountText>{item.amount}</AmountText>
              <IconButton>
                <FontAwesome name="plus" color="#fff" size={15} />
              </IconButton>
            </WrapperActions>
          </Wrapper>
          <Wrapper>
            <Title>Subtotal</Title>
            <Price>
              {formatPrice(
                item.price * (item.discount > 0 ? item.discount : 1)
              )}
            </Price>
          </Wrapper>
        </RightContent>
      </ProductContent>
    </ProductItem>
  );
}

export default connect()(ProductCart);

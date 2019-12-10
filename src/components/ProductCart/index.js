import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons/';

import * as CartActions from '~/store/modules/cart/actions';
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

function ProductCart({ item, removeFromCart, updateAmount }) {
  const productImage = { ...item.images };

  function handleDeleteProduct(id) {
    removeFromCart(id);
  }

  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

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
            <RectButton onPress={() => handleDeleteProduct(item.id)}>
              <FontAwesome name="trash" color="#737373" size={20} />
            </RectButton>
          </WrapperActions>
        </LeftContent>
        <RightContent>
          <Description>{item.title}</Description>
          <Wrapper>
            <Title>Quantidade</Title>
            <WrapperActions>
              <IconButton onPress={() => decrement(item)}>
                <FontAwesome name="minus" color="#fff" size={15} />
              </IconButton>
              <AmountText>{item.amount}</AmountText>
              <IconButton onPress={() => increment(item)}>
                <FontAwesome name="plus" color="#fff" size={15} />
              </IconButton>
            </WrapperActions>
          </Wrapper>
          <Wrapper>
            <Title>Subtotal</Title>
            <Price>{item.subtotal}</Price>
          </Wrapper>
        </RightContent>
      </ProductContent>
    </ProductItem>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(ProductCart);

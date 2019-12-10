import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons/';

import * as CartActions from '~/store/modules/cart/actions';
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

function ProdItem({ navigation, item, addToCart }) {
  function handleAddProduct(product) {
    addToCart(product);
  }

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
          <AddButton onPress={() => handleAddProduct(item)}>
            Adicionar
          </AddButton>
        </RightContent>
      </ProductContent>
    </ProductItem>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(ProdItem);

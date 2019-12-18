import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

import { formatPrice } from '~/util/format';
import { FontAwesome } from '@expo/vector-icons/';

import * as FavoriteActions from '~/store/modules/favorite/actions';
import * as CartActions from '~/store/modules/cart/actions';

import {
  Header,
  Container,
  ProductInfo,
  ProductHeader,
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

export default function Product({ navigation }) {
  const product = navigation.getParam('product');
  const { params } = navigation.state;

  const [favorited, setFavorited] = useState(false);
  const dispatch = useDispatch();

  const favoritedItem = useSelector(state =>
    state.favorite.filter(f => f.id === product.id)
  );

  useEffect(() => {
    if (favoritedItem >= 0) {
      setFavorited(true);
    } else {
      setFavorited(false);
    }
  }, [favoritedItem]);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function handleFavorite(product) {
    dispatch(FavoriteActions.toggleFavorite(product));
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.navigate(params.keyScreen)}>
          <FontAwesome name="arrow-left" color="#fff" size={18} />
        </TouchableOpacity>
        <ProductHeader>
          <Rating
            Textcolor="rgba(255,255,255,0.8)"
            StarColor="rgba(255,255,255,0.8)"
            size={18}
            defaultRating={product.rating}
            defaultNumRating={product.numrating}
          />
          <RectButton onPress={() => handleFavorite(product)}>
            {!favorited ? (
              <FontAwesome
                name="heart"
                color="rgba(255, 0, 0, 0.6)"
                size={20}
              />
            ) : (
              <FontAwesome
                name="heart-o"
                color="rgba(255,255,255,0.8)"
                size={20}
              />
            )}
          </RectButton>
        </ProductHeader>
      </Header>
      <Carousel
        data={product.images}
        dataSize={Object.keys({ ...product.images }).length}
      />
      <ProductInfo>
        <Name>{product.title}</Name>

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

          <AddButton onPress={() => handleAddProduct(product.id)}>
            Adicionar
          </AddButton>
        </ProductFinish>
        <Description>{product.description}</Description>
      </ProductInfo>
    </Container>
  );
}

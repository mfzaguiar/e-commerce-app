import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons/';

import * as CartActions from '~/store/modules/cart/actions';
import * as FavoriteActions from '~/store/modules/favorite/actions';
import { formatPrice } from '~/util/format';
import Discount from '~/components/Discount';

import {
  ProductItem,
  LeftContent,
  ProductImage,
  RightContent,
  Description,
  PriceContainer,
  Price,
  PriceInfo,
  AddButton,
  FavoriteButton,
} from './styles';

export default function ProdItem({ navigation, item }) {
  const [favorited, setFavorited] = useState(false);
  const dispatch = useDispatch();

  const favoritedItem = useSelector(state => state.favorite);

  useEffect(() => {
    const favItem = favoritedItem.filter(f => f.id === item.id);
    if (favItem >= 0) {
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
    <ProductItem>
      <LeftContent>
        <ProductImage
          source={{
            uri: `${item.images[0]}`,
          }}
        />
        <FavoriteButton onPress={() => handleFavorite(item)}>
          {!favorited ? (
            <FontAwesome name="heart" color="rgba(255,0,0,0.8)" size={18} />
          ) : (
            <FontAwesome name="heart-o" color="#a4a4a4" size={18} />
          )}
        </FavoriteButton>
        {item.discount > 0 && <Discount>{item.discount}</Discount>}
      </LeftContent>
      <RightContent>
        <Description
          onPress={() =>
            navigation.navigate('Product', {
              product: item,
              keyScreen: navigation.state.key,
            })
          }
        >
          {item.title}
        </Description>
        <PriceContainer>
          <Price>
            {formatPrice(item.price * (item.discount > 0 ? item.discount : 1))}
            <PriceInfo> à vista</PriceInfo>
          </Price>
        </PriceContainer>
        <AddButton onPress={() => handleAddProduct(item.id)}>
          Adicionar
        </AddButton>
      </RightContent>
    </ProductItem>
  );
}

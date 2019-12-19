import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons/';

import * as CartActions from '~/store/modules/cart/actions';
import * as FavoriteActions from '~/store/modules/favorite/actions';
import { formatPrice } from '~/util/format';
import Rating from '~/components/Rating';
import Discount from '~/components/Discount';

import {
  ProductItem,
  LeftContent,
  ProductImage,
  RightContent,
  Title,
  PriceContainer,
  Price,
  PriceInfo,
  AddButton,
  FavoriteButton,
  RatingWrapper,
} from './styles';

export default function ProdItem({ navigation, item }) {
  const [favorited, setFavorited] = useState(false);
  const dispatch = useDispatch();

  const favoritedItem = useSelector(state =>
    state.favorite.filter(f => f.id === item.id)
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
    <ProductItem>
      <LeftContent>
        <ProductImage
          source={{
            uri: `${item.images[0]}`,
          }}
        />
        <RatingWrapper>
          <Rating
            size={11}
            fontSize={10}
            defaultRating={item.rating}
            defaultNumRating={item.numrating}
          />
        </RatingWrapper>

        <FavoriteButton onPress={() => handleFavorite(item)}>
          {!favorited ? (
            <FontAwesome name="heart" color="rgba(255, 0, 0, 0.6)" size={18} />
          ) : (
            <FontAwesome name="heart-o" color="#a4a4a4" size={18} />
          )}
        </FavoriteButton>
        {item.discount > 0 && <Discount>{item.discount}</Discount>}
      </LeftContent>
      <RightContent>
        <Title
          onPress={() =>
            navigation.navigate('Product', {
              product: item,
              keyScreen: navigation.state.key,
            })
          }
        >
          {item.title}
        </Title>

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

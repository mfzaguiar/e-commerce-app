import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { formatPrice } from '~/util/format';

import {
  Container,
  TotalWrapper,
  TotalText,
  TotalPrice,
  FinishButton,
  Wrapper,
  BuyButton,
  ButtonText,
  EmptyCartImage,
} from './styles';
import ProductCart from '~/components/ProductCart';
import emptyCart from '~/assets/images/empty-bag.png';

export default function Cart({ navigation }) {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.finalPrice * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.finalPrice * product.amount;
      }, 0)
    )
  );

  return (
    <Container>
      {cart.length > 0 ? (
        <>
          <FlatList
            numColumns={1}
            data={cart}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <ProductCart item={item} />}
          />
          <TotalWrapper>
            <TotalText>
              TOTAL
              <TotalPrice> {total}</TotalPrice>
            </TotalText>
          </TotalWrapper>
          <FinishButton>
            <ButtonText>Finalizar pedido</ButtonText>
          </FinishButton>
        </>
      ) : (
        <Wrapper>
          <EmptyCartImage source={emptyCart} />
          <BuyButton onPress={() => navigation.navigate('HomeRoute')}>
            <ButtonText>Ir às compras</ButtonText>
          </BuyButton>
        </Wrapper>
      )}
    </Container>
  );
}

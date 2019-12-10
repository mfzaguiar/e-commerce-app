import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { formatPrice } from '~/util/format';

import {
  Container,
  TotalWrapper,
  TotalText,
  TotalPrice,
  FinishButton,
  BuyButton,
  ButtonText,
  EmptyCartImage,
} from './styles';
import ProductCart from '~/components/ProductCart';
import TabIcon from '~/components/TabIcon';
import colors from '~/styles/colors';
import emptyCart from '~/assets/images/empty-bag.png';

function Cart({ cart, navigation }) {
  useEffect(() => {
    navigation.setParams({ cart: Number(cart.length || 0) });
  }, [cart]);

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
            <TotalText>TOTAL</TotalText>
            <TotalPrice>{formatPrice(2500)}</TotalPrice>
          </TotalWrapper>
          <FinishButton>
            <ButtonText>Finalizar pedido</ButtonText>
          </FinishButton>
        </>
      ) : (
        <>
          <EmptyCartImage source={emptyCart} />
          <BuyButton onPress={() => navigation.navigate('HomeRoute')}>
            <ButtonText>Ir às compras</ButtonText>
          </BuyButton>
        </>
      )}
    </Container>
  );
}

Cart.navigationOptions = ({ navigation }) => {
  let cart = 0;
  if (navigation.state.params) {
    cart = navigation.state.params.cart;
  }
  return {
    tabBarLabel: <Text style={{ fontSize: 12 }}>Carrinho</Text>,
    tabBarIcon: props => <TabIcon name="shopping-cart" {...props} />,
    tabBarBadge: cart ? cart : false,
    tabBarColor: `${colors.primary}`,
  };
};

const mapStateToProps = state => ({
  cart: state.cart || [],
});

export default connect(mapStateToProps)(Cart);

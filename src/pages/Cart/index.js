import React from 'react';
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
  ButtonText,
  EmptyCartImage,
} from './styles';
import ProductCart from '~/components/ProductCart';
import TabIcon from '~/components/TabIcon';
import colors from '~/styles/colors';
import emptyCart from '~/assets/images/empty-bag.png';

function Cart({ cart }) {
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
          <FinishButton>
            <ButtonText>Ir às compras</ButtonText>
          </FinishButton>
        </>
      )}
    </Container>
  );
}

Cart.navigationOptions = {
  tabBarLabel: <Text style={{ fontSize: 12 }}>Carrinho</Text>,
  tabBarIcon: props => <TabIcon name="shopping-cart" {...props} />,
  tabBarBadge: true,
  tabBarColor: `${colors.primary}`,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);

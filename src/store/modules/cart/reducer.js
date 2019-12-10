export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        {
          ...action.product,
          amount: 1,
          finalPrice: Number(
            action.product.price *
              Number(action.product.discount > 0 ? action.product.discount : 1)
          ),
        },
      ];
    default:
      return state;
  }
}

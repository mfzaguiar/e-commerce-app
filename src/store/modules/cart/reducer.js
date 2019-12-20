import produce, { replaced } from 'immer';

export default function cart(state = [], action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@cart/ADD_SUCCESS': {
        const { product } = action;
        draft.push(product);
        break;
      }
      case '@cart/REMOVE': {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
        break;
      }
      case '@cart/UPDATE_AMOUNT_SUCCESS': {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
        break;
      }
      case '@cart/CHECKOUT': {
        console.tron.warn('entrou');
        draft.splice([]);
        break;
      }
      default:
        return state;
    }
  });
}

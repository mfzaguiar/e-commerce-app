import produce from 'immer';

export default function favorite(state = [], action) {
  switch (action.type) {
    case '@favorite/ADD_FAVORITE':
      return produce(state, draft => {
        const { product } = action;
        draft.push({ ...product, favorite: true });
      });
    case '@favorite/REMOVE_FAVORITE':
      return produce(state, draft => {
        const { id } = action;

        const productIndex = draft.findIndex(p => p.id === id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    default:
      return state;
  }
}

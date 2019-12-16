import produce from 'immer';

const INITIAL_STATE = {
  email: null,
  name: null,
};

export default function profile(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@profile/SIGN_IN':
        draft.email = action.payload.email;
        draft.name = action.payload.name;
        break;

      case '@profile/SIGN_OUT':
        draft.email = null;
        draft.name = null;
        break;
      default:
    }
  });
}

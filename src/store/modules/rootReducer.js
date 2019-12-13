import { combineReducers } from 'redux';

import cart from './cart/reducer';
import favorite from './favorite/reducer';

export default combineReducers({ cart, favorite });

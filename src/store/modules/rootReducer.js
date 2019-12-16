import { combineReducers } from 'redux';

import cart from './cart/reducer';
import favorite from './favorite/reducer';
import profile from './profile/reducer';

export default combineReducers({ cart, favorite, profile });

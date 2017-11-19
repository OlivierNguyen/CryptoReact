/**
 * Redux import
 */
import { combineReducers, createStore } from 'redux';

/**
 * Import reducers
 */
import user from '../login/storeManagement/user';

const store = createStore(combineReducers({ user }));

export default store;

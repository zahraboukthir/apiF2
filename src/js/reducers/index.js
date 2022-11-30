import {combineReducers} from 'redux'
import { receipesReducer } from './receipesReducer';
import { movieReducer } from './movieReducer';
export const rootReducer=combineReducers({receipesReducer,movieReducer})
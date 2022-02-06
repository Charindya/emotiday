import {combineReducers} from 'redux';
import {emotionSelectorReducer} from './emotionSelectorReducer';

export const allReducers = combineReducers({
    emotion: emotionSelectorReducer,
});

export type allReducerType = ReturnType<typeof allReducers>
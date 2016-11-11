import { createReducer } from 'reduxsauce';
import types from '../actions/actionTypes';

export const INITIAL_STATE = { place: null };

export const sample = (state = INITIAL_STATE, action) => {
	const { place } = action;
	return { ...state, place };
}

const ACTION_HANDLERS = {
	[types.SAMPLE_DATA_RECEIVED]: sample
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);

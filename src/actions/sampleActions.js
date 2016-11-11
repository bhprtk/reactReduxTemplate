import types from './actionTypes';

export function sampleAction(data) {
	return {
		type: types.SAMPLE_TYPE,
		data
	}
}

export function receiveData(data) {
	return {
		type: types.SAMPLE_DATA_RECEIVED,
		data
	};
}

import { take, call, put } from 'redux-saga/effects';
import types from '../actions/actionTypes';
import * as sampleActions from '../actions/sampleActions';

export default (api) => {

	function* worker(data) {
		const receivedData = yield(api.sample, data);
		if(receivedData) {
			yield put(sampleActions.receiveData(receivedData));
		}
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.SAMPLE_TYPE);
			yield call(worker, input.data);
		}
	}

	return {
		watcher,
		worker
	};

}

import { fork } from 'redux-saga/effects';
import api from '../services/API';
import sample from './sampleSaga';

export default function* root() {
	yield fork(sample(api).watcher);
}

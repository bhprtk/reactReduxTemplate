import React, {Component} from 'react';
import firebase from '../../FirebaseInit';

const provider = new firebase.auth.GoogleAuthProvider();

class HomePage extends Component {

	constructor() {
		super();
	}


	render() {
		return (
			<div>
				<h1>hello</h1>
			</div>
		);
	}
}

export default HomePage;

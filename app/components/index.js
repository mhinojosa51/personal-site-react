import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Menu from './Menu';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

console.log('something');

const router = (
	<Router>
		<Route exact path="/" component={App} />
	</Router>
)

ReactDOM.render(router, document.getElementById('root'));

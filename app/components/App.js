import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';

const styles = {
	container : {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	}
}

class App extends React.Component {
	render(){

		return (
			<section style={styles.container}>
				<Menu />
			</section>
		)
	}
}

export default App;

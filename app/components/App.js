import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';

const styles = {
	container : {
		width: '100%',
		height: '100%',
		border: '1px solid black',
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

ReactDOM.render(<App />, document.getElementById('root'));

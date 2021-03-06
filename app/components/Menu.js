import React from 'react';
import MenuItem from './MenuItem';

const styles = {
	container : {
		width: '400px',
		height: '400px',
	},
	svg : {
		width: '100%',
		height: '100%',
		cursor: 'pointer',
	},
	circle: {
		opacity: 1,
		transition: '1s opacity ease',
	},
	line : {
		transition: '1s all ease',
	}
}

class Menu extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			menuOpen : false,
		}

		this.handleMenuOpen = this.handleMenuOpen.bind(this);
		this.handleMenuClick = this.handleMenuClick.bind(this);
	}

	handleMenuOpen(){
		this.setState({
			menuOpen : !this.state.menuOpen,
		}, function(){
			console.log(this.state)
		})
	}

	handleMenuClick(title){
		console.log(title);
	}

	render(){

		const menuStyle = {
			...styles.circle,
			opacity: this.state.menuOpen ? 0 : 1,
		}

		const topLine = {
			...styles.line,
			transform: this.state.menuOpen ? 'translateY(-20px)' : '',
		}

		const bottomLine = {
			...styles.line,
			transform: this.state.menuOpen ? 'translateY(20px)' : '',
		}

		return (
			<section style={styles.container}>
				<svg style={styles.svg} onClick={this.handleMenuOpen}>
					<g style={styles.g} >
						{<circle style={menuStyle}
						cx="200" cy="200" r="180" stroke="black" strokeWidth="12" fill="none"  />}
						<line style={topLine} x1="80" y1="110" x2="320" y2="110" stroke="black" strokeWidth="15" />
						<MenuItem position={[140,160]} title="About" opened={this.state.menuOpen} select={this.handleMenuClick}/>
						<line x1="80" y1="205" x2="320" y2="205" stroke="black" strokeWidth="15" />
						<MenuItem position={[70,275]} title="Code Projects" opened={this.state.menuOpen} select={this.handleMenuClick}/>
						<line style={bottomLine} x1="80" y1="300" x2="320" y2="300" stroke="black" strokeWidth="15" />
					</g>
				</svg>
			</section>
		)
	}
}

export default Menu;

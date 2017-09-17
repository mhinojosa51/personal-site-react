import React from 'react';

let MenuItem = ({title, position, opened}) => {
	const styles = {
		container : {
			transition: '1s all ease',
			opacity: opened ? 1 : 0,
		}
	}

	return (
			<text style={styles.container} x={position[0]} y={position[1]} fontSize="50">{title}</text>
	)
}

export default MenuItem;

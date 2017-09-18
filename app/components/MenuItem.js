import React from 'react';

let MenuItem = ({title, position, opened, select}) => {
	const styles = {
		container : {
			transition: '1s all ease',
			opacity: opened ? 1 : 0,
			visibility: opened ? 'visible' : 'hidden',
		}
	}

	return (
			<text style={styles.container} x={position[0]} y={position[1]}
				fontSize="50" onClick={(e) => {e.stopPropagation(); select(title)}}>{title}</text>
	)
}

export default MenuItem;

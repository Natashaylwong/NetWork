import React, { Component } from 'react';
import { Button, Text } from 'native-base';

export class CameraButton extends Component {
	render() {
		return (
			<Button full style={styles.button}>
				<Text>Scan QR Code - Identifier</Text>
			</Button>
		);
	}
}

const styles = {
	button: {
		backgroundColor: '#0067C5',
		color: 'white',
		margin: 10
	}
};

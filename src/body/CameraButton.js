import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
import { View, StyleSheet } from 'react-native';

export class CameraButton extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Content>
					<Button style={styles.button}>
						<Text>Click Me!</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center'
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#0067C5',
		color: 'white',
		marginTop: 50
	}
});

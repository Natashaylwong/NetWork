import React, { Component } from 'react';
import {
	Container,
	Footer,
	FooterTab,
	Text,
	Icon,
	Left,
	Right,
	Content,
	Button
} from 'native-base';
import { StyleSheet, View } from 'react-native';

export class NetFooter extends Component {
	render() {
		return (
			<Footer style={{ justifyContent: 'flex-end' }}>
				<FooterTab>
					<Container>
						<Button full style={styles.button}>
							<Text style={{ color: 'white' }}>Scan QR Code - Identifier</Text>
						</Button>
					</Container>
				</FooterTab>
			</Footer>
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

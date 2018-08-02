import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Thumbnail } from 'native-base';
import { bobby, natasha, richard } from '../images/';

export class NetAvatarList extends Component {
	render() {
		return (
			<Container>
				<View style={styles.viewStyle}>
					<Thumbnail large source={bobby} />
				</View>
				<View style={styles.viewStyle}>
					<Thumbnail large source={natasha} />
				</View>
				<View style={styles.viewStyle}>
					<Thumbnail large source={richard} />
				</View>
			</Container>
		);
	}
}

const styles = {
	viewStyle: {
		margin: 10
	}
};

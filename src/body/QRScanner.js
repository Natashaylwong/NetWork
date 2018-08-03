import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { NetHeader } from '../NetHeader';
import { NetBody } from '../NetBody';
import { NetFooter } from '../NetFooter';
import {AppRegistery} from 'react-native';

export  class QRScanner extends Component {
    static navigationOptions = {
		title: 'QRScanner',
	}

	render() {
		return (
			<Container>
				<Text>NEW PAGE</Text>
			</Container>
		);
	}
}

// AppRegistery.registerComponent('QRScanner', () => App);


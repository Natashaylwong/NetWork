import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { NetHeader } from './NetHeader';
import { NetBody } from './NetBody';
import { NetFooter } from './NetFooter';
import {QRScanner} from './body/QRScanner'
import { StackNavigator } from 'react-navigation';
import {AppRegistery} from 'react-native';
export default class App extends Component {

	static navigationOptions = {
		title: 'NetWork',
	}
	render() {
		return (
			<Container>
				<NetHeader />
				<NetBody />
				<NetFooter />
			</Container>
		);
	}
}

const pathsApp = StackNavigator({
	Home: {screen: App},
	QRScanner: {screen: QRScanner},
});



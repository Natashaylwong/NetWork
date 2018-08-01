import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { NetHeader } from './NetHeader';
import { NetFooter } from './NetFooter';

export default class App extends Component {
	render() {
		return (
			<Container>
				<NetHeader />
				<Content />
				<NetFooter />
			</Container>
		);
	}
}

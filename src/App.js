import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { NetHeader } from './NetHeader';
import { NetBody } from './NetBody';
import { NetFooter } from './NetFooter';
import { NetSideBar } from './NetSideBar';
import { NetProfile } from './NetProfile';

export default class App extends Component {
	render() {
		return (
			<Container>
				<NetHeader />
				<NetProfile />
				<NetFooter />
			</Container>
		);
	}
}

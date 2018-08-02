import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { NetRecentView } from './body/NetRecentView';

export class NetBody extends Component {
	render() {
		return (
			<Content>
				<NetRecentView />
			</Content>
		);
	}
}

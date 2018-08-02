import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { NetRecentView } from './body/NetRecentView';
import { CameraButton } from './body/CameraButton';

export class NetBody extends Component {
	render() {
		return (
			<Content>
				<NetRecentView />
				<CameraButton />
			</Content>
		);
	}
}

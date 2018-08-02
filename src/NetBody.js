import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { NetRecentView } from './body/NetRecentView';
import { NetProfile } from './body/NetProfile';
import { CameraButton } from './body/CameraButton';

export class NetBody extends Component {
	render() {
		return (
			<Content>
				<NetRecentView />
				<NetProfile />
				<CameraButton />
			</Content>
		);
	}
}

import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { NetRecentView } from './body/NetRecentView';
import { NetProfile } from './body/NetProfile';
import { CameraButton } from './body/CameraButton';
import { NetNewsList } from './body/NetNewsList';

export class NetBody extends Component {
	render() {
		return (
			<Content>
				<NetRecentView />
				<NetNewsList />
				<CameraButton />
			</Content>
		);
	}
}

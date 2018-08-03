import React, { Component } from 'react';
import { Content } from 'native-base';
import { NetRecentView } from './body/NetRecentView';
import { NetNewsList } from './body/NetNewsList';
import { CameraButton } from './body/CameraButton';

export class NetBody extends Component {
	render() {
		return (
			<Content>
				<NetRecentView />
				<NetNewsList />
			</Content>
		);
	}
}

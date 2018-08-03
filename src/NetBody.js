import React, { Component } from 'react';
import { Content } from 'native-base';
import { NetRecentView } from './body/NetRecentView';
import { NetNewsList } from './body/NetNewsList';

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

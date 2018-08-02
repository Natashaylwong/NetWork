import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { RecentlyView } from './body/RecentlyView';
import { NetProfile } from './body/NetProfile';

export class NetBody extends Component {
	render() {
		return (
			<Content>
				<RecentlyView />
				<NetProfile />
			</Content>
		);
	}
}

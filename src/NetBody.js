import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { AvatarList } from './body/AvatarList';

export class NetBody extends Component {
	render() {
		return (
			<Content>
				<AvatarList />
			</Content>
		);
	}
}

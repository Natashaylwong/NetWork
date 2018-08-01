import React, { Component } from 'react';
import {
	Container,
	Header,
	Title,
	Button,
	Icon,
	Left,
	Right,
	Body
} from 'native-base';

export class NetHeader extends Component {
	render() {
		const logo_uri =
			'https://facebook.github.io/react-native/docs/assets/favicon.png';

		return (
			<Header style={{ justifyContent: 'flex-start' }}>
				<Left>
					<Button transparent>
						<Icon name="menu" />
					</Button>
				</Left>

				<Body>
					<Title>NetWork</Title>
				</Body>

				<Right />
			</Header>
		);
	}
}

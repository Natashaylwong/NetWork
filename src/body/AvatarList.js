import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail } from 'native-base';

export class AvatarList extends Component {
	render() {
		const avatar = '/images/netapp_logo.png';

		return (
			<List>
				<ListItem thumbnail>
					<Thumbnail source={{ uri: avatar }} />
					<Thumbnail source={{ uri: avatar }} />
					<Thumbnail source={{ uri: avatar }} />
				</ListItem>
			</List>
		);
	}
}

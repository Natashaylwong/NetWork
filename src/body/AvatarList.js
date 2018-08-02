import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail } from 'native-base';
import netapp_logo from '../images/';

export class AvatarList extends Component {
	render() {
		return (
			<List>
				<ListItem thumbnail>
					<Thumbnail source={netapp_logo} />
					<Thumbnail source={netapp_logo} />
					<Thumbnail source={netapp_logo} />
				</ListItem>
			</List>
		);
	}
}

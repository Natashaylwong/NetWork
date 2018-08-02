import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail } from 'native-base';
import netapp_logo from '../images/';

export class AvatarList extends Component {
	render() {
		return (
			<ScrollView>
				<Row>
					<List>
						<ListItem thumbnail>
							<Thumbnail square source={uri} />
						</ListItem>
						<ListItem>
							<Thumbnail square source={uri} />
						</ListItem>
					</List>
				</Row>
			</ScrollView>
		);
	}
}

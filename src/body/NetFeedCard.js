import React, { Component } from 'react';
import { netapp } from '../images/';
import { Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';

export class NetFeedCard extends Component {
	render() {
		const { author, content } = this.props.data;
		return (
			<Card style={styles.cardStyle}>
				<CardItem>
					<Left>
						<Thumbnail square source={netapp} />
						<Body>
							<Text>NetApp</Text>
							<Text note>Research Triangle Park</Text>
						</Body>
					</Left>
				</CardItem>

				<CardItem>
					<Left>
						<Thumbnail source={author} style={styles.picStyle} />
						<Body>
							<Text>{content}</Text>
						</Body>
					</Left>
				</CardItem>
			</Card>
		);
	}
}

const styles = {
	cardStyle: {
		flex: 0
	},
	picStyle: {
		height: 80,
		width: 80
	}
};

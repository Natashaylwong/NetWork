import React, { Component } from 'react';
import { Image } from 'react-native';
import { netapp, natasha, bobby } from '../images/';
import {
	Container,
	Header,
	Content,
	Card,
	CardItem,
	Thumbnail,
	Text,
	Button,
	Icon,
	Left,
	Body
} from 'native-base';
export class NetNewsList extends Component {
	render() {
		return (
			<Container>
				<Content>
					<Card style={{ flex: 0 }}>
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
							<Body>
								<Image
									source={natasha}
									style={{ marginBottom: 10, height: 100, width: 100, flex: 1 }}
								/>
								<Text>
									Thank you, NetApp for everything! Cheers to the best and my
									first internship!
								</Text>
							</Body>
						</CardItem>
						<CardItem>
							<Left>
								<Button transparent textStyle={{ color: '#87838B' }}>
									<Icon name="logo-github" />
									<Text>1,926 stars</Text>
								</Button>
							</Left>
						</CardItem>
						<CardItem style={{ marginTop: 10 }}>
							<Left>
								<Thumbnail square source={netapp} />
								<Body>
									<Text>NetApp</Text>
									<Text note>Research Triangle Park</Text>
								</Body>
							</Left>
						</CardItem>
						<CardItem>
							<Body>
								<Image
									source={bobby}
									style={{ marginBottom: 10, height: 100, width: 100, flex: 1 }}
								/>
								<Text>
									Thank you, NetApp for everything! Cheers to the best and my
									first internship!
								</Text>
							</Body>
						</CardItem>
						<CardItem>
							<Left>
								<Button transparent textStyle={{ color: '#87838B' }}>
									<Icon name="logo-github" />
									<Text>1,926 stars</Text>
								</Button>
							</Left>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}

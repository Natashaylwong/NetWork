import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container, Content } from 'native-base';
import { NetFeedCard } from './NetFeedCard';
import { natasha, bobby, richard } from '../images/';

export class NetNewsList extends Component {
	render() {
		return (
			<Container style={{ height: 450 }}>
				<ScrollView
					ref={scrollView => (this.scrollView = scrollView)}
					pagingEnabled={true}
					decelerationRate={0}
				>
					{data.map((item, idx) => <NetFeedCard data={item} key={idx} />)}
				</ScrollView>
			</Container>
		);
	}
}

const data = [
	{
		author: natasha,
		content:
			'Thanks NetApp for everything! Cheers to the best and my first internship!'
	},
	{
		author: bobby,
		content:
			'Thanks NetApp for everything! Cheers to the best and my second internship!'
	},
	{
		author: richard,
		content:
			'Thanks NetApp for everything! Cheers to the best and my second internship!'
	}
];

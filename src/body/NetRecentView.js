import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Container, Thumbnail } from 'native-base';
import { NetProfile } from './NetProfile';
import data from '../../util/fake';

export class NetRecentView extends Component {
	componentDidMount() {
		setTimeout(() => this.scrollView.scrollTo({ x: 0 }), 1);
	}

	render() {
		return (
			<Container style={{ height: 100 }}>
				<ScrollView
					ref={scrollView => (this.scrollView = scrollView)}
					pagingEnabled={true}
					horizontal={true}
					decelerationRate={0}
					contentContainerStyle={styles.scrollStyle}
				>
					{data.map(user => <NetProfile user={user} key={user.username} />)}
				</ScrollView>
			</Container>
		);
	}
}

const styles = {
	scrollStyle: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 10
	}
};

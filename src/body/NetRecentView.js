import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Container, Thumbnail } from 'native-base';
import { NetAvatarList } from './NetAvatarList';
import { bobby, natasha, richard } from '../images/';

export class NetRecentView extends Component {
	componentDidMount() {
		setTimeout(() => this.scrollView.scrollTo({ x: -15 }), 1);
	}

	render() {
		return (
			<Container style={{ height: 100 }}>
				<ScrollView
					ref={scrollView => {
						this.scrollView = scrollView;
					}}
					pagingEnabled={true}
					horizontal={true}
					decelerationRate={0}
					contentInset={{
						left: 10,
						right: 10
					}}
				>
					<View style={styles.viewStyle}>
						<Thumbnail large source={bobby} />
					</View>
					<View style={styles.viewStyle}>
						<Thumbnail large source={natasha} />
					</View>
					<View style={styles.viewStyle}>
						<Thumbnail large source={richard} />
					</View>
				</ScrollView>
			</Container>
		);
	}
}

const styles = {
	viewStyle: {
		margin: 10
	}
};

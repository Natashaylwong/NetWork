import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { AvatarList } from './AvatarList';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export class RecentlyView extends Component {
	componentDidMount() {
		setTimeout(() => {
			this.scrollView.scrollTo({ x: -30 });
		}, 1); // scroll view position fix
	}

	render() {
		return (
			<View style={styles.container}>
				{/*<Image
					style={{
						flex: 1,
						resizeMode
					}}
					source={require('./images/netapp_logo.png')}
				/>*/}
				<ScrollView
					ref={scrollView => {
						this.scrollView = scrollView;
					}}
					pagingEnabled={true}
					horizontal={true}
					backgroundColor="transparent"
					decelerationRate={0}
					contentInset={{
						top: 0,
						left: 10,
						bottom: 0,
						right: 10
					}}
				>
					<View style={styles.view} />
					<View style={styles.view} />
					<View style={styles.view} />
				</ScrollView>
			</View>
		);
	}
}

const styles = {
	container: {
		height: 150
	},
	view: {
		backgroundColor: 'blue',
		width: width - 270,
		height: width - 270,
		margin: 10,
		borderRadius: 100
	}
};

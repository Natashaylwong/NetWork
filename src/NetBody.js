import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { AvatarList } from './body/AvatarList';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export class NetBody extends Component {
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
					//pagingEnabled={true}
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
					<View style={styles.view2} />
					<View style={styles.view3} />
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 50,
		height: 150
	},
	view: {
		marginTop: 20,
		backgroundColor: 'blue',
		width: width - 270,
		margin: 20,
		height: width - 270,
		borderRadius: width - 270 / 2,
		paddingHorizontal: 30
	},
	view2: {
		marginTop: 20,
		backgroundColor: 'red',
		width: width - 270,
		margin: 20,
		height: width - 270,
		borderRadius: width - 270 / 2,
		paddingHorizontal: 30
	},
	view3: {
		marginTop: 20,
		backgroundColor: 'blue',
		width: width - 270,
		margin: 20,
		height: width - 270,
		borderRadius: width - 270 / 2,
		paddingHorizontal: 30
	}
});

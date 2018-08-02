import React, { Component } from 'react';
import { Container, Thumbnail } from 'native-base';
import { netapp } from '../images/';
import {
	Text,
	TouchableOpacity,
	View,
	StyleSheet,
	Dimensions
} from 'react-native';
import Modal from 'react-native-modal';

const { width, height } = Dimensions.get('window');

export class NetProfile extends Component {
	state = {
		isModalVisible: false
	};

	_toggleModal = () =>
		this.setState({ isModalVisible: !this.state.isModalVisible });

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this._toggleModal}>
					<Text>Show Modal</Text>
				</TouchableOpacity>
				<Modal isVisible={this.state.isModalVisible}>
					<TouchableOpacity onPress={this._toggleModal}>
						<View style={styles.popUp}>
							<Text style={styles.titleText}>Software Developer</Text>
							<View style={styles.picture}>
								<Thumbnail
									style={{
										alignItems: 'center',
										justifyContent: 'center'
									}}
									square
									source={netapp}
								/>
							</View>
							<Container style={styles.information}>
								<Text style={styles.name}>Natasha Wong</Text>
								<Text style={styles.type}>Employee</Text>
								<Text style={styles.tinyInfo}>Email: wnatasha@netapp.com</Text>
								<Text style={styles.tinyInfo}>LinkedIn: natashaylwong</Text>
								<Text style={styles.tinyInfo}>Office: RTP3.2.361</Text>
							</Container>
						</View>
					</TouchableOpacity>
				</Modal>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	information: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	tinyInfo: {
		alignItems: 'center',
		color: 'white'
	},
	container: {
		alignItems: 'center',
		backgroundColor: '#0067C5',
		padding: 100
	},
	titleText: {
		alignItems: 'center',
		justifyContent: 'center',
		color: 'white',
		fontWeight: 'bold',
		marginTop: 50,
		fontSize: 25
	},
	picture: {
		alignItems: 'center',
		backgroundColor: 'white',
		width: 100,
		margin: 40,
		marginTop: 50,
		marginBottom: 20,
		height: 100,
		borderRadius: 50,
		// width: 90,
		// height: 90,
		alignItems: 'center'
	},
	popUp: {
		alignItems: 'center',
		backgroundColor: '#0067C5',
		height: 550,
		marginTop: 50,
		marginBottom: 50,
		opacity: 0.8,
		borderRadius: 10
	},
	name: {
		alignItems: 'center',
		justifyContent: 'center',
		color: 'black',
		fontWeight: '500',
		fontSize: 25,
		marginTop: 20,
		marginBottom: 20
	},
	type: {
		alignItems: 'center',
		color: 'white',
		fontWeight: '500',
		marginTop: 5,
		fontSize: 20
	}
});

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, Thumbnail } from 'native-base';
import Modal from 'react-native-modal';
import { netapp } from '../images/';

export class NetProfile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isVisible: false
		};

		this._toggleModal = this._toggleModal.bind(this);
	}

	_toggleModal() {
		this.setState({ isVisible: !this.state.isVisible });
	}

	render() {
		const { user } = this.props;
		const { isVisible } = this.state;

		return (
			<View style={styles.viewStyle}>
				<TouchableOpacity onPress={this._toggleModal}>
					<Thumbnail large source={user.avatar} />
				</TouchableOpacity>

				<Modal isVisible={isVisible}>
					<View style={styles.modalStyle}>
						<Text style={styles.titleText}>{user.title}</Text>
						<TouchableOpacity onPress={this._toggleModal}>
							<View style={styles.picture}>
								<Thumbnail style={styles.information} source={user.avatar} />
							</View>
							<Container style={styles.information}>
								<Text style={styles.name}>{user.name}</Text>
								<Text style={styles.type}>{user.type}</Text>
								<Text style={styles.tinyInfo}>Email: {user.email}</Text>
								<Text style={styles.tinyInfo}>LinkedIn: {user.linkedIn}</Text>
								<Text style={styles.tinyInfo}>Office: {user.office}</Text>
							</Container>
						</TouchableOpacity>
					</View>
				</Modal>
			</View>
		);
	}
}

const styles = {
	viewStyle: {
		margin: 10
	},
	modalStyle: {
		alignItems: 'center',
		backgroundColor: '#0067C5',
		height: 550,
		marginTop: 50,
		marginBottom: 50,
		opacity: 0.8,
		borderRadius: 10
	},
	titleText: {
		alignItems: 'center',
		color: 'white',
		fontWeight: 'bold',
		marginTop: 50,
		fontSize: 25
	},
	information: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	tinyInfo: {
		alignItems: 'center',
		color: 'white'
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
		alignItems: 'center'
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
};

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Thumbnail } from 'native-base';
import Modal from 'react-native-modal';

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
					<Thumbnail medium source={user.avatar} />
				</TouchableOpacity>

				<Modal isVisible={isVisible}>
					<View style={styles.modalStyle}>
						<TouchableOpacity onPress={this._toggleModal}>
							<Text style={styles.titleStyle}>{user.title}</Text>

							<View style={styles.viewStyle}>
								<Thumbnail style={styles.picStyle} source={user.avatar} />
							</View>

							<View style={styles.viewStyle}>
								<Text style={styles.nameStyle}>{user.name}</Text>
								<Text style={styles.typeStyle}>{user.type}</Text>
								<Text style={styles.infoStyle}>Email: {user.email}</Text>
								<Text style={styles.infoStyle}>LinkedIn: {user.linkedIn}</Text>
								<Text style={styles.infoStyle}>Office: {user.office}</Text>
							</View>
						</TouchableOpacity>
					</View>
				</Modal>
			</View>
		);
	}
}

const styles = {
	viewStyle: {
		margin: 10,
		alignItems: 'center',
		justifyContent: 'center',
		color: '#D9D9D6'
	},
	modalStyle: {
		alignItems: 'center',
		backgroundColor: '#0067C5',
		height: 500,
		opacity: 0.8,
		borderRadius: 15
	},
	titleStyle: {
		alignItems: 'center',
		color: '#D9D9D6',
		fontWeight: '700',
		marginTop: 50,
		fontSize: 30
	},
	picStyle: {
		marginTop: 30,
		width: 100,
		height: 100
	},
	nameStyle: {
		color: '#D9D9D6',
		fontWeight: '500',
		fontSize: 30,
		marginTop: 20,
		marginBottom: 20
	},
	typeStyle: {
		color: '#D9D9D6',
		fontWeight: '500',
		fontSize: 22
	},
	infoStyle: {
		color: '#D9D9D6',
		fontSize: 18,
		marginTop: 2,
		marginBottom: 2
	}
};

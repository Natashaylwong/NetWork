import React, { Component } from 'react';
import { Drawer } from 'native-base';
import { NetSideBar } from './NetSideBar';

export class NetDrawer extends Component {
	render() {
		closeDrawer = () => {
			this.drawer._root.close();
		};
		openDrawer = () => {
			this.drawer._root.open();
		};
		return (
			<Drawer
				ref={ref => {
					this.drawer = ref;
				}}
				content={<NetSideBar navigator={this.navigator} />}
				onClose={() => this.closeDrawer()}
			>
				// Main View
			</Drawer>
		);
	}
}

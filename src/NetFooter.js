import React, { Component } from 'react';
import { Container, Footer, FooterTab, Text, Icon } from 'native-base';

function getStatusText() {
	const now = new Date();
	const day = now.getDay();
	const hour = now.getHours();
	if (day == 0 || day == 6 || hour < 8 || hour >= 17) {
		return 'Closed';
	}
	return 'Open';
}

export class NetFooter extends Component {
	render() {
		return (
			<Container>
				<Footer>
					<FooterTab>
						<Container>
							<Icon name="navigate" />
							<Text>7301 Kit Creek Rd, Durham, NC 27709</Text>
						</Container>
						<Container>
							<Icon name="alarm" />
							<Text>Currently {getStatusText()}</Text>
						</Container>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}

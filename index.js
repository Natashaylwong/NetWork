import React from 'react';
import { AppRegistry } from 'react-native';
import { StyleProvider } from 'native-base';
import { name as appName } from './app.json';
import App from './src/App';
import getTheme from './src/theme/components';
import variables from './src/theme/variables/commonColor';

const Setup = () => (
	<StyleProvider style={getTheme(variables)}>
		<App />
	</StyleProvider>
);

AppRegistry.registerComponent(appName, () => Setup);

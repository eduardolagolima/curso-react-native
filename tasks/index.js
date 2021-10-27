/**
 * @format
 */

import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import Navigator from './src/routes/Navigator';

AppRegistry.registerComponent(appName, () => Navigator);

import './src/plugins/dayjs';

import { AppRegistry} from 'react-native';

import App from './src/components/App';

/*loads the application called crm and then 
points to the file App for the dependency */
AppRegistry.registerComponent('crm', () => App);
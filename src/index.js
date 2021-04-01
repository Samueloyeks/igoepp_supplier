import React from 'react';
import Navigator from './navigations';
import { Provider } from 'react-redux';
import configureStore from './store';
import { Platform, StatusBar, StyleSheet, View} from 'react-native';


const store = configureStore();

const App = () =>
    <Provider store={store}>
        <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" backgroundColor="#ffff" />}
            <Navigator />
        </View>
    </Provider>;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default App;
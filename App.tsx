import { StyleSheet, View, SafeAreaView } from 'react-native';
import { BrowserRouter, Router, Route, Redirect, Switch } from 'react-router-dom';

import { Colors } from './colors';
import { Auth } from './pages';

export default function App() {
    return (
        <Router>
            <View style={styles.container}>
                <Route path='/' component={Auth} />
            </View>
        </Router>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: Colors.background,
        color: Colors.foreground,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: Colors.foreground,
    },
});

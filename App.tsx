import { StyleSheet, View, SafeAreaView } from 'react-native';
import { NativeRouter, Routes, Route } from 'react-router-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Colors } from './colors';
import { authService } from './services';
import { Auth } from './pages';

export default function App() {
    /*
    const [fontsLoaded] = Font.useFonts({
        'JosefinSans-Regular': require('./assets/fonts/JosefinSans-Regular.ttf'),
    });
    */

    const { path } = this.props.match;

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <NativeRouter>
                    <Routes>
                        <Redirect from='/' to={authService.isLoggedIn() ? '/tabs' : '/auth'} />

                        <Route path={`${path}/auth`} element={<Auth />} />
                        <Route path={`${path}/tabs`} element={<Tabs />} />
                    </Routes>
                </NativeRouter>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        color: Colors.foreground,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: Colors.foreground,
    },
});

import { StyleSheet, View, SafeAreaView } from 'react-native';
import { NativeRouter, Routes, Route } from 'react-router-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Colors } from './colors';
import { Auth } from './pages';

export default function App() {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <NativeRouter>
                    <Routes>
                        <Route exact path='/' element={<Auth />} />
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

import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Auth from './pages/Auth';
import { Colors } from './colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
    </View>
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

import React, { useState } from 'react';
import {
    StyleSheet,
    Button,
    Image,
    View,
    SafeAreaView,
    TextInput,
} from 'react-native';
import {
    AppText,
    AppTextInput,
    AppButton,
} from '../components';
import { Colors } from '../colors';


export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Image
                resizeMode='contain'
                style={styles.image}
                source={require('../assets/img/logo/logo.png')}
            />

            <AppTextInput
                style={styles.input}
                placeholder='you@school.edu'
                onChangeText={(email) => setEmail(email)}
            />
            <AppTextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />

            <AppButton
                title='Login'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        background: Colors.danger,
        width: '100%',
        height: '100%',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width: '100%',
        height: undefined,
        // TODO: PLEASE GOD NO WHY
        aspectRatio: 8354 / 1506,

        marginBottom: 10,
    },

    text: {
        color: 'white',
    },

    input: {
    },
});

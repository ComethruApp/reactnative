import React, { useState } from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    TextInput,
} from 'react-native';
import {
    AppText,
    AppTextInput,
    AppButton,
    Link,
    Logo,
} from '../components';
import { Colors } from '../colors';


export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Logo />

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

            <AppButton>Login</AppButton>
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


    text: {
        color: 'white',
    },

    input: {
    },
});

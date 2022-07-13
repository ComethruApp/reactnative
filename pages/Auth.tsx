import React, { useState } from 'react';
import {
    StyleSheet,
    Button,
    Image,
    View,
    SafeAreaView,
    TextInput,
} from 'react-native';
import { AppText } from '../components';
import { Colors } from '../colors';


export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <AppText style={styles.text}>Hello</AppText>
            <Image
                resizeMode='contain'
                style={styles.image}
                source={require('../assets/img/logo/logo.png')}
            />

            <TextInput
                style={styles.input}
                placeholder='you@school.edu'
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />

            <Button
                title='Login'
            />

            <AppText>Hello</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        background: Colors.danger,
        borderStyle: 'dotted',
        borderWidth: '2px',
        borderColor: 'blue',
        width: '100%',
        height: '100%',
        padding: 20,
    },

    image: {
        width: '100%',
    },

    text: {
        color: 'white',
    },

    input: {
    },
});

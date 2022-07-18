import React, { useState } from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    TextInput,
    Link,
    Alert,
    KeyboardAvoidingView,
} from 'react-native';
import { useNavigate } from 'react-router-native';

import {
    AppText,
    AppTextInput,
    AppButton,
    WebLink,
    Logo,
    LoadingModal,
} from '../components';
import {
    AuthService,
} from '../services';
import { Colors } from '../colors';


export default function Auth() {
    let navigate = useNavigate();

    const [registering, setRegistering] = useState(false);
    const [loading, setLoading] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [year, setYear] = useState('');
    const [password, setPassword] = useState('');

    const resetFields = () => {
        setName('');
        setEmail('');
        setYear('');
        setPassword('');
    };

    const login = () => {
        setLoading(true);
        AuthService.login({
            email: email,
            password: password,
        })
        .then((response) => {
            resetFields();
            setLoading(false);
            navigate('/tabs');
        }).catch((response) => {
            setLoading(false);
            Alert.alert(
                'Error',
                response.error.message,
                [{ text: 'OK' }],
            );
        });
    };

    const register = () => {
        setLoading(true);
        AuthService.register({
            name: name,
            email: email,
            year: year,
            password: password,
        }).then((response) => {
            resetFields();
            setLoading(false);
            navigate('/tabs');
        }).catch((response) => {
            setLoading(false);
            Alert.alert(
                'Error',
                response.error.message,
                [{ text: 'OK' }],
            );
        });
    };

    return (
        <KeyboardAvoidingView
            behavior='padding'
            style={styles.container}>

            <Logo />

            {registering &&
            <AppTextInput
                placeholder='Name'
                onChangeText={(name) => setName(name)}
            />}

            <AppTextInput
                placeholder='you@school.edu'
                onChangeText={(email) => setEmail(email)}
            />

            {registering &&
            <AppTextInput
                placeholder='Class Year'
                onChangeText={(name) => setName(name)}
            />}

            <AppTextInput
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />

            {!registering &&
            <>
                <AppButton onPress={login}>Login</AppButton>

                <View style={styles.textGroup}>
                    <AppText style={styles.text}>Don't have an account?</AppText>
                    <AppText
                        style={[styles.link, styles.text]}
                        onPress={() => setRegistering(true)}>

                        Tap here to sign up!
                    </AppText>
                </View>
            </>}

            {registering &&
            <>
                <AppText style={[styles.textGroup, styles.text]}>By registering, you agree to the <WebLink url='https://comethru.io/tos'>Terms of Service</WebLink> and <WebLink url='https://comethru.io/privacypolicy'>Privacy Policy</WebLink>.</AppText>
                <AppButton onPress={register}>Register</AppButton>

                <View style={styles.textGroup}>
                    <AppText>Already have an account?</AppText>
                    <AppText
                        style={styles.link}
                        onPress={() => setRegistering(false)}>

                        Tap here to log in!
                    </AppText>
                </View>
            </>}

            {loading &&
            <LoadingModal message={registering ? 'Logging in...' : 'Creating your account...'} />
            }
        </KeyboardAvoidingView>
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
        textAlign: 'center',
    },

    link: {
        textDecorationLine: 'underline',
    },

    textGroup: {
        width: '100%',
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

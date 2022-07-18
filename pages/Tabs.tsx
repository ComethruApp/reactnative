import React, { useState } from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    TextInput,
    Link,
    Alert,
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


export default function Tabs() {
    let navigate = useNavigate();

    const [events, setEvents] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <View style={styles.container}>


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

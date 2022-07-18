import React, { PropTypes, Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../colors';
import AppText from './AppText';

export default class LoadingModal extends Component {
    getProps() {
        const { style, ...props } = this.props;
        return props;
    }

    render() {
        return (
            <View styles={styles.container}>
                <View styles={styles.modal}>
                    <AppText>{this.props.message || 'Loading...'}</AppText>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'red',
    },
    modal: {
        background: Colors.background,
    },
});

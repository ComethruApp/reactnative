import React, { PropTypes, Component } from 'react';
import { Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../colors';
import AppText from './AppText';

export default class AppButton extends Component {
    getProps() {
        const { style, ...props } = this.props;
        return props;
    }

    render() {
        return (
            <TouchableOpacity
                style={[this.props.style, styles.component]}
                {...this.getProps()}
            >
                <AppText style={styles.text}>
                    {this.props.children}
                </AppText>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    component: {
        color: Colors.foreground,
        width: '100%',
        marginBottom: 5,
    },

    text: {
        width: '100%',
        backgroundColor: Colors.primary,
        padding: 15,
        textAlign: 'center',
        borderRadius: 25,
        overflow: 'hidden',
    },
});

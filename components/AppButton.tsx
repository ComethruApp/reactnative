import React, { PropTypes, Component } from 'react';
import { Button, StyleSheet } from 'react-native';
import { Colors } from '../colors';

export default class AppButton extends Component {
    getProps() {
        const { style, ...props } = this.props;
        return props;
    }

    render() {
        return (
            <Button
                style={[this.props.style, styles.component]}
                {...this.getProps()}>
                {this.props.children}
            </Button>
        );
    }
}


const styles = StyleSheet.create({
    component: {
        color: Colors.foreground,
        backgroundColor: Colors.primary,
        width: '100%',
        padding: 15,
        marginBottom: 5,
        borderRadius: 25,
        fontSize: 18,
    },
});

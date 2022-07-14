import React, { PropTypes, Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Colors } from '../colors';

export default class AppTextInput extends Component {
    getProps() {
        const { style, ...props } = this.props;
        return props;
    }

    render() {
        return (
            <TextInput
                style={[this.props.style, styles.component]}
                {...this.getProps()}>
                {this.props.children}
            </TextInput>
        );
    }
}


const styles = StyleSheet.create({
    component: {
        color: Colors.foreground,
        backgroundColor: Colors.backgroundTint,
        placeholderTextColor: Colors.foregroundShade,

        width: '100%',
    },
});

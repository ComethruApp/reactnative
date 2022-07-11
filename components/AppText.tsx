import React, { PropTypes, Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from '../colors';

export default class AppText extends Component {
    getProps() {
        const { style, ...props } = this.props;
        return props;
    }

    render() {
        return (
            <Text
                style={[this.props.style, styles.component]}
                {...this.getProps()}>
                {this.props.children}
            </Text>
        );
    }
}


const styles = StyleSheet.create({
    component: {
        color: Colors.foreground,
    },
});

import React, { PropTypes, Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Colors } from '../colors';

export default class AppTextInput extends Component {
    getProps() {
        const { style, ...props } = this.props;
        return props;
    }

    render() {
        return (
            <Image
                resizeMode='contain'
                style={[this.props.style, styles.component]}
                source={require('../assets/img/logo/logo.png')}
                {...this.getProps()}
            />
        );
    }
}


const styles = StyleSheet.create({
    component: {
        width: '100%',
        height: undefined,
        // TODO: PLEASE GOD NO WHY
        aspectRatio: 8354 / 1506,

        marginBottom: 10,
    },
});

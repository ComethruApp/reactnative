import React, { PropTypes, Component } from 'react';
import { StyleSheet, Linking } from 'react-native';
import { Colors } from '../colors';
import AppText from './AppText';

export default class WebLink extends Component {
    getProps() {
        const { style, url, ...props } = this.props;
        return props;
    }

    render() {
        return (
            <AppText
                style={[this.props.style, styles.component]}
                onPress={() => Linking.openURL(this.props.url)}
                {...this.getProps()}>
                {this.props.children}
            </AppText>
        );
    }
}


const styles = StyleSheet.create({
    component: {
        textDecorationLine: 'underline',
    },
});

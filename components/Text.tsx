import React, { PropTypes, Component } from 'react';
import ReactNative from 'react-native';

export default class Text extends Component {
    getProps() {
        const { fontSize, fontWeight } = this.props;
        return {
            fontSize,
            fontWeight,
        };
    }

    render() {
        return (
            <ReactNative.Text {...this.getProps()}>{this.props.children}</ReactNative.Text>
        );
    }
}

Text.propTypes = {
    fontSize: PropTypes.oneOf([
        25,
        20,
        15,
    ]),
    fontWeight: PropTypes.oneOf([
        'normal',
        'bold',
    ]),
};

Text.defaultProps = {
    fontSize: 20,
    fontWeight: 'normal',
};

/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './Button.styles';

class Button extends Component {
    // static propTypes = {
    //     checked: PropTypes.bool,
    //     onChange: PropTypes.func,
    // };

    // static defaultProps = {
    //     checked: false,
    //     onChange: undefined,
    // };

    // handleClick = () => {
    //     const checked = !this.state.checked;
    //     this.setState({ checked });
    //     if (this.props.onChange) {
    //         this.props.onChange(checked);
    //     }
    // };

    render() {
        // console.log(this.props);
        return (
            <ButtonStyle type="submit">Delete</ButtonStyle>
        );
    }
}

export default Button;

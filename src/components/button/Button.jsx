/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './Button.styles';

class Button extends Component {
    static propTypes = {
        value: PropTypes.string,
        onClick: PropTypes.func,
    };

    static defaultProps = {
        value: 'button',
        onClick: undefined,
    };

    // handleClick = () => {
    //     const checked = !this.state.checked;
    //     this.setState({ checked });
    //     if (this.props.onChange) {
    //         this.props.onChange(checked);
    //     }
    // };

    render() {
        // console.log(this.props);
        const { value, onClick } = this.props;
        return (
            <ButtonStyle
                type="submit"
                onClick={onClick}
            >
                {value}
            </ButtonStyle>
        );
    }
}

export default Button;

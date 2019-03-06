import React, { Component } from 'react';
import InputStyles from '../input/Input.styles';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
    }

    componentWillReceiveProps = (newProps) => {
        if (newProps.value !== this.props.value) {
            this.setState({
                value: newProps.value
            })
        }
    };

    handleChange = (e) => {
        const { target: { value } } = e;
        this.setState({ value });
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    };

    render() {
        const { width, border, style, onBlur } = this.props;
        return (
            <InputStyles
                value={this.state.value}
                onChange={this.handleChange}
                width={width}
                border={border}
                style={style}
                onKeyPress={ (e) => e.key === 'Enter' && e.target.blur() }
                onBlur={onBlur}

            />
        )}
}

export default Input;

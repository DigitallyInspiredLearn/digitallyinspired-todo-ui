import React, { Component } from 'react';
import InputCom from '@material-ui/core/Input';
import InputStyles from './Input.styles';


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
                value: newProps.value,
            });
        }
    };

    handleChange = (e, { onChange } = this.props) => {
        const { target: { value } } = e;
        this.setState({ value });
        if (onChange) {
            onChange(value);
        }
    };

    handleBlur = (e, { onBlur } = this.props) => {
        const { target: { value } } = e;
        this.setState({ value: (value || 'New value') });
        onBlur(value);
    };

    render() {
        const { border, style, onBlur } = this.props;
        const { value } = this.state;
        return (
            <InputStyles
                value={value}
                onChange={this.handleChange}
                border={border}
                style={style}
                onKeyPress={e => e.key === 'Enter' && e.target.blur()}
                onBlur={this.handleBlur}
            />
        );
    }
}

export default Input;

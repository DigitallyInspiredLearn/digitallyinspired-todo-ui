import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckboxStyle from './Checkbox.styles';


class Checkbox extends Component {
    static propTypes = {
        checked: PropTypes.bool,
        onChange: PropTypes.func,
    };

    static defaultProps ={
        checked: false,
        onChange: undefined,
    };

    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked,
        };
    }

    handleClick = () => {
        const checked = !this.state.checked;
        this.setState({ checked });
        if (this.props.onChange) {
            this.props.onChange(checked);
        }
    };

    render() {
        const { checked } = this.state;
        return (
            <CheckboxStyle selected={checked} onClick={this.handleClick} />
        );
    }
}

export default Checkbox;

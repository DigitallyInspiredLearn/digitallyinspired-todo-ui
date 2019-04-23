import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { Select, InputLabel } from './DropDown.styled';


export class DropDownMaterial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueSelect: props.defaultValue,
        };
    }

    handleChange = (e) => {
        this.setState({
            valueSelect: e.target.value,
        });
        this.props.selectSorting(e.target.value);
    };

    render() {
        const { value, label, style, styleLabel } = this.props;
        const { valueSelect } = this.state;
        return (
            <div>
                <InputLabel
                    key='label'
                    htmlFor="select-multiple-chip"
                    style={styleLabel}
                >
                    {label}
                </InputLabel>
                <Select
                    key='DropDownSelect'
                    value={valueSelect}
                    onChange={this.handleChange}
                    style={style}
                >
                    {
                        value.map(i => (
                            <MenuItem key={i} value={i}>{i}</MenuItem>))
                    }
                </Select>
            </div>
        );
    }
}

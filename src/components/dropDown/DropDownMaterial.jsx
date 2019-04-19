import React, { Component } from 'react';
// import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import { Select } from "./DropDown.styled";
import { InputLabel } from "./DropDown.styled";


export class DropDownMaterial extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valueSelect: props.value[0],
        };
    }

    handleChange = (e) => {
        this.setState({
                valueSelect: e.target.value
        });
    };

    render() {
        const { value, selectSorting, label,style, styleLabel } = this.props;
        const { valueSelect } = this.state;
        return (
            <div>
                <InputLabel
                    htmlFor="select-multiple-chip"
                    style={styleLabel}
                >
                    {label}
                </InputLabel>
                <Select
                    value={valueSelect}
                    onChange={this.handleChange}
                    style={style}
                    onClick={(e) => selectSorting(e.target.value)}
                >
                        {
                            value.map(i => (
                                <MenuItem value={i}>{i}</MenuItem>))
                        }
                </Select>
            </div>
        )
    }
}
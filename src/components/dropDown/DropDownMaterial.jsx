import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
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
    };

    render() {
        const {
            value, selectSorting, label,style, styleLabel,pageSize
        } = this.props;
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
                    // input={<Input id="select-multiple-chip" placeholder="choose" />}
                    style={style}
                    onClick={e => selectSorting(e.target.value)}
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

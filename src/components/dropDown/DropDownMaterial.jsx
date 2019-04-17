import React, { Component } from 'react';
// import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { Select } from "./DropDown.styled";

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
        const { value} = this.props;
        const { valueSelect } = this.state;
        return (
            <div style={{
                margin: '0px 0px 0px 16px'
            }}>
                <InputLabel
                    htmlFor="select-multiple-chip"
                    style={{
                        color: 'black',
                        fontSize: '13px',
                        margin: '4px 0 0 4px'
                    }}>
                    Sorting:
                </InputLabel>
                <Select
                    value={valueSelect}
                    onChange={this.handleChange}
                    selectMenu={{backgroundColor: 'red'}}
                    input={<Input id="select-multiple-chip" placeholder="choose" />}
                >
                        {
                            value.map(i => (<MenuItem value={i} >{i}</MenuItem>))
                        }
                </Select>
            </div>
        )
    }
}
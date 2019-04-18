import React, { Component } from 'react';
// import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// import InputLabel from '@material-ui/core/InputLabel';
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
        const { value, selectSorting } = this.props;
        const { valueSelect } = this.state;
        return (
            <div>
                <InputLabel
                    htmlFor="select-multiple-chip"
                >
                    Sorting:
                </InputLabel>
                <Select
                    value={valueSelect}
                    onChange={this.handleChange}
                    selectMenu={{backgroundColor: 'red'}}
                    input={<Input id="select-multiple-chip" placeholder="choose" />}
                >
                        {
                            value.map(i => (<MenuItem value={i}>
                                <div
                                    onClick={() => selectSorting(i)}
                                >{i}</div>
                            </MenuItem>))
                        }
                </Select>
            </div>
        )
    }
}
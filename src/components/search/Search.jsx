import React, { Component } from 'react';
import * as styled from './Search.styles';
import Input from '@material-ui/core/Input';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    handleChange = (e, { onChange } = this.props) => {
        const { target: { value } } = e;
        this.setState({ value });
        onChange(value);
    };

    render() {
        const { style, placeholder, value } = this.props;

        return (
            <styled.SearchCont>
                <Input
                    value={value}
                    onChange={this.handleChange}
                    placeholder={placeholder}
                    style={style}
                />
                <styled.SearchIcon style={{ fontSize: '40px' }} />
            </styled.SearchCont>


        );
    }
}

export default Search;

import React, { Component } from 'react';
import SearchStyles from './Search.styles';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    handleChange = (e, { onChange } = this.props) => {
        const { target: { value } } = e;
        this.setState({ value: value });
        onChange(value);
    };

    render() {
        const { style, placeholder, value } = this.props;

        return (
            <SearchStyles
                value={value}
                onChange={this.handleChange}
                placeholder={placeholder}
                style={style}
            />
        );
    }
}

export default Search;

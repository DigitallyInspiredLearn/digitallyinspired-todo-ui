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
        this.setState({ value: e.target.value });
        onChange(value);
    };

    render() {
        const { style, placeholder } = this.props;
        const { value } = this.state;
        return (
            <SearchStyles
                value={value}
                onChange={this.handleChange}
                placeholder={placeholder}
                style={style}
                placeholder="Search dashboard"
            />
        );
    }
}

export default Search;

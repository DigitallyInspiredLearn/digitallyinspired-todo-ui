import React, { Component } from 'react';
import SearchStyles from './Search.styles';

class Search extends Component {
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

    render() {
        const { value } = this.state;
        return (
            <SearchStyles
                placeholder='Search dashboard'
                onChange={this.handleChange}
            />
        );
    }
}

export default Search;

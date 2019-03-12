import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styled from './DropDown.styled';

class DropDown extends Component {
    static propTypes = {
        changeValue: PropTypes.func,
        titleButton: PropTypes.string,
        // possibleValues: PropTypes.arrayOf(PropTypes.number),
        drop: PropTypes.string,
        stylesValues: PropTypes.string,
        stylesButton: PropTypes.string,
        // currentValue: PropTypes.string,
    };

    static defaultProps = {
        changeValue: undefined,
        titleButton: 'Check',
        // possibleValues: undefined,
        drop: 'down',
        stylesValues: '',
        stylesButton: '',
        // currentValue: '',
    };

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    changeVisible = () => {
        const { visible } = this.state;
        this.setState({ visible: !visible });
    };

    render() {
        const { visible } = this.state;
        const {
            changeValue,
            currentValue,
            possibleValues,
            drop,
            stylesValues,
            titleButton,
            stylesButton,
        } = this.props;
        return (
            <styled.Container>
                <styled.Ul
                    visible={visible}
                    drop={drop}
                    stylesValues={stylesValues}


                >
                    {
                        possibleValues.map(value => (

                            <styled.Li
                                onClick={() => { changeValue(value); this.changeVisible(); }}
                                checked={currentValue === value}
                                key={value}
                                stylesValues={stylesValues}
                            >
                                {value}
                            </styled.Li>
                        ))
                    }
                </styled.Ul>
                <styled.Button
                    onClick={this.changeVisible}
                    stylesButton={stylesButton}
                >
                    { titleButton }
                </styled.Button>
            </styled.Container>
        );
    }
}

export default DropDown;

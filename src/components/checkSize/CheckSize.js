import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styled from './CheckSize.styled';

class CheckSize extends Component {
    static propTypes = {
        changeSize: PropTypes.func,
        pageSize: PropTypes.number,
    };

    static defaultProps = {
        pageSize: 4,
        changeSize: undefined,
    };

    constructor(props) {
        super(props);
        this.state = {
            visibleUl: false,
        };
    }

    changevisibleUl = () => {
        const { visibleUl } = this.state;
        this.setState({ visibleUl: !visibleUl });
    };

    render() {
        const { visibleUl } = this.state;
        const { changeSize, pageSize } = this.props;
        return (
            <styled.Container>
                <styled.Ul visible={visibleUl}>
                    <styled.Li
                        onClick={() => changeSize(4)}
                        checked={pageSize === 4}
                    >
                        4
                    </styled.Li>
                    <styled.Li
                        onClick={() => changeSize(8)}
                        checked={pageSize === 8}
                    >
                        8
                    </styled.Li>
                    <styled.Li
                        onClick={() => changeSize(16)}
                        checked={pageSize === 16}
                    >
                        16
                    </styled.Li>
                </styled.Ul>
                <styled.Button
                    onClick={this.changevisibleUl}
                >
                    Check size
                </styled.Button>
            </styled.Container>
        );
    }
}

export default CheckSize;

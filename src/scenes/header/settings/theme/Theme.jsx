import React, { Component } from 'react';
import * as styled from './Theme.styles';
import dayImage from '../../../../image/day.png';
import nightImage from '../../../../image/night.png';
import paint from '../../../../image/paint.svg';
import theme from '../../../../config/theme';

class Theme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
            data: props.data,
        };
    }

    handleDefaultSelect = (type) => {
        this.setState({ type, data: theme[type] });
    };

    handleDataChange = (key, value) => {
        this.setState({
            type: 'custom',
            data: {
                ...this.state.data,
                [key]: value,
            },
        });
    };

    handleApply = () => {
        this.props.actions.changeTheme(this.state);
    };

    render() {
        const { type, data } = this.state;
        return (
            <styled.Theme>
                <styled.ColumnContainer>
                    <styled.ColumnTitle>Default</styled.ColumnTitle>
                    <styled.BlockTheme>
                        <styled.ImageTheme
                            selected={type === 'day'}
                            src={dayImage}
                            onClick={() => this.handleDefaultSelect('day')}
                        />
                        <styled.NameTheme>Day theme</styled.NameTheme>
                    </styled.BlockTheme>
                    <styled.BlockTheme>
                        <styled.ImageTheme
                            selected={type === 'night'}
                            src={nightImage}
                            onClick={() => this.handleDefaultSelect('night')}
                        />
                        <styled.NameTheme>Night theme</styled.NameTheme>
                    </styled.BlockTheme>
                </styled.ColumnContainer>
                <styled.ColumnContainer>
                    <styled.ColumnTitle>Properties</styled.ColumnTitle>
                    <styled.Row>
                        <styled.Text>Base color:</styled.Text>
                        <styled.Input
                            onChange={e => this.handleDataChange('baseColor', e.target.value)}
                            value={data.baseColor}
                        />

                    </styled.Row>
                    <styled.Row>
                        <styled.Text>Secondary color:</styled.Text>
                        <styled.Input
                            onChange={e => this.handleDataChange('secondaryColor', e.target.value)}
                            value={data.secondaryColor}
                        />
                    </styled.Row>
                    <styled.ApplyButton
                        onClick={this.handleApply}
                    >
                        Apply
                    </styled.ApplyButton>
                </styled.ColumnContainer>
                {/* <styled.ThemeTitle>Theme selection</styled.ThemeTitle>
                <styled.NewTheme>
                    <styled.BlockTheme>
                        <styled.ImageTheme
                            selected={type === 'day'}
                            src={dayImage}
                            onClick={() => actions.changeTheme('day')}
                        />
                        <styled.NameTheme>Day theme</styled.NameTheme>
                    </styled.BlockTheme>
                    <styled.BlockTheme>
                        <styled.ImageTheme
                            selected={type === 'night'}
                            src={nightImage}
                            onClick={() => actions.changeTheme('night')}
                        />
                        <styled.NameTheme>Night theme</styled.NameTheme>
                    </styled.BlockTheme>
                </styled.NewTheme>
                <styled.NewAddingTheme>
                    <styled.PaintTheme src={paint} />
                    <styled.TextTheme>Custom theme</styled.TextTheme>
                </styled.NewAddingTheme> */}
            </styled.Theme>
        );
    }
}

export default Theme;

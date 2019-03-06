import React, { Component } from 'react';
import * as styled from './Theme.styles';
import dayImage from '../../../../image/day.png';
import nightImage from '../../../../image/night.png';
import paint from '../../../../image/paint.svg';
import theme from '../../../../config/theme';
import Input from "../../../../components/input/Input";

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

    handleDataChange = (key, newValue) => {
        this.setState({
            type: 'custom',
            data: {
                ...this.state.data,
                [key]: newValue,
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
                        <styled.Text>Background:</styled.Text>
                        <Input
                            onChange={(value) => this.handleDataChange('background', value)}
                            value={data.background}
                            width="120px"
                            border={true}
                        />
                    </styled.Row>
                    <styled.Row>
                        <styled.Text>Main Text:</styled.Text>
                        <Input
                            onChange={(value) => this.handleDataChange('mainText', value)}
                            value={data.background}
                            width="120px"
                            border={true}
                        />
                    </styled.Row>
                    <styled.Row>
                        <styled.Text>Background List:</styled.Text>
                        <styled.Input
                            onChange={e => this.handleDataChange('backgroundList', e.target.value)}
                            value={data.backgroundList}
                        />
                    </styled.Row>
                    <styled.Row>
                        <styled.Text>Background Header:</styled.Text>
                        <styled.Input
                            onChange={e => this.handleDataChange('backgroundHeader', e.target.value)}
                            value={data.backgroundHeader}
                        />
                    </styled.Row>
                    <styled.Row>
                        <styled.Text>Text Header:</styled.Text>
                        <styled.Input
                            onChange={e => this.handleDataChange('textHeader', e.target.value)}
                            value={data.textHeader}
                        />
                    </styled.Row>
                    <styled.Row>
                        <styled.Text>Background Button:</styled.Text>
                        <styled.Input
                            onChange={e => this.handleDataChange('backgroundButton', e.target.value)}
                            value={data.backgroundButton}
                        />
                    </styled.Row>
                    <styled.Row>
                        <styled.Text>Hover Button:</styled.Text>
                        <styled.Input
                            onChange={e => this.handleDataChange('hoverButton', e.target.value)}
                            value={data.hoverButton}
                        />
                    </styled.Row>
                    <styled.Row>
                        <styled.Text>Active Button:</styled.Text>
                        <styled.Input
                            onChange={e => this.handleDataChange('activeButton', e.target.value)}
                            value={data.activeButton}
                        />
                    </styled.Row>
                    <styled.Row>
                        <styled.Text>Button Text:</styled.Text>
                        <styled.Input
                            onChange={e => this.handleDataChange('buttonText', e.target.value)}
                            value={data.buttonText}
                        />
                    </styled.Row>
                    <styled.Row>
                        <styled.Text>Active Button Text:</styled.Text>
                        <styled.Input
                            onChange={e => this.handleDataChange('activeButtonText', e.target.value)}
                            value={data.activeButtonText}
                        />
                    </styled.Row>
                    <styled.Row>
                        <styled.Text>Checkbox Background:</styled.Text>
                        <styled.Input
                            onChange={e => this.handleDataChange('checkboxBackground', e.target.value)}
                            value={data.checkboxBackground}
                        />
                    </styled.Row>
                    <styled.Row>
                        <styled.Text>Active Checkbox:</styled.Text>
                        <styled.Input
                            onChange={e => this.handleDataChange('activeCheckbox', e.target.value)}
                            value={data.activeCheckbox}
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

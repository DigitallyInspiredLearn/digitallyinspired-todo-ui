import React, { Component } from 'react';
import * as styled from './Theme.styles';
import dayImage from '../../../../image/day.png';
import nightImage from '../../../../image/night.png';
import paint from '../../../../image/paint.svg';

class Theme extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { type, actions } = this.props;
        return (
            <styled.Theme>
                <styled.ThemeTitle>Theme selection</styled.ThemeTitle>
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
                </styled.NewAddingTheme>
            </styled.Theme>
        );
    }
}

export default Theme;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import PopapAddTag from './popapAddTag/PopapAddTag';
import {
    styles, style, MenuProps, Select, Button,
} from './MultiSelect.styled';
import { InputLabel } from '../../../components/dropDown/DropDown.styled';

class MultiSelect extends Component {
    state = { selectTags: [] };

    handleChange = (event) => {
        const { actions: { getSelectedTags } } = this.props;
        this.setState(
            { selectTags: event.target.value },
            () => getSelectedTags(this.state.selectTags),
        );
    };

    render() {
        const {
            classes, tags, actions, visible,
        } = this.props;
        const { selectTags } = this.state;
        return ([
            <div className={classes.root} key="multiSelect">
                <InputLabel htmlFor="select-multiple-chip">Tags:</InputLabel>
                <Select
                    multiple
                    placeholder="input"
                    value={selectTags}
                    onChange={this.handleChange}
                    input={<Input id="select-multiple-chip" placeholder="choose" />}
                    renderValue={selected => (
                        <div className={classes.chips}>
                            {selected.map(value => (
                                <Chip
                                    key={value.tagName}
                                    label={value.tagName}
                                    className={classes.chip}
                                    style={{ backgroundColor: value.color }}
                                />
                            ))}
                        </div>
                    )}
                    MenuProps={MenuProps}
                >
                    {
                        tags.length
                            ? tags.map(tag => (
                                <MenuItem key={tag.id} value={tag}>
                                    <div
                                        style={style}
                                        onMouseOver={this.changeVisible}
                                        onMouseOut={this.changeVisible}
                                    >
                                        <p style={style}> {tag.tagName} </p>
                                        <p
                                            key={tag.id}
                                            onClick={() => actions.deleteTag({ id: tag.id })}
                                        > X
                                        </p>
                                    </div>
                                </MenuItem>
                            ))
                            : (
                                <MenuItem>
                                    <div
                                        style={style}
                                    >
                                   Not tags yet
                                    </div>
                                </MenuItem>
                            )
                    }
                </Select>
                <PopapAddTag actions={actions} visible={visible} allTags={tags} />

            </div>,
            <Button
                key="+ tag"
                className={classes.addButton}
                onClick={() => { actions.visiblePopap(); }}
            >
                + tag
            </Button>,
        ]
        );
    }
}

MultiSelect.propTypes = {
    classes: PropTypes.object.isRequired,
    tags: PropTypes.array,
    actions: PropTypes.object.isRequired,
};

MultiSelect.defaultProps = {
    classes: {},
    tags: [],
    actions: {},
};

export default withStyles(styles, { withTheme: true })(MultiSelect);

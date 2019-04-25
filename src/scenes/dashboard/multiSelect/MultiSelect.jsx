import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import PopapAddTag from './popapAddTag/PopapAddTag';
import {
    styles, style, MenuProps, Select, Button, MenuItem,
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
                <InputLabel style={{ width: '20.1%', marginLeft: '12px' }} htmlFor="select-multiple-chip">Tags:</InputLabel>
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
                                <MenuItem key={tag.id} value={tag} style={{}}>
                                    <div
                                        onMouseOver={this.changeVisible}
                                        onMouseOut={this.changeVisible}
                                        style={{ display: 'flex', justifyContent: 'space-between !important', flex: 'auto' }}
                                    >
                                        <p
                                            style={{
                                                backgroundColor: tag.color,
                                                padding: '6px 8px',
                                                margin: '4px',
                                                borderRadius: '20px',
                                                opacity: 0.9,
                                                color: 'black',
                                            }}
                                        >
                                            {tag.tagName}
                                            <span
                                                style={{
                                                    padding: ' 0 4px',
                                                    marginLeft: '4px',
                                                    opacity: 0.6,
                                                    color: 'black',
                                                    cursor: 'pointer',
                                                }}
                                                key={tag.id}
                                                onClick={() => actions.deleteTag({ id: tag.id })}
                                            >x
                                            </span>
                                        </p>
                                    </div>
                                </MenuItem>
                            ))
                            : (
                                <MenuItem style={{ pointerEvents: 'none', color: 'grey' }}>
                                    <div>
                                   No tags yet
                                    </div>
                                </MenuItem>
                            )
                    }

                    <Button
                        key="+ tag"
                        value={null}
                        className={classes.addButton}
                        onClick={() => { actions.visiblePopap(); }}
                    >
                            add tag
                    </Button>

                </Select>
            </div>,
            <PopapAddTag actions={actions} visible={visible} allTags={tags} key="PopapAddTag" />,
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Tooltip from '@material-ui/core/Tooltip';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import PopapAddTag from './popapAddTag/PopapAddTag';
import { styles, style, MenuProps } from './MultiSelect.styled';

class MultiSelect extends Component {
    state = { selectTags: [] };

    handleChange = (event) => {
        const { actions: { getSelectedTags } } = this.props;
        this.setState(
            { selectTags: event.target.value },
            () => getSelectedTags(this.state.selectTags),
        );
    };

    componentWillMount = ({ actions } = this.props) => actions.fetchTags();

    render() {
        const {
            classes, tags, actions, visible,
        } = this.props;
        const { selectTags } = this.state;
        return ([
            <div className={classes.root}>
                <Tooltip title="Choose tags" placement="top">
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="select-multiple-chip" style={{ color: 'black' }}>Choose tags:</InputLabel>
                        <Select
                            style={{
                                color: 'black',
                                border: 'none',
                                width: '300px',
                                margin: '6px 8px 6px 0',
                                height: '52px',
                                backgroundColor: 'white',
                                borderRadius: '4px',
                                boxShadow: '0 0  4px 0  rgba(0,0,0,0.2)',
                            }}
                            multiple
                            placeholder="input"
                            value={selectTags}
                            onChange={this.handleChange}
                            input={<Input id="select-multiple-chip" placeholder="choose" />}
                            renderValue={selected => (
                                <div className={classes.chips}>
                                    {selected.map(value => (
                                        <Chip
                                            key={value.id}
                                            label={value.tagName}
                                            className={classes.chip}
                                            style={{ backgroundColor: value.color }}
                                        />
                                    ))}
                                </div>
                            )}
                            MenuProps={MenuProps}
                        >
                            {tags.map(tag => (
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
                            ))}
                        </Select>
                        <PopapAddTag actions={actions} visible={visible} allTags={tags} />
                    </FormControl>
                </Tooltip>
            </div>,
            <Tooltip title="Add new tag" placement="top">
                <button
                    className={classes.addButton}
                    onClick={() => { actions.visiblePopap(); }}
                >
                    + add new tag
                </button>
            </Tooltip>,
        ]
        );
    }
}

MultiSelect.propTypes = {
    classes: PropTypes.object.isRequired,
    tags: PropTypes.array,
    actions: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MultiSelect);

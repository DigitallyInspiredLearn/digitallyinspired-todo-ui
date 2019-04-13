import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import PopapAddTag from './popapAddTag/PopapAddTag';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',

    },
    formControl: {
        margin: '2px 8px',
        minWidth: 120,
        maxWidth: 305,
        height: '42px',
    },
    chips: {
        display: 'flex',
        padding: '4px',
        flexWrap: 'wrap',
        height: '42px',
        boxShadow: '0 0  4px 0  rgba(0,0,0,0.2)',
        overflow: 'auto',
        width: '275px',
        backgroundColor: 'white',
        borderRadius: '5px',
    },
    chip: {
        margin: '4px',
    },

});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 3 + ITEM_PADDING_TOP,
            width: 300,
        },
    },
};

// function getStyles(selectTags, that) {
//     console.log(selectTags)
//     return {
//         fontWeight:
//             that.state.selectTags.indexOf(selectTags) === -1
//                 ? that.props.theme.typography.fontWeightRegular
//                 : that.props.theme.typography.fontWeightMedium,
//     };
// }

class MultiSelect extends Component {
    state = {
        selectTags: [],
    };

    handleChange = (event) => {
        this.setState({ selectTags: event.target.value });
    };

    componentWillMount = ({ actions } = this.props) => actions.fetchTags();

    render() {
        const {
            classes, tags, actions, visible,
        } = this.props;
        const { selectTags } = this.state;
        return ([
            <div className={classes.root}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-chip" style={{ color: 'black' }}>Choose tags:</InputLabel>
                    <Select
                        style={{ color: 'black', border: 'none' }}
                        multiple
                        value={selectTags}
                        onChange={this.handleChange}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={selected => (
                            <div className={classes.chips} style={{ position: 'relative' }}>
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
                                    style={{ display: 'flex', flex: 'auto' }}
                                    onMouseOver={this.changeVisible}
                                    onMouseOut={this.changeVisible}
                                >
                                    <p style={{ display: 'flex', flex: 'auto' }}>{tag.tagName}</p>
                                    <p
                                        key={tag.id}
                                        // style={{ display: visible ? 'flex' : 'none', zIndex: 2 }}
                                        onClick={() => actions.deleteTag({ id: tag.id })}
                                    > X
                                    </p>
                                </div>
                            </MenuItem>
                        ))}
                    </Select>
                    <PopapAddTag actions={actions} visible={visible} allTags={tags} />
                </FormControl>
            </div>,
            <button
                onClick={() => { actions.visiblePopap(); }}
                style={{
                    color: 'white',
                    backgroundColor: 'black',
                    borderRadius: '12px',
                    border: 'none',
                    outline: 'none',
                    padding: '2px 6px',
                    marginTop: '20px'
                }}
            >
                    + add new tag
            </button>]
        );
    }
}

MultiSelect.propTypes = {
    classes: PropTypes.object.isRequired,
    tags: PropTypes.array,
};

export default withStyles(styles, { withTheme: true })(MultiSelect);

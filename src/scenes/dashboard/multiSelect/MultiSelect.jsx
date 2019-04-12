import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import { deleteTag } from './duck';
import PopapAddTag from './popapAddTag/PopapAddTag';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
        maxHeight: '100px',
        overflow: 'auto',
        width: '300px',
    },
    chip: {
        margin: theme.spacing.unit / 4,
    },
    noLabel: {
        marginTop: theme.spacing.unit * 3,
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

function getStyles(name, that) {
    return {
        fontWeight:
            that.state.name.indexOf(name) === -1
                ? that.props.theme.typography.fontWeightRegular
                : that.props.theme.typography.fontWeightMedium,
    };
}

class MultiSelect extends Component {
    state = {
        name: [],
    };

    handleChange = (event) => {
        this.setState({ name: event.target.value });
    };

    handlerOnBlur = (e) => {
        e.target.blur();
        this.setState({
            valueNewTag: e.target.value = '',
        });
    };

    handleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        this.setState({
            name: value,
        });
    };

    componentWillMount = ({ actions } = this.props) => actions.fetchTags();

    render() {
        const {
            classes, tags, actions, visible,
        } = this.props;
        const { name } = this.state;
        return (
            <div className={classes.root}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-chip" style={{ color: 'black' }}>Choose tags</InputLabel>
                    <Select
                        style={{ color: 'black', borderColor: 'black' }}
                        multiple
                        value={name}
                        onChange={this.handleChange}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={selected => (
                            <div className={classes.chips} style={{ position: 'relative' }}>
                                {selected.map(value => (
                                    <Chip key={value} label={value} className={classes.chip} />
                                ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                    >
                        {tags.map(tag => (
                            <MenuItem key={tag.id} value={tag.tagName} style={getStyles(tag.id, this)}>
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
                    <div onClick={() => { actions.visiblePopap(); }} style={{color: 'grey', cursor: 'pointer'}}>
                        + add new tag
                    </div>
                    <PopapAddTag actions={actions} visible={visible} allTags={tags} />
                </FormControl>
            </div>
        );
    }
}

MultiSelect.propTypes = {
    classes: PropTypes.object.isRequired,
    tags: PropTypes.array,
};

export default withStyles(styles, { withTheme: true })(MultiSelect);

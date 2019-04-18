import _Select from '@material-ui/core/Select';
import styled from 'styled-components';

export const Select = styled(_Select)`
    color: black;
    border: none;
    width: 300px;
    margin: 6px 8px 6px 0;
    height: 52px;
    backgroundColor: white;
    borderRadius: 4px;
    boxShadow: 0 0  4px 0  rgba(0,0,0,0.2);
`;

export const styles = () => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',

    },
    chips: {
        display: 'flex',
        padding: '4px',
        flexWrap: 'wrap',
        height: '42px',
        overflow: 'auto',
        width: '275px',
        backgroundColor: 'white',
        borderRadius: '5px',
    },
    chip: {
        margin: '4px',
    },
    addButton: {
        color: 'white',
        backgroundColor: 'black',
        borderRadius: '12px',
        height: '52px',
        border: 'none',
        outline: 'none',
        padding: 'px 6px',
        marginTop: '22px',
    },

});

export const style = { display: 'flex', flex: 'auto' };

export const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 48 * 3 + 8,
            width: 300,
        },
    },
};

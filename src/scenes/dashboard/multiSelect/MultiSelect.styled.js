import _Select from '@material-ui/core/Select';
import styled from 'styled-components';
import _Button from '@material-ui/core/Button';
import _MenuItem from '@material-ui/core/MenuItem';
export const Select = styled(_Select)`
    color: black;
    border: none;
    width: 74%;
    margin: 6px 8px 6px 0;
    height: 40px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 0  4px 0  rgba(0,0,0,0.2);
    padding-right: 8px;
    &:hover{
    background-color: white;
    }
`;


export const Button = styled(_Button)`
    border-radius: 4px;
    height: 53px;
    display: flex;
    align-self: center;
   
`;

export const MenuItem = styled(_MenuItem)`
    min-height: px !important;
    color: grey !important;
   
`;

export const styles = () => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
        height: '30px',
        overflow: 'auto',
        width: '98%',
        backgroundColor: 'white',
        borderRadius: '5px',
    },
    chip: {
        margin: ' 2px 4px',
    },
    addButton: {
        display: 'flex',
        alignSelf: 'flex-end',
        width: '100%',
        marginTop: '2px',
        height: '28px !important',
        padding: '2px !important',
        backgroundColor: 'grey',
        color: 'white',
        boxShadow: '0 0  4px 0  rgba(0,0,0,0.2)',
        borderBottom: '1px solid grey',
    },

});

export const style = { display: 'flex', flex: 'auto' };

export const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 152,
            width: 300,
        },
    },
};

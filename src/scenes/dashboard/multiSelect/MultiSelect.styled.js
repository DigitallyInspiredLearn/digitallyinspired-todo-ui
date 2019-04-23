import _Select from '@material-ui/core/Select';
import styled from 'styled-components';
import _Button from '@material-ui/core/Button';

export const Select = styled(_Select)`
    color: black;
    border: none;
    width: 300px;
    margin: 6px 8px 6px 0;
    height: 52px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 0  4px 0  rgba(0,0,0,0.2);
`;


export const Button = styled(_Button)`
    border-radius: 4px;
    height: 52px;
    display: flex;
    align-self: center;
   
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
        height: '40px',
        overflow: 'auto',
        width: '290px',
        backgroundColor: 'white',
        borderRadius: '5px',
    },
    chip: {
        margin: '4px',
    },
    addButton: {
        marginTop: '20px',
        backgroundColor: 'white',
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

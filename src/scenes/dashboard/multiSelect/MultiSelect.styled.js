export const styles = () => ({
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
    addButton: {
        color: 'white',
        backgroundColor: 'black',
        borderRadius: '12px',
        border: 'none',
        outline: 'none',
        padding: '2px 6px',
        marginTop: '20px',
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

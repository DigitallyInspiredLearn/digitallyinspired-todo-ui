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

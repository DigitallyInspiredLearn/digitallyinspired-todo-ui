import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import moment from 'moment';

const getTime = (durationTime) => {
    const date = new Date();
    date.setTime(durationTime);
    return date.getHours();
};

export default class FormDialog extends React.Component {
    constructor(props) {
        super(props);
        const duration = moment.duration(moment(props.completedDate).diff(moment(props.createdDate)));
        console.log(duration.hours(), 'hours');
        console.log(duration.minutes(), 'minutes');
        this.state = {
            durationTime: '',
        };
    }

    // handleClickOpen = () => {
    //     this.setState({ open: true });
    // };

    // handleClose = () => {
    //     this.setState({ open: false });
    // };

    changeDurationTime = (time) => {
        this.setState({ durationTime: time });
    }

    render() {
        const { show, handleClose, durationTime, handleChangeDurationTime } = this.props;
        return (
            <div>
                <Dialog
                    open={show}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle
                        id="form-dialog-title"
                    >
                        Task duration time
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            You can change time, which you spent for complete task
                        </DialogContentText>
                        <TextField
                            onChange={e => this.changeDurationTime(e.target.value)}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Duration time"
                            fullWidth
                            type="number"
                            defaultValue={getTime(durationTime)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={handleClose}
                            color="primary"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleChangeDurationTime(this.state.durationTime)}
                            color="primary"
                        >
                            Enter
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { Close, DeleteForever } from '@material-ui/icons';
import styles from './Confirmation.module.scss';

const Confirmation = ({ open, onClose, onDelete }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className={styles.confirmation}>
        <DialogTitle id="alert-dialog-title">
          {'Are you sure you want to delete this task?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You'll not be able to restore this task if you delete it.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onClose}
            variant="contained"
            color="primary"
            endIcon={<Close>Close</Close>}
            autoFocus
          >
            Cancel
          </Button>
          <Button
            onClick={onDelete}
            variant="contained"
            color="primary"
            endIcon={<DeleteForever>Delete</DeleteForever>}
          >
            Delete
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default Confirmation;
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

// @mui Dialog
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import { Icon } from '@iconify/react';
import Collapse from '@mui/material/Collapse';

import CircularProgress from '@mui/material/CircularProgress';

const UserSelect = ({ open, handleClose, handleUpdateUser, isUploadComplete, isEmportError, setIsUploadComplete, alertMessage, loading }) => {
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>File upload</DialogTitle>
        <DialogContent >
        <TextField
            autoFocus
            required
            margin="dense"
            id="file"
            label="Import file"
            type="file"
            fullWidth
            variant="standard"
            inputProps={{ accept: '.xls, .xlsx' }}
            />

        
        
        {/* {loading && <CircularProgress />} */}
        
        </DialogContent>

        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={updateUserApi} >
                Save</Button>
        </DialogActions>
    </Dialog>
}

const updateUserApi = () => {
}

export default UserSelect
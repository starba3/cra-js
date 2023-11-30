import Button from '@mui/material/Button';

// @mui Dialog
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


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
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
import { useLocales } from 'src/locales';

import CircularProgress from '@mui/material/CircularProgress';

function Fileupload({ open, handleClose, handleFileUpload, isUploadComplete, isEmportError, setIsUploadComplete, alertMessage, loading }) {
    
    const { t } = useLocales();
    const Translate = (text) => t(text);

    return (
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

        <Collapse in={isUploadComplete}>
            <Alert
                severity={isEmportError ? "error" : "success"}
                action={
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                    setIsUploadComplete(false);
                    }}
                    
                >
                    <Icon icon="ic:baseline-close" />

                </IconButton>
                }
                sx={{ mb: 2 }}
            >
                {alertMessage}
            </Alert>
            
        </Collapse>
        
        {loading && <CircularProgress />}
        
        </DialogContent>

        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleFileUpload} >Import</Button>
        </DialogActions>
    </Dialog>
     );
}

export default Fileupload
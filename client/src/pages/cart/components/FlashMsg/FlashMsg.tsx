import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, SlideProps, Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import React, {useState} from 'react';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const Transition = React.forwardRef<JSX.Element, SlideProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export const FlashMsg = ({ msg }: any) => {

  let success = 'Tienes productos en tu carrito';
  let info = 'Stock agotado';

  const [open, setOpen] = useState(true);
  const handleClose = (reason: any) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  return (
    <div>
      { msg === success ? (
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
       <Alert 
        severity='success'
        onClose={handleClose}
        sx={{ width: "100%", fontSize: 12 }}
        >
          {msg}
        </Alert>
      </Snackbar>
      ) :(

      <Dialog
        open={open}
        // TransitionComponent ={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        
        <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
  )
}
    </div>
  )
}

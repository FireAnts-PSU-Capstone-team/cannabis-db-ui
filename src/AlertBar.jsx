import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'

export default function AlertBar(props) {
  const { severity, message, open, onClose } = props;

  const anchorOrigin = {
    vertical: 'top',
    horizontal: 'center',
  }

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose} anchorOrigin={anchorOrigin}>
      <Alert onClose={onClose} severity={severity}>{message}</Alert>
    </Snackbar>
  );
}

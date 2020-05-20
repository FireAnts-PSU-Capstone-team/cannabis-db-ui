import React, { createContext, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export const AlertBarContext = createContext();

export function AlertBarProvider(props) {
  const [severity, setSeverity] = useState('success');
  const [message, setMessage] = useState('Alert loaded');
  const [open, setOpen] = useState(false);

  const openAlertBar = (severity, message) => {
    setSeverity(severity);
    setMessage(message);
    setOpen(true);
  };

  return (
    <AlertBarContext.Provider value={openAlertBar}>
      {props.children}
      <AlertBar severity={severity} message={message} open={open} onClose={() => setOpen(false)} />
    </AlertBarContext.Provider>
  );
}

export function AlertBar(props) {
  const { severity, message, open, onClose } = props;

  const anchorOrigin = {
    vertical: 'top',
    horizontal: 'center',
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose} anchorOrigin={anchorOrigin}>
      <Alert variant="filled" onClose={onClose} severity={severity}>{message}</Alert>
    </Snackbar>
  );
}

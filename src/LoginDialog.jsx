import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import { makeField } from './IntakeRowForm';

export default function LoginDialog(props) {
  const { open, onClose, onSubmit } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitClick = () => {

    if (email.length > 0 && password.length > 0) {
      const userCredentials = {
        email: email,
        password: password,
      };

      onSubmit(userCredentials)
    } else {
      console.log('must enter both email and password');
    }
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="login-dialog">
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        {makeField('Email', '', e => setEmail(e.target.value))}
        <TextField
          style={{ marginBottom: '1rem' }}
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          onChange={e => setPassword(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={onSubmitClick} color="primary">Submit</Button>
      </DialogActions>
    </Dialog>
  );
}

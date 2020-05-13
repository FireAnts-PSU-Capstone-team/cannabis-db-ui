import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import { makeField } from './IntakeRowForm';

export default function LoginDialog(props) {
  const { open, onClose, onSubmit } = props;

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitClick = () => {

    if (user.length > 0 && password.length > 0) {
      const userCredentials = {
        user: user,
        password: password,
      };

      onSubmit(userCredentials)
    } else {
      console.log('must enter both user and password');
    }
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="login-dialog">
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        {makeField('User', '', e => setUser(e.target.value))}
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

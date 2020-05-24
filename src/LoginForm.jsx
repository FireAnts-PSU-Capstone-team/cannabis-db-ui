import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';

export default function LoginForm(props) {
  const { onSubmit } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFormSubmit = event => {
    event.preventDefault();

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
    <form onSubmit={onFormSubmit} aria-label="login-form" >
      <Typography
        style={{ marginTop: '1.5rem' }}
        variant="h6"
        align="center"
      >
        Login
      </Typography>
      <TextField
        style={{ display: 'block' }}
        fullWidth
        margin="normal"
        label="Email"
        variant="outlined"
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        style={{ display: 'block' }}
        fullWidth
        margin="normal"
        label="Password"
        type="password"
        variant="outlined"
        onChange={e => setPassword(e.target.value)}
      />
      <Button
        style={{ float: 'right' }}
        type="submit"
        onClick={onFormSubmit}
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </form >
  );
}

import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { makeField } from './IntakeRowForm';

export default function LoginForm(props) {
  const { onSubmit } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFormSubmit = () => {
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
    <form onSubmit={onFormSubmit} aria-label="login-form">
      <Typography
        style={{ margin: '1rem 0' }}
        variant="h6"
        align="center"
      >
        Login
      </Typography>
      {makeField('Email', '', e => setEmail(e.target.value))}
      <TextField
        style={{ marginBottom: '1rem' }}
        fullWidth
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
    </form>
  );
}

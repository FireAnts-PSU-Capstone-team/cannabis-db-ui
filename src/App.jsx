import React, { useState } from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import Nav from './Nav';
import Title from './Title';
import WhatsNew from './WhatsNew';
import AddNewEntries from './AddNewEntries';
import SeeTheData from './SeeTheData';
import VisualizeWithTableau from './VisualizeWithTableau';
import LoginDialog from './LoginDialog';
import { login, logout } from './ApiCaller';

export default function App() {
  const [navValue, setNavValue] = useState(2);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);

  const [username, setUsername] = useState('');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isUserAdmin, setIsUserAdmin] = useState(false);

  const onLogin = credentials => {
    setLoginDialogOpen(false);
    login(credentials).then(res => {
      console.log(res, credentials, 'logged in');
      setIsUserLoggedIn(true);
      setUsername(res.name)
      if (res.is_admin === true) {
        setIsUserAdmin(true);
      } else {
        setIsUserAdmin(false);
      }
    });
  };

  const onLogout = () => {
    logout().then(_ => {
      console.log("login'nt");
      setIsUserAdmin(false);
      setIsUserLoggedIn(false);
    });
  }

  const onNavChange = (_, newValue) => {
    setNavValue(newValue);
  }

  const getComponentMatchingNavValue = () => {
    switch (navValue) {
      case 0:
        return <WhatsNew isUserAdmin={isUserAdmin} />;
      case 1:
        return <AddNewEntries isUserAdmin={isUserAdmin} />;
      case 2:
        return <SeeTheData isUserAdmin={isUserAdmin} />;
      case 3:
        return <VisualizeWithTableau isUserAdmin={isUserAdmin} />;
      default:
        break;
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <Title />
      </Grid>
      <Grid item xs={12} sm={6}>
        {isUserLoggedIn ?
          <>
            <Button style={{ margin: '1rem 1rem', float: 'right' }} onClick={onLogout}>Logout</Button>
            <Typography variant="body1" style={{ marginTop: '1.35rem' }} align="right">Hi there, {username}</Typography>
          </> :
          <Button style={{ margin: '1rem 1rem', float: 'right' }}  onClick={() => setLoginDialogOpen(true)}>Login</Button>}
      </Grid>
      <Grid item xs={12}>
        <Nav navValue={navValue} onNavChange={onNavChange} />
      </Grid>
      <Grid item xs={12}>
        {getComponentMatchingNavValue()}
      </Grid>
      <LoginDialog
        open={loginDialogOpen}
        onClose={() => setLoginDialogOpen(false)}
        onSubmit={onLogin}
      />
    </Grid>
  );
}

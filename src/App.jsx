import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import Nav from './Nav';
import Title from './Title';
import WhatsNew from './WhatsNew';
import AddNewEntries from './AddNewEntries';
import SeeTheData from './SeeTheData';
import VisualizeWithTableau from './VisualizeWithTableau';
import LoginDialog from './LoginDialog';
import { login } from './ApiCaller';

export default function App() {
  const [navValue, setNavValue] = useState(2);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);

  const onLogin = credentials => {
    setLoginDialogOpen(false);
    login(credentials).then(res => console.log(res, credentials));
  };

  const onNavChange = (_, newValue) => {
    setNavValue(newValue);
  }

  const getComponentMatchingNavValue = () => {
    switch (navValue) {
      case 0:
        return <WhatsNew />;
      case 1:
        return <AddNewEntries />;
      case 2:
        return <SeeTheData />;
      case 3:
        return <VisualizeWithTableau />;
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
        <Button style={{ margin: '1rem 1rem', float: 'right' }} onClick={() => setLoginDialogOpen(true)}>Login</Button>
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

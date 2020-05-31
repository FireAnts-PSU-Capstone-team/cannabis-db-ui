import React, { useState, useContext } from 'react';
import { Grid, Button, Typography, Container } from '@material-ui/core';
import Nav from './Nav';
import Title from './Title';
import WhatsNew from './WhatsNew';
import AddNewEntries from './AddNewEntries';
import SeeTheData from './SeeTheData';
import VisualizeWithTableau from './VisualizeWithTableau';
import LoginForm from './LoginForm';
import { login, logout, getErrorMessage, enableReadOnly, signup } from './ApiCaller';
import { AlertBarContext } from './AlertBarContext';
import { UserContext } from './UserContext';
import SignupForm from './SignUpForm';

export default function App() {
  const [navValue, setNavValue] = useState(2);
  const [user, userDispatch] = useContext(UserContext);
  const openAlertBar = useContext(AlertBarContext);

  const onLogin = credentials => {
    login(credentials)
      .then(res => {
        userDispatch({
          type: 'login',
          name: res.user.name,
          isAdmin: res.user.is_admin,
          isReadOnly: res.user.read_only,
        });

        console.log('logged in', res);
        openAlertBar('success', `Logged in as ${res.user.name}`);
      })
      .catch(err => {
        getErrorMessage(err).then(errorMessage => {
          console.log('log in fail', errorMessage);
          openAlertBar('error', `Failed to log in. Error message: ${errorMessage}`);
        });
      });
  };

  const onSignup = credentials => {
    signup(credentials)
      .then(res => {
        console.log('signed up', res);
        openAlertBar('success', `Signed up successfully`);
      })
      .catch(err => {
        getErrorMessage(err).then(errorMessage => {
          console.log('log in fail', errorMessage);
          openAlertBar('error', `Failed to log in. Error message: ${errorMessage}`);
        });
      });
  };

  const onLogout = () => {
    logout()
      .then(res => {
        userDispatch({ type: 'logout' });

        console.log('logged out', res);
        openAlertBar('success', 'Logged out.');
      })
      .catch(err => {
        getErrorMessage(err).then(errorMessage => {
          console.log('log out fail', errorMessage);
          openAlertBar('error', `Failed to log out. Error message: ${errorMessage}`);
        });
      });
  }

  const onEnableReadOnly = () => {
    enableReadOnly()
      .then(_ => {
        userDispatch({ type: 'enable-readonly' });
        console.log('enabled read-only mode');
        openAlertBar('success', 'Enabled read-only mode');
      })
      .catch(err => {
        getErrorMessage(err).then(errorMessage => {
          console.log('enable read-only mode fail', errorMessage);
          openAlertBar('error', `Failed to enable read-only mode. Error message: ${errorMessage}`);
        });
      });
  }

  const onDisableReadOnly = () => {
    enableReadOnly()
      .then(_ => {
        userDispatch({ type: 'disable-readonly' });
        console.log('disabled read-only mode');
        openAlertBar('success', 'Disabled read-only mode');
      })
      .catch(err => {
        getErrorMessage(err).then(errorMessage => {
          console.log('disable read-only mode fail', errorMessage);
          openAlertBar('error', `Failed to disable read-only mode. Error message: ${errorMessage}`);
        });
      });
  }

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

  if (user.isLoggedIn) {
    return (
      <Container>
        <Grid container item xs={12} justify="space-between" alignItems="center">
          <Grid item>
            <Title />
          </Grid>
          <Grid item>
            <Typography variant="body1" align="right">Hi there, {user.name}</Typography>
            <Button style={{ float: 'right' }} onClick={onLogout}>Logout</Button>
            {user.isReadOnly ?
              <Button style={{ float: 'right' }} onClick={onDisableReadOnly}>Disable read-only mode</Button> :
              <Button style={{ float: 'right' }} onClick={onEnableReadOnly}>Enable read-only mode</Button>}
          </Grid>
        </Grid>
        <Nav navValue={navValue} onNavChange={onNavChange} />
        {getComponentMatchingNavValue()}
      </Container>
    );
  } else {
    return (
      <Container>
        <Title />
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} sm={6}>
            <LoginForm onSubmit={onLogin} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SignupForm onSubmit={onSignup} />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

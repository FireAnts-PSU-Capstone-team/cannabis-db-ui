import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './style.css';
import IntakeRowAddForm from './IntakeRowAddForm';
import AddViaSpreadSheetForm from './AddViaSpreadSheetForm';
import { addRow, getErrorMessage } from './ApiCaller';
import { AlertBarContext } from './AlertBarContext';
import { UserContext } from './UserContext';

export default function AddNewEntries() {
  const [user] = useContext(UserContext);
  const openAlertBar = useContext(AlertBarContext);

  const onAddAnEntry = rowToAdd => {
    addRow(rowToAdd)
      .then(res => {
        console.log('added row', res);
        openAlertBar('success', `Added row ${res.row}`);
      })
      .catch(err => {
        getErrorMessage(err).then(errorMessage => {
          console.log('add row fail', errorMessage);
          openAlertBar('error', `Failed to add row. Error message: ${errorMessage}`);
        });
      });
  }

  if (user.isLoggedIn && !user.isReadOnly) {
    return (
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4}>
            <Container maxWidth="md">
              <h1>Add entries via spreadsheets</h1>
              <AddViaSpreadSheetForm />
            </Container>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Container maxWidth="md">
              <h1>Add an entry</h1>
              <IntakeRowAddForm onSubmit={onAddAnEntry} />
            </Container>
          </Grid>
        </Grid>
      </Container>
    );
  } else if (user.isLoggedIn) {
    return (
      <Container>
        <Typography variant="body1" align="center">
          You don't have permission to add entries. Did you forget to turn off read-only mode?
        </Typography>
      </Container>
    );
  } else {
    return (
      <Container>
        <Typography variant="body1" align="center">
          You are not logged in.
        </Typography>
      </Container>
    );
  }
}

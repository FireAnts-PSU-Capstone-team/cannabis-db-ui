import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './style.css';
import IntakeRowForm from './IntakeRowForm';
import AddViaSpreadSheetForm from './AddViaSpreadSheetForm';
import { addRow, getErrorMessage } from './ApiCaller';
import { AlertBarContext } from './AlertBarContext';

export default function AddNewEntries(props) {
  const { isUserAdmin } = props;

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

  if (isUserAdmin) {
    return (
      <Container maxWidth="lg">
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
              <IntakeRowForm onSubmit={onAddAnEntry} />
            </Container>
          </Grid>
        </Grid>
      </Container>
    );
  } else {
    return (
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">You are not an admin. Please log in.</Typography>
      </Container>
    );
  }
}

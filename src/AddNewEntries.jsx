import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './style.css';
import IntakeRowForm from './IntakeRowForm';
import AddViaSpreadSheetForm from './AddViaSpreadSheetForm';
import { addRow } from './ApiCaller';

export default function AddNewEntries(props) {
  const { isUserAdmin } = props;

  const onAddAnEntry = rowToAdd => {
    addRow(rowToAdd).then(res => console.log(res)).catch(err => console.log(err));
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

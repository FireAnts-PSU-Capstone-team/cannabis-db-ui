import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './style.css';
import IntakeRowForm from './IntakeRowForm';
import AddViaSpreadSheetForm from './AddViaSpreadSheetForm';

export default function AddNewEntries() {
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
            <IntakeRowForm/>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

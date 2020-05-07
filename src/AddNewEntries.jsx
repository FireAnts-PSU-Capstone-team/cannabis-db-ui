import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './style.css';
import IntakeRowForm from './IntakeRowForm';
import AddViaSpreadSheetForm from './AddViaSpreadSheetForm';
import { addRow } from './MockApi';

export default function AddNewEntries() {
  const onAddAnEntry = rowToAdd => {
    addRow(rowToAdd).then(res => console.log(res));
  }

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
}

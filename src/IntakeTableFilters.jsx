import React, { useState } from 'react';
import { TextField, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanelActions, Typography, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilterListIcon from '@material-ui/icons/FilterList';
import { makeField as makeWideField } from './IntakeRowForm';

export default function IntakeTableFilters(props) {
  const { onSubmit } = props;

  const [rowFromValue, setRowFromValue] = useState('');
  const [rowToValue, setRowToValue] = useState('');
  const [submissionDateFromValue, setSubmissionDateFromValue] = useState('');
  const [submissionDateToValue, setSubmissionDateToValue] = useState('');
  const [entityValue, setEntityValue] = useState('');

  const onFilterClick = _ => {
    const query = {
      "row from": rowFromValue,
      "row to": rowToValue,
      "Submission date from": submissionDateFromValue,
      "Submission date to": submissionDateToValue,
      "Entity": entityValue,
    }

    onSubmit(query);
  }

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
      >
        <FilterListIcon />
        <Typography>Filters</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <form style={{ width: '100%' }}>
          <div>
            <TextField
              style={{ marginBottom: '1rem' }}
              variant="outlined"
              label="row from"
              onChange={e => setRowFromValue(e.target.value)}
            />
            <TextField
              style={{ margin: '0 0 1rem 1rem' }}
              variant="outlined"
              label="row to"
              onChange={e => setRowToValue(e.target.value)}
            />
          </div>
          <div>
            <TextField
              style={{ marginBottom: '1rem' }}
              label="Submission date from"
              variant="outlined"
              onChange={e => setSubmissionDateFromValue(e.target.value)}
            />
            <TextField
              style={{ margin: '0 0 1rem 1rem' }}
              label="Submission date to"
              variant="outlined"
              onChange={e => setSubmissionDateToValue(e.target.value)}
            />
          </div>
          {makeWideField('Entity', '', e => setEntityValue(e.target.value))}
        </form>
      </ExpansionPanelDetails>
      <ExpansionPanelActions>
        <Button onClick={onFilterClick}>Filter</Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
  );
}
import React, { useState } from 'react';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanelActions, Typography, Button, Select, InputLabel, Input, MenuItem, Chip, TextField } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilterListIcon from '@material-ui/icons/FilterList';

export default function IntakeTableFilters(props) {
  const { onSubmit, allColumns } = props;

  const [whereValue, setWhereValue] = useState('');
  const [columns, setColumns] = useState(allColumns);

  const onFilterClick = _ => {
    const query = {
      table: 'intake',
      columns: columns,
      where: whereValue,
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
          <InputLabel id="columns-label">Columns</InputLabel>
          <Select
            labelId="columns-label"
            id="columns-select"
            multiple
            value={columns}
            onChange={e => setColumns(e.target.value)}
            input={<Input />}
            renderValue={selected => selected.map(elem => <Chip key={elem} label={elem} />)}
            style={{ width: '100%' }}
          >
            {allColumns.map(column =>
              <MenuItem key={column} value={column}>{column}</MenuItem>
            )}
          </Select>
          <TextField
            style={{ marginTop: '1rem' }}
            fullWidth
            label="Where"
            onChange={e => setWhereValue(e.target.value)}
          />
        </form>
      </ExpansionPanelDetails>
      <ExpansionPanelActions>
        <Button onClick={onFilterClick}>Filter</Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
  );
}
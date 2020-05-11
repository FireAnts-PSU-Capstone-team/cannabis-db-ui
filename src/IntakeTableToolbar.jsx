import React from 'react';
import { Toolbar, Typography, Tooltip, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import RefreshIcon from '@material-ui/icons/Refresh';

export default function IntakeTableToolbar(props) {
  const { numSelected, onDeleteRows, onRefreshTable, onEditRow } = props;

  return (
    <Toolbar>
      <Typography variant="h6">Intake</Typography>
      <Tooltip title="Refresh">
        <IconButton aria-label="refresh-table" onClick={onRefreshTable}><RefreshIcon /></IconButton>
      </Tooltip>
      {numSelected === 1 ?
        <Tooltip title="Edit">
          <IconButton aria-label="edit-row" onClick={onEditRow}><EditIcon /></IconButton>
        </Tooltip> : null}
      {numSelected > 0 ?
        <Tooltip title="Delete">
          <IconButton aria-label="delete-rows" onClick={onDeleteRows}><DeleteIcon /></IconButton>
        </Tooltip> : null}
      <Typography variant="subtitle1">{numSelected} selected</Typography>
    </Toolbar>
  );
};

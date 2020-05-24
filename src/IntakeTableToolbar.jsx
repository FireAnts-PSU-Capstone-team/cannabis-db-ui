import React, { useContext } from 'react';
import { Toolbar, Typography, Tooltip, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import RefreshIcon from '@material-ui/icons/Refresh';
import { UserContext } from './UserContext';

export default function IntakeTableToolbar(props) {
  const { numSelected, onDeleteRows, onRefreshTable, onEditRow } = props;

  const [user] = useContext(UserContext);

  const canUserEdit = numSelected === 1 && !user.isReadOnly;
  const canUserDelete = numSelected > 0 && user.isAdmin && !user.isReadOnly;

  return (
    <Toolbar>
      <Typography variant="h6">Intake</Typography>
      <Tooltip title="Refresh">
        <IconButton aria-label="refresh-table" onClick={onRefreshTable}><RefreshIcon /></IconButton>
      </Tooltip>
      {canUserEdit &&
        <Tooltip title="Edit">
          <IconButton aria-label="edit-row" onClick={onEditRow}><EditIcon /></IconButton>
        </Tooltip>}
      {canUserDelete &&
        <Tooltip title="Delete">
          <IconButton aria-label="delete-rows" onClick={onDeleteRows}><DeleteIcon /></IconButton>
        </Tooltip>}
      <Typography variant="subtitle1">{numSelected} selected</Typography>
    </Toolbar>
  );
};

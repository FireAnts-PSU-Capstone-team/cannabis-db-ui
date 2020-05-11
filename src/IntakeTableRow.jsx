import React from 'react';
import { TableCell, TableRow, Checkbox } from '@material-ui/core';

export default function IntakeTableRow(props) {
  const { onRowClick, isRowSelected, index, row } = props;

  const labelId = `intake-table-checkbox-${index}`;
  const makeCellKey = property => `intake-table-cell-${index}-${property}`;

  return (
    <TableRow
      hover
      onClick={onRowClick}
      role="checkbox"
      aria-checked={isRowSelected}
      tabIndex={-1}
      key={row["row"]}
      selected={isRowSelected}
    >
      <TableCell padding="checkbox">
        <Checkbox
          checked={isRowSelected}
          inputProps={{ 'aria-labelledby': labelId }}
        />
      </TableCell>
      <TableCell key={makeCellKey('row')} align="right">{row['row']}</TableCell>
      <TableCell key={makeCellKey('Submission date')} align="left">{row['Submission date']}</TableCell>
      <TableCell key={makeCellKey('Entity')} align="left">{row['Entity']}</TableCell>
      <TableCell key={makeCellKey('DBA')} align="left">{row['DBA']}</TableCell>
      <TableCell key={makeCellKey('Facility Address')} align="left">{row['Facility Address']}</TableCell>
      <TableCell key={makeCellKey('Facility Suite #')} align="right">{row['Facility Suite #']}</TableCell>
      <TableCell key={makeCellKey('Facility Zip')} align="right">{row['Facility Zip']}</TableCell>
      <TableCell key={makeCellKey('Mailing Address')} align="left">{row['Mailing Address']}</TableCell>
      <TableCell key={makeCellKey('MRL')} align="left">{row['MRL']}</TableCell>
      <TableCell key={makeCellKey('Neighborhood Association')} align="left">{row['Neighborhood Association']}</TableCell>
      <TableCell key={makeCellKey('Compliance Region')} align="left">{row['Compliance Region']}</TableCell>
      <TableCell key={makeCellKey('Primary Contact First Name')} align="left">{row['Primary Contact First Name']}</TableCell>
      <TableCell key={makeCellKey('Primary Contact Last Name')} align="left">{row['Primary Contact Last Name']}</TableCell>
      <TableCell key={makeCellKey('Email')} align="left">{row['Email']}</TableCell>
      <TableCell key={makeCellKey('Phone')} align="left">{row['Phone']}</TableCell>
      <TableCell key={makeCellKey('Endorse Type')} align="left">{row['Endorse Type']}</TableCell>
      <TableCell key={makeCellKey('License Type')} align="left">{row['License Type']}</TableCell>
      <TableCell key={makeCellKey('Repeat location?')} align="left">{row['Repeat location?']}</TableCell>
      <TableCell key={makeCellKey('App complete?')} align="left">{row['App complete?']}</TableCell>
      <TableCell key={makeCellKey('Fee Schedule')} align="left">{row['Fee Schedule']}</TableCell>
      <TableCell key={makeCellKey('Receipt No.')} align="left">{row['Receipt No.']}</TableCell>
      <TableCell key={makeCellKey('Cash Amount')} align="left">{row['Cash Amount']}</TableCell>
      <TableCell key={makeCellKey('Check Amount')} align="left">{row['Check Amount']}</TableCell>
      <TableCell key={makeCellKey('Card Amount')} align="left">{row['Card Amount']}</TableCell>
      <TableCell key={makeCellKey('Check No. / Approval Code')} align="right">{row['Check No. / Approval Code']}</TableCell>
      <TableCell key={makeCellKey('MRL#')} align="left">{row['MRL#']}</TableCell>
      <TableCell key={makeCellKey('Notes')} align="left">{row['Notes']}</TableCell>
    </TableRow>
  );
}

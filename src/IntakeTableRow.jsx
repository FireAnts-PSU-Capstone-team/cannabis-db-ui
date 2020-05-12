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
      <TableCell key={makeCellKey('row')} align="right">{row.row}</TableCell>
      <TableCell key={makeCellKey('Submission date')} align="left">{row.submission_date}</TableCell>
      <TableCell key={makeCellKey('Entity')} align="left">{row.entity}</TableCell>
      <TableCell key={makeCellKey('DBA')} align="left">{row.dba}</TableCell>
      <TableCell key={makeCellKey('Facility Address')} align="left">{row.facility_address}</TableCell>
      <TableCell key={makeCellKey('Facility Suite #')} align="right">{row.facility_suite}</TableCell>
      <TableCell key={makeCellKey('Facility Zip')} align="right">{row.facility_zip}</TableCell>
      <TableCell key={makeCellKey('Mailing Address')} align="left">{row.mailing_address}</TableCell>
      <TableCell key={makeCellKey('MRL')} align="left">{row.mrl}</TableCell>
      <TableCell key={makeCellKey('Neighborhood Association')} align="left">{row.neighborhood_association}</TableCell>
      <TableCell key={makeCellKey('Compliance Region')} align="left">{row.compliance_region}</TableCell>
      <TableCell key={makeCellKey('Primary Contact First Name')} align="left">{row.primary_contact_first_name}</TableCell>
      <TableCell key={makeCellKey('Primary Contact Last Name')} align="left">{row.primary_contact_last_name}</TableCell>
      <TableCell key={makeCellKey('Email')} align="left">{row.email}</TableCell>
      <TableCell key={makeCellKey('Phone')} align="left">{row.phone}</TableCell>
      <TableCell key={makeCellKey('Endorse Type')} align="left">{row.endorse_type}</TableCell>
      <TableCell key={makeCellKey('License Type')} align="left">{row.license_type}</TableCell>
      <TableCell key={makeCellKey('Repeat location?')} align="left">{row.repeat_location}</TableCell>
      <TableCell key={makeCellKey('App complete?')} align="left">{row.app_complete}</TableCell>
      <TableCell key={makeCellKey('Fee Schedule')} align="left">{row.fee_schedule}</TableCell>
      <TableCell key={makeCellKey('Receipt No.')} align="left">{row.receipt_num}</TableCell>
      <TableCell key={makeCellKey('Cash Amount')} align="left">{row.cash_amount}</TableCell>
      <TableCell key={makeCellKey('Check Amount')} align="left">{row.check_amount}</TableCell>
      <TableCell key={makeCellKey('Card Amount')} align="left">{row.card_amount}</TableCell>
      <TableCell key={makeCellKey('Check No. / Approval Code')} align="right">{row.check_num_approval_code}</TableCell>
      <TableCell key={makeCellKey('MRL#')} align="left">{row.mrl_num}</TableCell>
      <TableCell key={makeCellKey('Notes')} align="left">{row.notes}</TableCell>
    </TableRow>
  );
}

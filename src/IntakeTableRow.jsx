import React from 'react';
import { TableCell, TableRow, Checkbox } from '@material-ui/core';

export default function IntakeTableRow(props) {
  const { onRowClick, isRowSelected, index, row, shownColumns } = props;

  const labelId = `intake-table-checkbox-${index}`;
  const makeCellKey = property => `intake-table-cell-${index}-${property}`;

  const isColumnShown = column => shownColumns.includes(column);

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
      {isColumnShown('row') && <TableCell key={makeCellKey('row')} align="right">{row.row}</TableCell>}
      {isColumnShown('Submission date') && <TableCell key={makeCellKey('Submission date')} align="left">{row.submission_date}</TableCell>}
      {isColumnShown('Entity') && <TableCell key={makeCellKey('Entity')} align="left">{row.entity}</TableCell>}
      {isColumnShown('DBA') && <TableCell key={makeCellKey('DBA')} align="left">{row.dba}</TableCell>}
      {isColumnShown('Facility Address') && <TableCell key={makeCellKey('Facility Address')} align="left">{row.facility_address}</TableCell>}
      {isColumnShown('Facility Suite #') && <TableCell key={makeCellKey('Facility Suite #')} align="right">{row.facility_suite}</TableCell>}
      {isColumnShown('Facility Zip') && <TableCell key={makeCellKey('Facility Zip')} align="right">{row.facility_zip}</TableCell>}
      {isColumnShown('Mailing Address') && <TableCell key={makeCellKey('Mailing Address')} align="left">{row.mailing_address}</TableCell>}
      {isColumnShown('MRL') && <TableCell key={makeCellKey('MRL')} align="left">{row.mrl}</TableCell>}
      {isColumnShown('Neighborhood Association') && <TableCell key={makeCellKey('Neighborhood Association')} align="left">{row.neighborhood_association}</TableCell>}
      {isColumnShown('Compliance Region') && <TableCell key={makeCellKey('Compliance Region')} align="left">{row.compliance_region}</TableCell>}
      {isColumnShown('Primary Contact First Name') && <TableCell key={makeCellKey('Primary Contact First Name')} align="left">{row.primary_contact_first_name}</TableCell>}
      {isColumnShown('Primary Contact Last Name') && <TableCell key={makeCellKey('Primary Contact Last Name')} align="left">{row.primary_contact_last_name}</TableCell>}
      {isColumnShown('Email') && <TableCell key={makeCellKey('Email')} align="left">{row.email}</TableCell>}
      {isColumnShown('Phone') && <TableCell key={makeCellKey('Phone')} align="left">{row.phone}</TableCell>}
      {isColumnShown('Endorse Type') && <TableCell key={makeCellKey('Endorse Type')} align="left">{row.endorse_type}</TableCell>}
      {isColumnShown('License Type') && <TableCell key={makeCellKey('License Type')} align="left">{row.license_type}</TableCell>}
      {isColumnShown('Repeat location?') && <TableCell key={makeCellKey('Repeat location?')} align="left">{row.repeat_location}</TableCell>}
      {isColumnShown('App complete?') && <TableCell key={makeCellKey('App complete?')} align="left">{row.app_complete}</TableCell>}
      {isColumnShown('Fee Schedule') && <TableCell key={makeCellKey('Fee Schedule')} align="left">{row.fee_schedule}</TableCell>}
      {isColumnShown('Receipt No.') && <TableCell key={makeCellKey('Receipt No.')} align="left">{row.receipt_num}</TableCell>}
      {isColumnShown('Cash Amount') && <TableCell key={makeCellKey('Cash Amount')} align="left">{row.cash_amount}</TableCell>}
      {isColumnShown('Check Amount') && <TableCell key={makeCellKey('Check Amount')} align="left">{row.check_amount}</TableCell>}
      {isColumnShown('Card Amount') && <TableCell key={makeCellKey('Card Amount')} align="left">{row.card_amount}</TableCell>}
      {isColumnShown('Check No. / Approval Code') && <TableCell key={makeCellKey('Check No. / Approval Code')} align="right">{row.check_num_approval_code}</TableCell>}
      {isColumnShown('MRL#') && <TableCell key={makeCellKey('MRL#')} align="left">{row.mrl_num}</TableCell>}
      {isColumnShown('Notes') && <TableCell key={makeCellKey('Notes')} align="left">{row.notes}</TableCell>}
    </TableRow>
  );
}

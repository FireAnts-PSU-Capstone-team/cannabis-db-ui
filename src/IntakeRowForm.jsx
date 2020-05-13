import React, { useState, useEffect } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import './style.css';

export const makeField = (field, value = '', handleChange) =>
  <TextField
    style={{ marginBottom: '1rem' }}
    fullWidth
    label={field}
    variant="outlined"
    onChange={handleChange}
    defaultValue={value}
  />;

export default function IntakeRowForm(props) {
  const { isDialog, dialogOpen, onDialogClose, row, onSubmit } = props;

  // row could be undefined, in this case we let row be empty strings
  const theRow = row || {
    "row": "",
    "Submission date": "",
    "Entity": "",
    "DBA": "",
    "Facility Address": "",
    "Facility Suite #": "",
    "Facility Zip": "",
    "Mailing Address": "",
    "MRL": "",
    "Neighborhood Association": "",
    "Compliance Region": "",
    "Primary Contact First Name": "",
    "Primary Contact Last Name": "",
    "Email": "",
    "Phone": "",
    "Endorse Type": "",
    "License Type": "",
    "Repeat location?": "",
    "App complete?": "",
    "Fee Schedule": "",
    "Receipt No.": "",
    "Cash Amount": "",
    "Check Amount": "",
    "Card Amount": "",
    "Check No. / Approval Code": "",
    "MRL#": "",
    "Notes": ""
  };

  const [rowValue, setRowValue] = useState(theRow.row);
  const [submissionDateValue, setSubmissionDateValue] = useState(theRow.submission_date);
  const [entityValue, setEntityValue] = useState(theRow.entity);
  const [dbaValue, setDbaValue] = useState(theRow.dba);
  const [facilityAddressValue, setFacilityAddressValue] = useState(theRow.facility_address);
  const [facilitySuiteNoValue, setFacilitySuiteNoValue] = useState(theRow.facility_suite);
  const [facilityZipValue, setFacilityZipValue] = useState(theRow.facility_zip);
  const [mailingAddressValue, setMailingAddressValue] = useState(theRow.mailing_address);
  const [mrlValue, setMrlValue] = useState(theRow.mrl);
  const [neighborhoodAssocValue, setneighborhoodAssocValue] = useState(theRow.neighborhood_association);
  const [complianceRegionValue, setComplianceRegionValue] = useState(theRow.compliance_region);
  const [firstNameValue, setFirstNameValue] = useState(theRow.primary_contact_first_name);
  const [lastNameValue, setLastNameValue] = useState(theRow.primary_contact_last_name);
  const [emailValue, setEmailValue] = useState(theRow.email);
  const [phoneValue, setPhoneValue] = useState(theRow.phone);
  const [endorseTypeValue, setEndorseTypeValue] = useState(theRow.endorse_type);
  const [licenseTypeValue, setLicenseTypeValue] = useState(theRow.license_type);
  const [repeatLocationValue, setRepeatLocationValue] = useState(theRow.repeat_location);
  const [appCompleteValue, setAppCompleteValue] = useState(theRow.app_complete);
  const [feeScheduleValue, setFeeScheduleValue] = useState(theRow.fee_schedule);
  const [receiptNoValue, setReceiptNoValue] = useState(theRow.receipt_num);
  const [cashAmountValue, setCashAmountValue] = useState(theRow.cash_amount);
  const [checkAmountValue, setCheckAmountValue] = useState(theRow.check_amount);
  const [cardAmountValue, setCardAmountValue] = useState(theRow.card_amount);
  const [checkNoValue, setCheckNoValue] = useState(theRow.check_num_approval_code);
  const [mrlNoValue, setMrlNoValue] = useState(theRow.mrl_num);
  const [notesValue, setNotesValue] = useState(theRow.notes);

  // Update states every time the dialog opens
  useEffect(() => {
    setRowValue(theRow.row);
    setSubmissionDateValue(theRow.submission_date);
    setEntityValue(theRow.entity);
    setDbaValue(theRow.dba);
    setFacilityAddressValue(theRow.facility_address);
    setFacilitySuiteNoValue(theRow.facility_suite);
    setFacilityZipValue(theRow.facility_zip);
    setMailingAddressValue(theRow.mailing_address);
    setMrlValue(theRow.mrl);
    setneighborhoodAssocValue(theRow.neighborhood_association);
    setComplianceRegionValue(theRow.compliance_region);
    setFirstNameValue(theRow.primary_contact_first_name);
    setLastNameValue(theRow.primary_contact_last_name);
    setEmailValue(theRow.email);
    setPhoneValue(theRow.phone);
    setEndorseTypeValue(theRow.endorse_type);
    setLicenseTypeValue(theRow.license_type);
    setRepeatLocationValue(theRow.repeat_location);
    setAppCompleteValue(theRow.app_complete);
    setFeeScheduleValue(theRow.fee_schedule);
    setReceiptNoValue(theRow.receipt_num);
    setCashAmountValue(theRow.cash_amount);
    setCheckAmountValue(theRow.check_amount);
    setCardAmountValue(theRow.card_amount);
    setCheckNoValue(theRow.check_num_approval_code);
    setMrlNoValue(theRow.mrl_num);
    setNotesValue(theRow.notes);
  }, [isDialog, dialogOpen, theRow]);

  const makeRowToSubmit = () => {
    return {
      "row": rowValue,
      "Submission date": submissionDateValue,
      "Entity": entityValue,
      "DBA": dbaValue,
      "Facility Address": facilityAddressValue,
      "Facility Suite #": facilitySuiteNoValue,
      "Facility Zip": facilityZipValue,
      "Mailing Address": mailingAddressValue,
      "MRL": mrlValue,
      "Neighborhood Association": neighborhoodAssocValue,
      "Compliance Region": complianceRegionValue,
      "Primary Contact First Name": firstNameValue,
      "Primary Contact Last Name": lastNameValue,
      "Email": emailValue,
      "Phone": phoneValue,
      "Endorse Type": endorseTypeValue,
      "License Type": licenseTypeValue,
      "Repeat location?": repeatLocationValue,
      "App complete?": appCompleteValue,
      "Fee Schedule": feeScheduleValue,
      "Receipt No.": receiptNoValue,
      "Cash Amount": cashAmountValue,
      "Check Amount": checkAmountValue,
      "Card Amount": cardAmountValue,
      "Check No. / Approval Code": checkNoValue,
      "MRL#": mrlNoValue,
      "Notes": notesValue
    };
  };

  const onSubmitClick = _ => {
    onSubmit(makeRowToSubmit());

    if (isDialog) {
      onDialogClose();
    }
  };

  const formFields = () =>
    <>
      {makeField('row', theRow.row, e => setRowValue(e.target.value))}
      {makeField('Submission date', theRow.submission_date, e => setSubmissionDateValue(e.target.value))}
      {makeField('Entity', theRow.entity, e => setEntityValue(e.target.value))}
      {makeField('DBA', theRow.dba, e => setDbaValue(e.target.value))}
      {makeField('Facility Address', theRow.facility_address, e => setFacilityAddressValue(e.target.value))}
      {makeField('Facility Suite #', theRow.facility_suite, e => setFacilitySuiteNoValue(e.target.value))}
      {makeField('Facility Zip', theRow.facility_zip, e => setFacilityZipValue(e.target.value))}
      {makeField('Mailing Address', theRow.mailing_address, e => setMailingAddressValue(e.target.value))}
      {makeField('MRL', theRow.mrl, e => setMrlValue(e.target.value))}
      {makeField('Neighborhood Association', theRow.neighborhood_association, e => setneighborhoodAssocValue(e.target.value))}
      {makeField('Compliance Region', theRow.compliance_region, e => setComplianceRegionValue(e.target.value))}
      {makeField('Primary Contact First Name', theRow.primary_contact_first_name, e => setFirstNameValue(e.target.value))}
      {makeField('Primary Contact Last Name', theRow.primary_contact_last_name, e => setLastNameValue(e.target.value))}
      {makeField('Email', theRow.email, e => setEmailValue(e.target.value))}
      {makeField('Phone', theRow.phone, e => setPhoneValue(e.target.value))}
      {makeField('Endorse Type', theRow.endorse_type, e => setEndorseTypeValue(e.target.value))}
      {makeField('License Type', theRow.license_type, e => setLicenseTypeValue(e.target.value))}
      {makeField('Repeat location?', theRow.repeat_location, e => setRepeatLocationValue(e.target.value))}
      {makeField('App complete?', theRow.app_complete, e => setAppCompleteValue(e.target.value))}
      {makeField('Fee Schedule', theRow.fee_schedule, e => setFeeScheduleValue(e.target.value))}
      {makeField('Receipt No.', theRow.receipt_num, e => setReceiptNoValue(e.target.value))}
      {makeField('Cash Amount', theRow.cash_amount, e => setCashAmountValue(e.target.value))}
      {makeField('Check Amount', theRow.check_amount, e => setCheckAmountValue(e.target.value))}
      {makeField('Card Amount', theRow.card_amount, e => setCardAmountValue(e.target.value))}
      {makeField('Check No. / Approval Code', theRow.check_num_approval_code, e => setCheckNoValue(e.target.value))}
      {makeField('MRL#', theRow.mrl_num, e => setMrlNoValue(e.target.value))}
      {makeField('Notes', theRow.notes, e => setNotesValue(e.target.value))}
    </>;

  if (isDialog === true) {
    return (
      <Dialog open={dialogOpen} onClose={onDialogClose} aria-labelledby="intake-row-form-dialog">
        <DialogTitle>Edit row {theRow.row}</DialogTitle>
        <DialogContent>
          {formFields()}
        </DialogContent>
        <DialogActions>
          <Button onClick={onDialogClose} color="secondary">Cancel</Button>
          <Button onClick={onSubmitClick} color="primary">Submit</Button>
        </DialogActions>
      </Dialog>
    );
  } else {
    return (
      <form>
        {formFields()}
        <Button variant="contained" color="primary" onClick={onSubmitClick}>Submit</Button>
      </form>
    );
  }
}

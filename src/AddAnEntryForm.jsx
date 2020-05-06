import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import './style.css';
import { addRow } from './MockApi';

export default function AddAnEntryForm() {
  const [rowValue, setRowValue] = useState('');
  const [submissionDateValue, setSubmissionDateValue] = useState('');
  const [entityValue, setEntityValue] = useState('');
  const [dbaValue, setDbaValue] = useState('');
  const [facilityAddressValue, setFacilityAddressValue] = useState('');
  const [facilitySuiteNoValue, setFacilitySuiteNoValue] = useState('');
  const [facilityZipValue, setFacilityZipValue] = useState('');
  const [mailingAddressValue, setMailingAddressValue] = useState('');
  const [mrlValue, setMrlValue] = useState('');
  const [neighborhoodAssocValue, setneighborhoodAssocValue] = useState('');
  const [complianceRegionValue, setComplianceRegionValue] = useState('');
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [endorseTypeValue, setEndorseTypeValue] = useState('');
  const [licenseTypeValue, setLicenseTypeValue] = useState('');
  const [repeatLocationValue, setRepeatLocationValue] = useState('');
  const [appCompleteValue, setAppCompleteValue] = useState('');
  const [feeScheduleValue, setFeeScheduleValue] = useState('');
  const [receiptNoValue, setReceiptNoValue] = useState('');
  const [cashAmountValue, setCashAmountValue] = useState('');
  const [checkAmountValue, setCheckAmountValue] = useState('');
  const [cardAmountValue, setCardAmountValue] = useState('');
  const [checkNoValue, setCheckNoValue] = useState('');
  const [mrlNoValue, setMrlNoValue] = useState('');
  const [notesValue, setNotesValue] = useState('');

  const onSubmit = _ => {
    const rowToSubmit = {
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

    const isFormCompleted = Object.values(rowToSubmit).every(val => val.length > 0)
    if (isFormCompleted) {
      addRow(rowToSubmit).then(res => console.log(res));
    } else {
      console.log("some fields are missing. form was not submitted");
    }
  };

  const makeTextField = (field, handleChange) =>
    <TextField
      style={{ marginBottom: '1rem' }}
      fullWidth
      label={field}
      variant="outlined"
      required
      onChange={handleChange}
    />;

  // Convert from yyyy-MM-dd to MM/dd/yy
  const formatDate = date => {
    try {
      const month = date[5] + date[6];
      const day = date[8] + date[9];
      const year = date[2] + date[3];
      return `${month}/${day}/${year}`;
    } catch (error) {
      return `invalid date format`;
    }
  }

  return (
    <form className="addAnEntryForm">
      {makeTextField('row', event => setRowValue(event.target.value))}
      <TextField
        style={{ marginBottom: '1rem' }}
        fullWidth
        label="Submission date"
        variant="outlined"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        required
        onChange={event => setSubmissionDateValue(formatDate(event.target.value))}
      />
      {makeTextField('Entity', event => setEntityValue(event.target.value))}
      {makeTextField('DBA', event => setDbaValue(event.target.value))}
      {makeTextField('Facility Address', event => setFacilityAddressValue(event.target.value))}
      {makeTextField('Facility Suite #', event => setFacilitySuiteNoValue(event.target.value))}
      {makeTextField('Facility Zip', event => setFacilityZipValue(event.target.value))}
      {makeTextField('Mailing Address', event => setMailingAddressValue(event.target.value))}
      {makeTextField('MRL', event => setMrlValue(event.target.value))}
      {makeTextField('Neighborhood Association', event => setneighborhoodAssocValue(event.target.value))}
      {makeTextField('Compliance Region', event => setComplianceRegionValue(event.target.value))}
      {makeTextField('Primary Contact First Name', event => setFirstNameValue(event.target.value))}
      {makeTextField('Primary Contact Last Name', event => setLastNameValue(event.target.value))}
      {makeTextField('Email', event => setEmailValue(event.target.value))}
      {makeTextField('Phone', event => setPhoneValue(event.target.value))}
      {makeTextField('Endorse Type', event => setEndorseTypeValue(event.target.value))}
      {makeTextField('License Type', event => setLicenseTypeValue(event.target.value))}
      {makeTextField('Repepeat location?', event => setRepeatLocationValue(event.target.value))}
      {makeTextField('App complete?', event => setAppCompleteValue(event.target.value))}
      {makeTextField('Fee Schedule', event => setFeeScheduleValue(event.target.value))}
      {makeTextField('Receipt No.', event => setReceiptNoValue(event.target.value))}
      {makeTextField('Cash Amount', event => setCashAmountValue(event.target.value))}
      {makeTextField('Check Amount', event => setCheckAmountValue(event.target.value))}
      {makeTextField('Card Amount', event => setCardAmountValue(event.target.value))}
      {makeTextField('Check No. / Approval Code', event => setCheckNoValue(event.target.value))}
      {makeTextField('MRL#', event => setMrlNoValue(event.target.value))}
      {makeTextField('Notes', event => setNotesValue(event.target.value))}
      <Button variant="contained" color="primary" onClick={onSubmit}>Submit</Button>
    </form>
  );
}

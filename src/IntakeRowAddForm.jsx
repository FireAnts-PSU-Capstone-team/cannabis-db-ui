import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
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

export default function IntakeAddForm(props) {
  const { onSubmit } = props;

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
  };

  const formFields = () =>
    <>
      {makeField('row', '', e => setRowValue(e.target.value))}
      {makeField('Submission date', '', e => setSubmissionDateValue(e.target.value))}
      {makeField('Entity', '', e => setEntityValue(e.target.value))}
      {makeField('DBA', '', e => setDbaValue(e.target.value))}
      {makeField('Facility Address', '', e => setFacilityAddressValue(e.target.value))}
      {makeField('Facility Suite #', '', e => setFacilitySuiteNoValue(e.target.value))}
      {makeField('Facility Zip', '', e => setFacilityZipValue(e.target.value))}
      {makeField('Mailing Address', '', e => setMailingAddressValue(e.target.value))}
      {makeField('MRL', '', e => setMrlValue(e.target.value))}
      {makeField('Neighborhood Association', '', e => setneighborhoodAssocValue(e.target.value))}
      {makeField('Compliance Region', '', e => setComplianceRegionValue(e.target.value))}
      {makeField('Primary Contact First Name', '', e => setFirstNameValue(e.target.value))}
      {makeField('Primary Contact Last Name', '', e => setLastNameValue(e.target.value))}
      {makeField('Email', '', e => setEmailValue(e.target.value))}
      {makeField('Phone', '', e => setPhoneValue(e.target.value))}
      {makeField('Endorse Type', '', e => setEndorseTypeValue(e.target.value))}
      {makeField('License Type', '', e => setLicenseTypeValue(e.target.value))}
      {makeField('Repeat location?', '', e => setRepeatLocationValue(e.target.value))}
      {makeField('App complete?', '', e => setAppCompleteValue(e.target.value))}
      {makeField('Fee Schedule', '', e => setFeeScheduleValue(e.target.value))}
      {makeField('Receipt No.', '', e => setReceiptNoValue(e.target.value))}
      {makeField('Cash Amount', '', e => setCashAmountValue(e.target.value))}
      {makeField('Check Amount', '', e => setCheckAmountValue(e.target.value))}
      {makeField('Card Amount', '', e => setCardAmountValue(e.target.value))}
      {makeField('Check No. / Approval Code', '', e => setCheckNoValue(e.target.value))}
      {makeField('MRL#', '', e => setMrlNoValue(e.target.value))}
      {makeField('Notes', '', e => setNotesValue(e.target.value))}
    </>;

  return (
    <form>
      {formFields()}
      <Button variant="contained" color="primary" onClick={onSubmitClick}>Submit</Button>
    </form>
  );
}

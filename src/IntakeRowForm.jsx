import React, { useState, useEffect } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import './style.css';

export const makeField = (field, value = '', handleChange) => {
  return (<TextField
    style={{ marginBottom: '1rem' }}
    fullWidth
    label={field}
    variant="outlined"
    onChange={handleChange}
    defaultValue={value}
  />);
}

// Convert from yyyy-MM-dd to Date
export const formatDate = date => {
  try {
    return new Date(date);
  } catch (error) {
    return 'invalid date format';
  }
}

// Convert from a date string to yyyy-MM-dd
export const reverseFormatDate = date => {
  const padTwoZeros = num => num.toString().padStart(2, '0');
  try {
    const theDate = new Date(date);
    const year = theDate.getUTCFullYear();
    const month = padTwoZeros(theDate.getUTCMonth() + 1);
    const day = padTwoZeros(theDate.getUTCDate());
    return `${year}-${month}-${day}`;
  } catch (error) {
    return 'invalid date format';
  }
}

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

  const [rowValue, setRowValue] = useState(theRow['row']);
  const [submissionDateValue, setSubmissionDateValue] = useState(theRow['Submission date']);
  const [entityValue, setEntityValue] = useState(theRow['Entity']);
  const [dbaValue, setDbaValue] = useState(theRow['DBA']);
  const [facilityAddressValue, setFacilityAddressValue] = useState(theRow['Facility Address']);
  const [facilitySuiteNoValue, setFacilitySuiteNoValue] = useState(theRow['Facility Suite #']);
  const [facilityZipValue, setFacilityZipValue] = useState(theRow['Facility Zip']);
  const [mailingAddressValue, setMailingAddressValue] = useState(theRow['Mailing Address']);
  const [mrlValue, setMrlValue] = useState(theRow['MRL']);
  const [neighborhoodAssocValue, setneighborhoodAssocValue] = useState(theRow['Neighborhood Association']);
  const [complianceRegionValue, setComplianceRegionValue] = useState(theRow['Compliance Region']);
  const [firstNameValue, setFirstNameValue] = useState(theRow['Primary Contact First Name']);
  const [lastNameValue, setLastNameValue] = useState(theRow['Primary Contact Last Name']);
  const [emailValue, setEmailValue] = useState(theRow['Email']);
  const [phoneValue, setPhoneValue] = useState(theRow['Phone']);
  const [endorseTypeValue, setEndorseTypeValue] = useState(theRow['Endorse Type']);
  const [licenseTypeValue, setLicenseTypeValue] = useState(theRow['License Type']);
  const [repeatLocationValue, setRepeatLocationValue] = useState(theRow['Repeat location?']);
  const [appCompleteValue, setAppCompleteValue] = useState(theRow['App complete?']);
  const [feeScheduleValue, setFeeScheduleValue] = useState(theRow['Fee Schedule']);
  const [receiptNoValue, setReceiptNoValue] = useState(theRow['Receipt No.']);
  const [cashAmountValue, setCashAmountValue] = useState(theRow['Cash Amount']);
  const [checkAmountValue, setCheckAmountValue] = useState(theRow['Check Amount']);
  const [cardAmountValue, setCardAmountValue] = useState(theRow['Card Amount']);
  const [checkNoValue, setCheckNoValue] = useState(theRow['Check No. / Approval Code']);
  const [mrlNoValue, setMrlNoValue] = useState(theRow['MRL#']);
  const [notesValue, setNotesValue] = useState(theRow['Notes']);

  useEffect(() => {
    setRowValue(theRow['row']);
    setSubmissionDateValue(theRow['Submission date']);
    setEntityValue(theRow['Entity']);
    setDbaValue(theRow['DBA']);
    setFacilityAddressValue(theRow['Facility Address']);
    setFacilitySuiteNoValue(theRow['Facility Suite #']);
    setFacilityZipValue(theRow['Facility Zip']);
    setMailingAddressValue(theRow['Mailing Address']);
    setMrlValue(theRow['MRL']);
    setneighborhoodAssocValue(theRow['Neighborhood Association']);
    setComplianceRegionValue(theRow['Compliance Region']);
    setFirstNameValue(theRow['Primary Contact First Name']);
    setLastNameValue(theRow['Primary Contact Last Name']);
    setEmailValue(theRow['Email']);
    setPhoneValue(theRow['Phone']);
    setEndorseTypeValue(theRow['Endorse Type']);
    setLicenseTypeValue(theRow['License Type']);
    setRepeatLocationValue(theRow['Repeat location?']);
    setAppCompleteValue(theRow['App complete?']);
    setFeeScheduleValue(theRow['Fee Schedule']);
    setReceiptNoValue(theRow['Receipt No.']);
    setCashAmountValue(theRow['Cash Amount']);
    setCheckAmountValue(theRow['Check Amount']);
    setCardAmountValue(theRow['Card Amount']);
    setCheckNoValue(theRow['Check No. / Approval Code']);
    setMrlNoValue(theRow['MRL#']);
    setNotesValue(theRow['Notes']);
  }, [isDialog, dialogOpen, row, theRow]);

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
    const rowToSubmit = makeRowToSubmit();
    const isFormCompleted = Object.values(rowToSubmit).every(val => val.toString().length > 0)

    console.log('theRow', theRow);
    console.log('rowToSubmit', rowToSubmit);

    if (isFormCompleted) {
      onSubmit(rowToSubmit);
    } else {
      console.log("some fields are missing. form was not submitted");
    }

    if (isDialog) {
      onDialogClose();
    }
  };

  const formFields = () => {
    return (
      <>
        {makeField('row', theRow['row'], event => setRowValue(event.target.value))}
        <TextField
          style={{ marginBottom: '1rem' }}
          fullWidth
          label="Submission date"
          variant="outlined"
          type="date"
          InputLabelProps={{ shrink: true }}
          onChange={event => setSubmissionDateValue(formatDate(event.target.value))}
          defaultValue={reverseFormatDate(theRow['Submission date'])}
        />
        {makeField('Entity', theRow['Entity'], event => setEntityValue(event.target.value))}
        {makeField('DBA', theRow['DBA'], event => setDbaValue(event.target.value))}
        {makeField('Facility Address', theRow['Facility Address'], event => setFacilityAddressValue(event.target.value))}
        {makeField('Facility Suite #', theRow['Facility Suite #'], event => setFacilitySuiteNoValue(event.target.value))}
        {makeField('Facility Zip', theRow['Facility Zip'], event => setFacilityZipValue(event.target.value))}
        {makeField('Mailing Address', theRow['Mailing Address'], event => setMailingAddressValue(event.target.value))}
        {makeField('MRL', theRow['MRL'], event => setMrlValue(event.target.value))}
        {makeField('Neighborhood Association', theRow['Neighborhood Association'], event => setneighborhoodAssocValue(event.target.value))}
        {makeField('Compliance Region', theRow['Compliance Region'], event => setComplianceRegionValue(event.target.value))}
        {makeField('Primary Contact First Name', theRow['Primary Contact First Name'], event => setFirstNameValue(event.target.value))}
        {makeField('Primary Contact Last Name', theRow['Primary Contact Last Name'], event => setLastNameValue(event.target.value))}
        {makeField('Email', theRow['Email'], event => setEmailValue(event.target.value))}
        {makeField('Phone', theRow['Phone'], event => setPhoneValue(event.target.value))}
        {makeField('Endorse Type', theRow['Endorse Type'], event => setEndorseTypeValue(event.target.value))}
        {makeField('License Type', theRow['License Type'], event => setLicenseTypeValue(event.target.value))}
        {makeField('Repeat location?', theRow['Repeat location?'], event => setRepeatLocationValue(event.target.value))}
        {makeField('App complete?', theRow['App complete?'], event => setAppCompleteValue(event.target.value))}
        {makeField('Fee Schedule', theRow['Fee Schedule'], event => setFeeScheduleValue(event.target.value))}
        {makeField('Receipt No.', theRow['Receipt No.'], event => setReceiptNoValue(event.target.value))}
        {makeField('Cash Amount', theRow['Cash Amount'], event => setCashAmountValue(event.target.value))}
        {makeField('Check Amount', theRow['Check Amount'], event => setCheckAmountValue(event.target.value))}
        {makeField('Card Amount', theRow['Card Amount'], event => setCardAmountValue(event.target.value))}
        {makeField('Check No. / Approval Code', theRow['Check No. / Approval Code'], event => setCheckNoValue(event.target.value))}
        {makeField('MRL#', theRow['MRL#'], event => setMrlNoValue(event.target.value))}
        {makeField('Notes', theRow['Notes'], event => setNotesValue(event.target.value))}
      </>
    );
  };


  if (isDialog === true) {
    return (
      <Dialog open={dialogOpen} onClose={onDialogClose} aria-labelledby="intake-row-form-dialog">
        <DialogTitle>Edit row {theRow['row']}</DialogTitle>
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

import React from 'react';
import Dropzone from 'react-dropzone';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './style.css';

export default function AddViaSpreadSheetForm() {
  return (
    <div>
      <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} />
            <CloudUploadIcon style={{ fontSize: "4rem" }} />
            <br />
            <Button variant="contained" color="primary">
              Click to upload spreadsheets
            </Button>
            <p>or drag and drop them here</p>
          </div>
        )}
      </Dropzone>
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </div>
  );
}

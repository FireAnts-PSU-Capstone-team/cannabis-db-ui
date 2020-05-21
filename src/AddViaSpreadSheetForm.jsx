import React, { useState, useContext } from 'react';
import Dropzone from 'react-dropzone';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './style.css';
import { addFile, getErrorMessage } from './ApiCaller';
import { AlertBarContext } from './AlertBarContext';

export default function AddViaSpreadSheetForm() {
  const [files, setFiles] = useState([]);

  const openAlertBar = useContext(AlertBarContext);

  const onSubmit = _ => {
    if (files.length > 0) {
      let addPromises = [];

      files.forEach(file => addPromises.push(addFile(file)));

      Promise.all(addPromises)
        .then(() => {
          console.log('added all file(s)');
          openAlertBar('success', 'Added all files');
        })
        .catch(err => {
          getErrorMessage(err).then(errorMessage => {
            console.log('add files fail', errorMessage);
            openAlertBar('error', `Fail to add file(s). Error message: ${errorMessage}`);
          });
        })
        .finally(() => setFiles([]));
    } else {
      console.log('no files to submit');
      openAlertBar('error', 'No files to add');
    }
  }

  const onFilesDrop = acceptedFiles => {
    setFiles(files.concat(acceptedFiles))
  };

  return (
    <div>
      <Dropzone onDrop={onFilesDrop}>
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
      {(files.length > 0) ?
        <List dense>
          {files.map((file, index) =>
            <ListItem key={`file-${index}`}>
              <ListItemText>{file.name}</ListItemText>
            </ListItem>
          )}
        </List>
        : null}
      <Button variant="contained" color="primary" onClick={onSubmit}>Submit</Button>
    </div>
  );
}

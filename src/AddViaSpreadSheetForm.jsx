import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './style.css';
import { addFile } from './ApiCaller';

export default function AddViaSpreadSheetForm() {
  const [files, setFiles] = useState([]);

  const onSubmit = _ => {
    if (files.length > 0) {
      let addPromises = [];

      files.forEach(file => {
        addPromises.push(addFile(file).then(res => console.log(res, file)));
      });

      Promise.all(addPromises).then(() => {
        console.log('all files submitted');
        setFiles([]);
      });
    } else {
      console.log('no files to submit');
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

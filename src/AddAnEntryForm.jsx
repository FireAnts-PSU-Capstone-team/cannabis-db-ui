import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import './style.css';

export default function AddAnEntryForm() {
  return (
    <form className="addAnEntryForm">
      <TextField
        style={{ marginBottom: '1rem' }}
        fullWidth
        InputProps={{
          endAdornment: <InputAdornment position="end">100g serving</InputAdornment>,
        }}
        label="Desert"
        variant="outlined"
      />
      <TextField
        style={{ marginBottom: '1rem' }}
        fullWidth
        label="Calories"
        variant="outlined"
      />
      <TextField
        style={{ marginBottom: '1rem' }}
        fullWidth
        InputProps={{
          endAdornment: <InputAdornment position="end">g</InputAdornment>,
        }}
        label="Fat"
        variant="outlined"
      />
      <TextField
        style={{ marginBottom: '1rem' }}
        fullWidth
        InputProps={{
          endAdornment: <InputAdornment position="end">g</InputAdornment>,
        }}
        label="Carbs"
        variant="outlined"
      />
      <TextField
        style={{ marginBottom: '1rem' }}
        fullWidth
        InputProps={{
          endAdornment: <InputAdornment position="end">g</InputAdornment>,
        }}
        label="Protein"
        variant="outlined"
      />
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

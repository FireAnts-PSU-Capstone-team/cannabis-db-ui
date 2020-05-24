import React from 'react';
import Grid from '@material-ui/core/Grid';
import './style.css';

export default function Title() {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item className="title">
        Kanabi
      </Grid>
      <Grid item className="subtitle">
        by PSU FireAnts capstone team
      </Grid>
    </Grid>
  );
}

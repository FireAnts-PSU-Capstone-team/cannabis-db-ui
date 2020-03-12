import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

export default function VisualizeWithTableau() {
  return (
    <Container maxWidth="lg">
      <iframe title="youtube" width="100%" height="500" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <Button style={{ marginRight: '1rem' }} variant="outlined" color="primary">
        Download this workbook
      </Button>
      <Button variant="contained" color="primary">
        Open in Tableau Desktop
      </Button>
    </Container>
  );
}

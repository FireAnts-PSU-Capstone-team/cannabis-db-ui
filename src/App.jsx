import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Nav from './Nav';
import Title from './Title';
import WhatsNew from './WhatsNew';
import AddNewEntries from './AddNewEntries';
import SeeTheData from './SeeTheData';
import VisualizeWithTableau from './VisualizeWithTableau';

function App() {
  const [navValue, setNavValue] = useState(2);

  const onNavChange = (_, newValue) => {
    setNavValue(newValue);
  }

  const getComponentMatchingNavValue = () => {
    switch (navValue) {
      case 0:
        return <WhatsNew />;
      case 1:
        return <AddNewEntries />;
      case 2:
        return <SeeTheData />;
      case 3:
        return <VisualizeWithTableau />;
      default:
        break;
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Title />
      </Grid>
      <Grid item xs={12}>
        <Nav navValue={navValue} onNavChange={onNavChange} />
      </Grid>
      <Grid item xs={12}>
        {getComponentMatchingNavValue()}
      </Grid>
    </Grid>
  );
}

export default App;

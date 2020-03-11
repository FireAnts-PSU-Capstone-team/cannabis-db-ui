import React from 'react';
import { Tabs, Tab } from '@material-ui/core';

export default function Nav(props) {
  return (
    <Tabs
      value={props.navValue}
      onChange={props.onNavChange}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="What's New?" />
      <Tab label="Add new entries" />
      <Tab label="See the data" />
      <Tab label="Visualize with Tableau" />
    </Tabs>
  );
}

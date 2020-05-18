import React from 'react';
import IntakeTable from './IntakeTable';

export default function SeeTheData(props) {
  const { isUserAdmin } = props;

  return (
    <IntakeTable isUserAdmin={isUserAdmin} />
  );
}

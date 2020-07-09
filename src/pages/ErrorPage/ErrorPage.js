import React from 'react';
import Alert from '@material-ui/lab/Alert';
import AppTemplate from '../Templates/AppTemplate/AppTemplate';


export default function SimpleAlerts() {

  return (
    <AppTemplate>
        <Alert variant="filled" severity="error">
        The page you looking for is not exists!
      </Alert>
      </AppTemplate>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import AppTemplate from '../Templates/AppTemplate/AppTemplate';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SimpleAlerts() {
  const classes = useStyles();

  return (
    <AppTemplate>
        <Alert variant="filled" severity="error">
        The page you looking for is not exists!
      </Alert>
      </AppTemplate>
  );
}

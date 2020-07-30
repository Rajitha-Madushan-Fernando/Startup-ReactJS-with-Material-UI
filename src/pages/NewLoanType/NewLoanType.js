import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Button, ButtonGroup,
  Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper, Grid, Container, TextField, InputLabel, Select, FormControl, Icon,
  FormHelperText, MenuItem, Box, NativeSelect

} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';


import AppTemplate from '../Templates/AppTemplate/AppTemplate';
import { appConfig } from '../../configs/app.config';
import utils from '../../helper/utils';
const { baseUrl } = appConfig;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1, 1, 1, 1),
  },

  formControl: {
    margin: theme.spacing(1, 1, 1, 1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NewLoanType(props) {

  const classes = useStyles();

  return (
    <AppTemplate>
      <div className="new-loan-type">
        {/* <Typography variant="h4" gutterBottom>
        Add New Loan Type
      </Typography> */}
        <form autoComplete="off">
          <Grid container spacing={1}>
            <Grid item xs={5}>
              <Paper variant="outlined" >
                <Box width="auto" p={1} my={0.5}>
                  <TextField
                    id="outlined-full-width"
                    label="Label"
                    placeholder="Placeholder"
                    helperText="Full width!"
                    fullWidth
                    size="small"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    placeholder="Placeholder"
                    multiline
                    rows={4}
                    fullWidth
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="age-native-label-placeholder">
                      Status
                    </InputLabel>
                    <Select
                      inputProps={{
                        name: 'status',
                        id: 'status-native-label-placeholder',
                      }}
                    >
                      <option value="">None</option>
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                    <FormHelperText>Label + placeholder</FormHelperText>
                  </FormControl>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={5}>
              <Paper variant="outlined" >
                <div>
                  <TextField
                    id="outlined-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="outlined"
                    style={{margin: 8}}
                  />
                   <TextField
                    id="outlined-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="outlined"
                    style={{margin: 8}}
                  />
                  <TextField
                    id="outlined-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="outlined"
                    style={{margin: 8}}
                  />
                   <TextField
                    id="outlined-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="outlined"
                    style={{margin: 8}}
                  />
                  <TextField
                    id="outlined-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="outlined"
                    style={{margin: 8}}
                  />
                   <TextField
                    id="outlined-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="outlined"
                    style={{margin: 8}}
                  />

                </div>
              </Paper>
            </Grid>
          </Grid>
          <br />
          <Paper variant="outlined" >
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<SendIcon />}
              >
                Send
                           </Button>
              {" "}
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
              >
                Reset
                        </Button>
            </div>
          </Paper>
        </form>
      </div>
    </AppTemplate>
  )
}

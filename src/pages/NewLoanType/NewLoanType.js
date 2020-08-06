import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
import SystemUser from "../../helper/user";
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
  const [status, setStatus] = useState([]);
  const [dateTime, setDateTime] = useState(new Date());
  const [userId, setUserdID] = useState([]);
  //Setup initial State
  const initLoan = {
    loanType: null,
    description: null,
    status: null,
    maxAmount: null,
    minAmount: null,
    minInterestRate: null,
    maxInterestRate: null,
    maxTimePeriod: null,
    minTimePeriod: null
  }

  //Error Handling
  const initErrors = {
    loanType: '',
    description: '',
    status: '',
    maxAmount: '',
    minAmount: '',
    minInterestRate: '',
    maxInterestRate: '',
    maxTimePeriod: '',
    minTimePeriod: ''
  }
  const [errors, setErrors] = useState(initErrors);
  const resetError = () => {
    setErrors(initErrors)
  }


  const onChange = (e) => {
    e.persist();
    setNewLoan({ ...newLoan, [e.target.name]: e.target.value });
  }

  //Get Logged in user id
  const getCurrentUser = async () => {
    //console.log(SystemUser.get())
    setUserdID(SystemUser.get().id);
  };


  //Get Common Status
  const fetchLoanTypeStatus = async () => {
    axios.get(`${baseUrl}/commonstatus/list`)
      .then(response => {
        console.log('response', response);
        setStatus(response.data);
      })
  };


  const [newLoan, setNewLoan] = useState(initLoan);
  const resetData = () => {
    setNewLoan(initLoan)
  }


  



  const SubmitNewLoanType = (e) => {
    e.preventDefault();
    const data = {
      loanType: newLoan.loanType,
      description: newLoan.description,

      status: {
        id: newLoan.status,
      },
      maxAmount: newLoan.maxAmount,
      minAmount: newLoan.minAmount,
      minInterestRate: newLoan.minInterestRate,
      maxInterestRate: newLoan.maxInterestRate,
      maxTimePeriod: newLoan.maxTimePeriod,
      minTimePeriod: newLoan.minTimePeriod,
      createdDate: dateTime,
      createdUser: {
        id: userId,
      },
     

    };
    console.log('data', data);
    axios.post(`${baseUrl}/loantype/add`, data)
      .then(function (response) {
        //console.log(response)
        utils.showSuccess("New Loan Saved Successfully.");
      })
      .catch(_errors => {
        //console.log('_errors',_errors);
        if (_errors.response) {
          //console.log('Test');
          const _sErrors = _errors.response.data.errors;
          const _error = _errors.response.data.error;
          if (_sErrors !== undefined) {
            let errorsObj = {}
            _sErrors.forEach(error => {
              const { defaultMessage, field } = error
              errorsObj[field] = defaultMessage;
            })
            setErrors({ ...errors, ...errorsObj });
          }
          else {
            utils.showError(_error)
          }

        }
      });
  };


  //This is same as componentdidmount()
  useEffect(() => {
    fetchLoanTypeStatus();
    getCurrentUser();
  }, []);

  return (
    <AppTemplate>
      <div className="new-loan-type">
        {/* <Typography variant="h4" gutterBottom>
        Add New Loan Type
      </Typography> */}
        <form autoComplete="off" onSubmit={SubmitNewLoanType}>
          <Grid container spacing={1}>
            <Grid item xs={5}>
              <Paper variant="outlined" >
                <Box width="auto" p={1} my={0.5}>
                  <TextField
                    name="loanType"
                    //value={newLoan.loanType}
                    id="outlined-full-width"
                    label="Loan Type Name"
                    placeholder="Enter Loan Type Name"
                    helperText={errors.loanType}
                    fullWidth
                    size="small"
                    error={errors.loanType ? 'error' : ''}

                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    onChange={onChange}
                  />
                  <TextField
                    name="description"
                    //value={newLoan.description}
                    id="outlined-multiline-static"
                    label="Description"
                    placeholder="Enter Description"
                    helperText={errors.description}
                    error={errors.description ? 'error' : ''}
                    multiline
                    rows={4}
                    fullWidth
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={onChange}
                  />
                  <FormControl variant="outlined" className={classes.formControl} error={errors.status ? 'error' : ''}>
                    <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                    <Select
                      name="status"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      onChange={onChange}
                      label="Status"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {
                        status.map((eachRow, index) => {
                          return (
                            <MenuItem value={eachRow.id} key={eachRow.id}>{eachRow.type}</MenuItem>
                          );
                        })
                      }
                    </Select>
                    <FormHelperText>{errors.status}</FormHelperText>
                  </FormControl>



                </Box>
              </Paper>
            </Grid>
            <Grid item xs={5}>
              <Paper variant="outlined" >
                <div>
                  <TextField
                    name="maxAmount"
                    //value={newLoan.maxAmount}
                    id="outlined-helperText"
                    label="Maximum Amount"
                    helperText="Some important text"
                    variant="outlined"
                    style={{ margin: 8 }}
                    onChange={onChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    name="minAmount"
                    //value={newLoan.minAmount}
                    id="outlined-helperText"
                    label="Minimum Amount"
                    helperText="Some important text"
                    variant="outlined"
                    style={{ margin: 8 }}
                    onChange={onChange}
                  />
                  <TextField
                    name="maxInterestRate"
                    // value={newLoan.maxInterestRate}
                    id="outlined-helperText"
                    label="Maximum Interest Rate"
                    helperText="Some important text"
                    variant="outlined"
                    style={{ margin: 8 }}
                    onChange={onChange}
                  />
                  <TextField
                    name="minInterestRate"
                    //value={newLoan.minInterestRate}
                    id="outlined-helperText"
                    label="Minimum Interest Rate"
                    helperText="Some important text"
                    variant="outlined"
                    style={{ margin: 8 }}
                    onChange={onChange}
                  />
                  <TextField
                    name="maxTimePeriod"
                    //value={newLoan.maxTimePeriod}
                    id="outlined-helperText"
                    label="Maximum Time Period"
                    helperText="Some important text"
                    variant="outlined"
                    style={{ margin: 8 }}
                    onChange={onChange}
                  />
                  <TextField
                    name="minTimePeriod"
                    //value={newLoan.minTimePeriod}
                    id="outlined-helperText"
                    label="Minimum Time Period"
                    helperText="Some important text"
                    variant="outlined"
                    style={{ margin: 8 }}
                    onChange={onChange}
                  />

                </div>
              </Paper>
            </Grid>
          </Grid>
          <br />
          <Paper variant="outlined" >
            <div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<SendIcon />}
              >
                Save
            </Button>
              {" "}
              <Button
                type="reset"
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={resetError}
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

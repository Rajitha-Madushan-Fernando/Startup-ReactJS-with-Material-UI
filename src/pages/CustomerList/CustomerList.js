import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {
    Button, ButtonGroup,
    Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Paper, Grid,Container
  } from '@material-ui/core';
  
import { withStyles, makeStyles } from '@material-ui/core/styles';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './CustomerList.css'


import AppTemplate from '../Templates/AppTemplate/AppTemplate';
import { appConfig } from '../../configs/app.config';
import utils from '../../helper/utils';
const { baseUrl } = appConfig;

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);



const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);




export default function CustomerList() {

    const [customers, setCustomers] = useState([]);
    console.log('customers', customers);


    const fetchData = async () => {
        axios.get(`${baseUrl}/customer/list`)
            .then(response => {
                console.log('response', response);
                setCustomers(response.data);
            })
            .catch(_errors => {
                if (_errors.response) {
                    const { status, data } = _errors.response;
                    console.log('_errors.response', _errors.response);
                    if (status === 401) {
                        console.log('data.error', data.error);
                        utils.showError("Bad Credintials");
                    }
                    else {
                        let errorsObj = {}
                        data.errors.forEach(error => {
                            const { defaultMessage, field } = error
                            errorsObj[field] = defaultMessage;
                        })
                        console.log(errorsObj);
                        this.setState({ errors: errorsObj });
                    }

                }
            });



    };

    useEffect(() => {
        fetchData();
    }, []);

    const useStyles = makeStyles({
        table: {
            minWidth: 700,
        },
    });
    const classes = useStyles();

    return (
        <AppTemplate>
            <div className="customer-list">
                <Link to={"new-customer"} >
                <Button
                    variant="contained"
                    color="secondary"
                    className="new-customer-add-button"
                    startIcon={<CloudUploadIcon />}

                >
                    New Customer
                    </Button>
                </Link>
                <br /><br /><br />
                {/* <ul>
                    {customers.length > 0 ? customers.map(item => (
                        <li key={item.id}>
                            <a href={item.id}>{item.id}</a>
                        </li>
                    )) : <li>No Data</li>}
                </ul> */}
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Customer Name</StyledTableCell>
                                <StyledTableCell>Gender</StyledTableCell>
                                <StyledTableCell align="left">Membership No</StyledTableCell>
                                <StyledTableCell align="left">NIC</StyledTableCell>
                                <StyledTableCell align="left">Mobile No</StyledTableCell>
                                <StyledTableCell align="left">Address</StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {customers.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.first_name}{" "}{row.middle_name}{" "}{row.last_name}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{row.gender.type}</StyledTableCell>
                                    <StyledTableCell align="left">{row.membership_no}</StyledTableCell>
                                    <StyledTableCell align="left">{row.nic}</StyledTableCell>
                                    <StyledTableCell align="left">{row.mobile}</StyledTableCell>
                                    <StyledTableCell align="left">{row.address}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </AppTemplate>
    )
}
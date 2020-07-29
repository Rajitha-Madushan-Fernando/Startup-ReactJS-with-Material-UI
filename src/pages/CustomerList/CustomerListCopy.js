import React, { useState, useEffect } from 'react';
import axios from 'axios';
//mport DataTables from 'material-ui-datatables';
import MUIDataTable from "mui-datatables";

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


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

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});



export default function CustomerList() {
    const classes = useStyles();

    const [customers, setCustomers] = useState([]);
    console.log('customers', customers);

    const columns = ["Name", "NIC", "Action"];

    const  methodName = (cid) => {
        console.log("customer id", cid);
    }

    const fetchData = (e) => {        
    
        axios.get(`${baseUrl}/customer/list`)
            .then(response => {
                console.log('response', response);
                const data = response.data.map(customer => [`${customer.first_name} ${customer.last_name}`, customer.nic,<button click={methodName(customer.id)} >edit</button>]);
                setCustomers(data);
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

    const options = {
        filterType: 'checkbox',
        serverSide: true,
        onTableChange: (action, tableState) => {
            //console.log('action, tableState)',action, tableState);
            //fetchData(); 
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AppTemplate>
            <div className="customer-list">
                <TableContainer component={Paper}>
                    <MUIDataTable
                        title={"Customer  List"}
                        data={customers}
                        columns={columns}
                        options={options}
                    />
                </TableContainer>
            </div>
        </AppTemplate>
    )
}

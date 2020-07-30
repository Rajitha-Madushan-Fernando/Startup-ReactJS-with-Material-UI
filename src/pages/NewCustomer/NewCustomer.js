import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import {
    Button, ButtonGroup,
    Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Paper, Grid, Container, TextField, InputLabel, Select, FormControl, Icon,
    FormHelperText, MenuItem

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
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '23ch',
        },

    },
    button: {
        margin: theme.spacing(1, 1, 1, 1),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 190,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function NewCustomer(props) {

    const classes = useStyles();
    const [state, setState] = React.useState({
       
    });
    const [titles, setTitles] = useState([]);
    const [genders, setGender] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            [name]: event.target.value,
        });
    };

    //Get customer Title
    const fetchCustometTitle = async () => {
        axios.get(`${baseUrl}/title/list/`)
            .then(response => {
                console.log('response', response);
                setTitles(response.data);
            })
    };

     //Get customer Title
     const fetchCustometGender = async () => {
        axios.get(`${baseUrl}/gender/list/`)
            .then(response => {
                console.log('response', response);
                setTitles(response.data);
            })
    };


    //This is same as componentdidmount()
    useEffect(() => {
        fetchCustometTitle();
        fetchCustometGender();
    }, []);

    return (
        <AppTemplate>
            <div className="new-customer">
                <form className={classes.root} noValidate autoComplete="off">
                    <Paper variant="outlined" >
                        <div>

                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel htmlFor="outlined-age-native-simple">Title</InputLabel>
                                <Select
                                    native
                                    onChange={handleChange}
                                    label="Title"
                                    inputProps={{
                                        name: 'age',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                                <FormHelperText>This is a helper text</FormHelperText>
                            </FormControl>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel htmlFor="outlined-age-native-simple">Gender</InputLabel>
                                <Select
                                    native
                                    value={state.age}
                                    onChange={handleChange}
                                    label="Gender"
                                    inputProps={{
                                        name: 'age',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                                <FormHelperText>This is a helper text</FormHelperText>
                            </FormControl>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel htmlFor="outlined-age-native-simple">Marial Status</InputLabel>
                                <Select
                                    native
                                    value={state.age}
                                    onChange={handleChange}
                                    label="Marial Status"
                                    inputProps={{
                                        name: 'age',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                                <FormHelperText>This is a helper text</FormHelperText>
                            </FormControl>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel htmlFor="outlined-age-native-simple">Membership Type</InputLabel>
                                <Select
                                    native
                                    value={state.age}
                                    onChange={handleChange}
                                    label="Membership Type"
                                    inputProps={{
                                        name: 'age',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                                <FormHelperText>This is a helper text</FormHelperText>
                            </FormControl>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel htmlFor="outlined-age-native-simple">Family Type</InputLabel>
                                <Select
                                    native
                                    value={state.age}
                                    onChange={handleChange}
                                    label="Family Type"
                                    inputProps={{
                                        name: 'age',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                                <FormHelperText>This is a helper text</FormHelperText>
                            </FormControl>
                        </div>
                    </Paper>
                    <br />
                    <Grid container spacing={1}>
                        <Grid item xs={7}>
                            <Paper variant="outlined" >
                                <TextField
                                    id="outlined-helperText"
                                    label="First Name"
                                    helperText="Some important text"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-helperText"
                                    label="Middle Name"
                                    helperText="Some important text"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-helperText"
                                    label="Last Name"
                                    helperText="Some important text"
                                    variant="outlined"
                                />

                                <TextField
                                    id="outlined-helperText"
                                    label="Birth Date"
                                    helperText="Some important text"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-helperText"
                                    label="Email Address"
                                    helperText="Some important text"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Address"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                />

                            </Paper>
                        </Grid>
                        <Grid item xs={5}>
                            <Paper variant="outlined" >
                                <TextField
                                    id="outlined-helperText"
                                    label="Telephone Number"
                                    helperText="Some important text"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-helperText"
                                    label="Mobile Number"
                                    helperText="Some important text"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-helperText"
                                    label="NIC Number"
                                    helperText="Some important text"
                                    variant="outlined"
                                />

                                <TextField
                                    id="outlined-helperText"
                                    label="Passport Number"
                                    helperText="Some important text"
                                    variant="outlined"
                                />

                                
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Paper variant="outlined" >
                                <TextField
                                    id="outlined-helperText"
                                    label="Applicant Income"
                                    helperText="Some important text"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-helperText"
                                    label="Family Income"
                                    helperText="Some important text"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-helperText"
                                    label="Total Members"
                                    helperText="Some important text"
                                    variant="outlined"
                                />

                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel htmlFor="outlined-age-native-simple">Customer Status</InputLabel>
                                <Select
                                    native
                                    value={state.age}
                                    onChange={handleChange}
                                    label="Title"
                                    inputProps={{
                                        name: 'age',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                                <FormHelperText>This is a helper text</FormHelperText>
                            </FormControl>

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

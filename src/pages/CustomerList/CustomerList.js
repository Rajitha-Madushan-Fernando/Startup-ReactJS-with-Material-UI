import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AppTemplate from '../Templates/AppTemplate/AppTemplate';
import { appConfig } from '../../configs/app.config';
import utils from '../../helper/utils';
const { baseUrl } = appConfig;

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

    return (
        <AppTemplate>
            <div className="customer-list">
                <h1> Customer List page.</h1>
                <ul>
                    {customers.length > 0 ? customers.map(item => (
                        <li key={item.id}>
                            <a href={item.id}>{item.id}</a>
                        </li>
                    )) : <li>No Data</li>}
                </ul>

            </div>
        </AppTemplate>
    )
}
